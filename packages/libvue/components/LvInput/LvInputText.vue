<template>
  <div
    class="lv-input-text"
     :class="{
      'lv-input-text--error': error,
      'lv-input-text--icon': icon,
      'lv-input-text--readonly': readonly,
      'lv-input-text--disabled': disabled,
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
      ref="input"
      class="lv-input-text__input"
      type="text"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      v-bind="$attrs"
      v-model="modelValue"
      />
    <div class="lv-input-text__hint" v-if="hint">
      {{ hint }}
    </div>
  </div>
</template>

<script>
import LvIcon from "../LvIcon/LvIcon";

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

<style lang="scss" scoped>
.lv-input-text {
  $self: &;
  display: inline-block;
  position: relative;
  font-family: var(--input-font-family, var(--font-family, sans-serif));
  color: var(--input-text-color, var(--text-color, #192024));

  &__label {
    position: absolute;
    top: -6px;
    left: calc(var(--input-padding, var(--padding, 5px)) - 2px);
    font-size: var(--input-font-size-label, var(--font-size-label, 12px));
    color: var(--input-text-color-dimmed, var(--text-color-dimmed, #192024));
    background-color: var(--input-background-color, var(--background-color, #ffffff));
    padding: 0 4px;
    box-sizing: border-box;
  }

  &__icon {
    position: absolute;
    top: 16px;
    color: var(--input-text-color-dimmed, var(--text-color-dimmed, #192024));
    left: calc(var(--input-padding, var(--padding, 5px)) - 2px); // Optical Fix
  }

  &__input {
    outline: none;
    font-size: var(--input-font-size, var(--font-size, 16px));
    border-radius: var(--input-border-radius, var(--border-radius, 5px));
    border: 1px solid var(--input-border-color, var(--border-color, #cacaca));
    padding: var(--input-padding, var(--padding, 5px));
    box-sizing: border-box;
    color: var(--input-text-color, var(--text-color, #192024));
    transition: var(--input-transition-time, var(--transition-time, .2s)) all var(--input-transition-easing, var(--transition-easing, ease-in-out));
    &:focus {
      border: 1px solid var(--input-border-color-focus, var(--border-color-focus, #4e1cd9));
      box-shadow: var(--input-shadow-focus, var(--shadow-focus, 0px 0px 0px 4px rgba(0, 0, 0, 0.04)));
    }

    &::placeholder {
      color: var(--input-placeholder-color, var(--placeholder-color, #808F98));
    }
  }
  &__hint {
    font-size: var(--input-font-size-label, var(--font-size-label, 12px));
    color: var(--input-text-color-dimmed, var(--text-color-dimmed, #192024));
    padding: 4px;
    box-sizing: border-box;
  }
  &--error {
    color: var(--input-color-warning, var(--color-warning, #E41654));

    #{$self}__input {
      border: 1px solid var(--input-color-warning, var(--color-warning, #E41654));
      color: var(--input-color-warning, var(--color-warning, #E41654));

      &::placeholder {
        color: var(--input-placeholder-color-warning, var(--placeholder-color-warning, #fdabc4));
      }

      &:focus {
        box-shadow: var(--input-shadow-focus-warning, var(--shadow-focus-warning, 0px 0px 0px 4px rgba(228, 22, 84, 0.13)));
      }
    }
    #{$self}__label,
    #{$self}__icon,
    #{$self}__hint {
      color: var(--input-placeholder-color-warning, var(--placeholder-color-warning, #fdabc4));
    }
  }

  &--icon {
    #{$self}__input {
      padding-left: calc(var(--input-padding, var(--padding, 5px)) + 16px + 4px);
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
