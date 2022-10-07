<template>
    <div
        class="lv-checkbox"
        :class="{
            'lv-checkbox--checked': modelValue,
            'lv-checkbox--disabled': disabled || loading,
        }"
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
            <lv-icon v-if="loading" class="lv-checkbox__loader" name="loader" />
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
    methods: {
        toggleCheckbox() {
            if (!this.loading && !this.disabled) {
                this.$emit('update:modelValue', !this.model);
                this.model = !this.model;
            }
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-checkbox {
    $self: &;
    position: relative;
    display: inline-flex;

    &__input {
        appearance: none;
        border: 2px solid #cacaca;
        cursor: pointer;
        width: 22px;
        height: 22px;
        margin: 0;
        border-radius: 3px;
        transition: $transition-time all $transition-easing;
        &:hover {
            border: 2px solid $color-primary;
        }
    }
    &__checkbox {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    &--checked {
        #{$self}__input {
            background-color: $color-primary;
            border: 2px solid $color-primary;
        }
    }

    &--disabled {
        #{$self}__input {
            border: 2px solid #eaeaea;
            cursor: default;
        }
        #{$self}__label {
            color: $text-color-dimmed;
            cursor: default;
        }
    }

    &--checked#{$self}--disabled {
        #{$self}__input {
            background-color: lighten($color-primary, 20);
            border: 2px solid lighten($color-primary, 20);
        }
        #{$self}__label {
            color: $text-color-dimmed;
            cursor: default;
        }
    }

    &__loader {
        pointer-events: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -33%;
        margin-top: -33%;
        font-size: 12px;
        animation: rotate-cw 1s infinite linear;
    }

    &--checked #{$self}__loader {
        color: $text-color-inverted;
    }

    &__icon {
        pointer-events: none;
        position: absolute;
        color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &__label {
        margin-left: 10px;
        cursor: pointer;
        font-size: $font-size;
    }
}
</style>
