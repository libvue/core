<template>
    <figure class="lv-figure">
        <blockquote class="lv-blockquote">"<slot />"</blockquote>
        <figcaption v-if="caption" class="lv-caption">⎯ {{ caption }}</figcaption>
    </figure>
</template>

<script>
export default {
    props: {
        caption: {
            type: String,
            default: null,
        },
    },
};
</script>

<style lang="scss">
.lv-figure {
    margin: 0;
}
.lv-blockquote {
    margin: 0;
    border-radius: var(--border-radius);
    background-color: var(--blockquote-background-color);
    padding: 1rem;
    font-style: italic;
}
.lv-caption {
    margin-top: 0.5rem;
    font-weight: 500;
}
</style>
