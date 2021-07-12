<template>
  <lv-button
    class="lv-menu-item"
    type="ghost"
    v-bind="$attrs"
    active-on-route-match
    align="left"
  >
    <slot>{{ label }}</slot>
  </lv-button>
</template>

<script>

export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
