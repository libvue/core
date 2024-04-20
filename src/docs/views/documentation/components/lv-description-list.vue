<template>
    <lv-heading v-space-after="0.5" :level="3">Description List</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">The component encloses a list of groups of terms and descriptions.</lv-heading>

    <lv-card v-space-after="1">
        <lv-description-list :items="items">
            <template #fruit="{ description }">
                {{ description.join(', ') }}
            </template>
        </lv-description-list>
    </lv-card>
    <code-preview v-space-after="1" :files="files" :active="activeFile" @change-file="(v) => activeFile = v" />

    <component-details :slots="['%item.id%']" component="LvDescriptionList"></component-details>
</template>

<script>
const codeTemplate = `
<lv-card v-space-after="1">
    <lv-description-list :items="items">
        <template #fruit="{ description }">
            {{ description.join(', ') }}
        </template>
    </lv-description-list>
</lv-card>
`.trim();

const codeScript = `
items: [
    { term: 'Name', description: 'My Product' },
    { term: 'Feature One', description: 'It\\'s awesome' },
    { term: 'Feature two', description: 'It\\'s fabulous' },
    { id: 'fruit', term: 'These are fruit', description: ['Apple', 'Banana', 'Orange'] },
],
`.trim();

export default {
    data() {
        return {
            items: [
                { term: 'Name', description: 'My Product' },
                { term: 'Feature One', description: 'It\'s awesome' },
                { term: 'Feature two', description: 'It\'s fabulous' },
                { id: 'fruit', term: 'These are fruit', description: ['Apple', 'Banana', 'Orange'] },
            ],
            activeFile: 'template',
            files: [
                { id: 'template', filename: 'template', code: codeTemplate, lang: 'html' },
                { id: 'script', filename: 'script', code: codeScript, lang: 'javascript' }
            ],
        };
    },
};
</script>
