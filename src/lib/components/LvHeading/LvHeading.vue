<template>
    <component
        :is="as"
        class="lv-heading"
        role="heading"
        :aria-level="level"
        :class="classObject"
    >
        <slot />
    </component>
</template>

<script>
export default {
    props: {
        align: {
            type: String,
            default: 'left',
            validator: (value) => ['left', 'center', 'right'].includes(value),
        },
        level: {
            type: [Number, String],
            default: 1,
            validator: (value) => Number.parseInt(value, 10) > 0 && Number.parseInt(value, 10) <= 6,
        },
        ellipsis: {
            type: Boolean,
            default: false,
        },
        sub: {
            type: Boolean,
            default: false,
        },
        inline: {
            type: Boolean,
            default: false,
        },
        as: {
            type: String,
            default: 'div',
            validator: (val) => ['span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label'].includes(val)
        }
    },
    computed: {
        classObject() {
            return {
                [`lv-heading--level-${this.level}`]: true,
                'lv-heading--inline': this.inline,
                'lv-heading--sub': this.sub,
                'lv-heading--ellipsis': this.ellipsis,
            }
        }
    },
};
</script>

<style lang="scss">
.lv-heading {
    display: inline-flex;
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
    color: var(--text-color);
    font-weight: 600;
    font-family: var(--font-family);

    &--level-1 {
        font-size: var(--font-size-h1);
        line-height: var(--line-height-h1);
    }
    &--level-2 {
        font-size: var(--font-size-h2);
        line-height: var(--line-height-h2);
    }
    &--level-3 {
        font-size: var(--font-size-h3);
        line-height: var(--line-height-h3);
    }
    &--level-4 {
        font-size: var(--font-size-h4);
        line-height: var(--line-height-h4);
    }
    &--level-5 {
        font-size: var(--font-size-h5);
        line-height: var(--line-height-h5);
    }
    &--level-6 {
        font-size: var(--font-size-h6);
        line-height: var(--line-height-h6);
    }
    &--sub {
        color: var(--text-color-dimmed);
        font-weight: 500;
    }
    &--ellipsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
    }
    &--inline {
        width: auto;
        display: inline-block;
    }
}
</style>
