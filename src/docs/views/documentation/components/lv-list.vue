<template>
    <lv-heading v-space-after="0.5" :level="3">List</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Used to summarize a set of data</lv-heading>

    <lv-card v-space-after="1">
        <lv-list>
            <lv-list-item>Hello World</lv-list-item>
            <lv-list-item>Hello World</lv-list-item>
            <lv-list-item>Hello World</lv-list-item>
            <lv-list-item>Hello World</lv-list-item>
        </lv-list>
    </lv-card>

    <code-preview v-space-after="1" lang="html" :code="code" />
    <component-details component="LvList" title="LvList"></component-details>
    <component-details component="LvListItem" title="LvListItem"></component-details>
</template>

<script>
const code = `
<lv-list>
    <lv-list-item>Hello World</lv-list-item>
    <lv-list-item>Hello World</lv-list-item>
    <lv-list-item>Hello World</lv-list-item>
    <lv-list-item>Hello World</lv-list-item>
</lv-list>
`.trim();

export default {
    data() {
        return {
            code,
        };
    },
};
</script>
