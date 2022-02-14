<template>
  <div class="lv-menu-group">
    <h1 class="lv-menu-group__label">
      <lv-icon class="lv-menu-group__icon" v-if="icon" :name="icon" /> {{ label }}
    </h1>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
@import '../../scss/core';

.lv-menu-group {
  font-family: $font-family;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: $font-size;

  &:last-of-type {
    margin-bottom: 0;
  }

  &__label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: $font-size-label;
    color: $placeholder-color;
    margin-top: 0;
    padding: 10px;
  }

  &__icon {
    margin-right: 5px;
  }
}
</style>