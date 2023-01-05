<template>
    <textarea class="lv-textarea" :value="modelValue" @input="onChange" :placeholder="placeholder"></textarea>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: null,
        },
        placeholder: {
            type: String,
            default: 'Enter your text here',
        },
    },
    emits: ['update:modelValue'],
    methods: {
        onChange(e) {
            this.$emit('update:modelValue', e.target.value);
        }
    }
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

    &::placeholder {
        color: var(--placeholder-color);
    }
}
</style>
