<template>
    <textarea class="lv-textarea" :placeholder="placeholder"></textarea>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: 'Enter your text here',
        },
    },
};
</script>

<style lang="scss">
.lv-textarea {
    margin: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--background-color);
    padding: var(--padding);
    width: 100%;
    resize: vertical;
    color: var(--text-color);
    font-family: var(--font-family);
}
</style>
