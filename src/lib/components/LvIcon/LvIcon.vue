<template>
    <svg class="lv-icon" viewBox="0 0 24 24" :width="size" :height="size">
        <use :href="`${spritePath}#${name}`" />
    </svg>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'exclamation-triangle',
        },
        size: {
            type: Number,
            default: 16,
        },
    },
    computed: {
        spritePath() {
            return './node_modules/lucide-static/sprite.svg';
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    fill: none;
    font-size: inherit;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}
</style>
