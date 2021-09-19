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
@import '../../scss/libvue';

.lv-group {
  --item-distance: $margin-inter-item;

  display: flex;
  flex-wrap: wrap;
  margin-bottom: calc(#{$margin-inter-group} - #{$margin-inter-item});

  &:last-child {
    margin-bottom: -10px;
  }

  &--align-left {
    justify-content: flex-start;

    > * {
      margin-right: var(--item-distance);
      margin-bottom: 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &--align-right {
    justify-content: flex-end;

    > * {
      margin-right: 0;
      margin-left: var(--item-distance);

      &:first-child {
        margin-left: 0;
      }
    }
  }

  &--align-center {
    justify-content: center;

    > * {
      margin-right: calc(var(--item-distance) / 2);
      margin-left: calc(var(--item-distance) / 2);

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &--align-justify {
    > * {
      flex-basis: 0;
      flex-grow: 1;
      margin-right: calc(var(--item-distance) / 2);
      margin-left: calc(var(--item-distance) / 2);

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &--direction-column {
    flex-direction: column;

    > * {
      margin-right: 0;
      margin-left: 0;
    }
  }

  > * {
    margin-bottom: var(--item-distance);
  }

}
</style>