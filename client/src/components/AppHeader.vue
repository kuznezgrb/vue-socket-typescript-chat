<template>
  <div class="header__container">LetsTalk</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AppHeader"
});
</script>

<style lang="scss" scoped>
.header {
  &__container {
    font-weight: 700;
    font-size: 2.8rem;
    background: #ffffff;
    padding-left: calc(var(--sidebar-left-width) + var(--sidebar-padding-left));
  }
}
</style>
