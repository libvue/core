<template>
    <div class="lv-sub-header">
        <slot />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.lv-sub-header {
    display: flex;
    align-items: center;
    backdrop-filter: blur(2px);
    box-sizing: border-box;
    padding: .5rem 1.5rem;

}
</style>
