<template>
    <div class="lv-vertical-nav-item" :class="classObject" tabindex="0" @click="onClick" @keydown.enter.space="onClick">
        <lv-icon v-if="icon" :name="icon" class="lv-vertical-nav-item__icon" />
        <div class="lv-vertical-nav-item__label">
            <slot>{{ label }}</slot>
        </div>
    </div>
</template>

<script>
import LvIcon from "../LvIcon/LvIcon.vue";

export default {
    components: { LvIcon },
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
        classObject() {
            return {
                'lv-vertical-nav-item--disabled': this.disabled || this.loading,
                'lv-vertical-nav-item--loading': this.loading,
                'lv-vertical-nav-item--active': this.active,
            };
        },
    },
    emits: ['click'],
    methods: {
        onClick(e) {
            this.$emit('click', e)
        }
    }
};
</script>

<style lang="scss">
.lv-vertical-nav-item {
    $self: &;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    cursor: pointer;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 5px 0;
    color: var(--text-color);
    font-weight: 400;
    font-size: var(--font-size);
    text-decoration: none;

    &:hover:not(#{$self}--active) {
        color: var(--color-primary);
    }

    &:last-child {
        margin-bottom: 0;
    }

    &--active {
        color: var(--color-primary);
    }
    &--disabled {
        pointer-events: none;
        opacity: 0.6;
    }
    &__icon {
        flex-shrink: 0;
        margin-right: 10px;
    }
    &__label {
        white-space: nowrap;
        display: flex;
        align-items: center;
    }
}
</style>
