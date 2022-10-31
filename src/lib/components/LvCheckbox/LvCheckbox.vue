<template>
    <div
        class="lv-checkbox"
        :class="classObject"
        aria-label="checkbox"
    >
        <div class="lv-checkbox__checkbox">
            <input
                class="lv-checkbox__input"
                type="checkbox"
                :checked="modelValue"
                v-bind="$attrs"
                @input="toggleCheckbox"
            />
            <lv-icon v-if="modelValue && !loading" class="lv-checkbox__icon" name="check" />
            <lv-icon v-if="loading" class="lv-checkbox__loader" :size="13" name="loader-2" />
        </div>
        <div v-if="label" class="lv-checkbox__label" @click="toggleCheckbox">{{ label }}</div>
    </div>
</template>

<script>
export default {
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
                'lv-checkbox--checked': !!this.modelValue,
                'lv-checkbox--disabled': this.disabled || this.loading,
                'lv-checkbox--loading': this.loading,
            }
        }
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

.lv-checkbox {
    $self: &;
    display: inline-flex;
    position: relative;

    &__input {
        appearance: none;
        transition: var(--transition-time) background-color var(--transition-easing);
        cursor: pointer;
        margin: 0;
        border: 2px solid var(--border-color);
        border-radius: 3px;
        width: 1.2rem;
        height: 1.2rem;

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
            border: 2px solid var(--color-primary);
            background-color: var(--color-primary);
            opacity: 0.45;
        }
        #{$self}__label {
            cursor: default;
            color: var(--text-color-dimmed);
        }
    }

    &__loader {
        position: absolute;
        top: 5px;
        left: 4px;
        animation: rotate-cw 1s infinite linear;
        pointer-events: none;
        width: 11px;
        height: 11px;
        color: var(--color-default);
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
        color: var(--background-color);
    }

    &__label {
        cursor: pointer;
        margin-left: 5px;
        font-size: var(--font-size);
    }
}
</style>
