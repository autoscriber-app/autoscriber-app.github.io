import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../components/MainView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes,
  base: '/'
});

export default router;