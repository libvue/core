<template>
    <lv-heading v-space-after="0.5" :level="3">Select</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Select a single or multiple items</lv-heading>

    <lv-tabs v-space-after="1" :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #single>
            <lv-card v-space-after="1">
                <lv-select v-model="modelSingle" v-space-after="1" :options="options">
                    <template #value="{ option }">
                        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
                    </template>
                </lv-select>
                v-model: {{ modelSingle }}
            </lv-card>
            <code-preview v-space-after="1" :code="codeSingle" lang="html" />
        </template>
        <template #multiple>
            <lv-card v-space-after="1">
                <lv-select v-model="modelMultiple" v-space-after="1" :options="options" multiple>
                    <template #value="{ option }">
                        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
                    </template>
                </lv-select>
                v-model: {{ modelMultiple }}
            </lv-card>
            <code-preview v-space-after="1" :code="codeMultiple" lang="html" />
        </template>
        <template #search>
            <lv-card v-space-after="1">
                <lv-select v-model="modelSearch" v-space-after="1" :options="options" searchable>
                    <template #value="{ option }">
                        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
                    </template>
                </lv-select>
                v-model: {{ modelSearch }}
            </lv-card>
            <code-preview v-space-after="1" :code="codeSearch" lang="html" />
        </template>
    </lv-tabs>

    <component-details :slots="['option', 'no-options', 'value']" component="LvSelect"></component-details>
</template>

<script>
const codeSingle = `
<lv-select v-model="modelSingle" :options="options">
    <template #value="{ option }">
        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
    </template>
</lv-select>
`.trim();

const codeMultiple = `
<lv-select v-model="modelMultiple" :options="options" multiple>
    <template #value="{ option }">
        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
    </template>
</lv-select>
`.trim();

const codeSearch = `
<lv-select v-model="modelSearch" :options="options" searchable>
    <template #value="{ option }">
        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
    </template>
</lv-select>
`.trim();

export default {
    components: {},
    data() {
        return {
            codeSingle,
            codeMultiple,
            codeSearch,
            modelSingle: null,
            modelMultiple: [],
            modelSearch: null,
            activeTab: 'single',
            tabs: [
                { id: 'single', title: 'Single', icon: 'box' },
                { id: 'multiple', title: 'Multiple', icon: 'tags' },
                { id: 'search', title: 'Searchable', icon: 'search' },
            ],
            options: [
                { label: 'Bomb', value: 1, icon: 'bomb' },
                { label: 'Bookmark', value: 2, icon: 'bookmark' },
                { label: 'Bot', value: 3, icon: 'bot' },
                { label: 'Brush', value: 8, icon: 'brush' },
                { label: 'Camera', value: 9, icon: 'camera' },
                { label: 'Cat', value: 10, icon: 'cat' },
                { label: 'Cigarette', value: 11, icon: 'cigarette' },
                { label: 'Citrus', value: 4, icon: 'citrus' },
                { label: 'Cookie', value: 5, icon: 'cookie' },
                { label: 'Croissant', value: 6, icon: 'croissant' },
                { label: 'Database', value: 13, icon: 'database' },
                { label: 'Disc', value: 7, icon: 'disc' },
                { label: 'Dog', value: 14, icon: 'dog' },
            ],
        };
    },
};
</script>
