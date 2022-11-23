<template>
    <lv-heading v-space-after="0.5" :level="3">Flex</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Stack with the power of flexbox</lv-heading>

    <lv-heading v-space-after="1" :level="6">Row Direction (Default)</lv-heading>
    <lv-card v-space-after="1">
        <lv-flex v-space-after="1" gap="1rem">
            <lv-card></lv-card>
            <lv-card></lv-card>
            <lv-card></lv-card>
        </lv-flex>
        <lv-flex v-space-after="1" gap="1rem"  justify-content="center">
            <lv-card></lv-card>
            <lv-card></lv-card>
            <lv-card></lv-card>
        </lv-flex>
        <lv-flex gap="1rem" justify-content="end">
            <lv-card></lv-card>
            <lv-card></lv-card>
            <lv-card></lv-card>
        </lv-flex>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="codeRow" />

    <lv-heading v-space-after="1" :level="6">Column Direction</lv-heading>
    <lv-card v-space-after="1">
        <lv-flex v-space-after="1" direction="column" align-items="center">
            <lv-card></lv-card>
            <lv-card></lv-card>
            <lv-card></lv-card>
        </lv-flex>
        <lv-flex v-space-after="1" direction="column" align-items="start">
            <lv-card></lv-card>
            <lv-card></lv-card>
            <lv-card></lv-card>
        </lv-flex>
        <lv-flex direction="column" align-items="end">
            <lv-card></lv-card>
            <lv-card></lv-card>
            <lv-card></lv-card>
        </lv-flex>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="codeColumn" />

    <lv-heading v-space-after="1" :level="6">Fill space</lv-heading>
    <lv-card v-space-after="1">
        <lv-flex v-space-after="1" direction="column" fill>
            <lv-card></lv-card>
            <lv-card></lv-card>
            <lv-card></lv-card>
        </lv-flex>
        <lv-flex direction="row" fill>
            <lv-card></lv-card>
            <lv-card></lv-card>
            <lv-card></lv-card>
        </lv-flex>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="codeFill" />
    <component-details component="LvFlex"></component-details>
</template>

<script>
const codeColumn = `
<lv-flex v-space-after="1" direction="column" justify-content="center">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-flex>
<lv-flex v-space-after="1" direction="column" align-items="start">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-flex>
<lv-flex direction="column" align-items="end">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-flex>
`.trim();

const codeRow = `
<lv-flex v-space-after="1" gap="1rem">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-flex>
<lv-flex v-space-after="1" gap="1rem"  justify-content="center">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-flex>
<lv-flex gap="1rem" justify-content="end">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-flex>
`.trim();

const codeFill = `
<lv-flex v-space-after="1" direction="column" fill>
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-flex>
<lv-flex direction="row" fill>
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-flex>
`.trim();

export default {
    data() {
        return {
            codeRow,
            codeColumn,
            codeFill,
        };
    },
};
</script>
