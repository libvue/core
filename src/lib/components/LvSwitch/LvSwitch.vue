<template>
    <div class="lv-switch" :class="classObject" role="switch">
        <div class="lv-switch__checkbox">
            <input
                class="lv-switch__input"
                type="checkbox"
                :checked="modelValue"
                v-bind="$attrs"
                @input="toggleCheckbox"
            />
            <lv-spinner v-if="loading" class="lv-switch__loader" :size="12" />
        </div>
        <div v-if="label" class="lv-switch__label" @click="toggleCheckbox">{{ label }}</div>
    </div>
</template>

<script>
import LvSpinner from "../LvSpinner/LvSpinner.vue";

export default {
    components: { LvSpinner },
    inheritAttrs: false,
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        error: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    computed: {
        classObject() {
            return {
                'lv-switch--checked': !!this.modelValue,
                'lv-switch--disabled': this.disabled || this.loading,
                'lv-switch--loading': this.loading,
            };
        },
    },
    methods: {
        toggleCheckbox() {
            if (!this.loading && !this.disabled) {
                this.$emit('update:modelValue', !this.modelValue);
            }
        },
    },
};
</script>

<style lang="scss">
.lv-switch {
    $self: &;
    display: inline-flex;
    position: relative;
    align-items: center;

    &__input {
        position: relative;
        appearance: none;
        transition: var(--transition-time) background-color var(--transition-easing);
        cursor: pointer;
        margin: 0;
        border: 2px solid var(--border-color);
        border-radius: 1rem;
        width: 2rem;
        height: 1.2rem;
        &:before {
            position: absolute;
            top: 2px;
            left: 2px;
            transition: var(--transition-time) left var(--transition-easing);
            border-radius: var(--border-radius);
            background-color: var(--border-color);
            width: calc(1rem - 5px);
            height: calc(1rem - 5px);
            content: '';
        }
    }
    &__checkbox {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
    }
    &--checked {
        #{$self}__input {
            border: 2px solid var(--color-primary);
            background-color: var(--color-primary);
            &:before {
                right: 2px;
                left: inherit;
                background-color: var(--background-color);
            }
        }
    }

    &--loading {
        #{$self}__input:before {
            display: none;
        }
    }

    &--disabled {
        #{$self}__input {
            cursor: default;
            border: 2px solid var(--border-color-light);
        }
        #{$self}__label {
            cursor: default;
            color: var(--text-color-dimmed);
        }
    }

    &--checked#{$self}--disabled {
        #{$self}__input {
            opacity: 0.45;
            border: 2px solid var(--color-primary);
            background-color: var(--color-primary);
        }
        #{$self}__label {
            cursor: default;
            color: var(--text-color-dimmed);
        }
    }

    &__loader {
        position: absolute;
        top: 4px;
        left: 50%;
        margin-left: -0.325rem;
        width: 11px;
        height: 11px;
        pointer-events: none;
        color: var(--text-color-dimmed);
    }

    &--checked #{$self}__loader {
        color: var(--background-color);
    }

    &__icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        color: #fff;
    }

    &__label {
        cursor: pointer;
        margin-left: 5px;
        color: var(--text-color);
        font-size: var(--font-size);
        line-height: var(--font-size);
    }
}
</style>
