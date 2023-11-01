<template>
    <lv-heading v-space-after="0.5" :level="3">Quick Filter</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A single component that contains inputs, selects and checkboxes</lv-heading>

    <lv-quick-filter :filters="filters" icon="search" @update:filter="onUpdateFilter" @clear:filter="onClearFilter" v-space-after="1"></lv-quick-filter>

    <lv-heading level="6" v-space-after="1">Filter Models</lv-heading>
    <lv-code :code="JSON.stringify(models, null, 2)" v-space-after="1"></lv-code>
    <lv-heading level="6" v-space-after="1">Code</lv-heading>
    <lv-code v-space-after="1" :files="files" :active="activeFile" @change-file="(v) => (activeFile = v)"></lv-code>
    <component-details component="LvQuickFilter"></component-details>
</template>

<script>
const codeTemplate = `
<lv-quick-filter
    icon="search"
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
                    labelKey: 'name',
                    valueKey: 'id',
                    options: [
                        { id: 1, name: 'Red' },
                        { id: 2, name: 'Blue' },
                        { id: 3, name: 'Yellow' },
                        { id: 4, name: 'Purple' },
                        { id: 5, name: 'Green' },
                        { id: 6, name: 'Orange' },
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
                { id: 'template', filename: 'template', code: codeTemplate, lang: 'html' },
                { id: 'script', filename: 'script', code: codeScript, lang: 'javascript' },
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
                    labelKey: 'name',
                    valueKey: 'id',
                    options: [
                        { id: 1, name: 'Red' },
                        { id: 2, name: 'Blue' },
                        { id: 3, name: 'Yellow' },
                        { id: 4, name: 'Purple' },
                        { id: 5, name: 'Green' },
                        { id: 6, name: 'Orange' },
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
    computed: {
        models() {
            return Object.values(this.filters).flatMap((i) => {
                return { label: i.label, model: i.model }
            })
        }
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
