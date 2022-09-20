<template>
    <lv-heading :level="3" v-space-after="0.5">Group</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">Group elements with the power of flexbox</lv-heading>

    <lv-heading :level="6" v-space-after="1">Default Group</lv-heading>
    <lv-group v-space-after="1">
        <lv-button label="Hello"/>
        <lv-button label="Hello"/>
        <lv-button label="Hello"/>
    </lv-group>
    <lv-code v-space-after="1" lang="html" :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: `<lv-group>\n\t<lv-button label="Hello"/>\n\t<lv-button label="Hello"/>\n\t<lv-button label="Hello"/>\n</lv-group>`,
        };
    },
};
</script>