<template>
    <div class="lv-color-picker" :class="classObject">
        <input type="color" :disabled="disabled || loading || readonly" class="lv-color-picker__preview" :value="modelValue ? modelValue : '#ffffff'" @change="onChangeColorPicker" />
        <lv-input
            class="lv-color-picker__input"
            :model-value="modelValue"
            placeholder="Pick a color"
            :disabled="disabled"
            :loading="loading"
            :readonly="readonly || readonlyInput"
            @update:modelValue="onChangeInput"
        ></lv-input>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: null,
        },
        loading: {
            type: Boolean,
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
        readonlyInput: {
            type: Boolean,
            default: false,
        }
    },
    emits: ['update:modelValue'],
    computed: {
        classObject() {
            return {
                'lv-color-picker--disabled': this.disabled,
                'lv-color-picker--loading': this.loading,
                'lv-color-picker--readonly': this.readonly,
                'lv-color-picker--readonly-input': this.readonlyInput,
            }
        }
    },
    methods: {
        onChangeInput(e) {
            this.$emit('update:modelValue', e);
        },
        onChangeColorPicker(e) {
            this.$emit('update:modelValue', e.target.value);
        },
    }
};
</script>

<style lang="scss">
.lv-color-picker {
    display: flex;
    width: 100%;
    color: var(--text-color);
    &__preview {
        display: block;
        flex-shrink: 0;
        appearance: none;
        margin-right: 0.5rem;
        outline: 0;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        padding: 0;
        width: 3rem;
        height: inherit;
        overflow: hidden;
        &::-webkit-color-swatch-wrapper {
            padding: 0;
        }
        &::-webkit-color-swatch {
            border: 0;
        }
    }
    &__input {
        width: 100%;
    }
}
</style>
