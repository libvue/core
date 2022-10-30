<template>
    <lv-heading v-space-after="0.5" :level="3">Button</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A simple button component</lv-heading>

    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #colors>
            <lv-heading v-space-after="1" :level="6">Solid</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-button label="Default" color="solid-default" />
                    <lv-button label="Warning" color="solid-warning" />
                    <lv-button label="Danger" color="solid-danger" />
                    <lv-button label="Info" color="solid-info" />
                    <lv-button label="Success" color="solid-success" />
                    <lv-button label="Primary" color="solid-primary" />
                    <lv-button label="Secondary" color="solid-secondary" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorSolid" />

            <lv-heading v-space-after="1" :level="6">Solid Dimmed</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-button label="Dimmed Default" color="solid-dimmed-default" />
                    <lv-button label="Dimmed Warning" color="solid-dimmed-warning" />
                    <lv-button label="Dimmed Danger" color="solid-dimmed-danger" />
                    <lv-button label="Dimmed Info" color="solid-dimmed-info" />
                    <lv-button label="Dimmed Success" color="solid-dimmed-success" />
                    <lv-button label="Dimmed Primary" color="solid-dimmed-primary" />
                    <lv-button label="Dimmed Secondary" color="solid-dimmed-secondary" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorSolidDimmed" />

            <lv-heading v-space-after="1" :level="6">Outline</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-button label="Outline Default" color="outline-default"/>
                    <lv-button label="Outline Warning" color="outline-warning" />
                    <lv-button label="Outline Danger" color="outline-danger" />
                    <lv-button label="Outline Info" color="outline-info" />
                    <lv-button label="Outline Success" color="outline-success" />
                    <lv-button label="Outline Primary" color="outline-primary" />
                    <lv-button label="Outline Secondary" color="outline-secondary" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorOutline" />

            <lv-heading v-space-after="1" :level="6">Ghost</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-button label="Ghost Default" color="ghost-default"/>
                    <lv-button label="Ghost Warning" color="ghost-warning" />
                    <lv-button label="Ghost Danger" color="ghost-danger" />
                    <lv-button label="Ghost Info" color="ghost-info" />
                    <lv-button label="Ghost Success" color="ghost-success" />
                    <lv-button label="Ghost Primary" color="ghost-primary" />
                    <lv-button label="Ghost Secondary" color="ghost-secondary" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorGhost" />
        </template>
        <template #states>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-button label="loading" loading />
                    <lv-button disabled label="Disabled" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="code.states" />
        </template>
        <template #icons>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-button icon="rocket" label="Hello" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="code.icons" />
        </template>
        <template #align>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-button icon="rocket" label="Default (center)" />
                    <lv-button icon="rocket" label="Left" align="left" />
                    <lv-button icon="rocket" label="Right" align="right" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="code.align" />
        </template>
        <template #sizes>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-button label="Large" size="large" icon="github" />
                    <lv-button label="Default" size="default" icon="github" />
                    <lv-button label="Small" size="small" icon="github" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="code.align" />
        </template>
    </lv-tabs>
</template>

<script>
const codeColorSolid = `
<lv-button label="Default" color="solid-default" />
<lv-button label="Warning" color="solid-warning" />
<lv-button label="Danger" color="solid-danger" />
<lv-button label="Info" color="solid-info" />
<lv-button label="Success" color="solid-success" />
<lv-button label="Primary" color="solid-primary" />
<lv-button label="Secondary" color="solid-secondary" />
`.trim();
const codeColorSolidDimmed = `
<lv-button label="Dimmed Default" color="solid-dimmed-default" />
<lv-button label="Dimmed Warning" color="solid-dimmed-warning" />
<lv-button label="Dimmed Danger" color="solid-dimmed-danger" />
<lv-button label="Dimmed Info" color="solid-dimmed-info" />
<lv-button label="Dimmed Success" color="solid-dimmed-success" />
<lv-button label="Dimmed Primary" color="solid-dimmed-primary" />
<lv-button label="Dimmed Secondary" color="solid-dimmed-secondary" />
`.trim();
const codeColorOutline = `
<lv-button label="Outline Default" color="outline-default"/>
<lv-button label="Outline Warning" color="outline-warning" />
<lv-button label="Outline Danger" color="outline-danger" />
<lv-button label="Outline Info" color="outline-info" />
<lv-button label="Outline Success" color="outline-success" />
<lv-button label="Outline Primary" color="outline-primary" />
<lv-button label="Outline Secondary" color="outline-secondary" />
`.trim();
const codeColorGhost = `
<lv-button label="Ghost Default" color="ghost-default"/>
<lv-button label="Ghost Warning" color="ghost-warning" />
<lv-button label="Ghost Danger" color="ghost-danger" />
<lv-button label="Ghost Info" color="ghost-info" />
<lv-button label="Ghost Success" color="ghost-success" />
<lv-button label="Ghost Primary" color="ghost-primary" />
<lv-button label="Ghost Secondary" color="ghost-secondary" />
`.trim();
export default {
    data() {
        return {
            activeTab: 'colors',
            tabs: [
                { id: 'colors', title: 'Colors', icon: 'palette' },
                { id: 'states', title: 'States', icon: 'loader-2' },
                { id: 'icons', title: 'Icons', icon: 'box-select' },
                { id: 'align', title: 'Text Alignment', icon: 'align-center' },
                { id: 'sizes', title: 'Sizes', icon: 'scaling' },
            ],
            codeColorSolid,
            codeColorSolidDimmed,
            codeColorOutline,
            codeColorGhost,
            code: {
                states: `<lv-button label="loading" loading />\n<lv-button disabled label="Disabled" />`,
                icons: `<lv-button icon="rocket" label="Hello" />`,
                align: `<lv-button icon="rocket" label="Default (center)" />\n<lv-button icon="rocket" label="Left" align="left" />\n<lv-button icon="rocket" label="Right" align="right" />`,
            },
        };
    },
};
</script>
