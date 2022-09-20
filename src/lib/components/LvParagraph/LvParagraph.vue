<template>
    <p class="lv-paragraph">
        <slot></slot>
    </p>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../../scss/variables';
.lv-paragraph {
    margin: 0;
    font-size: $font-size;
}
</style>
