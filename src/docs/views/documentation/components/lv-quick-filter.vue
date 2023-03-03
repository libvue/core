<template>
    <lv-heading v-space-after="0.5" :level="3">Quick Filter</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A single component that contains inputs, selects and checkboxes</lv-heading>

    <lv-quick-filter :filters="filters" @update:filter="onUpdateFilter" @clear:filter="onClearFilter" v-space-after="1"></lv-quick-filter>
    <lv-code v-space-after="1" :files="files" :active="activeFile" @change-file="(v) => (activeFile = v)"></lv-code>
    <component-details component="LvQuickFilter"></component-details>
</template>

<script>
const codeTemplate = `
<lv-quick-filter
    :filters="filters"
    @update:filter="onUpdateFilter"
    @clear:filter="onClearFilter"
>
</lv-quick-filter>
`.trim();
const codeScript = `
data() {
    return {
        filters: {
            search: {
                label: 'Zoeken',
                type: 'input',
                model: 'Test',
            },
            country: {
                label: 'Land',
                type: 'select',
                options: [{ value: 1,label: 'Nederland' }, { value: 2, label: 'Duitsland'}],
                model: null,
            },
        },
    };
},
methods: {
    onUpdateFilter({ key, value }) {
        this.filters[key].model = value;
    },
    onClearFilter(key) {
        this.filters[key].model = null;
    },
}
`.trim();

export default {
    data() {
        return {
            activeFile: 'template',
            files: [
                { id: 'template', filename: 'template', code: codeTemplate },
                { id: 'script', filename: 'script', code: codeScript },
            ],
            filters: {
                search: {
                    label: 'Zoeken',
                    type: 'input',
                    model: 'Test',
                },
                country: {
                    label: 'Land',
                    type: 'select',
                    options: [{ value: 1,label: 'Nederland' }, { value: 2, label: 'Duitsland'}],
                    model: null,
                },
            },
        };
    },
    methods: {
        onUpdateFilter({ key, value }) {
            this.filters[key].model = value;
        },
        onClearFilter(key) {
            this.filters[key].model = null;
        },
    }
};
</script>
