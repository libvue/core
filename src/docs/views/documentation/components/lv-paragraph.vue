<template>
    <lv-heading v-space-after="0.5" :level="3">Paragraph</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">
        A paragraph always starts on a new line, and is usually a block of text.
    </lv-heading>

    <lv-card v-space-after="1">
        <lv-paragraph> Lorem ipsum dolor sit amet, consectetur adipiscing elit </lv-paragraph>
        <lv-paragraph align="center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit </lv-paragraph>
        <lv-paragraph align="right"> Lorem ipsum dolor sit amet, consectetur adipiscing elit </lv-paragraph>
    </lv-card>
    <code-preview v-space-after="1" lang="html" :code="codeParagraph" />
    <component-details component="LvParagraph"></component-details>
</template>

<script>
const codeParagraph = `
<lv-paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-paragraph>
<lv-paragraph align="center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-paragraph>
<lv-paragraph align="right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-paragraph>
`.trim();
export default {
    data() {
        return {
            codeParagraph,
        };
    },
};
</script>
