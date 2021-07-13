<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    class="lv-button"
    :class="{
      'lv-button--warning': type === 'warning',
      'lv-button--success': type === 'success',
      'lv-button--primary': type === 'primary',
      'lv-button--ghost': type === 'ghost',
      'lv-button--info': type === 'info',
      'lv-button--align-left': align === 'left',
      'lv-button--align-right': align === 'right',
      'lv-button--align-center': align === 'center',
      'lv-button--disabled': disabled || loading,
      'lv-button--loading': loading,
      'lv-button--active': toEqualsCurrentRoute && activeOnRouteMatch
    }"
    :disabled="disabled"
    @click="onClick"
  >
    <lv-icon
      v-if="icon"
      class="lv-button__icon"
      :class="{ 'lv-button__icon--hidden' : loading }"
      :name="icon"
    />
    <lv-icon
      v-if="loading"
      class="lv-button__loading"
      name="spinner"
    />
    <span
      class="lv-button__content"
      :class="{ 'lv-button__content--hidden' : loading }"
    >
      <slot>
        {{ label }}
      </slot>
    </span>
  </component>
</template>

<script>
import LvIcon from '../LvIcon/LvIcon.vue';
import navigationMixin from '../../mixins/navigationMixin';

export default {
  components: {
    LvIcon,
  },
  mixins: [navigationMixin],
  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'primary', 'warning', 'info', 'success', 'ghost'].includes(value),
    },
    disabled: {
      type: Boolean,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    align: {
      type: String,
      default: 'center',
      validator: (value) => ['center', 'left', 'right'].includes(value),
    },
    /* Advanced Props */
    activeOnRouteMatch: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
