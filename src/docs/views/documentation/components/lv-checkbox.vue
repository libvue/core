<template>
    <lv-heading v-space-after="0.5" :level="3">Checkbox</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A simple checkbox</lv-heading>
    <lv-card v-space-after="1">
        <lv-flex direction="column">
            <lv-checkbox v-model="checkbox" label="im a checkbox" />
            <lv-checkbox v-model="checkbox" disabled label="im a disabled checkbox" />
            <lv-checkbox v-model="checkbox" loading label="im a loading checkbox" />
            <lv-checkbox :model-value="false" indeterminate label="im a indeterminate checkbox" />
            <lv-checkbox :model-value="true" indeterminate label="im a checked indeterminate checkbox" />
            <lv-checkbox :model-value="false" disabled indeterminate label="im a disabled indeterminate checkbox" />
            <lv-checkbox :model-value="true" disabled indeterminate label="im a disabled checked indeterminate checkbox" />
        </lv-flex>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />
    <component-details component="LvCheckbox"></component-details>
</template>

<script>
const code = `
<lv-checkbox v-model="checkbox" label="im a checkbox" />
<lv-checkbox v-model="checkbox" disabled label="im a disabled checkbox" />
<lv-checkbox v-model="checkbox" loading label="im a loading checkbox" />
<lv-checkbox :model-value="false" indeterminate label="im a indeterminate checkbox" />
<lv-checkbox :model-value="true" indeterminate label="im a checked indeterminate checkbox" />
<lv-checkbox :model-value="false" disabled indeterminate label="im a disabled indeterminate checkbox" />
<lv-checkbox :model-value="true" disabled indeterminate label="im a disabled checked indeterminate checkbox" />
`.trim();
export default {
    data() {
        return {
            code,
            checkbox: true,
        };
    },
};
</script>
