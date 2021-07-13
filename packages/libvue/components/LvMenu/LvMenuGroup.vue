<template>
  <div class="lv-menu-group">
    <h1 class="lv-menu-group__label">
      <lv-icon class="lv-menu-group__icon" v-if="icon" :name="icon" /> {{ label }}
    </h1>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
};
</script>
