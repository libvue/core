<template>
    <div class="lv-grid-row">
        <slot></slot>
    </div>
</template>

<script>
export default {
    provide() {
        return {
            rowGap: this.gap,
        }
    },
    props: {
        gap: {
            type: String,
            default: 'none',
        }
    }
};
</script>

<style lang="scss">
.lv-grid-row {
    display: flex;
    width: 100%;
    max-width: 100%;
    gap: v-bind(gap);
}
</style>
