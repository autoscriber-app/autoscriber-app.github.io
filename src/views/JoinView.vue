<template>
  <v-card
    color="#385F73"
    dark
    class="card"
    style="
    width: fit-content;
    height: fit-content;
    padding: 25px;
  "
  >
    <v-img
      src="../assets/logo.png"
      max-width="225px"
      style="width: 100%; border-radius: 10%; margin: 0 auto;"
    />
    <v-card-title class="headline justify-center text-center">
      Welcome to Autoscriber!
    </v-card-title>
    <v-card-actions class="justify-center" style="flex-wrap: wrap;">
      <v-btn class="blue paddedButton" dark large @click="createSession()">
        Create a New Session
      </v-btn>
      <v-btn class="green paddedButton" dark large @click="joinSession()">
        Join a Session
      </v-btn>
      <v-btn class="gray paddedButton" dark large @click="downloadNotes()">
        Download
      </v-btn>
    </v-card-actions>
    <ShortDesc style="max-width: 800px; margin: 10px 0px 0px 0px" />
  </v-card>
</template>

<script>
import axios from 'axios';
import askUser from '../components/askUser.js';
// import { saveAs } from 'file-saver';
import error from '../components/error.js';
import ShortDesc from './ShortDesc.vue';
const backend_domain = process.env.VUE_APP_BACKEND_DOMAIN;
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
recognition.continuous = false;
recognition.interimResults = true;
recognition.onstart = () => {
  console.debug('Recognition started');
};
recognition.onaudioend = () => recognition.stop();
recognition.lang = 'en-US';
export default {
  data: () => ({}),
  methods: {
    async getMeetingId() {
      let meetingID = await askUser(this.$dialog, 'session');
      if (!meetingID) return;
      const split = meetingID.split('/session/');
      if (split.length > 1) meetingID = split[1].substr(1);
      return meetingID;
    },
    async joinSession() {
      const meetingID = await this.getMeetingId();
      if (meetingID) this.$router.push(`/session/${meetingID}`);
    },
    async createSession() {
      const name = await askUser(this.$dialog, 'name');
      if (!name) return;
      const res = await axios.post(`${backend_domain}/host`, {});
      this.$router.push({
        name: 'Session',
        params: {
          sessionID: res.data.meeting_id,
          name,
          isHost: true,
          uid: res.data.uid,
        },
      });
    },
    async downloadNotes(id='') {
      const meetingID = id || (await this.getMeetingId());
      if (meetingID) {
        const url = `${backend_domain}/notes?id=${meetingID}`;
        const response = (await axios.get(url, {
          responseType: 'stream'
        }));
        const text = response.data;
        if ((typeof text !== 'string') || !text) {
          let errorMessage = 'Notes document was empty';
          try {
            errorMessage = text.data.detail;
          // eslint-disable-next-line no-empty
          } catch (e) {
          }
          error(
            this.$dialog,
            new Error('Could not download notes'),
            errorMessage
          );
        } else {
          window.location.href = url;
        }
      }
    },
  },
  mounted() {
    if (this.downloadID) {
      this.downloadNotes(this.downloadID);
    }
  },
  props: {
    downloadID: {
      type: String,
      default: '',
    },
  },
  components: {
    ShortDesc,
  },
};
</script>

<style>
.paddedButton {
  margin: 5px;
}
</style>
