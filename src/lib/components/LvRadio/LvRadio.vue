<template>
    <div class="lv-radio" role="radio" :class="classObject" :aria-label="label">
        <lv-spinner v-if="loading" class="lv-radio__loading" :size="12"  />
        <input
            :id="labelFor"
            class="lv-radio__input"
            type="radio"
            :checked="isChecked"
            :aria-checked="isChecked"
            :disabled="disabled || loading"
            :name="name"
            :value="value"
            tabindex="0"
            @click="onClick"
        />
        <label v-if="label" class="lv-radio__label" :for="labelFor">{{ label }}</label>
    </div>
</template>

<script>
import LvSpinner from "../LvSpinner/LvSpinner.vue";

export default {
    components: { LvSpinner },
    props: {
        modelValue: {
            type: String,
            default: null,
        },
        value: {
            type: String,
            default: null,
        },
        name: {
            type: String,
            default: null,
        },
        label: {
            type: String,
            default: null,
        },
        labelFor: {
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
    },
    emits: ['update:modelValue'],
    computed: {
        isChecked() {
            return this.value === this.modelValue;
        },
        classObject() {
            return {
                'lv-radio--disabled': !!this.disabled || !!this.loading,
                'lv-radio--loading': !!this.loading,
            };
        },
    },
    methods: {
        onClick() {
            if(!this.loading && !this.disabled) {
                this.$emit('update:modelValue', this.value);
            }
        },
    },
};
</script>

<style lang="scss">
.lv-radio {
    display: flex;
    position: relative;
    align-items: center;
    font-size: var(--font-size);
    line-height: var(--line-height);

    &__loading {
        position: absolute;
        top: 2px;
        left: 2px;
        border-radius: 100%;
        background-color: var(--border-color-light);
        color: var(--text-color-dimmed);
    }

    &__input {
        position: relative;
        appearance: none;
        margin: 0 0.375rem 0 0;
        border: 1px solid var(--border-color);
        border-radius: 100%;
        width: 1rem;
        height: 1rem;
        &:checked {
            &:after {
                position: absolute;
                top: 2px;
                left: 2px;
                border-radius: 100%;
                background-color: var(--color-primary);
                width: calc(100% - 4px);
                height: calc(100% - 4px);
                content: '';
            }
        }
    }

    &--disabled {
        color: var(--text-color-dimmed);
    }
}
</style>
