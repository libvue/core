<template>
    <lv-heading v-space-after="0.5" :level="3">Notice</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Just a notice</lv-heading>
    <lv-tabs v-space-after="1" :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #colors>
            <lv-heading v-space-after="1" :level="6">Solid</lv-heading>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-notice text="Default" color="solid-default" />
                    <lv-notice text="Primary" color="solid-primary" />
                    <lv-notice text="Warning" color="solid-warning" />
                    <lv-notice text="Danger" color="solid-danger" />
                    <lv-notice text="Info" color="solid-info" />
                    <lv-notice text="Success" color="solid-success" />
                </lv-flex>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorSolid" />

            <lv-heading v-space-after="1" :level="6">Solid Dimmed</lv-heading>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-notice text="Dimmed Default" color="solid-dimmed-default" />
                    <lv-notice text="Dimmed Primary" color="solid-dimmed-primary" />
                    <lv-notice text="Dimmed Warning" color="solid-dimmed-warning" />
                    <lv-notice text="Dimmed Danger" color="solid-dimmed-danger" />
                    <lv-notice text="Dimmed Info" color="solid-dimmed-info" />
                    <lv-notice text="Dimmed Success" color="solid-dimmed-success" />
                </lv-flex>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorSolidDimmed" />

            <lv-heading v-space-after="1" :level="6">Outline</lv-heading>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-notice text="Outline Default" color="outline-default" />
                    <lv-notice text="Outline Primary" color="outline-primary" />
                    <lv-notice text="Outline Warning" color="outline-warning" />
                    <lv-notice text="Outline Danger" color="outline-danger" />
                    <lv-notice text="Outline Info" color="outline-info" />
                    <lv-notice text="Outline Success" color="outline-success" />
                </lv-flex>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorOutline" />
        </template>
        <template #icons>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-notice text="This notice has an icon" icon="github" />
                </lv-flex>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeIcons" />
        </template>
        <template #buttons>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-notice text="This notice has a button" icon="github" show-button />
                </lv-flex>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeIcons" />
        </template>
        <template #sizes>
            <lv-card v-space-after="1">
                <lv-flex align-items="center">
                    <lv-notice size="large" text="Large" color="solid-dimmed-default" icon="smile" show-button />
                    <lv-notice text="Default" color="solid-dimmed-default" icon="smile" show-button />
                    <lv-notice size="small" text="Small" color="solid-dimmed-default" icon="smile" show-button />
                    <lv-notice size="tiny" text="tiny" color="solid-dimmed-default" icon="smile" show-button />
                </lv-flex>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeIcons" />
        </template>
    </lv-tabs>
    <component-details component="LvNotice"></component-details>
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
const codeColorSolidDimmed = `
<lv-notice text="Dimmed Default" color="solid-dimmed-default" />
<lv-notice text="Dimmed Primary" color="solid-dimmed-primary" />
<lv-notice text="Dimmed Warning" color="solid-dimmed-warning" />
<lv-notice text="Dimmed Danger" color="solid-dimmed-danger" />
<lv-notice text="Dimmed Info" color="solid-dimmed-info" />
<lv-notice text="Dimmed Success" color="solid-dimmed-success" />
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
            codeColorSolidDimmed,
            codeColorOutline,
            codeIcons,
            tabs: [
                { id: 'colors', title: 'Colors', icon: 'palette' },
                { id: 'icons', title: 'Icons', icon: 'box-select' },
                { id: 'buttons', title: 'Buttons', icon: 'link-2' },
                { id: 'sizes', title: 'Sizes', icon: 'scaling' },
            ],
        };
    },
};
</script>
