<template>
  <lv-input v-model="firstName" label="First name" :placeholder="'Enter your first name'"></lv-input>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
    };
  },
};
</script>
