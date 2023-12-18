<template>
    <component :is="as" class="lv-text" :for="as === 'label' ? labelFor : null" :class="classObject">
        <slot></slot>
    </component>
</template>

<script>
export default {
    props: {
        align: {
            type: String,
            default: 'left',
            validator: (val) => ['left', 'center', 'right', 'justify'].includes(val),
        },
        as: {
            type: String,
            default: 'p',
            validator: (val) => ['p', 'span', 'div', 'label'].includes(val),
        },
        labelFor: {
            type: String,
            default: null,
        }
    },
    computed: {
        classObject() {
            return {
                [`lv-text--align-${this.align}`]: !!this.align,
            };
        },
    },
};
</script>

<style lang="scss">
.lv-text {
    margin: 0;
    color: var(--text-color);
    font-size: var(--font-size);
    line-height: var(--line-height-large);
    width: 100%;

    &--align-left {
        text-align: left;
    }

    &--align-center {
        text-align: center;
    }

    &--align-right {
        text-align: right;
    }

    &--align-justify {
        text-align: justify;
    }
}
</style>
