<template>
    <div class="lv-toggle-group">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.lv-toggle-group {
    display: flex;
    .lv-toggle {
        border-radius: 0;
        margin-right: -1px;
        &:first-child:not(&:last-child) {
            border-radius: var(--border-radius) 0 0 var(--border-radius);
        }
        &:last-child:not(&:first-child) {
            margin-right: inherit;
            border-radius: 0 var(--border-radius) var(--border-radius) 0;
        }
        &:first-child:is(&:last-child) {
            border-radius: var(--border-radius);
        }
    }
}
</style>
