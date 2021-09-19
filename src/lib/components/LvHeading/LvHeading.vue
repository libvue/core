<template>
  <component
    :is="tagName"
    class="lv-heading"
    :class="{
      [`lv-heading--${tagName}`]: tagName,
      'lv-heading--sticky': sticky,
      'lv-heading--sub': sub,
    }"
  >
    <slot />
  </component>
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
    level: {
      type: [Number, String],
      default: 1,
      validator(value) {
        const number = Number.parseInt(value, 10);
        return number > 0 && number <= 6;
      },
    },
    sticky: {
      type: Boolean,
      default: false,
    },
    sub: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    tagName() {
      return `h${this.level}`;
    },
  },
};
</script>
