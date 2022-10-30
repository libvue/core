<template>
    <lv-heading v-space-after="0.5" :level="3">Textarea</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Area to write long texts for within a form</lv-heading>
    <lv-card v-space-after="1">
        <lv-textarea/>
    </lv-card>
    <lv-code :code="code" lang="html"/>
</template>

<script>
const code = `<lv-textarea/>`.trim();
export default {
    data() {
        return {
            code,
        }
    }
}
</script>
