<template>
    <a class="lv-vertical-nav-item" :href="href" :class="classObject" @click="onClick">
        <lv-icon v-if="icon" :name="icon" class="lv-vertical-nav-item__icon" />
        <div class="lv-vertical-nav-item__label">{{ label }}</div>
    </a>
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
        classObject() {
            return {
                'lv-vertical-nav-item--disabled': this.disabled || this.loading,
                'lv-vertical-nav-item--loading': this.loading,
                'lv-vertical-nav-item--active': this.toEqualsCurrentRoute,
            };
        },
    },
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
        color: var(--text-color);
    }

    &:last-child {
        margin-bottom: 0;
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
}
</style>
