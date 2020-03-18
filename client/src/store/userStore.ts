import { Getters, Mutations, Actions, Module } from "vuex-smart-module";
import { User } from "@/models/user";
import messagesStore from "./messagesStore";

class UserState {
  user: User;
}

class UserGetters extends Getters<UserState> {
  get userData() {
    return this.state.user;
  }
}

class UserMutations extends Mutations<UserState> {
  updateUserData(data: User) {
    localStorage.user = data;
    this.state.user = data;
  }
}

class UserActions extends Actions<
  UserState,
  UserGetters,
  UserMutations,
  UserActions
> {}

export default new Module({
  state: UserState,
  getters: UserGetters,
  mutations: UserMutations,
  actions: UserActions,
  modules: {
    messagesStore
  }
});
