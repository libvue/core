<template>
    <div class="lv-input" :class="classObject">
        <lv-icon v-if="icon" class="lv-input__icon" :size="16" :name="icon" />
        <input
            v-bind="$attrs"
            v-model="modelValue"
            class="lv-input__input"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
        />
        <lv-icon v-if="loading" class="lv-input__loading" :size="16" name="loader-2" />
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
            type: Boolean,
            default: false,
        },
        success: {
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
                return ['text', 'email', 'password', 'tel', 'file'].includes(value);
            },
        },
    },
    computed: {
        classObject() {
            return {
                'lv-input--error': this.error,
                'lv-input--success': this.success,
                'lv-input--icon': this.icon,
                'lv-input--readonly': this.readonly,
                'lv-input--disabled': this.disabled || this.loading,
                'lv-input--loading': this.loading,
            };
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

// Block
.lv-input {
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
        color: $color-danger;

        #{$self}__input {
            background: lighten($color-danger, 40);
            color: $color-danger;
            border-color: $color-danger;

            &::placeholder {
                color: $placeholder-color-danger;
            }
        }
        #{$self}__icon,
        #{$self}__loading {
            color: $color-danger;
        }
    }

    &--success {
        color: $color-success;

        #{$self}__input {
            background: lighten($color-success, 55);
            color: $color-success;
            border-color: $color-success;

            &::placeholder {
                color: $placeholder-color-success;
            }
        }
        #{$self}__icon,
        #{$self}__loading {
            color: $color-success;
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
