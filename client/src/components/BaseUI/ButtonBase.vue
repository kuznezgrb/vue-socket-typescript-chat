<template>
  <div>
    <v-menu v-if="items" offset-y>
      <template v-slot:activator="{ on }">
        <button class="button" :class="btnClass" v-on="on">
          <v-icon :large="true" :class="iconClass" />
        </button>
      </template>
      <v-list class="dropdown dropdown__items">
        <v-list-item
          class="dropdown__item"
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <button v-else class="button" :class="btnClass">
      <v-icon :large="true" :class="iconClass" />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ButtonBase",
  props: {
    items: {
      type: Array,
      default: () => null
    },
    btnClass: {
      type: String,
      default: ""
    },
    iconClass: {
      type: String,
      default: ""
    }
  }
});
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 100%;
  background: var(--color-grey);
  display: flex;
  align-items: center;
  justify-content: center;

  &__icon {
    font-size: 2rem;
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
.dropdown {
  &__item {
    font-family: var(--font-helvetica);
  }
}
</style>
