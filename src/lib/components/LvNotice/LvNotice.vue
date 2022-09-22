<template>
    <div
        class="lv-notice"
        :class="{
            'lv-notice--warning': type === 'warning',
            'lv-notice--success': type === 'success',
            'lv-notice--primary': type === 'primary',
            'lv-notice--ghost': type === 'ghost',
            'lv-notice--info': type === 'info',
        }"
    >
        <lv-icon class="lv-notice__icon" :name="icon" v-if="icon" />
        <div class="lv-notice__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import LvIcon from '../LvIcon/LvIcon.vue';

export default {
    components: {
        LvIcon,
    },
    props: {
        icon: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'default',
            validator: (value) => ['default', 'primary', 'warning', 'info', 'success', 'ghost'].includes(value),
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-notice {
    padding: 10px 13px;
    background-color: lighten($text-color, 92);
    width: 100%;
    border-radius: $border-radius;
    display: flex;
    align-items: center;
    font-size: $font-size;
    box-sizing: border-box;

    &__icon {
        margin-right: 10px;
        flex-shrink: 0;
    }

    &--ghost {
        background-color: $color-ghost;
        color: $text-color;
    }

    &--active,
    &--primary {
        background-color: $color-primary;
        color: $text-color-inverted;
    }

    // Modifiers
    &--warning {
        background-color: $color-warning;
        color: $text-color-inverted;
    }

    &--success {
        background-color: $color-success;
        color: $text-color-inverted;
    }

    &--info {
        background-color: $color-info;
        color: $text-color-inverted;
    }
}
</style>
