<template>
  <div class="lv-notice"
     :class="{
    'lv-notice--warning': type === 'warning',
    'lv-notice--success': type === 'success',
    'lv-notice--primary': type === 'primary',
    'lv-notice--ghost': type === 'ghost',
    'lv-notice--info': type === 'info',
    }">
    <lv-icon class="lv-notice__icon" :name="icon" v-if="icon"/>
    <div class="lv-notice__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import LvIcon from "../LvIcon/LvIcon.vue";

export default {
  components: {
    LvIcon,
  },
  props: {
    icon: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'primary', 'warning', 'info', 'success', 'ghost'].includes(value),
    },
  }
}
</script>

<style lang="scss">
@import '../../scss/core';

.lv-notice {
  padding: 10px 13px;
  background-color: #f3f3f3;
  width: 100%;
  border-radius: $border-radius;
  display: flex;
  align-items: center;

  &__icon {
    margin-right: 10px;
  }

  &--ghost {
    background-color:  fallback($color-ghost, #FFFFFF);
    color: fallback($text-color, #F3F7F9);
  }

  &--active,
  &--primary {
    background-color: fallback($color-primary, #ff2e77);
    color: fallback($text-color-inverted, #FFFFFF);
  }

  // Modifiers
  &--warning {
    background-color: fallback($color-warning, #ff5427);
    color: fallback($text-color-inverted, #FFFFFF);
  }

  &--success {
    background-color: fallback($color-success, #00CA99);
    color: fallback($text-color-inverted, #FFFFFF);
  }

  &--info {
    background-color: fallback($color-info, #0C92DD);
    color: fallback($text-color-inverted, #FFFFFF);
  }
}
</style>