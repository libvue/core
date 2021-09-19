<template>
  <component
    :is="componentName"
    v-model="value"
    v-bind="$attrs"
  />
</template>

<script>
import LvInputText from './LvInputText.vue';

export default {
  components: {
    LvInputText,
  },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text',
      validator: (val) => ['text', 'tel', 'email', 'password', 'number', 'range', 'datetime'].includes(val),
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    componentName() {
      return `lv-input-${this.type}`;
    },
  },
};
</script>

<style lang="scss">
@import '../../scss/libvue';
</style>
