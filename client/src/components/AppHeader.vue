<template>
  <div class="header__wrapper">
    <div class="header__container">
      <div class="header__row-item">
        <div class="header__title">LetsTalk</div>
      </div>
      <div class="header__row-item">
        <div class="button button__attachment">
          <v-icon
            large="true"
            class="mdi mdi-attachment button__icon icon--white"
          />
        </div>
      </div>
      <div class="header__row-item">
        <div class="button button--clear button__settings">
          <v-icon large="true" class="mdi mdi-settings button__icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AppHeader"
});
</script>

<style lang="scss" scoped>
.header {
  &__wrapper {
    font-weight: 700;
    font-size: 2.8rem;
    background: #ffffff;
    padding-left: calc(var(--sidebar-left-width) + var(--sidebar-padding-left));
  }
  &__container {
    padding: 3rem 3.5rem;
    display: flex;
    justify-content: space-between;
  }
  &__row-item {
    display: flex;
    align-items: center;

    &:after {
      content: "";
      width: 0.2rem;
      height: 4rem;
      display: flex;
      background: var(--color-border-grey);
      border-radius: 0.3rem;
      margin: 0 2rem;
    }
  }
}

.button {
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background: var(--color-grey);
  display: flex;
  align-items: center;
  justify-content: center;
  &__icon {
    font-size: 3.6rem;
  }
  .icon {
    &--white {
      color: white;
    }
  }
  &--clear {
    background: none;
  }
}
</style>
