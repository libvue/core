<template>
    <lv-heading v-space-after="0.5" :level="3">File Input</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A simple file input component</lv-heading>

    <lv-tabs v-space-after="1" :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #single>
            <lv-card v-space-after="1">
                <lv-flex direction="column">
                    <lv-file-input v-model="fileListSingle"/>
                </lv-flex>
            </lv-card>
            <code-preview lang="html" :code="codeSingle"/>
        </template>
        <template #multiple>
            <lv-card v-space-after="1">
                <lv-flex direction="column">
                    <lv-file-input v-model="fileListMultiple" multiple/>
                </lv-flex>
            </lv-card>
            <code-preview lang="html" :code="codeMultiple"/>
        </template>
    </lv-tabs>
    <component-details component="LvFileInput"></component-details>
</template>

<script>
const codeSingle = `
<lv-file-input v-model="fileListSingle"/>
`.trim();

const codeMultiple = `
<lv-file-input v-model="fileListMultiple" multiple/>
`.trim();
export default {
    data() {
        return {
            codeSingle,
            codeMultiple,
            activeTab: 'single',
            tabs: [
                { id: 'single', title: 'Single', icon: 'box' },
                { id: 'multiple', title: 'Multiple', icon: 'tags' },
            ],
            fileListSingle: 'file1.jpg',
            fileListMultiple: ['file1.jpg', 'file2.jpg'],
        }
    },
    computed: {
        fileListSingleJson() {
            return JSON.stringify(this.fileListSingle);
        }
    }
}
</script>
