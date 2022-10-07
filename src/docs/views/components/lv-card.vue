<template>
    <lv-heading v-space-after="0.5" :level="3">Card</lv-heading>
    <lv-heading v-space-after="1" sub :level="6">A nice little wrapper around your content</lv-heading>
    <lv-card v-space-after="1"> Hi, im a card </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: `<lv-card>\n  Hi, im a card\n</lv-card>`,
        };
    },
};
</script>
