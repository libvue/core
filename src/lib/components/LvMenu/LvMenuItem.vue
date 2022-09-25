<template>
    <div
        class="lv-menu-item"
        :href="href"
        :class="classObject"
        @click="onClick"
    >
        <lv-icon v-if="icon" :name="icon" class="lv-menu-item__icon" />
        <div class="lv-menu-item__label">{{ label }}</div>
    </div>
</template>

<script>
import navigationMixin from '../../mixins/navigationMixin';
import { providedLayout } from "../../utils/provideKeys";

export default {
    mixins: [navigationMixin],
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
        active: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    inject: {
        providedLayout: { from: providedLayout },
    },
    computed: {
        providedOrPropLayout() {
            if(this.providedLayout) {
                return this.providedLayout;
            }
            return this.layout;
        },
        classObject() {
            return {
                'lv-menu-item--disabled': this.disabled || this.loading,
                'lv-menu-item--loading': this.loading,
                'lv-menu-item--active': this.toEqualsCurrentRoute,
                [`lv-menu-item--layout-${this.providedOrPropLayout}`]: !!this.providedOrPropLayout
            };
        }
    }
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-menu-item {
    $self: &;
    margin-bottom: 10px;
    padding: 5px 0;
    border-radius: 5px;
    transition: all 0.1s;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: $font-size;
    color: $text-color;
    font-weight: 500;
    flex-shrink: 0;

    &:hover:not(#{$self}--active) {
        color: #000;
    }

    &:last-of-type {
        margin-bottom: 0;
    }

    &--active {
        color: $color-primary;
    }

    &__icon {
        margin-right: 10px;
        flex-shrink: 0;
    }
    &__label {
        white-space: nowrap;
    }
    &--layout-vertical {
        margin-bottom: 0;
        margin-right: 10px;
    }
}
</style>
