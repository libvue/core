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
        zoomOnHover: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        classObject() {
            return {
                'lv-link--highlight': !!this.highlight,
                'lv-link--zoom-on-hover': !!this.zoomOnHover,
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
    cursor: pointer;
    transition: .2s transform;
    display: inline-block;
    height: 100%;

    &--highlight {
        transition: all var(--transition-time);
        border-bottom: 1px dashed var(--text-color);
        color: var(--text-color);
        text-decoration: none;

        &:hover {
            border-bottom-color: var(--color-primary);
            color: var(--color-primary);
        }
        &--active {
            border-bottom-color: var(--color-primary);
            color: var(--color-primary);
        }
    }

    &--zoom-on-hover:hover {
        transform: scale(1.05);
    }
}
</style>
