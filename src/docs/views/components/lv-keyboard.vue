<template>
    <lv-heading v-space-after="0.5" :level="3">Keyboard</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">The Keyboard Input element</lv-heading>

    <lv-card v-space-after="1">
        Press <lv-keyboard>CTRL</lv-keyboard> and <lv-keyboard>V</lv-keyboard> to paste your selection.
    </lv-card>

    <lv-code lang="html" :code="code" />
</template>

<script>
const code = `
Press <lv-keyboard>CTRL</lv-keyboard> and
<lv-keyboard>V</lv-keyboard> to paste your selection.
`.trim();

export default {
    data() {
        return {
            code,
        };
    },
};
</script>
