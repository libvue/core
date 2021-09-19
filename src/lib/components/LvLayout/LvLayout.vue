<template>
  <div class="lv-layout">
    <div class="lv-layout__menu" v-if="!!$slots.menu">
      <slot name="menu" />
    </div>
    <div class="lv-layout__content" v-if="!!$slots.content">
      <slot name="content" />
    </div>
    <div class="lv-layout__footer" v-if="!!$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuPosition: {
      type: String,
      default: 'menu-left',
      validator: (value) => ['menu-left', 'menu-top'].includes(value),
    },
    responsiveMenu: {
      type: Boolean,
      default: true,
    },
    footerPosition: {
      type: String,
      default: 'content-relative',
      validator: (value) => ['content-relative', 'content-fixed', 'menu-relative', 'menu-fixed'].includes(value),
    },
  },
};
</script>

<style lang="scss">
@import '../../scss/core';

$layout-padding: 30px;
$layout-menu-border-color: lighten($border-color, 8);

.lv-layout {
  display: flex;
  flex-direction: row;
  min-height: 100%;
  flex-grow: 1;
  width: 100%;
  &__menu,
  &__content,
  &__footer {
    padding: fallback($layout-padding, $padding);
  }
  &__content {
    flex-grow: 1;
  }
  &__menu {
    border-right: 1px solid fallback($layout-menu-border-color, $border-color);
  }
}
</style>
