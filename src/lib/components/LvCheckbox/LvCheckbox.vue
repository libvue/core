<template>
    <div
        class="lv-checkbox"
        :class="{
            'lv-checkbox--checked': model,
            'lv-checkbox--disabled': disabled || loading,
        }"
    >
        <input class="lv-checkbox__input" type="checkbox" :checked="model" v-bind="$attrs" @input="toggleCheckbox" />
        <lv-icon class="lv-checkbox__icon" name="check" v-if="model && !loading" />
        <lv-icon class="lv-checkbox__loader" name="spinner" v-if="loading" />
        <div class="lv-checkbox__label" v-if="label" @click="toggleCheckbox">{{ label }}</div>
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
    data() {
        return {
            model: this.modelValue,
        };
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
@import '../../scss/core';

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

    &__icon {
        pointer-events: none;
        position: absolute;
        top: 3px;
        left: 3px;
        color: #fff;
    }
    &__loader {
        pointer-events: none;
        position: absolute;
        top: 3px;
        left: 3px;
        color: $text-color;
        animation: rotate-cw 1s infinite linear;
    }
    &__label {
        margin-left: 10px;
        cursor: pointer;
    }
}
</style>
