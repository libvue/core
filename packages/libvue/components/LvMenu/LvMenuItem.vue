<template>
  <div
    class="lv-menu-item"
    :href="href"
    :class="{
      'lv-menu-item--disabled': disabled || loading,
      'lv-menu-item--loading': loading,
      'lv-menu-item--active': toEqualsCurrentRoute
    }"
    @click="onClick"
  >
    <lv-icon
      v-if="icon"
      :name="icon"
      class="lv-menu-item__icon"
    /> {{ label }}
  </div>
</template>

<script>
import navigationMixin from '../../mixins/navigationMixin';

export default {
  mixins: [navigationMixin],
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
