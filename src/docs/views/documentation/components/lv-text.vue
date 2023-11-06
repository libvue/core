<template>
    <lv-heading v-space-after="0.5" :level="3">Text</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">
        Used for creating blocks of texts, labels and paragraphs
    </lv-heading>

    <lv-card v-space-after="1">
        <lv-text> Lorem ipsum dolor sit amet, consectetur adipiscing elit </lv-text>
        <lv-text align="center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit </lv-text>
        <lv-text align="right"> Lorem ipsum dolor sit amet, consectetur adipiscing elit </lv-text>
    </lv-card>
    <code-preview v-space-after="1" lang="html" :code="codeParagraph" />
    <component-details component="LvText"></component-details>
</template>

<script>
const codeParagraph = `
<lv-text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-text>
<lv-text align="center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-text>
<lv-text align="right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-text>
`.trim();
export default {
    data() {
        return {
            codeParagraph,
        };
    },
};
</script>
