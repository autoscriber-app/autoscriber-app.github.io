<template>
  <v-app>
    <v-app-bar dark color="blue" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <v-toolbar-title>{{ APPNAME }}</v-toolbar-title> -->

      <v-spacer></v-spacer>
      <!-- <v-switch
        class="navSwitch"
        v-model="$vuetify.theme.dark"
        color="white"
        label="Dark Theme"
      ></v-switch> -->
      <router-link tag="span" to="/">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <router-link tag="span" v-for="(item, index) in navbarItems" :key="index" :to="item.href">
            <v-list-item>
              <v-list-item-title style="color: unset; text-decoration: none;">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-col cols="12">
        <router-view/>
      </v-col>
    </v-content>
    <!-- 
      <div class="text-center" style="display: inline-block;" v-if="prompt && !installed">
        <v-snackbar color="indigo">
          <span style="display: inline-block; transform: translate(0, 50%) !important;">
            Install Autoscriber as an app!
          </span>
          <v-btn dark style="float: right;" @click="install()" color="pink">Install</v-btn>
        </v-snackbar>
      </div>
    -->
  </v-app>
</template>

<script>
export default {
  data: () => ({
    APPNAME: 'Autoscriber App',
    drawer: false,
    navbarItems: [
      {
        title: 'Create/Join Session',
        href: '/'
      },
      {
        title: 'About Autoscriber',
        href: '/about'
      }
    ],
    prompt: null,
    installed: false,
  }),
  created() {
    document.title = this.APPNAME;

    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      this.prompt = e;
    });
  },
  methods:{
    // async install() {
    //   this.prompt.prompt();
    //   if (await this.prompt.userChoice === 'accepted') this.installed = true;
    // }
  }
};
</script>

<style>
.card {
  --margin: 10px;
  width: calc(100% - 2 * var(--margin));
  margin: var(--margin) auto var(--margin) auto;
}

.navSwitch {
  transform: translateY(25%);
}

html {
  overflow-y: auto !important;
}

.v-navigation-drawer--bottom {
  position: fixed !important;
}

@media all and (display-mode: standalone) {
  #install-prompt {
    display: none;
  }
}
.v-snack__wrapper {
  display: block !important;
}
.v-snack__content {
  overflow: auto !important;
}
</style>
