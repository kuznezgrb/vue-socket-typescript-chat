<template>
  <div class="row__info">
    <span class="row__name"> {{ messageName }} </span>
    <span> {{ label }} </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "ChatInformationBlock",
  props: {
    messageName: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  &__info {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-grey);
  }
  &__name {
    font-weight: bold;
    margin-right: 0.4rem;
  }
}
</style>
