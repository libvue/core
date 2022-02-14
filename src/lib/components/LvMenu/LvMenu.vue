<template>
  <div class="lv-menu" :class="{
    'lv-menu--direction-row': direction === 'row'
  }">
    <div class="lv-menu__header" v-if="hasHeaderSlot" @click="$emit('click-header')">
      <slot name="header" />
    </div>
    <slot />
    <div class="lv-menu__footer" v-if="hasFooterSlot">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'column',
      validator(value) {
        return ['column', 'row'].includes(value);
      }
    }
  },
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header;
    },
    hasFooterSlot() {
      return !!this.$slots.footer;
    },
  },
};
</script>

<style lang="scss">
@import '../../scss/core';

.lv-menu {
  $self: &;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font-family: $font-family;
  background-color: $background-color;

  &--direction-row {
    flex-direction: row;
    align-items: center;

    .lv-menu-group {
      flex-direction: row;
      flex-shrink: 0;
      width: auto;
      margin-bottom: 0;
      &__label {
        display: none;
      }
    }
    .lv-menu-list {
      position: relative;
      &__label {
        white-space: nowrap;
        margin-bottom: 0;
      }
      &__dropdown {
        position: absolute;
        top: 44px;
        left: 0;
        padding: 10px;
        z-index: 3;
        border: none;
        border-radius: 10px;
        box-shadow: 0 5px 16px rgb(0 0 0 / 7%);
        margin-left: 0;
        width: 100%;
      }
    }
    .lv-menu-item {
      margin-bottom: 0;
    }
    #{$self}__header {
      margin-bottom: 0;
      margin-right: 30px;
      padding: 0;
    }
  }

  &__header {
    display: flex;
    padding: 0 10px 0 10px;
    margin-bottom: 38px;
    font-weight: bold;
    align-items: center;
    cursor: pointer;
  }
}
</style>