<template>
  <div>
    <ChatInformationBlock
      v-if="messageObject.action === 2"
      label="joined to the conversation"
      :message-name="messageObject.from.name"
      class="message__from-system"
    />
    <ChatInformationBlock
      v-else-if="messageObject.action === 3"
      label="has left conversation"
      :message-name="messageObject.from.name"
      class="message__from-system"
    />
    <div class="message__from-user" v-else>
      <div class="user__info">
        <UserIcon class="user__icon" :icon="userIcon" />
        <div class="user__name">{{ messageObject.from.name }}</div>
        <div class="user__message-time">{{ dateFormat }}</div>
      </div>
      <div class="message__block">
        <span class="message__content">{{ messageObject.content }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import UserIcon from "@/components/UserIcon.vue";
import dayjs from "dayjs";
import ChatInformationBlock from "@/components/ChatInformationBlock.vue";

export default Vue.extend({
  name: "UserMessageBlock",
  components: { ChatInformationBlock, UserIcon },
  computed: {
    userIcon() {
      return (
        "https://api.adorable.io/avatars/285/" + this.messageObject.from.id
      );
    },
    dateFormat() {
      return dayjs(this.messageObject.from.date).format("HH:mm:ss");
    }
  },
  props: {
    messageObject: {
      type: Object,
      default: () => ({})
    }
  }
});
</script>

<style lang="scss" scoped>
.user {
  &__info {
    display: flex;
    align-items: center;
  }
  &__icon {
    margin: 0 0.6rem 0 0;
  }
  &__name {
    font-size: var(--font-size-text-title);
    font-weight: bold;
  }
  &__message-time {
    color: var(--color-grey);
    font-size: calc(var(--font-size-text) - 0.1rem);
    padding: 0 1rem;
  }
}

.message {
  &__block {
    margin: 0.5rem 0;
    padding: 1.2rem;
    background: white;
    border-radius: 0 1rem 1rem 1rem;
    max-width: 30rem;
  }
  &__content {
    font-size: var(--font-size-text);
  }
  &__from-user {
    margin: 2rem 0;
  }
}
</style>
