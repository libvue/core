<template>
    <lv-heading v-space-after="0.5" :level="3">Table</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Organize your rows</lv-heading>

    <lv-heading v-space-after="1" :level="6">Simple Table</lv-heading>
    <lv-table v-space-after="1" :rows="rows" :columns="columns">
        <template #weight="{ value }"> {{ value }} kg </template>
        <template #age="{ value }"> {{ value }} years </template>
    </lv-table>
    <lv-code v-space-after="1" lang="html" :code="codeTemplate" />
    <lv-code v-space-after="1" lang="js" :code="codeScript" />
</template>

<script>
export default {
    data() {
        return {
            rows: [
                { age: 33, gender: 'male', name: 'Bob', weight: 80 },
                { age: 43, gender: 'female', name: 'Jane', weight: 69 },
                { age: 56, gender: 'male', name: 'George', weight: 131 },
            ],
            columns: {
                name: {
                    title: 'Name',
                },
                gender: {
                    title: 'Gender',
                },
                age: {
                    title: 'Age',
                    totals: (val) => `${Math.round(val)} years`,
                },
                weight: {
                    title: 'Weight',
                    averages: (val) => `${Math.round(val)} kg`,
                },
            },
            codeTemplate: `<lv-table\n  :rows="rows"\n  :columns="columns"\n  v-space-after="1"\n>\n  <template #weight="{ value }">\n    {{ value }} kg\n  </template>\n  <template #age="{ value }">\n    {{ value }} years\n  </template>\n</lv-table>`,
            codeScript: `export default {\n  data() {\n    rows: [\n      { age: 33, gender: 'male', name: 'Bob', weight: 80 },\n      { age: 43, gender: 'female', name: 'Jane', weight: 69 },\n      { age: 56, gender: 'male', name: 'George', weight: 131 },\n    ],\n    columns: {\n      name: {\n        title: 'Name',\n      },\n      gender: {\n        title: 'Gender',\n      },\n      age: {\n        title: 'Age',\n        totals: (val) => {\n          return \`\${Math.round(val)} years\`\n        },\n      },\n      weight: {\n        title: 'Weight',\n        averages: (val) => {\n          return \`\${Math.round(val)} kg\`\n        },\n      },\n    },\n  }\n}`,
        };
    },
};
</script>