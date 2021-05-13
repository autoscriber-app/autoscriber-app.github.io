<template>
  <v-footer dark padless>
    <v-card flat tile class="white--text text-center" style="width: 100%">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
          :href="icon.link"
        >
          <v-icon v-if="icon.external" size="24px">
            {{ icon.icon }}
          </v-icon>
          <router-link v-else tag="span" :to="icon.link">
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </router-link>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>{{ APPNAME }}</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {icon: 'mdi-home', link: '/'},
      {icon: 'mdi-information-variant', link: '/about'},
      {icon: 'mdi-github', link: 'https://github.com/autoscriber-app', external: true},
    ],
  }),
  props: {
    APPNAME: String,
  },
};
</script>

<style scoped>
</style>