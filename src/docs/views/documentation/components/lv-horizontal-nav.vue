<template>
    <lv-heading v-space-after="0.5" :level="3">Horizontal Navigation</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Some components to help you construct a vertical Menu</lv-heading>

    <lv-card v-space-after="1">
        <lv-flex>
            <lv-horizontal-nav-item v-space-after="1" label="Documentation">
                <lv-horizontal-nav-group v-space-after="0.5" label="Getting Started">
                    <lv-horizontal-nav-item v-space-after="0.5" label="Install" />
                    <lv-horizontal-nav-item label="Uninstall" />
                </lv-horizontal-nav-group>
                <lv-horizontal-nav-group label="About us">
                    <lv-horizontal-nav-item v-space-after="0.5" label="Meet the team" />
                    <lv-horizontal-nav-item label="Jobs" />
                </lv-horizontal-nav-group>
            </lv-horizontal-nav-item>
            <lv-horizontal-nav-item v-space-after="1" label="Extensions" />
        </lv-flex>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />
    <component-details
        v-space-after="1"
        title="LvHorizontalNavItem"
        component="LvHorizontalNavItem"
    ></component-details>
    <component-details title="LvHorizontalNavGroup" component="LvHorizontalNavGroup"></component-details>
</template>

<script>
const code = `
<lv-flex>
    <lv-horizontal-nav-item v-space-after="1" label="Documentation">
        <lv-horizontal-nav-group v-space-after="0.5" label="Getting Started">
            <lv-horizontal-nav-item v-space-after="0.5" label="Install" />
            <lv-horizontal-nav-item label="Uninstall" />
        </lv-horizontal-nav-group>
        <lv-horizontal-nav-group label="About us">
            <lv-horizontal-nav-item v-space-after="0.5" label="Meet the team" />
            <lv-horizontal-nav-item label="Jobs" />
        </lv-horizontal-nav-group>
    </lv-horizontal-nav-item>
    <lv-horizontal-nav-item v-space-after="1" label="Extensions" />
</lv-flex>
`.trim();
export default {
    data() {
        return {
            code,
        };
    },
};
</script>
