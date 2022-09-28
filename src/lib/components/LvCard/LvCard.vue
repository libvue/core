<template>
    <div class="lv-card" :class="{ 'lv-card--inline': !!inline }">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        inline: {
            type: Boolean,
            default: false,
        },
    }
}
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-card {
    padding: $padding * 1.5;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background-color: $background-color;
    box-shadow: $shadow;

    &--inline {
        display: inline-block;
    }
}
</style>
