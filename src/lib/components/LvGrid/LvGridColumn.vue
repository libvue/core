<template>
    <div class="lv-grid-column" :class="classObject">
        <slot></slot>{{ childrenInRow }}
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

    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;

    @each $factor, $percentage in $gridFactors {
        &--#{$factor} {
            flex: 0 0 $percentage;
            max-width: $percentage;
        }
    }
}
</style>
