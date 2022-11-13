<template>
    <lv-heading v-space-after="0.5" :level="3">LvFileInput</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Component Description</lv-heading>
    <lv-card v-space-after="1">
        <lv-file-input/>
    </lv-card>
    <lv-code lang="html" :code="code"/>
</template>

<script>
const code = `<lv-file-input/>`.trim();
export default {
    data() {
        return {
            code,
        }
    }
}
</script>
