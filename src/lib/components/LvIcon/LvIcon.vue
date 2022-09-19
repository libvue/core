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
            return './node_modules/@iconscout/unicons/sprite/line/unicons.svg';
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/core';

.lv-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    fill: currentColor;
}
</style>
