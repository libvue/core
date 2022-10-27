<template>
    <div class="lv-grid">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        gap: {
            type: String,
            default: 'none',
        }
    }
};
</script>

<style lang="scss">
.lv-grid {
    display: flex;
    flex-direction: column;
    gap: v-bind(gap);
}
</style>
