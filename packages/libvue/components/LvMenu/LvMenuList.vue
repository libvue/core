<template>
  <div class="lv-menu-list">
    <lv-button :label="label">
      <slot name="button" />
    </lv-button>
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
    opened: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
