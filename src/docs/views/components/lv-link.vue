<template>
    <lv-heading v-space-after="0.5" :level="3">Link</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Easy link with vue-router support</lv-heading>
    <lv-card v-space-after="1">
        <lv-link to="lv-link">Hello im a link</lv-link>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: `<lv-link to="lv-link">Hello im a link</lv-link>`,
        };
    },
};
</script>
