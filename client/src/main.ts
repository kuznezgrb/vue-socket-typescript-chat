import Vue from 'vue';
import * as VueSocketio from 'socket.io-client';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueSocketio, 'http://localhost:8070/');

new Vue({
  render: (h) => h(App)
}).$mount('#app');
