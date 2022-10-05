<template>
    <lv-heading :level="3" v-space-after="0.5">Code</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">A code component with highlighting</lv-heading>

    <lv-heading :level="6" v-space-after="1">Default</lv-heading>
    <lv-card v-space-after="1">
        <lv-code code="console.log('Sup!')" lang="js" />
    </lv-card>
    <lv-code v-space-after="1" :code="code" lang="html" />

    <lv-heading :level="6" v-space-after="1">With title</lv-heading>
    <lv-card v-space-after="1">
        <lv-code code="console.log('Sup!')" lang="js" title="app.js" />
    </lv-card>
    <lv-code v-space-after="1" :code="codeWithTitle" lang="html" />
</template>

<script>
const code = `<lv-code code="console.log('Sup!')" lang="js" />`.trim();
const codeWithTitle = `<lv-code code="console.log('Sup!')" lang="js" />`.trim();

export default {
    data() {
        return {
            code,
            codeWithTitle
        }
    }
}
</script>