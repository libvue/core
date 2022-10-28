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
            type: [String, Number],
            default: 0,
        }
    },
};
</script>

<style lang="scss" scoped>
.lv-grid-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: calc(v-bind(gap) * -.5);
    margin-left: calc(v-bind(gap) * -.5);

}
</style>
