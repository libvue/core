<template>
    <component
        :is="href ? 'a' : 'button'"
        :href="href"
        v-bind="$attrs"
        tabindex="0"
        class="lv-button"
        :class="classObject"
        :disabled="disabled"
        @click="onClick"
    >
        <lv-icon v-if="icon" class="lv-button__icon" :class="{ 'lv-button__icon--hidden': loading }" :name="icon" />
        <lv-icon v-if="loading" class="lv-button__loading" name="loader-2" />
        <span class="lv-button__content" :class="{ 'lv-button__content--hidden': loading }">
            <slot>
                {{ label }}
            </slot>
        </span>
    </component>
</template>

<script>
import navigationMixin from '../../mixins/navigationMixin';
import LvIcon from '../LvIcon/LvIcon.vue';

export default {
    components: {
        LvIcon,
    },
    mixins: [navigationMixin],
    props: {
        label: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: 'default',
            validator: (value) => ['default', 'primary', 'warning', 'info', 'success'].includes(value),
        },
        type: {
            type: String,
            default: 'default',
            validator: (value) => ['default', 'outline', 'ghost'].includes(value),
        },
        disabled: {
            type: Boolean,
            default: null,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
            default: '',
        },
        align: {
            type: String,
            default: 'center',
            validator: (value) => ['center', 'left', 'right'].includes(value),
        },
    },
    computed: {
        classObject() {
            return {
                [`lv-button--${this.color}`]: !!this.color,
                [`lv-button--${this.type}`]: !!this.type,
                [`lv-button--align-${this.align}`]: !!this.align,
                'lv-button--disabled': this.disabled || this.loading,
                'lv-button--loading': this.loading,
            };
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-button {
    $self: &;
    display: inline-flex;
    position: relative;
    font-family: $font-family;
    outline: none;
    font-size: $font-size;
    border-radius: $border-radius;
    padding: calc(0.75rem - 2px) calc(1rem - 2px);
    color: $text-color-inverted;
    transition: $transition-time all $transition-easing;
    cursor: pointer;
    background-color: $text-color;
    text-align: center;
    font-weight: 500;
    box-shadow: none;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 2px solid transparent;

    &:hover {
        background-color: $text-color;
    }

    &:focus {
        box-shadow: $shadow-focus;
    }

    // Elements
    &__icon {
        display: inline-block;
        margin-right: 5px; // Optical Fix
        &--hidden {
            opacity: 0;
        }
    }

    &__loading {
        color: $text-color-inverted;
        animation: rotate-cw 1s infinite linear;
        position: absolute;
        left: calc(50% - 8px);
        top: calc(50% - 8px);
    }

    &__content {
        &--hidden {
            opacity: 0;
        }
    }

    &--ghost {
        background-color: $color-ghost;
        color: $text-color;
        border-color: transparent !important;

        &:hover {
            background-color: darken($color-ghost, 6);
        }
        &:focus {
            box-shadow: $shadow-focus-ghost;
        }
    }

    &--outline {
        background-color: $color-ghost;
        color: $text-color;
        border: 2px solid $text-color;
        &:hover {
            background-color: darken($color-ghost, 6);
        }

        &:focus {
            box-shadow: $shadow-focus-ghost;
        }
    }

    &--active,
    &--primary {
        background-color: $color-primary;
        border-color: $color-primary;
        color: $text-color-inverted;
        &:hover {
            background-color: darken($color-primary, 6);
        }

        &:focus {
            box-shadow: $shadow-focus-primary;
        }
    }

    // Modifiers
    &--warning {
        background-color: $color-warning;
        border-color: $color-warning;
        color: $text-color-inverted;

        &:hover {
            background-color: darken($color-warning, 6);
        }

        &:focus {
            box-shadow: $shadow-focus-warning;
        }
    }

    &--danger {
        background-color: $color-danger;
        border-color: $color-danger;
        color: $text-color-inverted;

        &:hover {
            background-color: darken($color-danger, 6);
        }

        &:focus {
            box-shadow: $shadow-focus-danger;
        }
    }

    &--success {
        background-color: $color-success;
        border-color: $color-success;
        color: $text-color-inverted;

        &:hover {
            background-color: darken($color-success, 6);
        }

        &:focus {
            box-shadow: $shadow-focus-success;
        }
    }

    &--info {
        background-color: $color-info;
        border-color: $color-info;
        color: $text-color-inverted;

        &:hover {
            background-color: darken($color-info, 6);
        }

        &:focus {
            box-shadow: $shadow-focus-info;
        }
    }

    &--ghost#{$self}--primary,
    &--outline#{$self}--primary {
        background-color: $color-ghost;
        color: $color-primary;
        &:hover {
            background-color: lighten($color-primary, 38) !important;
        }
    }

    &--ghost#{$self}--warning,
    &--outline#{$self}--warning {
        background-color: $color-ghost;
        color: $color-warning;
        &:hover {
            background-color: lighten($color-warning, 38) !important;
        }
    }

    &--ghost#{$self}--danger,
    &--outline#{$self}--danger {
        background-color: $color-ghost;
        color: $color-danger;
        &:hover {
            background-color: lighten($color-danger, 38) !important;
        }
    }
    &--ghost#{$self}--success,
    &--outline#{$self}--success {
        background-color: $color-ghost;
        color: $color-success;
        &:hover {
            background-color: lighten($color-success, 38) !important;
        }
    }

    &--disabled {
        pointer-events: none;
        user-select: none;
        opacity: 0.5;
    }

    &--align-left {
        justify-content: flex-start;
    }

    &--align-right {
        justify-content: flex-end;
    }

    &--align-center {
        justify-content: center;
    }
}
</style>
