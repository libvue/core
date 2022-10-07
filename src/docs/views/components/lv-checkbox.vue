<template>
    <lv-heading v-space-after="0.5" :level="3">Checkbox</lv-heading>
    <lv-heading v-space-after="1" sub :level="6">A simple checkbox</lv-heading>
    <lv-card v-space-after="1">
        <lv-group direction="column">
            <lv-checkbox v-model="checkbox" label="im a checkbox" />
            <lv-checkbox v-model="checkbox" disabled label="im a disabled checkbox" />
            <lv-checkbox v-model="checkbox" loading label="im a loading checkbox" />
        </lv-group>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />
</template>

<script>
export default {
    data() {
        return {
            checkbox: true,
            code: `<lv-checkbox :model-value="true" label="im a checkbox"/>\n<lv-checkbox :model-value="true" disabled label="im a checkbox"/>\n<lv-checkbox disabled label="im a checkbox"/>\n<lv-checkbox loading label="im a checkbox"/>`,
        };
    },
};
</script>
