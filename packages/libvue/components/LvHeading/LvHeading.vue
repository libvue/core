<template>
  <div
    class="lv-heading"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: 'left',
      validator(value) {
        // The value must match one of these strings
        return ['left', 'center', 'right'].includes(value);
      },
    },
  },
};
</script>
