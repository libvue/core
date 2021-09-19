<template>
  <div class="lv-menu-list">
    <div
      class="lv-menu-list__label"
      @click="toggleState"
    >
      <lv-icon
        v-if="icon"
        :name="icon"
        class="lv-menu-list__icon"
      /> {{ label }}
      <lv-icon class="lv-menu-list__label-icon" :name="iconName"></lv-icon>
    </div>
    <div class="lv-menu-list__dropdown" v-show="isOpen">
      <slot />
    </div>
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
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: this.open,
    };
  },
  computed: {
    iconName() {
      return this.isOpen ? 'angle-up' : 'angle-down';
    },
  },
  methods: {
    toggleState() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss">
@import '../../scss/core';

$menu-list-padding: $padding;

.lv-menu-list {
  font-family: $font-family;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: $font-size;

  &:last-of-type {
    margin-bottom: 0;
  }

  &__icon {
    margin-right: 10px;
  }

  &__label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    margin-top: 0;
    padding: 10px;
    border-radius :5px;

    &:hover {
      background-color: lighten($color-default, 87);
    }

    &-icon {
      margin-left: auto;
    }
  }

  &__dropdown {
    display: flex;
    flex-direction: column;

    > [class^='lv-menu-item'] {
      text-indent: 15px;
    }
  }

}</style>
