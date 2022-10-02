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
import propColorMixin from "../../mixins/propColorMixin";
import navigationMixin from '../../mixins/navigationMixin';
import LvIcon from '../LvIcon/LvIcon.vue';

export default {
    components: {
        LvIcon,
    },
    mixins: [propColorMixin('default', 'solid'), navigationMixin],
    props: {
        label: {
            type: String,
            default: '',
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
                [`lv-button--color-${this.colorType}-${this.color}`]: true,
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
@import '../../scss/mixins/colorMixin';

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
    text-align: center;
    background: transparent;
    font-weight: 500;
    box-shadow: none;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 2px solid transparent;

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

    // Modifiers
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

    @include color-mixin;
}
</style>
