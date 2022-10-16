<template>
    <lv-heading v-space-after="0.5" :level="3">Select</lv-heading>
    <lv-heading v-space-after="1" sub :level="6">Select a single item</lv-heading>

    <lv-heading v-space-after="1" :level="6">Default simple select</lv-heading>
    <lv-card v-space-after="1">
        <lv-select v-model="model" :options="options" />
    </lv-card>
    <lv-code v-space-after="1" :code="code" lang="html" />


    <lv-heading v-space-after="1" :level="6">With images</lv-heading>
    <lv-card v-space-after="1">
        <lv-select v-model="model" :options="options" show-images />
    </lv-card>
    <lv-code v-space-after="1" :code="codeWithImages" lang="html" />

    <lv-heading v-space-after="1" :level="6">With option groups</lv-heading>
    <lv-card v-space-after="1">
        <lv-select v-model="model" :options="options" show-groups />
    </lv-card>
    <lv-code v-space-after="1" :code="codeWithGroups" lang="html" />

    <lv-heading v-space-after="1" :level="6">Example Options</lv-heading>
    <lv-code v-space-after="1" :code="codeScript" lang="js" />
</template>

<script>
const code = `
<lv-select v-model="model" :options="options" />
`.trim();
const codeWithImages = `
<lv-select v-model="model" :options="options" show-images />
`.trim();
const codeWithGroups = `
<lv-select v-model="model" :options="options" show-groups />
`.trim();
const codeScript = `
export default {
    data() {
        return {
            model: 1,
            options: [
                { label: "Option 1", value: 1, group: 'Holiday', image: 'https://picsum.photos/50/50' },
                { label: "Option 2", value: 2, group: 'Holiday', image: 'https://picsum.photos/50/50?1' },
                { label: "Option 3", value: 3, group: 'Party', image: 'https://picsum.photos/50/50?2' },
                { label: "Option 4", value: 4, group: 'Party', image: 'https://picsum.photos/50/50?3' }
            ]
        }
    }
}
`.trim();
export default {
    data() {
        return {
            code,
            codeScript,
            codeWithImages,
            codeWithGroups,
            model: 1,
            options: [
                { label: "Option 1", value: 1, group: 'Holiday', image: 'https://picsum.photos/50/50' },
                { label: "Option 2", value: 2, group: 'Holiday', image: 'https://picsum.photos/50/50?1' },
                { label: "Option 3", value: 3, group: 'Party', image: 'https://picsum.photos/50/50?2' },
                { label: "Option 4", value: 4, group: 'Party', image: 'https://picsum.photos/50/50?3' }
            ],
        };
    },
};
</script>
