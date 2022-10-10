<template>
    <lv-heading v-space-after="0.5" :level="3">Icon</lv-heading>
    <lv-heading v-space-after="1" sub :level="6">Use lucide icons in your project</lv-heading>

    <lv-card v-space-after="1">
        <lv-icon name="github" :push=".5" />
        <lv-icon name="rocket" :push=".5" size="24"/>
        <lv-icon name="moon" size="32"/>
    </lv-card>

    <lv-code lang="html" :code="code" v-space-after="1"/>

    <lv-paragraph>
        You can check all possible icons at <lv-link to="http://www.lucide.dev" target="_blank">lucide.dev</lv-link>!
    </lv-paragraph>
</template>

<script>
const code = `
<lv-icon name="github" :push=".5" />
<lv-icon name="rocket" :push=".5" size="24"/>
<lv-icon name="moon" size="32"/>
`.trim();
export default {
    data() {
        return {
            code
        }
    }
}
</script>
