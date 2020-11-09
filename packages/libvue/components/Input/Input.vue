<template>
  <input
    class="libvue-input"
    type="text"
  >
</template>

<script>
export default {

};
</script>

<style lang="scss">
.libvue-input {
  padding: var(--input-padding, var(--padding, 5px));
  border: 1px solid var(--input-border-color, var(--border-color, #cacaca));
  border-radius: var(--input-border-radius, var(--border-radius, 5px));
  outline: none;

  &:focus {
    border: 1px solid var(--input-border-color-focus, var(--border-color-focus, #333));
  }
}
</style>
