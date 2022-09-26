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
        <lv-icon v-if="icon" class="lv-input-text__icon" :size="16" :name="icon" />
        <input
            class="lv-input-text__input"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            v-bind="$attrs"
            v-model="modelValue"
        />
        <lv-icon v-if="loading" class="lv-input-text__loading" :size="16" name="loading-2" />
    </div>
</template>

<script>
import LvIcon from '../LvIcon/LvIcon.vue';

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
        icon: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text',
            validator(value) {
                return ['text', 'email', 'password'];
            },
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

// Block
.lv-input-text {
    $self: &;
    display: flex;
    position: relative;
    font-family: $font-family;
    color: $text-color;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;

    // Elements
    &__icon {
        position: absolute;
        top: 13px;
        color: $text-color;
        left: $padding - 2px; // Optical Fix
    }

    &__input {
        outline: none;
        font-size: $font-size;
        font-family: $font-family;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        padding: $padding;
        color: $text-color;
        background-color: #fff;
        margin-bottom: 0;
        transition: $transition-time.2s all $transition-easing;

        &::placeholder {
            color: $placeholder-color;
        }
    }

    &__hint {
        font-size: $font-size-small;
        color: $text-color-dimmed;
        padding: 4px;
    }

    &__loading {
        position: absolute;
        top: 13px;
        color: $text-color-dimmed;
        right: $padding - 2px; // Optical Fix
        animation: rotate-cw 1s infinite linear;
        background-color: #fafafa;
    }

    // Modifiers

    &--error {
        color: $color-warning;

        #{$self}__input {
            background: lighten($color-warning, 40);
            color: $color-warning;

            &::placeholder {
                color: $placeholder-color-warning;
            }
        }
        #{$self}__icon,
        #{$self}__loading {
            color: $color-warning;
        }
    }

    &--icon {
        #{$self}__input {
            padding-left: $padding + 16px + 4px;
            box-sizing: border-box;
        }
    }

    &--disabled {
        pointer-events: none;
        user-select: none;
        opacity: 1;
        #{$self}__icon {
            color: $placeholder-color;
        }
        #{$self}__input {
            background-color: #fdfdfd;
            &::placeholder {
                color: lighten($placeholder-color, 40);
            }
        }
    }
}
</style>
