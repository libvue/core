<template>
  <lv-input v-model="firstName" label="First Name" icon="Lock" hint="The name your parents gave you." :placeholder="'Enter your first name'"></lv-input>
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

<style>
body {
  padding: 40px;
}
</style>
