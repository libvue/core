<template>
    <a class="lv-link" :href="href" @click="onClick" role="link">
        <slot />
    </a>
</template>

<script>
import NavigationMixin from '../../mixins/navigationMixin';

export default {
    mixins: [NavigationMixin],
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-link {
    $self: &;
    transition: all $transition-time;
    border-bottom: 1px dashed $text-color;
    color: $text-color;
    text-decoration: none;

    &[href]:hover {
        border-bottom-color: $color-primary;
        color: $color-primary;
    }
    &--active {
        border-bottom-color: $color-primary;
        color: $color-primary;
    }
}
</style>
