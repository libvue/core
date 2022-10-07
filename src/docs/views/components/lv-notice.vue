<template>
    <lv-heading v-space-after="0.5" :level="3">Notice</lv-heading>
    <lv-heading v-space-after="1" sub :level="6">Just a notice</lv-heading>
    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #colors="{ tab }">
            <lv-heading v-space-after="1" :level="6">Solid</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-notice text="Default" />
                    <lv-notice text="Primary" color="primary" />
                    <lv-notice text="Warning" color="warning" />
                    <lv-notice text="Danger" color="danger" />
                    <lv-notice text="Info" color="info" />
                    <lv-notice text="Success" color="success" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorSolid" />

            <lv-heading v-space-after="1" :level="6">Light</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-notice text="Light Default" color="light-default" />
                    <lv-notice text="Light Primary" color="light-primary" />
                    <lv-notice text="Light Warning" color="light-warning" />
                    <lv-notice text="Light Danger" color="light-danger" />
                    <lv-notice text="Light Info" color="light-info" />
                    <lv-notice text="Light Success" color="light-success" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorSolidLight" />

            <lv-heading v-space-after="1" :level="6">Outline</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-notice text="Outline Default" color-type="outline" />
                    <lv-notice text="Outline Primary" color="primary" color-type="outline" />
                    <lv-notice text="Outline Warning" color="warning" color-type="outline" />
                    <lv-notice text="Outline Danger" color="danger" color-type="outline" />
                    <lv-notice text="Outline Info" color="info" color-type="outline" />
                    <lv-notice text="Outline Success" color="success" color-type="outline" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorOutline" />

            <lv-heading v-space-after="1" :level="6">Outline Light</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-notice text="Outline Light Default" color="light-default" color-type="outline" />
                    <lv-notice text="Outline Light Primary" color="light-primary" color-type="outline" />
                    <lv-notice text="Outline Light Warning" color="light-warning" color-type="outline" />
                    <lv-notice text="Outline Light Danger" color="light-danger" color-type="outline" />
                    <lv-notice text="Outline Light Info" color="light-info" color-type="outline" />
                    <lv-notice text="Outline Light Success" color="light-success" color-type="outline" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorOutlineLight" />
        </template>
        <template #icons>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-notice text="This notice has an icon" icon="github" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeIcons" />
        </template>
        <template #buttons>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-notice text="This notice has a button" icon="github" show-button />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeIcons" />
        </template>
    </lv-tabs>
</template>

<script>
const codeColorSolid = `
<lv-notice text="Default" />
<lv-notice text="Primary" color="primary" />
<lv-notice text="Warning" color="warning" />
<lv-notice text="Danger" color="danger" />
<lv-notice text="Info" color="info" />
<lv-notice text="Success" color="success" />
`.trim();
const codeColorSolidLight = `
<lv-notice text="Light Default" color="light-default"/>
<lv-notice text="Light Primary" color="light-primary" />
<lv-notice text="Light Warning" color="light-warning" />
<lv-notice text="Light Danger" color="light-danger" />
<lv-notice text="Light Info" color="light-info" />
<lv-notice text="Light Success" color="light-success" />
`.trim();
const codeColorOutline = `
<lv-notice text="Outline Default" color-type="outline"/>
<lv-notice text="Outline Primary" color="primary" color-type="outline" />
<lv-notice text="Outline Warning" color="warning" color-type="outline" />
<lv-notice text="Outline Danger" color="danger" color-type="outline" />
<lv-notice text="Outline Info" color="info" color-type="outline" />
<lv-notice text="Outline Success" color="success" color-type="outline" />
`.trim();
const codeColorOutlineLight = `
<lv-notice text="Outline Light Default" color="light-default" color-type="outline"/>
<lv-notice text="Outline Light Primary" color="light-primary" color-type="outline" />
<lv-notice text="Outline Light Warning" color="light-warning" color-type="outline" />
<lv-notice text="Outline Light Danger" color="light-danger" color-type="outline" />
<lv-notice text="Outline Light Info" color="light-info" color-type="outline" />
<lv-notice text="Outline Light Success" color="light-success" color-type="outline" />
`.trim();
const codeIcons = `<lv-notice text="This notice has an icon" icon="github"/>`.trim();
export default {
    data() {
        return {
            activeTab: 'colors',
            codeColorSolid,
            codeColorSolidLight,
            codeColorOutline,
            codeColorOutlineLight,
            codeIcons,
            tabs: [
                { id: 'colors', title: 'Colors', icon: 'palette' },
                { id: 'icons', title: 'Icons', icon: 'box-select' },
                { id: 'buttons', title: 'Buttons', icon: 'link-2' },
            ],
        };
    },
};
</script>
