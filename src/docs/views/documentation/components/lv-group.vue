<template>
    <lv-heading v-space-after="0.5" :level="3">Group</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Simple grouping with the power of flexbox</lv-heading>

    <lv-heading v-space-after="1" :level="6">Row Direction (Default)</lv-heading>
    <lv-card v-space-after="1">
        <lv-group v-space-after="1" gap="1rem">
            <lv-card></lv-card>
            <lv-card></lv-card>
            <lv-card></lv-card>
        </lv-group>
        <lv-group v-space-after="1" gap="1rem"  justify-content="center">
            <lv-card></lv-card>
            <lv-card></lv-card>
            <lv-card></lv-card>
        </lv-group>
        <lv-group gap="1rem" justify-content="end">
            <lv-card></lv-card>
            <lv-card></lv-card>
            <lv-card></lv-card>
        </lv-group>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="codeRow" />

    <lv-heading v-space-after="1" :level="6">Column Direction</lv-heading>
    <lv-card v-space-after="1">
        <lv-group v-space-after="1" direction="column" align-items="center">
            <lv-card></lv-card>
            <lv-card></lv-card>
            <lv-card></lv-card>
        </lv-group>
        <lv-group v-space-after="1" direction="column" align-items="start">
            <lv-card></lv-card>
            <lv-card></lv-card>
            <lv-card></lv-card>
        </lv-group>
        <lv-group direction="column" align-items="end">
            <lv-card></lv-card>
            <lv-card></lv-card>
            <lv-card></lv-card>
        </lv-group>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="codeColumn" />

    <lv-heading v-space-after="1" :level="6">Fill space</lv-heading>
    <lv-card v-space-after="1">
        <lv-group v-space-after="1" direction="column" fill>
            <lv-card></lv-card>
            <lv-card></lv-card>
            <lv-card></lv-card>
        </lv-group>
        <lv-group direction="row" fill>
            <lv-card></lv-card>
            <lv-card></lv-card>
            <lv-card></lv-card>
        </lv-group>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="codeFill" />
    <component-details component="LvGroup"></component-details>
</template>

<script>
const codeColumn = `
<lv-group v-space-after="1" direction="column" justify-content="center">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-group>
<lv-group v-space-after="1" direction="column" align-items="start">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-group>
<lv-group direction="column" align-items="end">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-group>
`.trim();

const codeRow = `
<lv-group v-space-after="1" gap="1rem">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-group>
<lv-group v-space-after="1" gap="1rem"  justify-content="center">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-group>
<lv-group gap="1rem" justify-content="end">
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-group>
`.trim();

const codeFill = `
<lv-group v-space-after="1" direction="column" fill>
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-group>
<lv-group direction="row" fill>
    <lv-card></lv-card>
    <lv-card></lv-card>
    <lv-card></lv-card>
</lv-group>
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
