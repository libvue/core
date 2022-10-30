<template>
    <lv-heading v-space-after="0.5" :level="3">Switch</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">An alternate switch</lv-heading>
    <lv-card v-space-after="1">
        <lv-group direction="column">
            <lv-switch v-model="model" label="im a switch" />
            <lv-switch v-model="model" disabled label="im a disabled switch" />
            <lv-switch v-model="model" loading label="im a loading switch" />
        </lv-group>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />
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
