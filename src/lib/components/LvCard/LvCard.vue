<template>
  <div
    class="lv-card"
  >
    <slot />
  </div>
</template>

<style lang="scss">
@import '../../scss/core';

.lv-card {
  padding: $padding * 2;
  border-radius: $border-radius;
  box-shadow: 0 20px 25px rgba(0,0,0,0.03);
  background-color: $background-color;
}
</style>