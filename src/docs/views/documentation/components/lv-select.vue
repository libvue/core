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
                    <template #option="{ option }">
                        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
                    </template>
                </lv-select>
                v-model: {{ modelSingle }}
            </lv-card>
            <lv-code v-space-after="1" :code="codeSingle" lang="html" />
        </template>
        <template #multiple>
            <lv-card v-space-after="1">
                <lv-select v-model="modelMultiple" v-space-after="1" :options="options" multiple>
                    <template #value="{ option }">
                        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
                    </template>
                    <template #option="{ option }">
                        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
                    </template>
                </lv-select>
                v-model: {{ modelMultiple }}
            </lv-card>
            <lv-code v-space-after="1" :code="codeMultiple" lang="html" />
        </template>
    </lv-tabs>

    <component-details component="LvSelect"></component-details>
</template>

<script>
const codeSingle = `
<lv-select v-model="modelSingle" :options="options">
    <template #value="{ option }">
        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
    </template>
    <template #option="{ option }">
        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
    </template>
</lv-select>
`.trim();

const codeMultiple = `
<lv-select v-model="modelMultiple" :options="options" multiple>
    <template #value="{ option }">
        <lv-icon :name="option.icon" :push=".5" /> {{ option.label }}
    </template>
    <template #option="{ option }">
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
            modelSingle: null,
            modelMultiple: [],
            activeTab: 'multiple',
            tabs: [
                { id: 'single', title: 'Single', icon: 'box' },
                { id: 'multiple', title: 'Multiple', icon: 'tags' },
                // { id: 'groups', title: 'Groups', icon: 'boxes' },
                // { id: 'search', title: 'Search', icon: 'search' },
                // { id: 'sizes', title: 'Sizes', icon: 'scaling' },
            ],
            options: [
                { label: 'Bomb', value: 1, icon: 'bomb' },
                { label: 'Bookmark', value: 2, icon: 'bookmark' },
                { label: 'Bot', value: 3, icon: 'bot' },
                { label: 'Citrus', value: 4, icon: 'citrus' },
                { label: 'Cookie', value: 5, icon: 'cookie' },
                { label: 'Croissant', value: 6, icon: 'croissant' },
                { label: 'Disc', value: 7, icon: 'disc' },
            ],
        };
    },
};
</script>
