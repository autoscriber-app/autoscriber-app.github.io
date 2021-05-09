<template>
  <v-card color="#385F73" dark class="card" style="padding-bottom: 10px;">
    <v-card-title class="headline" style="">
      Session:
      <code style="margin-left: 0.5em;">{{ sessionID }}</code>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
          style="transition: 0.25s; margin: 0.5em;"
          :class="{
            green: copied
          }"
          v-bind="attrs"
          v-on="on"
          @click="copyID()">
            <span v-if="!copied"><v-icon>mdi-link</v-icon> Copy</span>
            <span v-else><v-icon>mdi-check</v-icon> Copied!</span>
          </v-btn>
        </template>
        <span>Click to copy to clipboard</span>
      </v-tooltip>
    </v-card-title>

    
    <v-card-subtitle>Joined as {{ displayName }}</v-card-subtitle>

    <v-card-subtitle>Click the microphone icon to start recording.</v-card-subtitle>
    <v-card-actions class="justify-center">
      <v-btn
        class="pink justify-center micbutton"
        fab
        dark
        x-large
        color="pink"
        @click="started ? stopRecognition() : startRecognition()"
      >
        <v-icon v-if="started">
          mdi-microphone-off
        </v-icon>
        <v-icon v-else>
          mdi-microphone
        </v-icon>
      </v-btn>
    </v-card-actions>
    <span v-if="started">
      <v-card-subtitle style="color: pink;" class="text-center">
        Speech recognition is running!
      </v-card-subtitle>
    </span>
    <v-card-actions class="justify-end">
      <v-btn v-if="isHost" class="pink justify-center"
        dark
        x-large
        color="pink"
        @click="endRecording()"
      >
        End the Session
      </v-btn>
    </v-card-actions>
    <v-card-subtitle style="padding-top: 0px; padding-bottom: 0px;">
      <p v-for="(item, index) in recordedSpeechReverse" :key="index" :style="{
        color: item.hot ? 'orange' : undefined
      }" :class="{
        'text-center': item.hot
      }">
        {{ item.text }}
      </p>
    </v-card-subtitle>
  </v-card>
</template>

<script>
import axios from 'axios';
import copy from 'copy-to-clipboard';
import askUser from '../components/askUser.js';
const backend_domain = process.env.VUE_APP_BACKEND_DOMAIN;
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = false;
recognition.interimResults = true;
recognition.onstart = () => {
  console.debug('Recognition started');
};
recognition.onaudioend = () => recognition.stop();
recognition.lang = 'en-US';
window.addEventListener('beforeunload', recognition.abort, false);
export default {
  data: () => ({
    recordedSpeech: [{
      hot: true
    }],
    recognition,
    started: false,
    copied: false,
    displayName: '',
    socket: null,
    userID: null,
    ended: false
  }),
  computed: {
    recordedSpeechReverse() {
      return this.recordedSpeech.slice().reverse();
    },
  },
  methods: {
    startRecognition() {
      this.recognition.onresult = async (event) => {
        const result = event.results[event.results.length - 1];
        const resultText = Array.from(result).map(d => d.transcript).join(' ');
        // const confidence = result[0].confidence;
        const index = Math.max(this.recordedSpeech.length - 1, 0);
        this.$set(this.recordedSpeech[index], 'text', resultText);
        if (result.isFinal) {
          console.debug(event);
          this.recordedSpeech[index].hot = false;
          this.recordedSpeech.push({
            hot: true
          });
          
          // Make post request after each blob
          const user = {
            meeting_id: this.sessionID,
            uid: this.userID,
            name: this.displayName
          };
          const blob = {
            user: user,
            dialogue: this.recordedSpeech[index].text,
          }; // Current blob
          const res = await axios.post(`${backend_domain}/add`, blob);
          if (!this.userID) {
            this.userID = res.data;
          }
        }
      };
      
      recognition.onend = () => {
        recognition.start();
      };
      this.recognition.start();
      this.started = true;
    },
    stopRecognition() {
      this.recognition.onend = undefined;
      this.recognition.stop();
      this.started = false;
    },
    async endRecording() {
      if (!this.ended || await this.$dialog.confirm({
        title: 'End Session',
        text: 'Are you sure you want to end the session for all participants?'
      })){
        if (this.started) {
          this.stopRecognition();
        }
        if (!this.ended) {
          await axios.post(`${backend_domain}/end`, {
            meeting_id: this.sessionID,
            uid: this.userID,
            name: this.name
          });
        }
        await this.$dialog.info({
          title: 'Session Ended',
          text: 'The session was ended! Your notes will be available for download shortly.'
        });
        this.ended = true;
        return true;
      } else return false;
    },
    copyID() {
      copy(`${window.location.origin}#/session/${this.sessionID}`);
      clearTimeout(this.copied);
      this.copied = setTimeout(() => {
        this.copied = false;
      }, 1000);
    },
    async connectWS() {
      if (this.isHost) {
        this.socket = new WebSocket(
          `${backend_domain.replace('https', 'wss')}/hostWS/${this.sessionID}/${this.userID}`
        );
      } else {
        this.socket = new WebSocket(
          `${backend_domain.replace('https', 'wss')}/joinWS/${this.sessionID}/${this.userID}`
        );
      }
      this.socket.addEventListener('message', async event => {
        const data = JSON.parse(event.data);
        if (data.event == 'end_meeting') {
          this.ended = true;
          this.endRecording();
        } else if (data.event == 'done_processing') {
          if (await this.$dialog.confirm({
            title: '',
            text: '',
            actions: {
              false: 'Close',
              true: {
                text: 'Download',
                color: 'primary'
              },
            }
          })) {
            this.$router.push({
              name: 'Join',
              params: {
                downloadID: this.sessionID
              }
            });
          }
        }
      });
    }
  },
  async mounted() {
    this.userID = this.uid;
    if (!(await axios.post(`${backend_domain}/is_valid_meeting?meeting_id=${this.sessionID}`)).data) {
      await this.$dialog.error({
        title: 'Invalid Session',
        text: 'The session you specified doesn\'t exist.'
      });
      this.ended = true;
      return;
    }
    const name = (this.name || await askUser(this.$dialog, 'name') || 'Anonymous').trim();
    if (!name) return;
    this.displayName = name;
    if (!this.isHost)
      this.userID = (await axios.post(`${backend_domain}/join`, {
        name,
        meeting_id: this.sessionID
      })).data.uid;
    this.connectWS();
  },
  props: {
    name:{
      type: String,
      default: null,
    },
    sessionID:{
      type: String,
      required: true
    },
    isHost: {
      type: Boolean,
      default: false
    },
    uid: {
      type: String,
      default: ''
    }
  },
  async beforeRouteLeave(to, from, next) {
    if (this.ended) next(true);
    else if (this.isHost) {
      if (await this.endRecording()) next(true);
    } else if (await this.$dialog.confirm({
      title: this.isHost ? 'End the Session' : 'Disconnect from Session',
      text: `Are you sure you want to ${this.isHost ? 'end' : 'disconnect from'} this session?`,
      actions: {
        false: 'No',
        true: {
          text: 'Yes',
          color: 'primary'
        },
      }
    })) next(true);
  },
};
</script>

<style>
</style>