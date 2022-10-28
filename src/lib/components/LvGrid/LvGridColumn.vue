<template>
    <div class="lv-grid-column" :class="classObject">
        <slot></slot>
    </div>
</template>

<script>
export default {
    inject: {
        rowGap: {
            default: 0
        },
    },
    props: {
        level: {
            type: Number,
            default: null,
            validator: (v) => v > 0 && v < 13
        }
    },
    computed: {
        childrenInRow() {
            return this.$parent;
        },
        classObject() {
            return {
                [`lv-grid-column--${this.level}`]: true,
            }
        }
    }
};
</script>

<style lang="scss">
@import '../../scss/variables';
.lv-grid-column {

    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    padding-right: calc(v-bind(rowGap) * .5);
    padding-left: calc(v-bind(rowGap) * .5);

    @each $factor, $percentage in $gridFactors {
        &--#{$factor} {
            flex: 0 0 $percentage;
            max-width: $percentage;
        }
    }
}
</style>
