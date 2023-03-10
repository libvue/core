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
export default {
    methods: {
        onUpdateFilter({ key, value }) {
            this.filters[key].model = value;
        },
        onClearFilter(key) {
            this.filters[key].model = null;
        },
    },
    data() {
        return {
            filters: {
                search: {
                    label: 'Search',
                    type: 'input',
                    model: 'Hearing Loss',
                },
                country: {
                    label: 'Country',
                    type: 'select',
                    options: [
                        { value: 1,label: 'Albania' },
                        { value: 2, label: 'Germany' },
                        { value: 3, label: 'Greenland' },
                        { value: 4, label: 'Zimbabwe' },
                    ],
                    model: null,
                },
                color: {
                    label: 'Color',
                    type: 'select',
                    options: [
                        { value: 1,label: 'Red' },
                        { value: 2, label: 'Blue' },
                        { value: 3, label: 'Yellow' },
                        { value: 4, label: 'Purple' },
                        { value: 5, label: 'Green' },
                        { value: 6, label: 'Orange' },
                    ],
                    model: null,
                },
                min_volume: {
                    label: 'Min. Volume',
                    type: 'select',
                    options: [
                        { value: 1,label: '10db' },
                        { value: 2, label: '12db' },
                        { value: 3, label: '14db' },
                        { value: 4, label: '16db' },
                        { value: 5, label: '17db' },
                        { value: 6, label: '18db' },
                    ],
                    model: 2,
                },
                sense: {
                    label: 'Sense',
                    type: 'select',
                    options: [
                        { value: 1,label: 'Tasting' },
                        { value: 2, label: 'Smelling' },
                        { value: 3, label: 'Hearing' },
                        { value: 4, label: 'Seeing' },
                        { value: 5, label: 'Touching' },
                    ],
                    model: 3,
                },
            },
        };
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
                    label: 'Search',
                    type: 'input',
                    model: 'Hearing Loss',
                },
                country: {
                    label: 'Country',
                    type: 'select',
                    options: [
                        { value: 1,label: 'Albania' },
                        { value: 2, label: 'Germany' },
                        { value: 3, label: 'Greenland' },
                        { value: 4, label: 'Zimbabwe' },
                    ],
                    model: null,
                },
                color: {
                    label: 'Color',
                    type: 'select',
                    options: [
                        { value: 1,label: 'Red' },
                        { value: 2, label: 'Blue' },
                        { value: 3, label: 'Yellow' },
                        { value: 4, label: 'Purple' },
                        { value: 5, label: 'Green' },
                        { value: 6, label: 'Orange' },
                    ],
                    model: null,
                },
                min_volume: {
                    label: 'Min. Volume',
                    type: 'select',
                    options: [
                        { value: 1,label: '10db' },
                        { value: 2, label: '12db' },
                        { value: 3, label: '14db' },
                        { value: 4, label: '16db' },
                        { value: 5, label: '17db' },
                        { value: 6, label: '18db' },
                    ],
                    model: 2,
                },
                sense: {
                    label: 'Sense',
                    type: 'select',
                    options: [
                        { value: 1,label: 'Tasting' },
                        { value: 2, label: 'Smelling' },
                        { value: 3, label: 'Hearing' },
                        { value: 4, label: 'Seeing' },
                        { value: 5, label: 'Touching' },
                    ],
                    model: 3,
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
