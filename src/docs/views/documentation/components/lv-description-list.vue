<template>
    <lv-heading v-space-after="0.5" :level="3">Description List</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">The component encloses a list of groups of terms and descriptions.</lv-heading>

    <lv-card v-space-after="1">
        <lv-description-list :items="items" />
    </lv-card>
    <lv-code v-space-after="1" lang="html" :files="files" :active="activeFile" @change-file="(v) => activeFile = v" />

    <component-details component="LvDescriptionList"></component-details>
</template>

<script>
const codeTemplate = `
<lv-card v-space-after="1">
    <lv-description-list :items="items" />
</lv-card>
`.trim();

const codeScript = `
items: [
    { term: 'Name', description: 'My Product' },
    { term: 'Feature One', description: 'It\\'s awesome' },
    { term: 'Feature two', description: 'It\\'s fabulous' },
    { term: 'The Final feature', description: 'It\\'s done' },
],
`.trim();

export default {
    data() {
        return {
            activeTab: 'default',
            tabs: [
                { id: 'default', title: 'Default' },
            ],
            items: [
                { term: 'Name', description: 'My Product' },
                { term: 'Feature One', description: 'It\'s awesome' },
                { term: 'Feature two', description: 'It\'s fabulous' },
                { term: 'The Final feature', description: 'It\'s done' },
            ],
            activeFile: 'template',
            files: [
                { id: 'template', filename: 'template', code: codeTemplate },
                { id: 'script', filename: 'script', code: codeScript }
            ],
        };
    },
};
</script>
