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
@import '../../scss/variables';
.lv-figure {
    margin: 0;
}
.lv-blockquote {
    background-color: $blockquote-background-color;
    margin: 0;
    padding: 1rem;
    border-radius: $border-radius;
    font-style: italic;
}
.lv-caption {
    margin-top: 0.5rem;
    font-weight: 500;
}
</style>
