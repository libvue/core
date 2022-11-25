<template>
    <lv-heading v-space-after="0.5" :level="3">Button Group</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Used for making more condensed button groups</lv-heading>
    <lv-card v-space-after="1">
        <lv-button-group>
            <lv-button label="Button One" color="solid-primary"/>
            <lv-button label="Button Two" color="solid-primary"/>
            <lv-button label="Button Three" color="solid-primary"/>
        </lv-button-group>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code"/>
    <component-details component="LvButtonGroup"></component-details>
</template>

<script>
const code = `
<lv-button-group>
    <lv-button label="Button One"/>
    <lv-button label="Button Two"/>
    <lv-button label="Button Three"/>
</lv-button-group>
`.trim();
export default {
    data() {
        return {
            code,
        }
    }
}
</script>