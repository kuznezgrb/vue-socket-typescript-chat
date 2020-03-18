<template>
  <v-row justify="center">
    <v-dialog v-model="show" persistent max-width="490">
      <v-card>
        <v-card-title class="headline">Welcome</v-card-title>
        <div class="form">
          <v-text-field
            v-model="username"
            label="Username"
            placeholder="Please, enter username"
            @keydown.enter="$emit('saved', username)"
          ></v-text-field>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="purple darken-1"
              text
              @click="$emit('saved', username)"
              >Save</v-btn
            >
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ChatModal",
  data() {
    return {
      dialog: true,
      username: ""
    };
  },
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
});
</script>

<style lang="scss" scoped>
.form {
  padding: 1rem 1.5rem;
}
</style>
