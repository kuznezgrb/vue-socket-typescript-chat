import Vue from 'vue';
import VueSocketio from 'socket.io';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueSocketio, 'http://localhost:8070/');

new Vue({
  render: (h) => h(App)
}).$mount('#app');
