import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import http from 'plugins/http/index';

Vue.config.productionTip = false;
Vue.prototype.$baseUrl = process.env.BASE_URL;
Vue.prototype.$http = http;

new Vue({
  render: h => h(App)
}).$mount('#app')
