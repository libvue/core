<template>
  <div
    class="lv-group"
    :class="[ 'lv-group--align-' + align, 'lv-group--direction-' + direction ]"
    :style="`--item-distance: ${gap}px;`"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'row',
      validator: (value) => ['row', 'column'].includes(value),
    },
    align: {
      type: String,
      default: 'left',
      validator(value) {
        // The value must match one of these strings
        return ['left', 'center', 'right', 'justify'].includes(value);
      },
    },
    gap: {
      type: [String, Number],
      default: 10,
    },
  },
};
</script>
