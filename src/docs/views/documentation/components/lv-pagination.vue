<template>
    <lv-heading v-space-after="0.5" :level="3">Pagination</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A nice little wrapper around your content</lv-heading>
    <lv-card v-space-after="1">
        <lv-pagination :total-pages="100" v-model="model"/>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />
    <component-details component="LvPagination"></component-details>
</template>

<script>
export default {
    data() {
        return {
            code: `<lv-pagination :total-pages="100" v-model="model"/>`,
            model: '1',
        };
    },
};
</script>
