<template>
  <div
    class="lv-input-text"
     :class="{
      'lv-input-text--warning': state === 'warning',
      'lv-input-text--success': state === 'success',
      'lv-input-text--labeled': label,
    }"
  >
    <label
      v-if="label"
      class="lv-input-text__label">
      {{ label }}
    </label>
    <input
      class="lv-input-text__input"
      type="text"
      :placeholder="placeholder"
      v-bind="$attrs"
      v-model="modelValue"
      />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'normal',
      validator: (val) => {
        return ['normal', 'small', 'large'].includes(val);
      }
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    state: {
      type: String,
      default: 'default',
      validator: (val) => {
        return ['default', 'warning', 'success'].includes(val);
      }
    },
    label: {
      type: String,
      required: false,
    },
  }
}
</script>

<style lang="scss" scoped>
.lv-input-text {
  $self: &;
  display: inline-block;
  position: relative;
  font-family: var(--input-font-family, var(--font-family, sans-serif));

  &__label {
    position: absolute;
    top: 10px;
    left: calc(var(--input-padding, var(--padding, 5px)) + 1px); // Optical Fix
    font-size: var(--input-font-size-label, var(--font-size-label, 12px));
    color: var(--input-text-color-dimmed, var(--text-color-dimmed, #192024));
  }

  &__input {
    outline: none;
    font-size: var(--input-font-size, var(--font-size, 16px));
    border-radius: var(--input-border-radius, var(--border-radius, 5px));
    border: 1px solid var(--input-border-color, var(--border-color, #cacaca));
    padding: var(--input-padding, var(--padding, 5px));
    color: var(--input-text-color, var(--text-color, #192024));
    transition: var(--input-transition-time, var(--transition-time, .2s)) all var(--input-transition-easing, var(--transition-easing, ease-in-out));
    &:focus {
      box-shadow: var(--input-focus, var(--focus, 0px 0px 0px 4px rgba(0, 0, 0, 0.04)));
    }

    &::placeholder {
      color: var(--input-placeholder-color, var(--placeholder-color, #808F98));
    }
  }

  &--warning {
    #{$self}__input {
      border: 1px solid var(--input-color-warning, var(--color-warning, #E41654));
      color: var(--input-color-warning, var(--color-warning, #E41654));

      &::placeholder {
        color: var(--input-placeholder-color-warning, var(--placeholder-color-warning, #fdabc4));
      }

      &:focus {
        box-shadow: var(--input-focus-warning, var(--focus-warning, 0px 0px 0px 4px rgba(228, 22, 84, 0.13)));
      }
    }
  }

  &--success {
    #{$self}__input {
      border: 1px solid var(--input-color-success, var(--color-success, #00CA99));
      color: var(--input-color-success, var(--color-success, #00CA99));

      &::placeholder {
        color: var(--input-placeholder-color-success, var(--placeholder-color-success, #9ad9ce));
      }

      &:focus {
        box-shadow: var(--input-focus-success, var(--focus-success, 0px 0px 0px 4px rgba(0, 202, 153, 0.15)));
      }
    }
  }

  &--labeled {
    #{$self}__input {
      padding: calc(var(--input-padding, var(--padding, 5px)) * 1.5) var(--input-padding, var(--padding, 5px)) calc(var(--input-padding, var(--padding, 5px)) / 2);
    }
  }
}
</style>
