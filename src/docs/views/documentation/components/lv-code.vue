<template>
    <lv-heading v-space-after="0.5" :level="3">Code</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A code component with highlighting</lv-heading>

    <lv-heading v-space-after="1" :level="6">Default</lv-heading>
    <lv-card v-space-after="1">
        <lv-code code="console.log('Sup!')" lang="javascript" />
    </lv-card>
    <lv-code v-space-after="1" :code="code" lang="html" />

    <lv-heading v-space-after="1" :level="6">With title</lv-heading>
    <lv-card v-space-after="1">
        <lv-code code="console.log('Sup!')" lang="javascript" title="app.js" />
    </lv-card>
    <lv-code v-space-after="1" :code="codeWithTitle" lang="html" />
</template>

<script>
const code = `<lv-code code="console.log('Sup!')" lang="javascript" />`.trim();
const codeWithTitle = `<lv-code code="console.log('Sup!')" lang="javascript" />`.trim();

export default {
    data() {
        return {
            code,
            codeWithTitle,
        };
    },
};
</script>
