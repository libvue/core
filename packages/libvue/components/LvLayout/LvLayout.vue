<template>
  <div class="lv-layout">
    <div class="lv-layout__menu">
      <slot name="menu"></slot>
    </div>
    <div class="lv-layout__content">
      <slot name="content"></slot>
    </div>
    <div class="lv-layout__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuPosition: {
      type: String,
      default: 'menu-left',
      validator: (value) => {
        return ['menu-left', 'menu-top'].includes(value);
      }
    },
    responsiveMenu: {
      type: Boolean,
      default: true,
    },
    footerPosition: {
      type: String,
      default: 'content-relative',
      validator: (value) => {
        return ['content-relative', 'content-fixed', 'menu-relative', 'menu-fixed'].includes(value);
      }
    }
  }
}
</script>