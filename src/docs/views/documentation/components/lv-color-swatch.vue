<template>
    <lv-heading v-space-after="0.5" :level="3">Color Swatch</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A nice little wrapper around your content</lv-heading>

    <lv-card v-space-after="1">
        <lv-flex>
            <lv-color-swatch color="red"></lv-color-swatch>
            <lv-color-swatch color="var(--color-warning)" rounded></lv-color-swatch>
            <lv-color-swatch squared></lv-color-swatch>
        </lv-flex>
    </lv-card>

    <code-preview :code="code" v-space-after="1" lang="html"/>

    <component-details component="LvColorSwatch"></component-details>
</template>

<script>
const code = `
<lv-color-swatch color="red"></lv-color-swatch>
<lv-color-swatch color="var(--color-warning)" rounded></lv-color-swatch>
<lv-color-swatch squared></lv-color-swatch>
`.trim();
export default {
    data() {
        return {
            code,
            color: '#000000'
        };
    },
};
</script>
