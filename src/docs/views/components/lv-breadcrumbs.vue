<template>
    <lv-heading v-space-after="0.5" :level="3">Breadcrumbs</lv-heading>
    <lv-heading v-space-after="1" sub :level="6">Visualize the path</lv-heading>
    <lv-card v-space-after="1">
        <lv-breadcrumbs :crumbs="crumbs" home-path="/" show-home />
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />
    <lv-code v-space-after="1" lang="js" :code="codeScript" />
</template>

<script>
const code = `<lv-breadcrumbs :crumbs="crumbs" home-path="/" show-home />`;
const codeScript = `
export default {
    data() {
        return {
            crumbs: [
                { title: 'Dashboard', path: 'lv-breadcrumbs' },
                { title: 'Products', path: 'lv-breadcrumbs' },
                { title: 'Orders', path: 'lv-breadcrumbs' },
            ]
        };
    },
};
`.trim();

export default {
    data() {
        return {
            code,
            codeScript,
            crumbs: [
                { title: 'Dashboard', path: 'lv-breadcrumbs' },
                { title: 'Products', path: 'lv-breadcrumbs' },
                { title: 'Orders', path: 'lv-breadcrumbs' },
            ],
        };
    },
};
</script>
