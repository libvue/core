<template>
    <lv-heading v-space-after="0.5" :level="3">Toggle</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A toggleable button</lv-heading>

    <lv-notice color="solid-dimmed-success" v-space-after="1" icon="accessibility">Follows w3.org Aria Button Pattern</lv-notice>

    <lv-card v-space-after="1">
        <lv-flex>
            <lv-toggle v-model="pressedItalic">
                <lv-icon name="italic"/>
            </lv-toggle>
            <lv-toggle v-model="pressedAlign">
                <lv-icon name="align-left"/>
            </lv-toggle>
        </lv-flex>
    </lv-card>
    <code-preview v-space-after="1" :code="code" lang="html"></code-preview>
    <component-details component="LvToggle"></component-details>
</template>

<script>
const code = `
<lv-toggle v-model="pressedItalic">
    <lv-icon name="italic"/>
</lv-toggle>
<lv-toggle v-model="pressedAlign">
    <lv-icon name="align-left"/>
</lv-toggle>
`.trim();
export default {
    data() {
        return {
            code,
            pressedItalic: false,
            pressedAlign: false,
        }
    },
}
</script>
