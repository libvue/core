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
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;
    color: $text-color;
    font-family: $font-family;

    // Elements
    &__icon {
        position: absolute;
        top: 13px;
        left: $padding - 2px;
              left: $p
        color: $text-color;
    }

    &__input {
        transition: $transition-time.2s all $transition-easing;
        margin-bottom: 0;
        outline: none;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        background-color: #fff;
        padding: $padding;
        color: $text-color;
        font-size: $font-size;
        font-family: $font-family;

        &::placeholder {
            color: $placeholder-color;
        }
    }

    &__hint {
        padding: 4px;
        color: $text-color-dimmed;
        font-size: $font-size-small;
    }

    &__loading {
        position: absolute;
        top: 13px;
        right: $padding - 2px; ed;
        ri
        animation: rotate-cw 1s infinite linear;
        background-color: #fafafa;
        color: $text-color-dimmed;
    }

    // Modifiers

    &--error {
        color: $color-danger;

        #{$self}__input {
            border-color: $color-danger;
            background: lighten($color-danger, 40);
            color: $color-danger;

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
            border-color: $color-success;
            background: lighten($color-success, 55);
            color: $color-success;

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
            box-sizing: border-box;
            padding-left: $padding + 16px + 4px;
        }
    }

    &--disabled {
        opacity: 1;
        pointer-events: none;
        user-select: none;
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
