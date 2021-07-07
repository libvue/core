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
