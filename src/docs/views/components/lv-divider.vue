<template>
    <lv-heading v-space-after="0.5" :level="3">Divider</lv-heading>
    <lv-heading v-space-after="1" sub :level="6">Cut the content!</lv-heading>

    <lv-heading v-space-after="1" :level="6">Horizontal</lv-heading>
    <lv-card v-space-after="1">
        <lv-divider></lv-divider>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />

    <lv-heading v-space-after="1" :level="6">Vertical</lv-heading>
    <lv-card v-space-after="1">
        <lv-group gap="10px">
            <lv-button v-space-after="1" label="Text" />
            <lv-divider v-space-after="1" direction="vertical"></lv-divider>
            <lv-button label="Text" />
        </lv-group>
    </lv-card>
    <lv-code lang="html" :code="codeVertical" />
</template>

<script>
const code = `<hr class="lv-divider" />`;
const codeVertical = `
<lv-group gap="10px">
    <lv-button v-space-after="1" label="Text"/>
    <lv-divider v-space-after="1" direction="vertical"></lv-divider>
    <lv-button label="Text"/>
</lv-group>
`.trim();

export default {
    data() {
        return {
            code,
            codeVertical,
        };
    },
};
</script>
