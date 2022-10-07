<template>
    <hr class="lv-divider" :class="classObject" />
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
                [`lv-divider--direction-${this.direction}`]: true,
            };
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-divider {
    border: 0;
    margin: 0;
    background-color: $border-color;

    &--direction-horizontal {
        height: 1px;
        width: 100%;
    }
    &--direction-vertical {
        width: 1px;
    }
}
</style>
