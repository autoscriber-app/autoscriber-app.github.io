import Vue from 'vue';
import VueRouter from 'vue-router';
import JoinView from '../views/JoinView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Join',
    component: JoinView,
    props: true
  },
  {
    path: '/session/:sessionID',
    name: 'Session',
    component: () => import(/* webpackChunkName: "session" */ '../views/SessionView.vue'),
    props: true
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
