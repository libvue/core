<template>
    <textarea class="lv-textarea" :placeholder="placeholder"></textarea>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: 'Enter your text here'
        }
    }
};
</script>

<style lang="scss">
.lv-textarea {
    width: 100%;
    background-color: var(--background-color);
    color: var(--text-color);
    padding: var(--padding);
    margin: 0;
    resize: vertical;
    border-radius: var(--border-radius);
    font-family: var(--font-family);
    border: 1px solid var(--border-color);
}
</style>
