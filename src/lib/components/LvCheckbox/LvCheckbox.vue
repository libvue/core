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
    display: inline-flex;
    position: relative;

    &__input {
        appearance: none;
        transition: $transition-time all $transition-easing;
        cursor: pointer;
        margin: 0;
        border: 2px solid #cacaca;
        border-radius: 3px;
        width: 22px;
        height: 22px;
        &:hover {
            border: 2px solid $color-primary;
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
        top: 50%;
        left: 50%;
        animation: rotate-cw 1s infinite linear;
        margin-top: -33%;
        margin-left: -33%;
        pointer-events: none;
        font-size: 12px;
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
        margin-left: 10px;
        font-size: $font-size;
    }
}
</style>
