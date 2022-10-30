<template>
    <lv-heading v-space-after="0.5" :level="3">Heading</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Headings rock</lv-heading>

    <lv-heading v-space-after="1" :level="6">Levels</lv-heading>
    <lv-card v-space-after="1">
        <lv-heading v-space-after="1" :level="1">Heading1</lv-heading>
        <lv-heading v-space-after="1" :level="2">Heading2</lv-heading>
        <lv-heading v-space-after="1" :level="3">Heading3</lv-heading>
        <lv-heading v-space-after="1" :level="4">Heading4</lv-heading>
        <lv-heading v-space-after="1" :level="5">Heading5</lv-heading>
        <lv-heading :level="6">Heading6</lv-heading>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="codeLevels" />

    <lv-heading v-space-after="1" :level="6">Subheading</lv-heading>
    <lv-card v-space-after="1">
        <lv-heading v-space-after="0.5" :level="1">Heading1</lv-heading>
        <lv-heading sub :level="6">Subheading</lv-heading>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="codeSub" />
</template>

<script>
const codeLevels = `
<lv-heading :level="1" v-space-after="1">Heading1</lv-heading>
<lv-heading :level="2" v-space-after="1">Heading2</lv-heading>
<lv-heading :level="3" v-space-after="1">Heading3</lv-heading>
<lv-heading :level="4" v-space-after="1">Heading4</lv-heading>
<lv-heading :level="5" v-space-after="1">Heading5</lv-heading>
<lv-heading :level="6">Heading6</lv-heading>
`.trim();

const codeSub = `
<lv-heading :level="1" v-space-after="0.5">Heading1</lv-heading>
<lv-heading sub :level="6">Subheading</lv-heading>
`.trim();
export default {
    data() {
        return {
            codeLevels,
            codeSub,
        };
    },
};
</script>
