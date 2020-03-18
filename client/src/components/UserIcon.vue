<template>
  <div class="icon__wrapper">
    <img class="icon__img" :src="icon" alt="" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "UserIcon",
  props: {
    icon: {
      type: String,
      default: ""
    }
  }
});
</script>

<style lang="scss" scoped>
.icon {
  &__wrapper {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
  &__img {
    width: 2.4rem;
    border-radius: 100%;
  }
}
</style>
