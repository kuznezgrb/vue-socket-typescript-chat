<template>
  <div class="container__app-container">
    <AppLeftColumn />
    <div class="chat__body">
      <AppHeader />
      <ChatArea class="chat__area" />
    </div>
  </div>
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
@import "../assets/fonts/style.css";

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

:root {
  --color-font: #35344d;
  --color-font-menu: #cac4e3;
  --color-link: #524bfc;
  --color-dark-base: #5249ff;
  --color-grey: #c3c3cc;
  --color-border-grey: #e1e3e5;
  --color-background-light: rgba(247, 247, 247, 1);

  --transition-ease: all 0.3s;
  --transition-medium: all 0.7s;
  --transition-slow: all 1.2s;

  --sidebar-left-width: 45.5rem;
  --sidebar-padding-left: 5rem;

  --font-helvetica: "Helvetica Neue";
  --font-gotham: "Gotham Pro Medium";
  --font-gotham-light: "Gotham Pro Light";
}

html {
  font-size: 5px;
  font-family: var(--font-helvetica);

  @media #{$min768} {
    font-size: 10px;
  }
  position: relative;
}

.container {
  &__app-container {
    background: var(--color-background-light);
    width: 100%;
  }
}

.chat {
  &__area {
    padding-left: calc(var(--sidebar-left-width) + var(--sidebar-padding-left));
  }
}
</style>
