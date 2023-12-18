<template>
    <lv-heading v-space-after="0.5" :level="3">Vertical Navigation</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Some components to help you construct a vertical Menu</lv-heading>

    <lv-card v-space-after="1">
        <lv-vertical-nav-group label="Getting Started">
            <lv-vertical-nav-item icon="rocket" label="Install" />
            <lv-vertical-nav-item icon="users" label="About us" />
        </lv-vertical-nav-group>
        <lv-vertical-nav-group label="Components">
            <lv-vertical-nav-list icon="star" label="Featured">
                <lv-vertical-nav-item label="Menu Item" />
                <lv-vertical-nav-item label="Menu Item" />
                <lv-vertical-nav-item label="Menu Item" />
                <lv-vertical-nav-item label="Menu Item" />
            </lv-vertical-nav-list>
        </lv-vertical-nav-group>
    </lv-card>
    <code-preview v-space-after="1" lang="html" :code="code" />

    <component-details v-space-after="1" title="LvVerticalNavItem" component="LvVerticalNavItem"></component-details>
    <component-details v-space-after="1" title="LvVerticalNavList" component="LvVerticalNavList"></component-details>
    <component-details title="LvVerticalNavGroup" component="LvVerticalNavGroup"></component-details>
</template>

<script>
const code = `
<lv-vertical-nav-group label="Getting Started">
    <lv-vertical-nav-item icon="rocket" label="Install" />
    <lv-vertical-nav-item icon="users" label="About us" />
</lv-vertical-nav-group>
<lv-vertical-nav-group label="Components">
    <lv-vertical-nav-list icon="star" label="Featured">
        <lv-vertical-nav-item label="Menu Item" />
        <lv-vertical-nav-item label="Menu Item" />
        <lv-vertical-nav-item label="Menu Item" />
        <lv-vertical-nav-item label="Menu Item" />
    </lv-vertical-nav-list>
</lv-vertical-nav-group>
`.trim();
export default {
    data() {
        return {
            code,
        };
    },
};
</script>
