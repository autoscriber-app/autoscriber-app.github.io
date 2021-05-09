<template>
  <div class="about">
    <h1>What is Autoscriber?</h1>
    <ShortDesc></ShortDesc>
    <h1>Who made this?</h1>
    <p>Autoscriber was made by the 2020-2021 <a href="https://lhswebdev.github.io/" target="_blank">Lynbrook Web Development Club</a>. The primary developers are <a href="https://github.com/KentoNishi/" target="_blank">Kento Nishi</a>, <a href="https://github.com/keshprad" target="_blank">Keshav Pradeep</a>, and <a href="https://github.com/saggins" target="_blank">Sangmin Chun</a>.
    <h1>How do I use Autoscriber?</h1>
    <h2>Create a Meeting</h2>
    <p>Simply click "Create a New Session" on the home screen and answer the setup prompts.</p>
    <h2>Invite Others</h2>
    <p>Click the "Copy" button to copy the invite link. Send the link to people you want to invite!</p>
    <h2>Turn on Your Microphone</h2>
    <p>Tap the microphone button to record your speech during the meeting.</p>
    <h2>Generate Notes</h2>
    <p>The meeting will automatically terminate once the host disconnects or clicks the "End the Session" button. Afterwards, Autoscriber's servers will process the recorded speech. Once processing is complete, you will be able to download bullet point notes as a Markdown file!
    <h2>Other Info</h2>
    <p>The entire app (frontend, backend, processing library) are all open source <a href="https://github.com/autoscriber-app" target="_blank">on our GitHub organization</a>. Feel free to contribute!
    </p>
  </div>
</template>

<script>
import ShortDesc from './ShortDesc.vue';
export default {
  components: {
    ShortDesc
  }
};
</script>