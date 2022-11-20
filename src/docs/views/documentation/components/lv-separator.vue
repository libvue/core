<template>
    <lv-heading v-space-after="0.5" :level="3">Separator</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Cut the content!</lv-heading>

    <lv-heading v-space-after="1" :level="6">Horizontal</lv-heading>
    <lv-card v-space-after="1">
        <lv-separator></lv-separator>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />

    <lv-heading v-space-after="1" :level="6">Vertical</lv-heading>
    <lv-card v-space-after="1">
        <lv-group gap="10px">
            <lv-button v-space-after="1" label="Text" />
            <lv-separator v-space-after="1" direction="vertical"></lv-separator>
            <lv-button label="Text" />
        </lv-group>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="codeVertical" />
    <component-details component="LvSeparator"></component-details>
</template>

<script>
const code = `<lv-separator></lv-separator>`;
const codeVertical = `
<lv-group gap="10px">
    <lv-button v-space-after="1" label="Text"/>
    <lv-separator v-space-after="1" direction="vertical"></lv-separator>
    <lv-button label="Text"/>
</lv-group>
`.trim();

export default {
    data() {
        return {
            code,
            codeVertical,
        };
    },
};
</script>
