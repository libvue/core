<template>
    <a class="lv-link" :class="classObject" @click="onClick" role="link" v-bind="$attrs">
        <slot />
    </a>
</template>

<script>
export default {
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
