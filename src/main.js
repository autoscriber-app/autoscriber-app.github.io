import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import './registerServiceWorker';
import VuetifyDialog from 'vuetify-dialog';
import 'vuetify-dialog/dist/vuetify-dialog.css';
import error from './components/error.js';

Vue.use(VuetifyDialog, {
  context: {
    vuetify
  }
});
Vue.config.productionTip = false;

Vue.config.errorHandler = (err, vm, info) => { 
  error(vm.$dialog, err, info);
};

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
