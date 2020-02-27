<template>
  <div class="sidebar__container"></div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AppLeftColumn"
});
</script>

<style lang="scss" scoped>
.sidebar {
  &__container {
    width: var(--sidebar-left-width);
    height: 100%;
    position: fixed;
    background: linear-gradient(to bottom, #2c2577 10%, #3f338a, #6a58ae);
  }
}
</style>
