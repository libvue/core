<template>
    <lv-heading v-space-after="0.5" :level="3">Sub Header</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Used for when you want stuff under the header</lv-heading>

    <lv-card v-space-after="1">
        <lv-sub-header>
            Subheader content
        </lv-sub-header>
    </lv-card>

    <lv-code v-space-after="1" lang="html" :code="code" />
    <component-details component="LvSubHeader" :slots="['default']"></component-details>
</template>

<script>
const code = `
<lv-sub-header>
    Subheader content
</lv-sub-header>
`.trim();
export default {
    data() {
        return {
            code,
        };
    },
};
</script>
