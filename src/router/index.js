import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index';

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
    component: Portfolio,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: Stocks,
    meta: {
      requiresAuth: true
    },
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

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['auth/isAuthenticated'];
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next();
  }
});

export default router
