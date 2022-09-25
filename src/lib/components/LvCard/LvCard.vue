<template>
    <div class="lv-card">
        <slot />
    </div>
</template>

<style lang="scss">
@import '../../scss/variables';

.lv-card {
    padding: $padding * 1.5;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background-color: $background-color;
    box-shadow: $shadow;
}
</style>
