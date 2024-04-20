<template>
    <lv-heading v-space-after="0.5" :level="3">Header</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A predesigned header</lv-heading>

    <lv-card v-space-after="1">
        <lv-header>
            <template #branding>
                My Logo
            </template>
            <template #search>
                <lv-input placeholder="Search docs" icon="search"/>
            </template>
            <template #navigation>
                Navigation
            </template>
            <template #extra>
                <lv-button icon="github" color="ghost-default" />
            </template>
        </lv-header>
    </lv-card>

    <code-preview v-space-after="1" lang="html" :code="code" />
    <component-details component="LvHeader" :slots="['branding', 'search', 'navigation', 'extra']"></component-details>
</template>

<script>
const code = `
<lv-header>
    <template #branding>
        My Logo
    </template>
    <template #search>
        <lv-input placeholder="Search docs" icon="search"/>
    </template>
    <template #navigation>
        Navigation
    </template>
    <template #extra>
        <lv-button icon="github" color="ghost-default" />
    </template>
</lv-header>
`.trim();
export default {
    data() {
        return {
            code,
        };
    },
};
</script>
