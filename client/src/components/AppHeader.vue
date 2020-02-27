<template>
  <div class="header__container">Header</div>
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
    background: #ffffff;
    padding-left: calc(var(--sidebar-left-width) + var(--sidebar-padding-left));
  }
}
</style>
