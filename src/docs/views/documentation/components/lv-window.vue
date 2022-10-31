<template>
    <lv-heading v-space-after="0.5" :level="3">Window</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A simple browser window</lv-heading>
    <lv-card v-space-after="1">
        <lv-window title="This is a window" height="200px">
            And this is its content
        </lv-window>
    </lv-card>
    <lv-code :code="code" lang="html"></lv-code>
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
