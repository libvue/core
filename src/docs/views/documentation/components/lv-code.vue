<template>
    <lv-heading v-space-after="0.5" :level="3">Code</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A code component with highlighting</lv-heading>

    <lv-heading v-space-after="1" :level="6">Default</lv-heading>
    <lv-card v-space-after="1">
        <lv-code code="Hello World" lang="html" />
    </lv-card>
    <lv-code v-space-after="1" :code="code" lang="html" />

    <lv-heading v-space-after="1" :level="6">With Files</lv-heading>
    <lv-card v-space-after="1">
        <lv-code :files="files" :active="activeFile" @change-file="(v) => activeFile = v"/>
    </lv-card>
    <lv-code v-space-after="1" :code="codeWithTitle" lang="html" />
    <component-details component="LvCode"></component-details>
</template>

<script>
const code = `<lv-code code="Hello World" lang="html" />`.trim();
const codeWithTitle = `<lv-code code="console.log('Sup!')" lang="javascript" />`.trim();

export default {
    data() {
        return {
            code,
            codeWithTitle,
            activeFile: 'app',
            files: [
                { id: 'app', filename: 'app.js', lang: 'js', code: 'app.start()' },
                { id: 'css', filename: 'app.css', lang: 'css', code: '* { color: red }' },
            ]
        };
    },
};
</script>
