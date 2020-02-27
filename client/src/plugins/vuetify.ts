import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#2C2577",
        secondary: "#424242",
        accent: "#5149FF",
        error: "#FF5252",
        info: "#F7F7F9",
        success: "#3ED57D",
        warning: "#FFC107"
      }
    }
  }
});
