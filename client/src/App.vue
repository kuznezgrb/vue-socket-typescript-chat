<template>
  <AppLayout />
</template>

<script lang="ts">
import Vue from "vue";
import AppLayout from "./layouts/AppLayout.vue";
import io from "socket.io-client";

Vue.prototype.$socket = io("http://localhost:8000");
export default Vue.extend({
  name: "App",
  components: {
    AppLayout
  },
  data: () => ({
    //
  })
});
</script>
