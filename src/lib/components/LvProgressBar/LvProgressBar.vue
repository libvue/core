<template>
    <progress class="lv-progress-bar" :value="value" :max="max"></progress>
</template>

<script>
export default {
    props: {
        max: {
            type: Number,
            default: 100,
        },
        value: {
            type: Number,
            default: 10,
        },
    }
};
</script>

<style lang="scss">
.lv-progress-bar {
    width: 100%;
    height: 10px;
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--border-color);
    border-radius: var(--border-radius);
    &::-webkit-progress-bar {
        background-color: var(--border-color);
        border-radius: var(--border-radius);
    }
    &::-webkit-progress-value {
        background-color: var(--color-primary);
        border-radius: var(--border-radius);
    }
}
</style>
