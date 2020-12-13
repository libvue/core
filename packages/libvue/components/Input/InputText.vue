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
  &:focus {
    box-shadow: var(--input-focus, var(--focus, 0px 0px 0px 4px rgba(0, 0, 0, 0.04)));
  }
  &--warning {

  }
}
</style>
