<template>
    <a class="lv-link" :href="href" @click="onClick">
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
    color: $text-color;
    text-decoration: none;
    border-bottom: 1px dashed $text-color;
    &[href]:hover {
        color: $color-primary;
        border-bottom-color: $color-primary;
    }
    &--active {
        color: $color-primary;
        border-bottom-color: $color-primary;
    }
}
</style>