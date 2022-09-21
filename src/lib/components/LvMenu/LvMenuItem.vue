<template>
    <div
        class="lv-menu-item"
        :href="href"
        :class="{
            'lv-menu-item--disabled': disabled || loading,
            'lv-menu-item--loading': loading,
            'lv-menu-item--active': toEqualsCurrentRoute,
        }"
        @click="onClick"
    >
        <lv-icon v-if="icon" :name="icon" class="lv-menu-item__icon" /> {{ label }}
    </div>
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
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-menu-item {
    $self: &;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    transition: all 0.1s;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: $font-size;

    &:hover:not(#{$self}--active) {
        background-color: lighten($text-color, 87);
    }

    &:last-of-type {
        margin-bottom: 0;
    }

    &--active {
        background-color: lighten($color-primary, 37);
        color: $color-primary;
    }

    &__icon {
        margin-right: 10px;
    }
}
</style>
