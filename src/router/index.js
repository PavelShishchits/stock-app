import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Stocks from '../views/Stocks.vue'
import Login from '../views/Login.vue';
import Registration from '../views/Registration.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: Stocks
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
