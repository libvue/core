<template>
    <lv-heading v-space-after="0.5" :level="3">Progress Bar</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Used for showing the completion progress of a task.</lv-heading>
    <lv-card v-space-after="1">
        <lv-progress-bar :value="60"/>
    </lv-card>
    <lv-code :code="code" lang="html" v-space-after="1"></lv-code>
    <component-details component="LvProgressBar"></component-details>
</template>

<script>
const code = `
<lv-progress-bar :value="60"/>
`.trim();
export default {
    data() {
        return {
            code
        }
    }
}
</script>
