<template>
    <div class="lv-grid-column" :class="classObject">
        <slot></slot>
    </div>
</template>

<script>
export default {
    inject: {
        rowGap: {
            default: 0,
        },
    },
    props: {
        width: {
            type: Number,
            required: true,
            validator: (v) => v > 0 && v < 13,
        },
    },
    computed: {
        childrenInRow() {
            return this.$parent;
        },
        classObject() {
            return {
                [`lv-grid-column--${this.width}`]: true,
            };
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/grid/grid';
.lv-grid-column {
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;

    //padding-right: calc(v-bind(rowGap) * .5);
    //padding-left: calc(v-bind(rowGap) * .5);

    @each $factor, $percentage in $gridFactors {
        &--#{$factor} {
            flex: 0 1 $percentage;
            max-width: $percentage;
        }
    }
}
</style>
