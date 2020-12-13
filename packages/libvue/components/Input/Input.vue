<template>
  <component :is="componentName" />
</template>

<script>
import InputText from "./InputText.vue";

export default {
  components: {
    LvInputText: InputText,
  },
  props: {
    type: {
      type: String,
      default: 'text',
      validator: (val) => {
        return ['text', 'tel', 'email', 'password', 'number', 'range', 'datetime'].includes(val);
      }
    }
  },
  computed: {
    componentName() {
      return `lv-input-${this.type}`;
    },
  },
};
</script>
