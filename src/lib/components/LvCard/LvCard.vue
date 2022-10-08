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
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-card {
    box-shadow: $shadow;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    background-color: $background-color;
    padding: $padding * 1.5;

    &--inline {
        display: inline-block;
    }
}
</style>
