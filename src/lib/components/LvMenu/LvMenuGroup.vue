<template>
    <div class="lv-menu-group" :class="classObject" @mouseenter="onHoverLabel" @mouseleave="onBlurLabel">
        <h1 class="lv-menu-group__label">
            <lv-icon v-if="icon" class="lv-menu-group__icon" :name="icon" /> {{ label }}
        </h1>
        <transition name="fade">
            <div v-show="showContent" class="lv-menu-group__content">
                <slot />
            </div>
        </transition>
    </div>
</template>

<script>
import { providedLayout } from '../../utils/provideKeys';

export default {
    inject: {
        providedLayout: { from: providedLayout },
    },
    props: {
        label: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
        layout: {
            type: String,
            default: 'horizontal',
            validator(val) {
                return ['horizontal', 'vertical'].includes(val);
            },
        },
    },
    data() {
        return {
            showContent: this.providedOrPropLayout !== 'vertical',
        };
    },
    computed: {
        providedOrPropLayout() {
            if (this.providedLayout) {
                return this.providedLayout;
            }
            return this.layout;
        },
        classObject() {
            return {
                [`lv-menu-group--layout-${this.providedOrPropLayout}`]: !!this.providedOrPropLayout,
            };
        },
    },
    watch: {
        providedOrPropLayout: {
            handler(val) {
                this.showContent = val !== 'vertical';
            },
            immediate: true,
        },
    },
    methods: {
        onHoverLabel() {
            if (this.providedOrPropLayout === 'vertical') {
                this.showContent = true;
            }
        },
        onBlurLabel() {
            if (this.providedOrPropLayout === 'vertical') {
                this.showContent = false;
            }
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';
@import '../../scss/transitions/fade';

.lv-menu-group {
    $self: &;
    display: flex;
    position: relative;
    flex-grow: 1;
    flex-direction: column;
    cursor: pointer;
    margin-bottom: 15px;
    width: 100%;
    font-size: $font-size;
    font-family: $font-family;

    &--layout-vertical {
        display: flex;
        flex-grow: 0;
        justify-content: center;
        margin-right: 20px;
        margin-bottom: 0;
        width: auto;
        height: 100%;
        #{$self}__label {
            margin-bottom: 0;
            padding: 0;
        }
        #{$self}__content {
            position: absolute;
            top: 30px;
            transform: translateX(calc(-50% + 30px));
            z-index: 3;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            border-radius: $border-radius;
            background-color: #fff;
            padding: 15px;
            overflow-y: auto;
        }
    }

    &:last-of-type {
        margin-bottom: 0;
    }

    &__label {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 0;
        padding: 5px 0;
        color: $text-color;
        font-size: $font-size-small;
        line-height: 0.75;
    }

    &__icon {
        margin-right: 5px;
    }
}
</style>
