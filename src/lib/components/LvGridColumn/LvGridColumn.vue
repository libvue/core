<template>
    <div class="lv-grid-column" :class="classObject">
        <slot></slot>
    </div>
</template>

<script>
import BreakpointMixin from '../../mixins/breakpointMixin.js';

export default {
    mixins: [BreakpointMixin],
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
        xs: {
            type: Number,
            default: null,
            validator: (v) => v > 0 && v < 13,
        },
        sm: {
            type: Number,
            default: null,
            validator: (v) => v > 0 && v < 13,
        },
        md: {
            type: Number,
            default: null,
            validator: (v) => v > 0 && v < 13,
        },
        lg: {
            type: Number,
            default: null,
            validator: (v) => v > 0 && v < 13,
        },
        xl: {
            type: Number,
            default: null,
            validator: (v) => v > 0 && v < 13,
        },
        xxl: {
            type: Number,
            default: null,
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
                [`lv-grid-column--xs-${this.xs}`]: this.xs && this.breakpoints.smallerOrEqual.xs,
                [`lv-grid-column--sm-${this.sm}`]: this.sm && this.breakpoints.smallerOrEqual.sm,
                [`lv-grid-column--md-${this.md}`]: this.md && this.breakpoints.smallerOrEqual.md,
                [`lv-grid-column--lg-${this.lg}`]: this.lg && this.breakpoints.smallerOrEqual.lg,
                [`lv-grid-column--xl-${this.xl}`]: this.xl && this.breakpoints.smallerOrEqual.xl,
            };
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/grid/grid';
.lv-grid-column {
    $col: &;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;

    padding-right: calc(v-bind(rowGap) * .5);
    padding-left: calc(v-bind(rowGap) * .5);
    padding-top: calc(v-bind(rowGap) * .5);
    padding-bottom: calc(v-bind(rowGap) * .5);

    @each $factor, $percentage in $gridFactors {
        &--#{$factor} {
            flex: 0 0 $percentage;
            max-width: $percentage;
        }
    }

    @each $breakpoint in $gridBreakpoints {
        @each $factor, $percentage in $gridFactors {
            &--#{$breakpoint}-#{$factor} {
                flex: 0 0 $percentage;
                max-width: $percentage;
            }
        }

    }
}
</style>
