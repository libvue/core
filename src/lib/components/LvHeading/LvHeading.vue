<template>
    <component
        :is="tagName"
        class="lv-heading"
        role="heading"
        :class="{
            [`lv-heading--${tagName}`]: tagName,
            'lv-heading--sub': sub,
        }"
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
            validator(value) {
                return ['left', 'center', 'right'].includes(value);
            },
        },
        level: {
            type: [Number, String],
            default: 1,
            validator(value) {
                const number = Number.parseInt(value, 10);
                return number > 0 && number <= 6;
            },
        },
        sub: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        tagName() {
            return `h${this.level}`;
        },
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

    &--h1 {
        font-size: var(--font-size-h1);
        line-height: var(--font-size-h1);
    }
    &--h2 {
        font-size: var(--font-size-h2);
        line-height: var(--font-size-h2);
    }
    &--h3 {
        font-size: var(--font-size-h3);
        line-height: var(--font-size-h3);
    }
    &--h4 {
        font-size: var(--font-size-h4);
        line-height: var(--font-size-h4);
    }
    &--h5 {
        font-size: var(--font-size-h5);
        line-height: var(--font-size-h5);
    }
    &--h6 {
        font-size: var(--font-size-h6);
        line-height: var(--font-size-h6);
    }
    &--sub {
        color: var(--text-color-dimmed);
    }
}
</style>
