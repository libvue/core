<template>
    <lv-heading v-space-after="0.5" :level="3">Checkbox</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A simple checkbox</lv-heading>

    <lv-notice color="solid-dimmed-success" v-space-after="1" icon="accessibility">Follows w3.org Aria Checkbox Pattern</lv-notice>

    <lv-card v-space-after="1">
        <lv-flex direction="column">
            <lv-checkbox v-model="checkbox" label-for="a" label="im a checkbox" />
            <lv-checkbox v-model="checkbox" label-for="b" disabled label="im a disabled checkbox" />
            <lv-checkbox v-model="checkbox" label-for="c" loading label="im a loading checkbox" />
            <lv-checkbox :model-value="false" label-for="d" indeterminate label="im a indeterminate checkbox" />
            <lv-checkbox :model-value="true" label-for="e" indeterminate label="im a checked indeterminate checkbox" />
            <lv-checkbox :model-value="false" label-for="f" disabled indeterminate label="im a disabled indeterminate checkbox" />
            <lv-checkbox :model-value="true" label-for="g" disabled indeterminate label="im a disabled checked indeterminate checkbox" />
        </lv-flex>
    </lv-card>
    <code-preview v-space-after="1" lang="html" :code="code" />
    <component-details component="LvCheckbox"></component-details>
</template>

<script>
const code = `
<lv-checkbox v-model="checkbox" label-for="a" label="im a checkbox" />
<lv-checkbox v-model="checkbox" label-for="b" disabled label="im a disabled checkbox" />
<lv-checkbox v-model="checkbox" label-for="c" loading label="im a loading checkbox" />
<lv-checkbox :model-value="false" label-for="d" indeterminate label="im a indeterminate checkbox" />
<lv-checkbox :model-value="true" label-for="e" indeterminate label="im a checked indeterminate checkbox" />
<lv-checkbox :model-value="false" label-for="f" disabled indeterminate label="im a disabled indeterminate checkbox" />
<lv-checkbox :model-value="true" label-for="g" disabled indeterminate label="im a disabled checked indeterminate checkbox" />
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
