<template>
    <template v-if="hasChildren">
        <lv-popover trigger="hover" placement="bottom" :show-arrow="false">
            <template #trigger>
                <a class="lv-horizontal-nav-item" :href="href" :class="classObject" @click="onClick">
                    <lv-icon v-if="icon" :name="icon" class="lv-horizontal-nav-item__icon" />
                    <div class="lv-horizontal-nav-item__label">{{ label }}</div>
                    <lv-icon class="lv-horizontal-nav-item__arrow" name="chevron-down" />
                </a>
            </template>
            <template #content>
                <slot></slot>
            </template>
        </lv-popover>
    </template>
    <template v-else>
        <a class="lv-horizontal-nav-item" :href="href" :class="classObject" @click="onClick">
            <lv-icon v-if="icon" :name="icon" class="lv-horizontal-nav-item__icon" />
            <div class="lv-horizontal-nav-item__label">{{ label }}</div>
        </a>
    </template>
</template>

<script>
import navigationMixin from '../../mixins/navigationMixin';

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
    computed: {
        hasChildren() {
            return !!this.$slots.default;
        },
        classObject() {
            return {
                'lv-horizontal-nav-item--disabled': this.disabled || this.loading,
                'lv-horizontal-nav-item--loading': this.loading,
                'lv-horizontal-nav-item--active': this.toEqualsCurrentRoute,
            };
        },
    },
};
</script>

<style lang="scss">

.lv-horizontal-nav-item {
    $self: &;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    transition: all 0.1s;
    cursor: pointer;
    border-radius: 5px;
    color: var(--text-color);
    font-weight: 400;
    font-size: var(--font-size);
    text-decoration: none;

    &:hover:not(#{$self}--active) {
        color: #000;
    }

    &--active {
        color: var(--color-primary);
    }

    &__icon {
        flex-shrink: 0;
        margin-right: 10px;
    }
    &__label {
        white-space: nowrap;
    }
    &__arrow {
        margin-left: 3px;
    }
}
</style>
