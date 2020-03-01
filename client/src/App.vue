<template>
  <AppLayout />
</template>

<script lang="ts">
import Vue from "vue";
import AppLayout from "./layouts/AppLayout.vue";
import socket from "socket.io-client";

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
