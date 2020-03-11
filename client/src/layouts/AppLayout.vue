<template>
  <v-app class="container__app-container">
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
import ChatArea from "@/components/ChatArea.vue";
import AppHeader from "@/components/AppHeader.vue";

require("../assets/blocks");

export default Vue.extend({
  name: "AppLayout",
  components: {
    AppLeftColumn,
    ChatArea,
    AppHeader
  }
});
</script>

<style lang="scss">
@import "../assets/mixins";
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: var(--font-helvetica);
  position: relative;
}

.container {
  &__app-container {
    width: 100%;
  }
}

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
</style>
