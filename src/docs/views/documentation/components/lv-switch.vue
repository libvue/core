<template>
    <lv-heading v-space-after="0.5" :level="3">Switch</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">An alternate switch</lv-heading>

    <lv-notice color="solid-dimmed-success" v-space-after="1" icon="accessibility">
        <lv-flex gap=".2rem">
            Using <lv-link color="currentColor" href="https://www.w3.org/WAI/ARIA/apg/patterns/switch/" target="_blank" highlight>w3.org Aria Switch Pattern</lv-link>
        </lv-flex>
    </lv-notice>

    <lv-card v-space-after="1">
        <lv-flex direction="column">
            <lv-switch v-model="model" label="im a switch" />
            <lv-switch v-model="model" disabled label="im a disabled switch" />
            <lv-switch v-model="model" loading label="im a loading switch" />
        </lv-flex>
    </lv-card>
    <code-preview v-space-after="1" lang="html" :code="code" />
    <component-details component="LvSwitch"></component-details>
</template>

<script>
const code = `
<lv-switch v-model="model" label="im a switch" />
<lv-switch v-model="model" disabled label="im a disabled switch" />
<lv-switch v-model="model" loading label="im a loading switch" />
`.trim();
export default {
    data() {
        return {
            code,
            model: true,
        };
    },
};
</script>
