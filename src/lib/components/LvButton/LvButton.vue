<template>
    <button
        type="button"
        tabindex="0"
        class="lv-button"
        :class="classObject"
        :disabled="disabled"
        :aria-disabled="disabled"
        :aria-label="ariaLabel"
        :aria-labelledby="arialLabelledBy"
        @click="onClick"
        @keydown.enter.space="onKeydown"
    >
        <lv-icon v-if="icon" class="lv-button__icon" :class="{ 'lv-button__icon--hidden': loading }" :name="icon" />
        <lv-spinner v-if="loading" class="lv-button__loading" :size="12"/>
        <span class="lv-button__content" :class="{ 'lv-button__content--hidden': loading }">
            <slot>
                {{ label }}
            </slot>
        </span>
    </button>
</template>

<script>
import propColorMixin from '../../mixins/propColorMixin';
import propSizeMixin from '../../mixins/propSizeMixin';
import LvIcon from '../LvIcon/LvIcon.vue';
import LvSpinner from '../LvSpinner/LvSpinner.vue';

export default {
    components: {
        LvIcon,
        LvSpinner,
    },
    mixins: [propColorMixin('solid-default'), propSizeMixin()],
    props: {
        label: {
            type: String,
            default: '',
        },
        ariaLabel: {
            type: String,
            default: null,
        },
        arialLabelledBy: {
            type: String,
            default: null,
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
    emits: ['click'],
    computed: {
        classObject() {
            return {
                [`lv-button--color-${this.color}`]: !!this.color,
                [`lv-button--size-${this.size}`]: true,
                [`lv-button--align-${this.align}`]: !!this.align,
                'lv-button--disabled': this.disabled || this.loading,
                'lv-button--loading': this.loading,
                'lv-button--has-label': this.label || !!this.$slots.default,
            };
        },
    },
    methods: {
        onClick(e) {
            this.$emit('click', e);
        },
        onKeydown(e) {
            e.preventDefault();
            this.$emit('click', e);
        }
    }
};
</script>

<style lang="scss">
@import '../../scss/mixins/colorMixin';
@import '../../scss/mixins/sizeMixin';

.lv-button {
    $self: &;
    display: inline-flex;
    position: relative;
    justify-content: center;
    align-items: center;
    // transition: var(--transition-time) all var(--transition-easing);
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    background: transparent;
    color: var(--text-color-inverted);
    font-weight: 500;
    font-size: var(--font-size);
    font-family: var(--font-family);
    text-align: center;
    text-decoration: none;

    // Elements
    &__icon {
        display: inline-block;
        &--hidden {
            opacity: 0;
        }
    }

    &__loading {
        position: absolute;
        top: calc(50% - 7px);
        left: calc(50% - 6px);
        color: inherit;
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

    &--has-label {
        #{$self}__icon {
            margin-right: 5px; // Optical Fix
        }
    }

    @include color-mixin(true);
    @include size-mixin;
}
</style>
