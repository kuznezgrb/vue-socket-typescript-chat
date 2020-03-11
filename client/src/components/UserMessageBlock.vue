<template>
  <div>
    <div class="user__info">
      <UserIcon
        class="user__icon"
        icon="https://api.adorable.io/avatars/285/200058.png"
      />
      <div class="user__name">John Lebowski</div>
      <div class="user__message-time">3:59 PM</div>
    </div>
    <div class="message__block">
      <span class="message__content">Message</span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import UserIcon from "@/components/UserIcon";
export default Vue.extend({
  name: "UserMessageBlock",
  components: { UserIcon }
});
</script>

<style lang="scss" scoped>
.user {
  &__info {
    display: flex;
    align-items: center;
  }
  &__icon {
    margin: 0 1rem 0 0;
  }
  &__name {
    font-size: 2rem;
    font-weight: bold;
  }
  &__message-time {
    color: var(--color-grey);
    font-size: 1.3rem;
    padding: 0 1rem;
  }
}

.message {
  &__block {
    margin: 1rem 0;
    padding: 1.5rem;
    background: white;
    border-radius: 0 1rem 1rem 1rem;
    max-width: 40rem;
  }
  &__content {
    font-size: 1.3rem;
  }
}
</style>
