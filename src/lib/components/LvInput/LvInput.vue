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
    <input
      class="lv-input-text__input"
      :type="type"
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
      name="spinner"
    />
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
    icon: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'email', 'password']
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/core';


// Block
.lv-input-text {
  $self: &;
  display: flex;
  position: relative;
  font-family: fallback($font-family, sans-serif);
  color: fallback($text-color, #192024);
  flex-direction: column;
  justify-content: center;
    margin-bottom: 0;
  // Elements
  &__icon {
    position: absolute;
    top: 13px;
    color: fallback($text-color, #192024);
    left: calc(fallback($padding, 5px) - 2px); // Optical Fix
  }

  &__input {
    outline: none;
    font-size: fallback($font-size, 16px);
    font-family: fallback($font-family, sans-serif);
    border-radius: fallback($border-radius, 5px);
    padding: fallback($padding, 5px);
    color: fallback($text-color, #192024);
    background-color: #fafafa;
    border: 0;
    transition: fallback($transition-time, .2s) all fallback($transition-easing, ease-in-out);

    &::placeholder {
      color: fallback($placeholder-color, #808F98);
    }
  }

  &__hint {
    font-size: fallback($font-size-label, 12px);
    color: fallback($text-color-dimmed, #192024);
    padding: 4px;
  }

  &__loading {
    position: absolute;
    top: 13px;
    color: fallback($text-color-dimmed, #192024);
    right: calc(fallback($padding, 5px) - 2px); // Optical Fix
    animation: rotate-cw 1s infinite linear;
    background-color: #fafafa;
  }

  // Modifiers

  &--error {
    color: $color-warning;

    #{$self}__input {
      background: lighten($color-warning, 40);
      color: $color-warning;

      &::placeholder {
        color: fallback($placeholder-color-warning, #fdabc4);
      }
    }
    #{$self}__icon,
    #{$self}__loading {
      color: $color-warning;
    }
  }

  &--icon {
    #{$self}__input {
      padding-left: calc(fallback($padding, 5px) + 16px + 4px);
      box-sizing: border-box;
    }
  }

  &--disabled {
    pointer-events: none;
    user-select: none;
    opacity: 1;
    #{$self}__icon {
      color: fallback($text-color-dimmed, #192024);
    }
    #{$self}__input {
      background-color: #fdfdfd;
      &::placeholder {
        color: lighten($placeholder-color, 40);
      }
    }

  }
}
</style>