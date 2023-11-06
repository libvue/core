<template>
    <lv-heading v-space-after="0.5" :level="3">Radio</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Radio buttons are typically rendered as small circles, which are filled or highlighted when selected.</lv-heading>

    <lv-notice color="solid-dimmed-success" v-space-after="1" icon="accessibility">Follows w3.org Aria Radio Group Pattern</lv-notice>

    <lv-card v-space-after="1">
        <lv-flex>
            <lv-radio v-model="model" value="a" name="option" label="Kermit" label-for="aa" />
            <lv-radio v-model="model" value="b" name="option" label="Batman" label-for="bb" />
            <lv-radio v-model="model" value="c" name="option" label="Trump" label-for="cc" />
            <lv-radio v-model="model" value="d" name="option" label="Disabled" label-for="dd" disabled />
            <lv-radio v-model="model" value="e" name="option" label="Loading" label-for="ee" loading />
        </lv-flex>
    </lv-card>

    <code-preview v-space-after="1" lang="html" :code="code"/>

    <component-details component="LvRadio"></component-details>
</template>

<script>
const code = `
<lv-radio v-model="model" value="a" name="option" label="Kermit" label-for="a" />
<lv-radio v-model="model" value="b" name="option" label="Batman" label-for="b" />
<lv-radio v-model="model" value="c" name="option" label="Trump" label-for="c" />
<lv-radio v-model="model" value="d" name="option" label="Disabled" label-for="d" disabled />
<lv-radio v-model="model" value="e" name="option" label="Loading" label-for="e" loading />
`.trim();
export default {
    data() {
        return {
            code,
            model: 'a',
        };
    },
};
</script>
