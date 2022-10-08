<template>
    <kbd class="lv-keyboard">
        <slot />
    </kbd>
</template>

<style lang="scss">
@import '../../scss/variables';
.lv-keyboard {
    display: inline-block;
    vertical-align: bottom;
    transition: 0.2s all;
    cursor: pointer;
    box-shadow: $shadow;
    border-bottom: 2px solid darken($color-default-light, 6);
    border-radius: 3px;
    background-color: $color-default-light;
    padding: 0rem 0.5rem;
    font-weight: 500;
    font-size: $font-size-small;
    font-family: $font-family;
    text-shadow: 0 1px 0 #fff;
    &:hover {
        box-shadow: none;
        border-bottom: 0 solid darken($color-default-light, 6);
    }
}
</style>
