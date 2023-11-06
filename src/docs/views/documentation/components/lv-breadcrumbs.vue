<template>
    <lv-heading v-space-after="0.5" :level="3">Breadcrumbs</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Visualize a path within your site</lv-heading>

    <lv-notice color="solid-dimmed-success" v-space-after="1" icon="accessibility">Follows w3.org Aria Breadcrumb Pattern</lv-notice>

    <lv-card v-space-after="1">
        <lv-breadcrumbs :crumbs="crumbs" home-path="/docs/lv-breadcrumbs" show-home />
    </lv-card>
    <code-preview v-space-after="1" lang="html" :code="code" />
    <code-preview v-space-after="1" lang="javascript" :code="codeScript" />
    <component-details component="LvBreadcrumbs"></component-details>
</template>

<script>
const code = `<lv-breadcrumbs :crumbs="crumbs" home-path="/docs/lv-breadcrumbs" show-home />`;
const codeScript = `
export default {
    data() {
        return {
            crumbs: [
                { title: 'Dashboard', path: '/docs/lv-breadcrumbs' },
                { title: 'Products', path: '/docs/lv-breadcrumbs' },
                { title: 'Orders', path: '/docs/lv-breadcrumbs' },
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
                { title: 'Dashboard', path: '/docs/lv-breadcrumbs' },
                { title: 'Products', path: '/docs/lv-breadcrumbs' },
                { title: 'Orders', path: '/docs/lv-breadcrumbs' },
            ],
        };
    },
};
</script>
