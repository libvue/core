<template>
  <input
    class="lv-input-text"
    :class="{
      'lv-input-text--warning': state === 'warning',
      'lv-input-text--success': state === 'success',
    }"
    type="text"
    :placeholder="placeholder"
    @input="$emit('input')"
    @change="$emit('change')"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    @click="$emit('click')"
    :value="value"
  />
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
    value: {
      type: [String, Number],
      default: '',
    },
    state: {
      type: String,
      default: 'default',
      validator: (val) => {
        return ['default', 'warning', 'success'].includes(val);
      }
    }
  }
}
</script>

<style lang="scss">
.lv-input-text {
  outline: none;
  font-family: var(--input-font-family, var(--font-family, sans-serif));
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

  &--warning {
    border: 1px solid var(--input-color-warning, var(--color-warning, #E41654));
    color: var(--input-color-warning, var(--color-warning, #E41654));

    &::placeholder {
      color: var(--input-placeholder-color-warning, var(--placeholder-color-warning, #fdabc4));
    }

    &:focus {
      box-shadow: var(--input-focus-warning, var(--focus-warning, 0px 0px 0px 4px rgba(228, 22, 84, 0.13)));
    }
  }

  &--success {
    border: 1px solid var(--input-color-success, var(--color-success, #00CA99));
    color: var(--input-color-success, var(--color-success, #00CA99));

    &::placeholder {
      color: var(--input-placeholder-color-success, var(--placeholder-color-success, #fdabc4));
    }

    &:focus {
      box-shadow: var(--input-focus-success, var(--focus-success, 0px 0px 0px 4px rgba(0, 202, 153, 0.15)));
    }
  }
}
</style>
