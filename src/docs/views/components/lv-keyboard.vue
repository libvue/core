<template>
    <lv-heading :level="3" v-space-after="0.5">Keyboard</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">The Keyboard Input element</lv-heading>

    <lv-card v-space-after="1">
        Press <lv-keyboard>CTRL</lv-keyboard> and <lv-keyboard>V</lv-keyboard> to paste your selection.
    </lv-card>

    <lv-code lang="html" :code="code"/>
</template>

<script>
const code = `Press <lv-keyboard>CTRL</lv-keyboard> and <lv-keyboard>V</lv-keyboard> to paste your selection.`;

export default {
    data() {
        return {
            code,
        }
    }
}
</script>