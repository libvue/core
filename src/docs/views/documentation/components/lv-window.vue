<template>
    <lv-heading v-space-after="0.5" :level="3">Window</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A simple browser window</lv-heading>
    <lv-card v-space-after="1">
        <lv-window title="This is a window" height="200px">
            And this is its content
        </lv-window>
    </lv-card>
    <code-preview v-space-after="1" :code="code" lang="html"></code-preview>
    <component-details component="LvWindow"></component-details>
</template>

<script>
const code = `
<lv-window title="This is a window" height="200px">
    And this is its content
</lv-window>
`.trim();
export default {
    data() {
        return {
            code,
        }
    }
}
</script>
