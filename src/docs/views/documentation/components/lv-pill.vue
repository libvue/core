<template>
    <lv-heading v-space-after="0.5" :level="3">Pill</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A rectangle that visualizes a tag (a.k.a chip)</lv-heading>

    <lv-tabs v-space-after="1" :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #icons>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-pill text="Github Icon" color="solid-dimmed-default" icon="github" />
                </lv-flex>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeIcons" />
        </template>
        <template #states>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-pill prefix="State:" text="Closable" color="solid-danger" closable />
                    <lv-pill prefix="State:" text="Closable" color="solid-dimmed-primary" closable />
                </lv-flex>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeStates" />
        </template>
        <template #colors>
            <lv-heading v-space-after="1" :level="6">Solid</lv-heading>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-pill text="Default" color="solid-default" />
                    <lv-pill text="Danger" color="solid-danger" />
                    <lv-pill text="Success" color="solid-success" />
                    <lv-pill text="Warning" color="solid-warning" />
                    <lv-pill text="Info" color="solid-info" />
                    <lv-pill text="Primary" color="solid-primary" />
                    <lv-pill text="Secondary" color="solid-secondary" />
                </lv-flex>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorSolid" />

            <lv-heading v-space-after="1" :level="6">Solid Dimmed</lv-heading>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-pill text="Dimmed Default" color="solid-dimmed-default" />
                    <lv-pill text="Dimmed Danger" color="solid-dimmed-danger" />
                    <lv-pill text="Dimmed Success" color="solid-dimmed-success" />
                    <lv-pill text="Dimmed Warning" color="solid-dimmed-warning" />
                    <lv-pill text="Dimmed Info" color="solid-dimmed-info" />
                    <lv-pill text="Dimmed Primary" color="solid-dimmed-primary" />
                    <lv-pill text="Dimmed Secondary" color="solid-dimmed-secondary" />
                </lv-flex>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorSolidDimmed" />

            <lv-heading v-space-after="1" :level="6">Outline</lv-heading>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-pill text="Default" color="outline-default"/>
                    <lv-pill text="Danger" color="outline-danger" />
                    <lv-pill text="Success" color="outline-success" />
                    <lv-pill text="Warning" color="outline-warning" />
                    <lv-pill text="Danger" color="outline-primary" />
                    <lv-pill text="Info" color="outline-info" />
                </lv-flex>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorOutline" />
        </template>
    </lv-tabs>
    <component-details component="LvTabs"></component-details>
</template>

<script>
const codeColorSolid = `
<lv-pill text="Default"/>
<lv-pill text="Danger" color="danger"/>
<lv-pill text="Success" color="success"/>
<lv-pill text="Warning" color="warning"/>
<lv-pill text="Danger" color="primary"/>
<lv-pill text="Info" color="info"/>
`.trim();
const codeColorSolidDimmed = `
<lv-pill text="Dimmed Default" color="light-default"/>
<lv-pill text="Dimmed Danger" color="light-danger"/>
<lv-pill text="Dimmed Success" color="light-success"/>
<lv-pill text="Dimmed Warning" color="light-warning"/>
<lv-pill text="Dimmed Danger" color="light-primary"/>
<lv-pill text="Dimmed Info" color="light-info"/>
`.trim();
const codeColorOutline = `
<lv-pill text="Default" />
<lv-pill text="Danger" color="danger" />
<lv-pill text="Success" color="success" />
<lv-pill text="Warning" color="warning" />
<lv-pill text="Danger" color="primary" />
<lv-pill text="Info" color="info" />
`.trim();
const codeStates = `
<lv-pill prefix="State:" text="Closable" color="solid-danger" closable />
<lv-pill prefix="State:" text="Closable" color="solid-dimmed-primary" closable />
`.trim();
const codeIcons = `<lv-pill text="Github Icon" color="light-default" icon="github" />`;

export default {
    data() {
        return {
            activeTab: 'colors',
            tabs: [
                { id: 'colors', title: 'Colors', icon: 'palette' },
                { id: 'states', title: 'States', icon: 'loader-2' },
                { id: 'icons', title: 'Icons', icon: 'box-select' },
            ],
            codeColorSolid,
            codeColorSolidDimmed,
            codeColorOutline,
            codeStates,
            codeIcons,
        };
    },
};
</script>
