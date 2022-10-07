<template>
    <lv-heading :level="3" v-space-after="0.5">v-badge</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">Badge everything!</lv-heading>
    <lv-paragraph v-space-after="1">
        We're tired of adding a badge in every component. Now you can badge everything with a simple directive
    </lv-paragraph>
    <lv-card v-badge="';)'" v-space-after="1">
        <lv-button label="Im a button" v-badge="'badge!'"/>
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