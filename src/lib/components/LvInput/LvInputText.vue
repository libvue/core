<template>
  <div
    class="lv-input-text"
     :class="{
      'lv-input-text--error': error,
      'lv-input-text--icon': icon,
      'lv-input-text--readonly': readonly,
      'lv-input-text--disabled': disabled || loading,
      'lv-input-text--loading': loading,
    }"
  >
    <lv-icon
      v-if="icon"
      class="lv-input-text__icon"
      :size="16"
      :name="icon"
    />
    <label
      v-if="label"
      class="lv-input-text__label">
      {{ label }}
    </label>
    <input
      class="lv-input-text__input"
      type="text"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      v-bind="$attrs"
      v-model="modelValue"
    />
    <lv-icon
      v-if="loading"
      class="lv-input-text__loading"
      :size="16"
      name="Loader"
    />
    <div class="lv-input-text__hint" v-if="hint">
      {{ hint }}
    </div>
  </div>
</template>

<script>
import LvIcon from "../LvIcon/LvIcon.vue";

export default {
  components: {
    LvIcon,
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    error: {
      type: [Boolean, String, Array],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    hint: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/libvue';

$input-background-color: darken($background-color, 10);
$input-border-color-focus: $border-color-focus;
$input-border-color: $border-color;
$input-border-radius: $border-radius;
$input-color-warning: $color-warning;
$input-font-family: $font-family;
$input-font-size-label: $font-size-label;
$input-font-size: $font-size;
$input-padding: $padding;
$input-placeholder-color-warning: $placeholder-color-warning;
$input-placeholder-color: $placeholder-color;
$input-shadow-focus-warning: $shadow-focus-warning;
$input-shadow-focus: $shadow-focus;
$input-text-color-dimmed: $text-color-dimmed;
$input-text-color: $text-color;
$input-transition-easing: $transition-easing;
$input-transition-time: $transition-time;

// Block
.lv-input-text {
  $self: &;
  display: flex;
  position: relative;
  font-family: fallback($input-font-family, fallback($font-family, sans-serif));
  color: fallback($input-text-color, fallback($text-color, #192024));
  flex-direction: column;

  // Elements

  &__label {
    left: calc(fallback($input-padding, fallback($padding, 5px)) - 2px);
    font-size: fallback($input-font-size-label, fallback($font-size-label, 12px));
    color: fallback($input-text-color-dimmed, fallback($text-color-dimmed, #192024));
    padding: 0 4px;
  }

  &__icon {
    position: absolute;
    top: 16px;
    color: fallback($input-text-color-dimmed, fallback($text-color-dimmed, #192024));
    left: calc(fallback($input-padding, fallback($padding, 5px)) - 2px); // Optical Fix
  }

  &__input {
    outline: none;
    font-size: fallback($input-font-size, fallback($font-size, 16px));
    border-radius: fallback($input-border-radius, fallback($border-radius, 5px));
    border: 1px solid fallback($input-border-color, fallback($border-color, #cacaca));
    padding: fallback($input-padding, fallback($padding, 5px));
    padding-right: calc(fallback($input-padding, fallback($padding, 5px)) + 22px);
    color: fallback($input-text-color, fallback($text-color, #192024));
    transition: fallback($input-transition-time, fallback($transition-time, .2s)) all fallback($input-transition-easing, fallback($transition-easing, ease-in-out));
    &:focus {
      border: 1px solid fallback($input-border-color-focus, fallback($border-color-focus, #4e1cd9));
      box-shadow: fallback($input-shadow-focus, fallback($shadow-focus, 0px 0px 0px 4px rgba(0, 0, 0, 0.04)));
    }

    &::placeholder {
      color: fallback($input-placeholder-color, fallback($placeholder-color, #808F98));
    }
  }

  &__hint {
    font-size: fallback($input-font-size-label, fallback($font-size-label, 12px));
    color: fallback($input-text-color-dimmed, fallback($text-color-dimmed, #192024));
    padding: 4px;
  }

  &__loading {
    position: absolute;
    top: 16px;
    color: fallback($input-text-color-dimmed, fallback($text-color-dimmed, #192024));
    right: calc(fallback($input-padding, fallback($padding, 5px)) - 2px); // Optical Fix
    animation: rotate-cw 1s infinite linear;
  }

  // Modifiers

  &--error {
    color: fallback($input-color-warning, fallback($color-warning, #E41654));

    #{$self}__input {
      border: 1px solid fallback($input-color-warning, fallback($color-warning, #E41654));
      color: fallback($input-color-warning, fallback($color-warning, #E41654));

      &::placeholder {
        color: fallback($input-placeholder-color-warning, fallback($placeholder-color-warning, #fdabc4));
      }

      &:focus {
        box-shadow: fallback($input-shadow-focus-warning, fallback($shadow-focus-warning, 0px 0px 0px 4px rgba(228, 22, 84, 0.13)));
      }
    }
    #{$self}__label,
    #{$self}__icon,
    #{$self}__hint,
    #{$self}__loading {
      color: fallback($input-placeholder-color-warning, fallback($placeholder-color-warning, #fdabc4));
    }
  }

  &--icon {
    #{$self}__input {
      padding-left: calc(fallback($input-padding, fallback($padding, 5px)) + 16px + 4px);
      box-sizing: border-box;
    }
  }

  &--disabled {
    pointer-events: none;
    user-select: none;
    opacity: 0.5;
  }
}
</style>