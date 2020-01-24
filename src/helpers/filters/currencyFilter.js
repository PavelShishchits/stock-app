import Vue from 'vue';

Vue.filter('formatPrice', function (price) {
   if (!parseInt(price)) {
      return '';
   }
   return '$' + price.toLocaleString();
});