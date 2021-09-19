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

<style lang="scss">
@import '../../scss/libvue';

$menu-width: 200px;
$menu-background-color: $background-color;

.lv-menu {
  width: $menu-width;
  background-color: fallback($menu-background-color, $background-color);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font-family: $font-family;

  &__header {
    padding: 0 10px 38px 10px;
    font-weight: bold;
  }
}
</style>