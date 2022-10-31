<template>
    <p class="lv-paragraph" :class="classObject">
        <slot></slot>
    </p>
</template>

<script>
export default {
    props: {
        align: {
            type: String,
            default: 'left',
            validator: (val) => ['left', 'center', 'right', 'justify'].includes(val),
        },
    },
    computed: {
        classObject() {
            return {
                [`lv-paragraph--align-${this.align}`]: !!this.align,
            };
        },
    },
};
</script>

<style lang="scss">
.lv-paragraph {
    margin: 0;
    color: var(--text-color);
    font-size: var(--font-size);
    line-height: calc(var(--font-size) * 1.2);

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
