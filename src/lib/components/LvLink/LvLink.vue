<template>
    <a class="lv-link" :class="classObject" role="link" :title="title" v-bind="$attrs" @click="onClick">
        <div class="lv-link__content">
            <slot />
        </div>
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
        },
        block: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: 'var(--text-color)'
        },
        title: {
            type: String,
            default: null,
        }
    },
    emits: ['click'],
    computed: {
        classObject() {
            return {
                'lv-link--highlight': !!this.highlight,
                'lv-link--zoom-on-hover': !!this.zoomOnHover,
                'lv-link--block': !!this.block,
            };
        },
    },
    methods: {
        onClick(e) {
            this.$emit('click', e);
        },
    },
};
</script>

<style lang="scss">
.lv-link {
    $self: &;
    cursor: pointer;
    color: v-bind(color);
    text-decoration: none;
    display: inline-flex;

    &--highlight {
        transition: all var(--transition-time);
        text-decoration: underline;

        &:hover {
            border-bottom-color: var(--color-primary);
        }
        &--active {
            border-bottom-color: var(--color-primary);
        }
    }

    &--block {
        width: 100%;
        height: 100%;
    }

    &__content {
        transition: 0.2s transform;
        width: 100%;
        height: 100%;
        display: inline-flex;
        align-items: center;
        gap: 5px;
    }

    &--zoom-on-hover:hover {
        #{$self}__content {
            transform: scale(1.05);
        }
    }
}
</style>
