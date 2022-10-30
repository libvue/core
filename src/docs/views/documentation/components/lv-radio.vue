<template>
    <lv-heading v-space-after="0.5" :level="3">Radio</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Radio buttons are typically rendered as small circles, which are filled or highlighted when selected.</lv-heading>

    <lv-card v-space-after="1">
        <lv-group>
            <lv-radio v-model="model" value="a" name="option" label="Kermit" />
            <lv-radio v-model="model" value="b" name="option" label="Batman" />
            <lv-radio v-model="model" value="c" name="option" label="Trump" />
            <lv-radio v-model="model" value="d" name="option" label="Disabled" disabled />
            <lv-radio v-model="model" value="e" name="option" label="Loading" loading />
        </lv-group>
    </lv-card>

    <lv-code lang="html" :code="code"/>
</template>

<script>
const code = `
<lv-radio v-model="model" value="a" name="option" label="Kermit" />
<lv-radio v-model="model" value="b" name="option" label="Batman" />
<lv-radio v-model="model" value="c" name="option" label="Trump" />
<lv-radio v-model="model" value="d" name="option" label="Disabled" disabled />
<lv-radio v-model="model" value="e" name="option" label="Loading" loading />
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
