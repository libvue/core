<template>
    <lv-heading v-space-after="0.5" :level="3">Select</lv-heading>
    <lv-heading v-space-after="1" sub :level="6">Select a single item</lv-heading>
    <lv-card v-space-after="1">
        <lv-select v-model="model" :options="options" />
    </lv-card>
    <lv-code :code="code" lang="html"/>
</template>

<script>
const code = `
<lv-select v-model="model" :options="options" />
`.trim();
export default {
    data() {
        return {
            code,
            model: 1,
            options: [
                { label: "Option 1", value: 1, image: 'https://picsum.photos/50/50' },
                { label: "Option 2", value: 2, image: 'https://picsum.photos/50/50?1' },
                { label: "Option 3", value: 3, image: 'https://picsum.photos/50/50?2', disabled: true },
                { label: "Option 4", value: 4, image: 'https://picsum.photos/50/50?3' }
            ]
        }
    }
}
</script>
