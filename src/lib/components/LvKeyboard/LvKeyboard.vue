<template>
    <kbd class="lv-keyboard">
        <slot />
    </kbd>
</template>

<style lang="scss">
@import '../../scss/variables';
.lv-keyboard {
    background-color: $color-default-light;
    border-radius: 3px;
    padding: 0rem 0.5rem;
    font-size: $font-size-small;
    font-weight: 500;
    font-family: $font-family;
    border-bottom: 2px solid darken($color-default-light, 6);
    text-shadow: 0 1px 0 #fff;
    box-shadow: $shadow;
    vertical-align: bottom;
    display: inline-block;
    cursor: pointer;
    transition: 0.2s all;
    &:hover {
        border-bottom: 0 solid darken($color-default-light, 6);
        box-shadow: none;
    }
}
</style>
