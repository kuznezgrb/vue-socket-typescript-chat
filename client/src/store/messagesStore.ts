import { Getters, Mutations, Actions, Module } from "vuex-smart-module";
import { Message } from "@/models/message";

class MessagesState {
  messages: object[] = [];
}

class MessagesGetters extends Getters<MessagesState> {
  get loadedMessages() {
    return this.state.messages;
  }
}

class MessagesMutations extends Mutations<MessagesState> {
  addMessageToList(data: Message) {
    this.state.messages.push(data);
  }
}

class MessagesActions extends Actions<
  MessagesState,
  MessagesGetters,
  MessagesMutations,
  MessagesActions
> {}

export default new Module({
  state: MessagesState,
  getters: MessagesGetters,
  mutations: MessagesMutations,
  actions: MessagesActions
});
