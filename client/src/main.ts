import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import vuetify from "./plugins/vuetify";
import "@/assets/layout_base_styles.scss";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
