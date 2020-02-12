import Vue from 'vue'
import './axios/index';
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.scss';
import './helpers/filters/currencyFilter';
import Preloader from './components/Preloader';

Vue.component('preloader', Preloader);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
