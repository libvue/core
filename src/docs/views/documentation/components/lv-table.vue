<template>
    <lv-heading v-space-after="0.5" :level="3">Table</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Organize your rows</lv-heading>

    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #default>
            <lv-card v-space-after="1">
                <lv-table :rows="rowsDefault" :columns="columnsDefault">
                    <template #weight="{ value }"> {{ value }} kg </template>
                    <template #age="{ value }"> {{ value }} years </template>
                </lv-table>
            </lv-card>
            <lv-code
                v-space-after="1"
                :files="defaultFiles"
                :active="activeDefaultFile"
                @change-file="(v) => (activeDefaultFile = v)"
            />
        </template>
        <template #options>
            <lv-card v-space-after="1">
                <lv-table :rows="rowsOptions" :columns="columnsOptions" :row-action="rowAction">
                    <template #weight="{ value }"> {{ value }} kg </template>
                    <template #age="{ value }"> {{ value }} years </template>
                    <template #options>
                        <lv-popover placement="left" trigger="mouseenter focus" interactive>
                            <template #reference>
                                <lv-button size="small" label="Options" color="solid-dimmed-primary" />
                            </template>
                            <template #content>
                                <lv-flex direction="column">
                                    <lv-button align="left" icon="plus-circle" size="small" label="Add" color="ghost-default"  />
                                    <lv-button align="left" icon="trash" size="small" label="Delete" color="ghost-default" />
                                </lv-flex>
                            </template>
                        </lv-popover>
                    </template>
                </lv-table>
            </lv-card>
            <lv-code
                v-space-after="1"
                :files="optionsFiles"
                :active="activeOptionsFile"
                @change-file="(v) => (activeOptionsFile = v)"
            />
        </template>
        <template #expansion>
            <lv-card v-space-after="1">
                <lv-table :rows="rowsExpansion" :columns="columnsExpansion" :expandable-rows="true">
                    <template #weight="{ value }"> {{ value }} kg </template>
                    <template #age="{ value }"> {{ value }} years </template>
                    <template #_expansion="{ row }">
                        Expanded: {{ row }}
                    </template>
                </lv-table>
            </lv-card>
            <lv-code
                v-space-after="1"
                :files="expansionFiles"
                :active="activeExpansionFile"
                @change-file="(v) => (activeExpansionFile = v)"
            />
        </template>
        <template #sorting>
            <lv-card v-space-after="1">
                <lv-table :rows="rowsSorting" :columns="columnsSorting" :sort="sort" @update:sort="(v) => sort = v">
                    <template #weight="{ value }"> {{ value }} kg </template>
                    <template #age="{ value }"> {{ value }} years </template>
                </lv-table>
            </lv-card>
            <lv-code
                v-space-after="1"
                :files="sortFiles"
                :active="activeSortFile"
                @change-file="(v) => (activeSortFile = v)"
            />
        </template>
        <template #empty>
            <lv-card v-space-after="1">
                <lv-table :columns="columnsDefault" />
            </lv-card>
        </template>
    </lv-tabs>

    <component-details component="LvTable"></component-details>
</template>

<script>
const templateOptions = `
<lv-table :rows="rowsOptions" :columns="columnsOptions" :row-action="rowAction">
    <template #weight="{ value }"> {{ value }} kg </template>
    <template #age="{ value }"> {{ value }} years </template>
    <template #options>
        <lv-popover placement="bottom" trigger="mouseenter" interactive>
            <template #reference>
                <lv-button size="small" label="Options" color="solid-dimmed-primary" />
            </template>
            <template #content>
                <lv-flex direction="column">
                    <lv-button align="left" icon="plus-circle" size="small" label="Add" color="ghost-default" />
                    <lv-button align="left" icon="trash" size="small" label="Delete" color="ghost-default" />
                </lv-flex>
            </template>
        </lv-popover>
    </template>
</lv-table>
`.trim();
const scriptOptions = `
rowsOptions: [
    { age: 33, gender: 'male', name: 'Bob', weight: 80 },
    { age: 43, gender: 'female', name: 'Jane', weight: 69 },
    { age: 56, gender: 'male', name: 'George', weight: 131 },
],
columnsOptions: {
    name: {
        title: 'Name',
    },
    gender: {
        title: 'Gender',
        align: 'center'
    },
    age: {
        title: 'Age',
        align: 'center'
    },
    weight: {
        title: 'Weight',
        align: 'center'
    },
    options: {
        title: null,
        align: 'right',
        fitContent: true,
    },
},
`.trim();
const templateDefault = `
<lv-table :rows="rowsDefault" :columns="columnsDefault">
    <template #weight="{ value }"> {{ value }} kg </template>
    <template #age="{ value }"> {{ value }} years </template>
</lv-table>
`.trim();
const scriptDefault = `
rowsDefault: [
    { age: 33, gender: 'male', name: 'Bob', weight: 80 },
    { age: 43, gender: 'female', name: 'Jane', weight: 69 },
    { age: 56, gender: 'male', name: 'George', weight: 131 },
],
columnsDefault: {
    name: {
        title: 'Name',
    },
    gender: {
        title: 'Gender',
        align: 'center',
    },
    age: {
        title: 'Age',
        align: 'center',
    },
    weight: {
        title: 'Weight',
        align: 'center',
    },
},
`.trim();
const templateSort = `
<lv-table :rows="rowsSorting" :columns="columnsSorting" :sort="sort" @update:sort="(v) => sort = v" >
    <template #weight="{ value }"> {{ value }} kg </template>
    <template #age="{ value }"> {{ value }} years </template>
</lv-table>
`.trim();
const scriptSort = `
sort: 'weight',
rowsSorting: [
    { id: 1, age: 33, gender: 'male', name: 'Bob', weight: 80 },
    { id: 2, age: 43, gender: 'female', name: 'Jane', weight: 69 },
    { id: 3, age: 56, gender: 'male', name: 'George', weight: 131 },
],
columnsSorting: {
    name: {
        title: 'Name',
    },
    gender: {
        title: 'Gender',
        align: 'left',
    },
    age: {
        title: 'Age',
        align: 'left',
        sortable: true,
    },
    weight: {
        title: 'Weight',
        align: 'left',
        sortable: true,
    },
},
`.trim();

const templateExpansion = `
<lv-table :rows="rowsExpansion" :columns="columnsExpansion" :expandable-rows="true">
    <template #weight="{ value }"> {{ value }} kg </template>
    <template #age="{ value }"> {{ value }} years </template>
    <template #_expansion="{ row }">
        Expanded: {{ row }}
    </template>
</lv-table>
`.trim();

const scriptExpansion = `
rowsExpansion: [
    { id: 1, age: 33, gender: 'male', name: 'Bob', weight: 80 },
    { id: 2, age: 43, gender: 'female', name: 'Jane', weight: 69 },
    { id: 3, age: 56, gender: 'male', name: 'George', weight: 131 },
],
columnsExpansion: {
    name: {
        title: 'Name',
    },
    gender: {
        title: 'Gender',
        align: 'center',
    },
    age: {
        title: 'Age',
        align: 'center',
    },
    weight: {
        title: 'Weight',
        align: 'center',
        sortable: true,
    },
},
`.trim();

export default {
    data() {
        return {
            activeExpansionFile: 'template',
            expansionFiles: [
                { id: 'template', filename: 'template', code: templateExpansion, lang: 'html' },
                { id: 'script', filename: 'script', code: scriptExpansion, lang: 'js' },
            ],
            activeSortFile: 'template',
            sortFiles: [
                { id: 'template', filename: 'template', code: templateSort, lang: 'html' },
                { id: 'script', filename: 'script', code: scriptSort, lang: 'js' },
            ],
            activeDefaultFile: 'template',
            defaultFiles: [
                { id: 'template', filename: 'template', code: templateDefault, lang: 'html' },
                { id: 'script', filename: 'script', code: scriptDefault, lang: 'js' },
            ],
            activeOptionsFile: 'template',
            optionsFiles: [
                { id: 'template', filename: 'template', code: templateOptions, lang: 'html' },
                { id: 'script', filename: 'script', code: scriptOptions, lang: 'js' },
            ],
            activeTab: 'default',
            tabs: [
                { id: 'default', title: 'Default', icon: 'table' },
                { id: 'options', title: 'With Options', icon: 'more-vertical' },
                { id: 'sorting', title: 'Sorting', icon: 'sort-desc' },
                { id: 'expansion', title: 'Expandable Rows', icon: 'chevrons-down' },
                { id: 'empty', title: 'Empty', icon: 'eraser' },
            ],
            rowsDefault: [
                { age: 33, gender: 'male', name: 'Bob', weight: 80, hello: 'world' },
                { age: 43, gender: 'female', name: 'Jane', weight: 69, hello: 'world' },
                { age: 56, gender: 'male', name: 'George', weight: 131, hello: 'world' },
            ],
            columnsDefault: {
                name: {
                    title: 'Name',
                },
                gender: {
                    title: 'Gender',
                    align: 'center',
                },
                age: {
                    title: 'Age',
                    align: 'center',
                },
                weight: {
                    title: 'Weight',
                    align: 'right',
                },
            },
            rowsOptions: [
                { id: 1, age: 33, gender: 'male', name: 'Bob', weight: 80 },
                { id: 2, age: 43, gender: 'female', name: 'Jane', weight: 69 },
                { id: 3, age: 56, gender: 'male', name: 'George', weight: 131 },
            ],
            columnsOptions: {
                name: {
                    title: 'Name',
                },
                gender: {
                    title: 'Gender',
                    align: 'center',
                },
                age: {
                    title: 'Age',
                    align: 'center',
                },
                weight: {
                    title: 'Weight',
                    align: 'center',
                },
                options: {
                    title: null,
                    align: 'right',
                    fitContent: true,
                },
            },
            sort: 'weight',
            rowsExpansion: [
                { id: 1, age: 33, gender: 'male', name: 'Bob', weight: 80 },
                { id: 2, age: 43, gender: 'female', name: 'Jane', weight: 69 },
                { id: 3, age: 56, gender: 'male', name: 'George', weight: 131 },
            ],
            columnsExpansion: {
                name: {
                    title: 'Name',
                },
                gender: {
                    title: 'Gender',
                    align: 'center',
                },
                age: {
                    title: 'Age',
                    align: 'center',
                },
                weight: {
                    title: 'Weight',
                    align: 'right',
                },
            },
            rowsSorting: [
                { id: 1, age: 33, gender: 'male', name: 'Bob', weight: 80 },
                { id: 2, age: 43, gender: 'female', name: 'Jane', weight: 69 },
                { id: 3, age: 56, gender: 'male', name: 'George', weight: 131 },
            ],
            columnsSorting: {
                name: {
                    title: 'Name',
                },
                gender: {
                    title: 'Gender',
                    align: 'center',
                },
                age: {
                    title: 'Age',
                    align: 'center',
                },
                weight: {
                    title: 'Weight',
                    align: 'right',
                    sortable: true,
                },
            },
        };
    },
    methods: {
        rowAction({ row }) {
            console.log(row);
        },
    },
};
</script>
