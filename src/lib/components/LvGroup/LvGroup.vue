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

<style lang="scss">
@import '../../scss/core';

.lv-group {
  display: flex;
  flex-wrap: wrap;

  &--align-left {
    justify-content: flex-start;
  }

  &--align-right {
    justify-content: flex-end;
  }

  &--align-center {
    justify-content: center;
  }

  &--direction-column {
    flex-direction: column;
  }

}
</style>