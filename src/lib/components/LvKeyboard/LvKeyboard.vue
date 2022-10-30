<template>
    <kbd class="lv-keyboard">
        <span v-if="meta" v-space-after="0.25">⌘</span>
        <span v-if="ctrl" v-space-after="0.25">⌃</span>
        <span v-if="alt" v-space-after="0.25">⌥</span>
        <span v-if="shift" v-space-after="0.25">⇧</span>
        <slot />
    </kbd>
</template>

<script>
export default {
    props: {
        meta: {
            type: Boolean,
            default: false,
        },
        shift: {
            type: Boolean,
            default: false,
        },
        alt: {
            type: Boolean,
            default: false,
        },
        ctrl: {
            type: Boolean,
            default: false,
        },
    }
};
</script>

<style lang="scss">
.lv-keyboard {
    display: inline-flex;
    transition: 0.2s all;
    border: 1px solid var(--border-color-light);
    border-radius: 3px;
    background-color: transparent;
    padding: 0.25rem 0.5rem;
    font-weight: 500;
    font-size: var(--font-size-small);
    font-family: var(--font-family);
    text-shadow: 0 1px 0 #fff;
    text-align: center;
    margin: 0 0.25rem;
}
</style>
