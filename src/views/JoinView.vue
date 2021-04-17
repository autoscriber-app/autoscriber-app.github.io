<template>
  <v-card color="#385F73" dark class="card" style="
    width: fit-content;
    padding: 0px 25px 20px 25px;
  ">
    <v-card-title class="headline justify-center"
      >Welcome to Autoscriber!</v-card-title
    >
    <v-card-actions class="justify-center" style="flex-wrap: wrap;">
      <v-btn class="blue paddedButton" dark large @click="createSession()">
        Create a New Session
      </v-btn>
      <v-btn class="green paddedButton" dark large @click="joinSession()">
        Join a Session
      </v-btn>
      <v-btn class="gray paddedButton" dark large @click="downloadNotes()">
        Download Notes
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';
import askUser from '../components/askUser.js';
import { saveAs } from 'file-saver';
import error from '../components/error.js';
const backend_domain = process.env.VUE_APP_BACKEND_DOMAIN;
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = false;
recognition.interimResults = true;
recognition.onstart = () => {
  console.debug('Recognition started');
};
recognition.onaudioend = () => recognition.stop();
recognition.lang = 'en-US';
export default {
  data: () => ({
  }),
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
      const res = await axios.post(`${backend_domain}/host`, {
      });
      this.$router.push({
        name: 'Session',
        params: {
          sessionID: res.data.meeting_id,
          name,
          isHost: true
        }
      });
    },
    async downloadNotes() {
      const meetingID = await this.getMeetingId();
      if (meetingID) {
        const text = await axios.get(`${backend_domain}/download?id=${meetingID}`);
        if (typeof text !== 'string') error(this.$dialog, 
          new Error('Could not download notes'), 
          text.data.detail);
        else saveAs(new Blob([text], {type: 'text/plain;charset=utf-8'}), `notes_${meetingID}.md`); 
      }
    }
  }
};
</script>

<style>
.paddedButton {
  margin: 5px;
}
</style>