<template>
    <kbd class="lv-keyboard">
        <slot />
    </kbd>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../../scss/variables';
.lv-keyboard {
    display: inline-block;
    vertical-align: bottom;
    transition: 0.2s all;
    cursor: pointer;
    box-shadow: $shadow;
    border: 1px solid darken($color-default-light, 6);
    border-radius: 3px;
    background-color: transparent;
    padding: 0 0.5rem;
    font-weight: 500;
    font-size: $font-size-small;
    font-family: $font-family;
    text-shadow: 0 1px 0 #fff;
}
</style>
