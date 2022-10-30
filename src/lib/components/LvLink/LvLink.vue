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

.lv-link {
    $self: &;
    transition: all var(--transition-time);
    border-bottom: 1px dashed var(--text-color);
    color: var(--text-color);
    text-decoration: none;

    &[href]:hover {
        border-bottom-color: var(--color-primary);
        color: var(--color-primary);
    }
    &--active {
        border-bottom-color: var(--color-primary);
        color: var(--color-primary);
    }
}
</style>
