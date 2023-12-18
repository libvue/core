<template>
    <lv-heading v-space-after="0.5" :level="3">Code</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Used for highlighting a piece of inline code</lv-heading>

    <lv-card v-space-after="1">
        <lv-code>Hello World</lv-code>
    </lv-card>
    <code-preview v-space-after="1" :code="code" lang="html" />

    <component-details component="LvCode"></component-details>
</template>

<script>
const code = `<lv-code>Hello World</lv-code>`.trim();
const codeFilesScript = `
activeFile: 'template',
files: [
    {
        id: 'template',
        filename: 'template',
        lang: 'html',
        code: codeFilesTemplate
    },
    {
        id: 'script',
        filename: 'script',
        lang: 'js',
        code: codeFilesScript
    },
]
`.trim();

const codeFilesTemplate = `
<code-preview
    :files="files"
    :active="activeFile"
    @change-file="(v) => activeFile = v"
/>
`.trim();

export default {
    data() {
        return {
            code,
            activeFile: 'template',
            files: [
                { id: 'template', filename: 'template', lang: 'html', code: codeFilesTemplate },
                { id: 'script', filename: 'script', lang: 'js', code: codeFilesScript },
            ]
        };
    },
};
</script>
