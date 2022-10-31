<template>
    <div class="lv-card" :class="{ 'lv-card--inline': !!inline }">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        inline: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss">
.lv-card {
    box-shadow: var(--shadow);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--background-color);
    padding: calc(var(--padding) * 1.5);
    color: var(--text-color);

    &--inline {
        display: inline-block;
    }
}
</style>
