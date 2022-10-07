<template>
    <lv-heading v-space-after="0.5" :level="3">v-badge</lv-heading>
    <lv-heading v-space-after="1" sub :level="6">Badge everything!</lv-heading>
    <lv-paragraph v-space-after="1">
        We're tired of adding a badge in every component. Now you can badge everything with a simple directive
    </lv-paragraph>
    <lv-card v-badge="';)'" v-space-after="1">
        <lv-button v-badge="'badge!'" label="Im a button"/>
    </lv-card>
    <lv-code lang="html" :code="code"/>
</template>

<script>
const code = `<lv-button label="Im a button" v-badge="'badge!'"/>`;
export default {
    data() {
        return {
            code,
        }
    }
}
</script>
