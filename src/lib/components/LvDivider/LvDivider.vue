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
    margin: 0;
    border: 0;
    background-color: $border-color;

    &--direction-horizontal {
        width: 100%;
        height: 1px;
    }
    &--direction-vertical {
        width: 1px;
    }
}
</style>
