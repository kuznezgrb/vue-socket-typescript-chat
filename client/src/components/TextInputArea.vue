<template>
  <div class="input-message__block">
    <v-text-field />
    <v-btn icon>
      <v-icon>mdi-send</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TextInputArea"
});
</script>

<style lang="scss" scoped>
.input-message {
  &__block {
    display: flex;
    align-items: center;
  }
}
</style>
