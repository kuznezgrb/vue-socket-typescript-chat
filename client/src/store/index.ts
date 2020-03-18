import Vue from "vue";
import * as Vuex from "vuex";
import { createStore } from "vuex-smart-module";
import users from "./userStore";

Vue.use(Vuex);

export const store = createStore(users);
