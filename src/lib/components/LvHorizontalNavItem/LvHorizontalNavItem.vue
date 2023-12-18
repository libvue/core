<template>
    <template v-if="hasChildren">
        <lv-popover trigger="mouseenter" placement="bottom" interactive>
            <template #reference>
                <a ref="link" class="lv-horizontal-nav-item" :class="classObject" tabindex="0" @click="onClick" @keydown.space.enter="onClick">
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
        <a class="lv-horizontal-nav-item" :class="classObject" tabindex="0" @click="onClick" @keydown.space.enter="onClick">
            <lv-icon v-if="icon" :name="icon" class="lv-horizontal-nav-item__icon" />
            <div class="lv-horizontal-nav-item__label">{{ label }}</div>
        </a>
    </template>
</template>

<script>
import LvPopover from "../LvPopover/LvPopover.vue";
import LvIcon from "../LvIcon/LvIcon.vue";

export default {
    components: { LvIcon, LvPopover },
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
    emits: ['click'],
    computed: {
        hasChildren() {
            return !!this.$slots.default;
        },
        classObject() {
            return {
                'lv-horizontal-nav-item--disabled': this.disabled || this.loading,
                'lv-horizontal-nav-item--loading': this.loading,
                'lv-horizontal-nav-item--active': this.active,
            };
        },
    },
    methods: {
        onClick(e) {
            this.$emit('click', e)
        }
    }
};
</script>

<style lang="scss">
.lv-horizontal-nav-item {
    $self: &;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    cursor: pointer;
    color: var(--text-color);
    font-weight: 400;
    font-size: var(--font-size);
    text-decoration: none;

    &:hover:not(#{$self}--active) {
        color: var(--color-primary);
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
