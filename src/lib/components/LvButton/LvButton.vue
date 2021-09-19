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

<style lang="scss">
@import '../../scss/libvue';

$button-border-color-focus: $border-color-focus;
$button-border-radius: $border-radius;
$button-color-default: $color-default;
$button-color-ghost: $color-ghost;
$button-color-info: $color-info;
$button-color-primary: $color-primary;
$button-color-success: $color-success;
$button-color-warning: $color-warning;
$button-font-family: $font-family;
$button-font-size: $font-size;
$button-padding: 12px 17px;
$button-placeholder-color-warning: $placeholder-color-warning;
$button-shadow-focus-ghost: $shadow-focus-ghost;
$button-shadow-focus-info: $shadow-focus-info;
$button-shadow-focus-primary: $shadow-focus-primary;
$button-shadow-focus-success: $shadow-focus-success;
$button-shadow-focus-warning: $shadow-focus-warning;
$button-shadow-focus: $shadow-focus;
$button-text-color-inverted: $text-color-inverted;
$button-text-color: $text-color;
$button-transition-easing: $transition-easing;
$button-transition-time: $transition-time;

.lv-button {
  $self: &;
  display: inline-flex;
  position: relative;
  font-family: fallback($button-font-family, fallback($font-family, sans-serif));
  outline: none;
  font-size: fallback($button-font-size, fallback($font-size, 16px));
  border-radius: fallback($button-border-radius, fallback($border-radius, 5px));
  padding: fallback($button-padding, fallback($padding, 5px));
  color: fallback($button-text-color-inverted, fallback($text-color-inverted, #F3F7F9));
  transition: fallback($button-transition-time, fallback($transition-time, .2s)) all fallback($button-transition-easing, fallback($transition-easing, ease-in-out));
  cursor: pointer;
  background-color: fallback($button-color-default, $color-default);
  text-align: center;
  font-weight: 500;
  box-shadow: none;
  border: none;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background-color: darken(fallback($button-color-default, $color-default), 6);
  }

  &:focus {
    box-shadow: fallback($button-shadow-focus, fallback($shadow-focus, 0px 0px 0px 4px rgba(0, 0, 0, 0.24)));
  }

  // Elements
  &__icon {
    display: inline-block;
    margin-right: 5px; // Optical Fix
    content: fallback($button-padding, fallback($padding, 5px));
    &--hidden {
      opacity: 0;
    }
  }

  &__loading {
    color: fallback($button-text-color-inverted, fallback($text-color-inverted, #F3F7F9));
    animation: rotate-cw 1s infinite linear;
    position: absolute;
    left: calc(50% - 8px);
    top: calc(50% - 8px);
  }

  &__content {
    &--hidden {
      opacity: 0;
    }
  }

  &--ghost {
    background-color: fallback($button-color-ghost, fallback($color-ghost, #FFFFFF));
    color: fallback($button-text-color, fallback($text-color, #F3F7F9));
    &:hover {
      background-color: darken(fallback($button-color-ghost, fallback($color-ghost, #FFFFFF)), 6);
    }

    &:focus {
      box-shadow: fallback($button-shadow-focus-ghost, fallback($shadow-focus-ghost, 0px 0px 0px 4px rgba(0, 0, 0, 0.04)));
    }
  }

  &--active,
  &--primary {
    background-color: fallback($button-color-primary, fallback($color-primary, #6C5DD3));
    color: fallback($button-text-color-inverted, fallback($text-color-inverted, #FFFFFF));
    &:hover {
      background-color: darken(fallback($button-color-primary, fallback($color-primary, #6C5DD3)), 6);
    }

    &:focus {
      box-shadow: fallback($button-shadow-focus-primary, fallback($shadow-focus-primary, 0px 0px 0px 4px rgba(0, 0, 0, 0.04)));
    }
  }

  // Modifiers
  &--warning {
    background-color: fallback($button-color-warning, fallback($color-warning, #ff5427));
    color: fallback($button-text-color-inverted, fallback($text-color-inverted, #FFFFFF));

    &:hover {
      background-color: darken(fallback($button-color-warning, fallback($color-warning, #ff5427)), 6);
    }

    &:focus {
      box-shadow: fallback($button-shadow-focus-warning, fallback($shadow-focus-warning, 0px 0px 0px 4px rgba(0, 0, 0, 0.04)));
    }
  }

  &--success {
    background-color: fallback($button-color-success, fallback($color-success, #00CA99));
    color: fallback($button-text-color-inverted, fallback($text-color-inverted, #FFFFFF));

    &:hover {
      background-color: darken(fallback($button-color-success, fallback($color-success, #00CA99)), 6);
    }

    &:focus {
      box-shadow: fallback($button-shadow-focus-success, fallback($shadow-focus-success, 0px 0px 0px 4px rgba(0, 0, 0, 0.04)));
    }
  }

  &--info {
    background-color: fallback($button-color-info, fallback($color-info, #0C92DD));
    color: fallback($button-text-color-inverted, fallback($text-color-inverted, #FFFFFF));

    &:hover {
      background-color: darken(fallback($button-color-info, fallback($color-info, #0C92DD)), 6);
    }

    &:focus {
      box-shadow: fallback($button-shadow-focus-info, fallback($shadow-focus-info, 0px 0px 0px 4px rgba(0, 0, 0, 0.04)));
    }
  }

  &--disabled {
    pointer-events: none;
    user-select: none;
    opacity: 0.5;
  }

  &--align-left {
    justify-content: flex-start;
  }

  &--align-right {
    justify-content: flex-end;
  }

  &--align-center {
    justify-content: center;
  }
}
</style>