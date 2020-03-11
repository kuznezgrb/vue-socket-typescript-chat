<template>
  <div class="chat chat__wrapper">
    <div class="chat__items">
      <UserMessageBlock class="chat__item-message" />
      <UserMessageBlock class="chat__item-message" />
    </div>
    <TextInputArea />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import UserMessageBlock from "@/components/UserMessageBlock.vue";
import TextInputArea from "@/components/TextInputArea.vue";

export default Vue.extend({
  name: "ChatArea",
  components: { UserMessageBlock, TextInputArea }
});
</script>

<style lang="scss" scoped>
.chat {
  padding: 2rem;
  &__item-message {
    margin: 6rem 0;
    &:first-child {
      margin-top: 4rem;
    }
  }
}
</style>
