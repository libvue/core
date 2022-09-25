<template>
    <lv-heading :level="3" v-space-after="0.5">Group</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">Group elements with the power of flexbox</lv-heading>

    <lv-heading :level="6" v-space-after="1">Default (Row)</lv-heading>
    <lv-group v-space-after="1">
        <lv-button label="Hello" type="outline"/>
        <lv-button label="Hello" type="outline"/>
        <lv-button label="Hello" type="outline"/>
    </lv-group>
    <lv-code v-space-after="1" lang="html" :code="code" />

    <lv-heading :level="6" v-space-after="1">Column Direction</lv-heading>
    <lv-group v-space-after="1" direction="column" gap="2px">
        <lv-button label="Hello" type="outline"/>
        <lv-button label="Hello" type="outline"/>
        <lv-button label="Hello" type="outline"/>
    </lv-group>
    <lv-code v-space-after="1" lang="html" :code="codeColumn" />
</template>

<script>
export default {
    data() {
        return {
            code: `<lv-group>\n    <lv-button label="Hello" type="outline"/>\n    <lv-button label="Hello" type="outline"/>\n    <lv-button label="Hello" type="outline"/>\n</lv-group>`,
            codeColumn: `<lv-group direction="column" gap="2px">\n    <lv-button label="Hello" type="outline"/>\n    <lv-button label="Hello" type="outline"/>\n    <lv-button label="Hello" type="outline"/>\n</lv-group>`,
        };
    },
};
</script>