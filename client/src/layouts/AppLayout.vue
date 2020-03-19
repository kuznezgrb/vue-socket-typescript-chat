<template>
  <v-app class="container__app-container">
    <ChatModal @saved="updateUser" :show="!userIsLogged" class="modal" />
    <AppLeftColumn class="menu menu__left" />
    <div class="chat__body">
      <AppHeader class="header" />
      <ChatArea class="chat__area" />
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppLeftColumn from "@/components/AppLeftColumn.vue";
import ChatModal from "@/components/ChatModal.vue";
import ChatArea from "@/components/ChatArea.vue";
import AppHeader from "@/components/AppHeader.vue";
import UserStore from "@/store/userStore";
import { User } from "@/models/user";

require("../assets/blocks");
export default Vue.extend({
  name: "AppLayout",
  components: {
    AppLeftColumn,
    ChatModal,
    ChatArea,
    AppHeader
  },
  data() {
    return {
      userIsLogged: false
    };
  },
  computed: {
    ...UserStore.mapGetters(["userData"])
  },
  methods: {
    ...UserStore.mapMutations(["updateUserData"]),
    updateUser(username: string) {
      if (username.length < 2) {
        return false;
      }
      const data: User = {
        id: this.getRandomId(),
        name: username
      };
      this.updateUserData(data);
      this.userIsLogged = true;
      this.$socket.emit("user_joined", this.userData);
    },
    getRandomId(): number {
      return Math.floor(Math.random() * 1000000) + 1;
    }
  }
});
</script>

<style lang="scss">
@import "../assets/mixins";

.header {
  @media #{$min768} {
    padding-left: calc(var(--sidebar-left-width) + var(--sidebar-padding-left));
  }
}

.chat {
  &__area {
    @media #{$min768} {
      margin-left: calc(
        var(--sidebar-left-width) + var(--sidebar-padding-left)
      );
    }
  }
}

.menu {
  &__left {
    transform: translateX(-100vw);
    transition: transform 0.3s;
    @media #{$min768} {
      transform: translateX(0vw);
    }
  }
}

.modal {
  position: absolute;
}
</style>
