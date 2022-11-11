<template>
    <hr class="lv-separator" :class="classObject" role="separator" />
</template>

<script>
export default {
    props: {
        direction: {
            type: String,
            default: 'horizontal',
            validator: (val) => ['horizontal', 'vertical'].includes(val),
        },
    },
    computed: {
        classObject() {
            return {
                [`lv-separator--direction-${this.direction}`]: true,
            };
        },
    },
};
</script>

<style lang="scss">
.lv-separator {
    margin: 0;
    border: 0;
    background-color: var(--border-color);

    &--direction-horizontal {
        width: 100%;
        height: 1px;
    }
    &--direction-vertical {
        width: 1px;
    }
}
</style>
