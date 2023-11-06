<template>
    <li class="lv-list-item">
        <slot></slot>
    </li>
</template>

<script>
export default {};
</script>

<style lang="scss">
.lv-list-item {
    color: var(--text-color);
    font-size: var(--font-size);
    line-height: var(--line-height-large);
}
</style>
