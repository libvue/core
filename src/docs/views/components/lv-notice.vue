<template>
    <lv-heading v-space-after="0.5" :level="3">Notice</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Just a notice</lv-heading>
    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #colors="{ tab }">
            <lv-heading v-space-after="1" :level="6">Solid</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-notice text="Default" color="solid-default" />
                    <lv-notice text="Primary" color="solid-primary" />
                    <lv-notice text="Warning" color="solid-warning" />
                    <lv-notice text="Danger" color="solid-danger" />
                    <lv-notice text="Info" color="solid-info" />
                    <lv-notice text="Success" color="solid-success" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorSolid" />

            <lv-heading v-space-after="1" :level="6">Solid Light</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-notice text="Light Default" color="solid-light-default" />
                    <lv-notice text="Light Primary" color="solid-light-primary" />
                    <lv-notice text="Light Warning" color="solid-light-warning" />
                    <lv-notice text="Light Danger" color="solid-light-danger" />
                    <lv-notice text="Light Info" color="solid-light-info" />
                    <lv-notice text="Light Success" color="solid-light-success" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorSolidLight" />

            <lv-heading v-space-after="1" :level="6">Outline</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-notice text="Outline Default" color="outline-default" />
                    <lv-notice text="Outline Primary" color="outline-primary" />
                    <lv-notice text="Outline Warning" color="outline-warning" />
                    <lv-notice text="Outline Danger" color="outline-danger" />
                    <lv-notice text="Outline Info" color="outline-info" />
                    <lv-notice text="Outline Success" color="outline-success" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorOutline" />
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
<lv-notice text="Default" color="solid-default"/>
<lv-notice text="Primary" color="solid-primary" />
<lv-notice text="Warning" color="solid-warning" />
<lv-notice text="Danger" color="solid-danger" />
<lv-notice text="Info" color="solid-info" />
<lv-notice text="Success" color="solid-success" />
`.trim();
const codeColorSolidLight = `
<lv-notice text="Light Default" color="solid-light-default" />
<lv-notice text="Light Primary" color="solid-light-primary" />
<lv-notice text="Light Warning" color="solid-light-warning" />
<lv-notice text="Light Danger" color="solid-light-danger" />
<lv-notice text="Light Info" color="solid-light-info" />
<lv-notice text="Light Success" color="solid-light-success" />
`.trim();
const codeColorOutline = `
<lv-notice text="Outline Default" color="outline-default" />
<lv-notice text="Outline Primary" color="outline-primary" />
<lv-notice text="Outline Warning" color="outline-warning" />
<lv-notice text="Outline Danger" color="outline-danger" />
<lv-notice text="Outline Info" color="outline-info" />
<lv-notice text="Outline Success" color="outline-success" />
`.trim();
const codeIcons = `<lv-notice text="This notice has an icon" icon="github"/>`.trim();
export default {
    data() {
        return {
            activeTab: 'colors',
            codeColorSolid,
            codeColorSolidLight,
            codeColorOutline,
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
