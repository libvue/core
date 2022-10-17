<template>
    <component
        :is="href ? 'a' : 'button'"
        :href="href"
        tabindex="0"
        class="lv-button"
        :class="classObject"
        :disabled="disabled"
        role="button"
        @click="onClick"
        @keydown.enter.space="onClick"
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
import propColorMixin from '../../mixins/propColorMixin';
import propSizeMixin from '../../mixins/propSizeMixin';
import navigationMixin from '../../mixins/navigationMixin';
import LvIcon from '../LvIcon/LvIcon.vue';

export default {
    components: {
        LvIcon,
    },
    mixins: [propColorMixin('default', 'solid'), navigationMixin, propSizeMixin()],
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
                [`lv-button--size-${this.size}`]: true,
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
@import '../../scss/mixins/sizeMixin';

.lv-button {
    $self: &;
    display: inline-flex;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: $transition-time all $transition-easing;
    cursor: pointer;
    outline: none;
    border: 1px solid transparent;
    border-radius: $border-radius;
    background: transparent;
    color: $text-color-inverted;
    font-weight: 500;
    font-size: $font-size;
    font-family: $font-family;
    text-align: center;
    text-decoration: none;

    // Elements
    &__icon {
        display: inline-block;
        margin-right: 5px; // Optical Fix
        &--hidden {
            opacity: 0;
        }
    }

    &__loading {
        position: absolute;
        top: calc(50% - 8px);
        left: calc(50% - 8px);
        animation: rotate-cw 1s infinite linear;
        color: $text-color-inverted;
    }

    &__content {
        &--hidden {
            opacity: 0;
        }
    }

    // Modifiers
    &--disabled {
        opacity: 0.5;
        pointer-events: none;
        user-select: none;
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
    @include size-mixin;
}
</style>
