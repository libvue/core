<template>
    <lv-heading v-space-after="0.5" :level="3">Button</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A simple button component</lv-heading>

    <lv-notice color="solid-dimmed-success" v-space-after="1" icon="accessibility">
        <lv-flex gap=".2rem">
            Using <lv-link color="currentColor" href="https://www.w3.org/WAI/ARIA/apg/patterns/button/" target="_blank" highlight>w3.org Aria Button Pattern</lv-link>
        </lv-flex>
    </lv-notice>

    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #colors>
            <lv-heading v-space-after="1" :level="6">Solid</lv-heading>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-button label="Default" color="solid-default" />
                    <lv-button label="Warning" color="solid-warning" />
                    <lv-button label="Danger" color="solid-danger" />
                    <lv-button label="Info" color="solid-info" />
                    <lv-button label="Success" color="solid-success" />
                    <lv-button label="Primary" color="solid-primary" />
                    <lv-button label="Secondary" color="solid-secondary" />
                </lv-flex>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeColorSolid" />

            <lv-heading v-space-after="1" :level="6">Solid Dimmed</lv-heading>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-button label="Dimmed Default" color="solid-dimmed-default" />
                    <lv-button label="Dimmed Warning" color="solid-dimmed-warning" />
                    <lv-button label="Dimmed Danger" color="solid-dimmed-danger" />
                    <lv-button label="Dimmed Info" color="solid-dimmed-info" />
                    <lv-button label="Dimmed Success" color="solid-dimmed-success" />
                    <lv-button label="Dimmed Primary" color="solid-dimmed-primary" />
                    <lv-button label="Dimmed Secondary" color="solid-dimmed-secondary" />
                </lv-flex>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeColorSolidDimmed" />

            <lv-heading v-space-after="1" :level="6">Outline</lv-heading>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-button label="Outline Default" color="outline-default"/>
                    <lv-button label="Outline Warning" color="outline-warning" />
                    <lv-button label="Outline Danger" color="outline-danger" />
                    <lv-button label="Outline Info" color="outline-info" />
                    <lv-button label="Outline Success" color="outline-success" />
                    <lv-button label="Outline Primary" color="outline-primary" />
                    <lv-button label="Outline Secondary" color="outline-secondary" />
                </lv-flex>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeColorOutline" />

            <lv-heading v-space-after="1" :level="6">Outline Dimmed</lv-heading>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-button label="Outline Dimmed Default" color="outline-dimmed-default"/>
                    <lv-button label="Outline Dimmed Warning" color="outline-dimmed-warning" />
                    <lv-button label="Outline Dimmed Danger" color="outline-dimmed-danger" />
                    <lv-button label="Outline Dimmed Info" color="outline-dimmed-info" />
                    <lv-button label="Outline Dimmed Success" color="outline-dimmed-success" />
                    <lv-button label="Outline Dimmed Primary" color="outline-dimmed-primary" />
                    <lv-button label="Outline Dimmed Secondary" color="outline-dimmed-secondary" />
                </lv-flex>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeColorOutline" />

            <lv-heading v-space-after="1" :level="6">Ghost</lv-heading>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-button label="Ghost Default" color="ghost-default"/>
                    <lv-button label="Ghost Warning" color="ghost-warning" />
                    <lv-button label="Ghost Danger" color="ghost-danger" />
                    <lv-button label="Ghost Info" color="ghost-info" />
                    <lv-button label="Ghost Success" color="ghost-success" />
                    <lv-button label="Ghost Primary" color="ghost-primary" />
                    <lv-button label="Ghost Secondary" color="ghost-secondary" />
                </lv-flex>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeColorGhost" />
        </template>
        <template #states>
            <lv-card v-space-after="1">
                <lv-flex align-items="center">
                    <lv-button label="loading" loading />
                    <lv-button disabled label="Disabled" />
                </lv-flex>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeStates" />
        </template>
        <template #icons>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-button icon="rocket" label="Hello" />
                </lv-flex>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeIcons" />
        </template>
        <template #align>
            <lv-card v-space-after="1">
                <lv-flex fill>
                    <lv-button icon="rocket" label="Default (center)" />
                    <lv-button icon="rocket" label="Left" align="left" />
                    <lv-button icon="rocket" label="Right" align="right" />
                </lv-flex>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeAlign" />
        </template>
        <template #sizes>
            <lv-card v-space-after="1">
                <lv-flex align-items="center">
                    <lv-button label="Large" size="large" icon="github" />
                    <lv-button label="Default" size="default" icon="github" />
                    <lv-button label="Small" size="small" icon="github" />
                    <lv-button label="Tiny" size="tiny" icon="github" />
                </lv-flex>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeSizes" />
        </template>
    </lv-tabs>

    <component-details v-space-after="1" component="LvButton"></component-details>

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
const codeSizes = `
<lv-flex align-items="center">
    <lv-button label="Large" size="large" icon="github" />
    <lv-button label="Default" size="default" icon="github" />
    <lv-button label="Small" size="small" icon="github" />
</lv-flex>
`.trim();
const codeStates = `
<lv-button label="loading" loading />
<lv-button disabled label="Disabled" />
`.trim();
const codeIcons = `
<lv-button icon="rocket" label="Hello" />
`.trim();
const codeAlign = `
<lv-flex>
    <lv-button icon="rocket" label="Default (center)" />
    <lv-button icon="rocket" label="Left" align="left" />
    <lv-button icon="rocket" label="Right" align="right" />
</lv-flex>
`.trim();
export default {
    data() {
        return {
            activeTab: 'colors',
            tabs: [
                { id: 'colors', title: 'Colors', icon: 'palette' },
                { id: 'sizes', title: 'Sizes', icon: 'scaling' },
                { id: 'states', title: 'States', icon: 'loader-2' },
                { id: 'icons', title: 'Icons', icon: 'box-select' },
                { id: 'align', title: 'Text Alignment', icon: 'align-center' },
            ],
            codeColorSolid,
            codeColorSolidDimmed,
            codeColorOutline,
            codeColorGhost,
            codeSizes,
            codeStates,
            codeIcons,
            codeAlign,
        };
    },
};
</script>
