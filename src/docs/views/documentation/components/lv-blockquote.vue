<template>
    <lv-heading v-space-after="0.5" :level="3">Blockquote</lv-heading>
    <lv-heading v-space-after="1" :level="6" sub>The enclosed text is an extended quotation</lv-heading>
    <lv-card v-space-after="1">
        <lv-blockquote caption="P. Rabbit">This is a quote from someone I forgot the name of.</lv-blockquote>
    </lv-card>

    <code-preview v-space-after="1" lang="html" :code="codeBlockquote" />
    <component-details component="LvBlockquote"></component-details>
</template>

<script>
const codeBlockquote = `
<lv-text v-space-after="1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-text>
<lv-blockquote v-space-after="1" caption="P. Rabbit">
    This is a quote from someone I forgot the name of.
</lv-blockquote>
<lv-text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-text>
`.trim();

export default {
    data() {
        return {
            codeBlockquote,
        };
    },
};
</script>
