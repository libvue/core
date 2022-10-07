<template>
    <lv-heading v-space-after="0.5" :level="3">Group</lv-heading>
    <lv-heading v-space-after="1" sub :level="6">Group elements with the power of flexbox</lv-heading>

    <lv-heading v-space-after="1" :level="6">Row Direction (Default)</lv-heading>
    <lv-card v-space-after="1">
        <lv-group>
            <lv-button label="Hello" color="warning" />
            <lv-button label="Hello" color="danger" />
            <lv-button label="Hello" color="primary" />
        </lv-group>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="codeRow" />

    <lv-heading v-space-after="1" :level="6">Column Direction</lv-heading>
    <lv-card v-space-after="1">
        <lv-group direction="column">
            <lv-button label="Hello" color="warning" />
            <lv-button label="Hello" color="danger" />
            <lv-button label="Hello" color="primary" />
        </lv-group>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="codeColumn" />
</template>

<script>
const codeColumn = `
<lv-group direction="column">
    <lv-button label="Hello" color="warning"/>
    <lv-button label="Hello" color="danger"/>
    <lv-button label="Hello" color="primary"/>
</lv-group>
`.trim();

const codeRow = `
<lv-group>
    <lv-button label="Hello" color="warning"/>
    <lv-button label="Hello" color="danger"/>
    <lv-button label="Hello" color="primary"/>
</lv-group>
`.trim();

export default {
    data() {
        return {
            codeRow,
            codeColumn,
        };
    },
};
</script>
