<template>
    <div
        class="lv-switch"
        :class="classObject"
        role="switch"
    >
        <div class="lv-switch__checkbox">
            <input
                class="lv-switch__input"
                type="checkbox"
                :checked="modelValue"
                v-bind="$attrs"
                @input="toggleCheckbox"
            />
            <lv-icon v-if="loading" class="lv-switch__loader" :size="12" name="loader-2" />
        </div>
        <div v-if="label" class="lv-switch__label" @click="toggleCheckbox">{{ label }}</div>
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
                'lv-switch--checked': !!this.modelValue,
                'lv-switch--disabled': this.disabled || this.loading,
                'lv-switch--loading': this.loading,
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
@import '../../scss/variables';

.lv-switch {
    $self: &;
    display: inline-flex;
    position: relative;

    &__input {
        position: relative;
        appearance: none;
        transition: $transition-time background-color $transition-easing;
        cursor: pointer;
        margin: 0;
        border: 2px solid #cacaca;
        border-radius: 1rem;
        width: 2rem;
        height: 1rem;
        &:before {
            content: '';
            position: absolute;
            height: calc(1rem - 8px);
            width: calc(1rem - 8px);
            transition: .2s all;
            top: 2px;
            left: 2px;
            border-radius: $border-radius;
            background-color: #cacaca;
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
            border: 2px solid $color-primary;
            background-color: $color-primary;
            &:before {
                left: inherit;
                right: 2px;
                background-color: $background-color;
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
            border: 2px solid #eaeaea;
        }
        #{$self}__label {
            cursor: default;
            color: $text-color-dimmed;
        }
    }

    &--checked#{$self}--disabled {
        #{$self}__input {
            border: 2px solid lighten($color-primary, 20);
            background-color: lighten($color-primary, 20);
        }
        #{$self}__label {
            cursor: default;
            color: $text-color-dimmed;
        }
    }

    &__loader {
        position: absolute;
        top: 5px;
        left: 50%;
        margin-left: -.325rem;
        animation: rotate-cw 1s infinite linear;
        pointer-events: none;
    }

    &--checked #{$self}__loader {
        color: $text-color-inverted;
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
        font-size: $font-size;
    }
}
</style>
