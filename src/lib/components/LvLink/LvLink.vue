<template>
    <a class="lv-link" :class="classObject" :href="href" @click="onClick" role="link">
        <slot />
    </a>
</template>

<script>
import NavigationMixin from '../../mixins/navigationMixin';

export default {
    mixins: [NavigationMixin],
    props: {
        highlight: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classObject() {
            return {
                'lv-link--highlight': !!this.highlight,
            }
        }
    }
};
</script>

<style lang="scss">
.lv-link {
    $self: &;
    color: var(--text-color);
    text-decoration: none;

    &--highlight {
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
}
</style>
