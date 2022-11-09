<template>
    <lv-heading v-space-after="0.5" :level="3">Table</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Organize your rows</lv-heading>

    <lv-heading v-space-after="1" :level="6">Simple Table</lv-heading>
    <lv-card v-space-after="1" >
        <lv-table :rows="rowsSimple" :columns="columnsSimple">
            <template #weight="{ value }"> {{ value }} kg </template>
            <template #age="{ value }"> {{ value }} years </template>
        </lv-table>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="templateSimple" />
    <lv-code v-space-after="1" lang="js" :code="scriptSimple" />

    <lv-heading v-space-after="1" :level="6">With Options</lv-heading>
    <lv-card v-space-after="1" >
        <lv-table :rows="rowsOptions" :columns="columnsOptions" :row-action="rowAction">
            <template #weight="{ value }"> {{ value }} kg </template>
            <template #age="{ value }"> {{ value }} years </template>
            <template #options>
                <lv-popover placement="bottom" trigger="hover">
                    <template #trigger>
                        <lv-button size="small" label="Options" color="solid-dimmed-primary"/>
                    </template>
                    <template #content>
                        <lv-group direction="column">
                            <lv-button size="small" label="Add" color="ghost-default"/>
                            <lv-button size="small" label="Delete" color="ghost-default"/>
                        </lv-group>
                    </template>
                </lv-popover>
            </template>
        </lv-table>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="templateOptions" />
    <lv-code v-space-after="1" lang="js" :code="scriptOptions" />
</template>

<script>
const templateOptions = `
<lv-table :rows="rowsOptions" :columns="columnsOptions">
    <template #weight="{ value }"> {{ value }} kg </template>
    <template #age="{ value }"> {{ value }} years </template>
    <template #options>
        <lv-popover placement="bottom" trigger="hover">
            <template #trigger>
                <lv-button size="small" label="Options" color="solid-dimmed-primary"/>
            </template>
            <template #content>
                <lv-group direction="column">
                    <lv-button size="small" label="Add" color="ghost-default"/>
                    <lv-button size="small" label="Delete" color="ghost-default"/>
                </lv-group>
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
const templateSimple = `
<lv-table :rows="rowsSimple" :columns="columnsSimple">
    <template #weight="{ value }"> {{ value }} kg </template>
    <template #age="{ value }"> {{ value }} years </template>
</lv-table>
`.trim();
const scriptSimple = `
rowsSimple: [
    { age: 33, gender: 'male', name: 'Bob', weight: 80 },
    { age: 43, gender: 'female', name: 'Jane', weight: 69 },
    { age: 56, gender: 'male', name: 'George', weight: 131 },
],
columnsSimple: {
    name: {
        title: 'Name',
    },
    gender: {
        title: 'Gender',
    },
    age: {
        title: 'Age',
    },
    weight: {
        title: 'Weight',
    },
},
`.trim();

export default {
    data() {
        return {
            templateSimple,
            scriptSimple,
            templateOptions,
            scriptOptions,
            rowsSimple: [
                { age: 33, gender: 'male', name: 'Bob', weight: 80 },
                { age: 43, gender: 'female', name: 'Jane', weight: 69 },
                { age: 56, gender: 'male', name: 'George', weight: 131 },
            ],
            columnsSimple: {
                name: {
                    title: 'Name',
                },
                gender: {
                    title: 'Gender',
                },
                age: {
                    title: 'Age',
                },
                weight: {
                    title: 'Weight',
                },
            },
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
        };
    },
    methods: {
        rowAction({ row }) {
            console.log(row);
        }
    }
};
</script>
