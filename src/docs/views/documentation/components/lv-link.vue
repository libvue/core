<template>
    <lv-heading v-space-after="0.5" :level="3">Link</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Link anything to anywhere</lv-heading>
    <lv-card v-space-after="1">
        <lv-link>No Styling by default</lv-link>
    </lv-card>
    <lv-code v-space-after="1" lang="html" code='<lv-link>No Styling by default</lv-link>' />

    <lv-card v-space-after="1">
        <lv-link highlight>Highlighted</lv-link>
    </lv-card>
    <lv-code v-space-after="1" lang="html" code='<lv-link highlight>Highlighted</lv-link>' />

    <lv-card v-space-after="1">
        <lv-link><lv-card>Any content</lv-card></lv-link>
    </lv-card>
    <lv-code v-space-after="1" lang="html" code='<lv-link><lv-card>Any content</lv-card></lv-link>' />
    <component-details component="LvLink"></component-details>
</template>

<script>
export default {
    data() {
        return {
            code: `<lv-link>Hello im a link</lv-link>`,
        };
    },
};
</script>
