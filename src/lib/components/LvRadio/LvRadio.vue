<template>
    <div class="lv-radio" role="radio" :class="classObject">
        <lv-icon v-if="loading" class="lv-radio__loading" :size="12" name="loader-2" />
        <input
            :id="identifier"
            class="lv-radio__input"
            type="radio"
            :checked="isChecked"
            :aria-checked="isChecked"
            :disabled="disabled || loading"
            :name="name"
            :value="value"
            tabindex="0"
            @input="onInput"
        />
        <label v-if="label" class="lv-radio__label" :for="identifier">{{ label }}</label>
    </div>
</template>

<script>
import useRandom from '../../composables/random';

export default {
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
    data() {
        return {
            identifier: useRandom(),
        };
    },
    computed: {
        isChecked() {
            return this.value === this.modelValue;
        },
        classObject() {
            return {
                'lv-radio--disabled': !!this.disabled || !!this.loading,
                'lv-radio--loading': !!this.loading,
            }
        }
    },
    methods: {
        onInput(e) {
            if (!this.loading && !this.disabled) {
                this.$emit('update:modelValue', e.target.value);
            }
        },
    },
};
</script>

<style lang="scss">

.lv-radio {
    display: flex;
    align-items: center;
    font-size: var(--font-size);
    line-height: var(--font-size);
    position: relative;

    &__loading {
        position: absolute;
        top: 2px;
        left: 2px;
        animation: rotate-cw 1s infinite linear;
        background-color: var(--border-color-light);
        color: var(--text-color-dimmed);
        border-radius: 100%;
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
