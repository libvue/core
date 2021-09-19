<template>
  <div class="lv-menu">
    <div class="lv-menu__header" v-if="hasHeaderSlot">
      <slot name="header" />
    </div>
    <slot />
    <div class="lv-menu__footer" v-if="hasFooterSlot">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header;
    },
    hasFooterSlot() {
      return !!this.$slots.footer;
    },
  },
};
</script>
