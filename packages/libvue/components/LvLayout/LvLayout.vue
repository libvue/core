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
