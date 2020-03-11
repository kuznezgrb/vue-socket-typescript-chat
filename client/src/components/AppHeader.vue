<template>
  <div class="header__wrapper">
    <div class="header__container">
      <div class="header__row-item">
        <div class="header__title">LetsTalk</div>
      </div>
      <div class="header__row-item">
        <ButtonBase
          icon-class="mdi mdi-attachment button__icon icon--white"
          btn-class="button__attachment"
        />
      </div>
      <div class="header__row-item">
        <ButtonBase
          icon-class="mdi mdi-settings"
          btn-class="button--clear button__settings"
          :items="items"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ButtonBase from "@/components/BaseUI/ButtonBase.vue";
export default Vue.extend({
  name: "AppHeader",
  components: { ButtonBase },
  data() {
    return {
      items: [
        {
          name: "Account"
        },
        {
          name: "Language"
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
.header {
  &__wrapper {
    font-weight: 700;
    font-size: 2.8rem;
    background: #ffffff;
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
</style>
