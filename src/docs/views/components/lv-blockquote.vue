<template>
    <lv-heading v-space-after="0.5" :level="3">Blockquote</lv-heading>
    <lv-heading v-space-after="1" :level="6" sub>The enclosed text is an extended quotation</lv-heading>
    <lv-card v-space-after="1">
        <lv-paragraph v-space-after="1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit </lv-paragraph>
        <lv-blockquote v-space-after="1" caption="P. Rabbit">
            This is a quote from someone I forgot the name of.
        </lv-blockquote>
        <lv-paragraph> Lorem ipsum dolor sit amet, consectetur adipiscing elit </lv-paragraph>
    </lv-card>

    <lv-code lang="html" :code="codeBlockquote" />
</template>

<script>
const codeBlockquote = `
<lv-paragraph v-space-after="1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-paragraph>
<lv-blockquote v-space-after="1" caption="P. Rabbit">
    This is a quote from someone I forgot the name of.
</lv-blockquote>
<lv-paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
</lv-paragraph>
`.trim();

export default {
    data() {
        return {
            codeBlockquote,
        };
    },
};
</script>
