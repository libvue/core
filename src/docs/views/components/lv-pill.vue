<template>
    <lv-heading v-space-after="0.5" :level="3">Pill</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A rectangle that visualizes a tag (a.k.a chip)</lv-heading>

    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #icons="{ tab }">
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-pill text="Github Icon" color="solid-light-default" icon="github" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeIcons" />
        </template>
        <template #states="{ tab }">
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-pill text="Closable" color="solid-danger" closable />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeStates" />
        </template>
        <template #colors="{ tab }">
            <lv-heading v-space-after="1" :level="6">Solid</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-pill text="Default" color="solid-default" />
                    <lv-pill text="Danger" color="solid-danger" />
                    <lv-pill text="Success" color="solid-success" />
                    <lv-pill text="Warning" color="solid-warning" />
                    <lv-pill text="Info" color="solid-info" />
                    <lv-pill text="Primary" color="solid-primary" />
                    <lv-pill text="Secondary" color="solid-secondary" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorSolid" />

            <lv-heading v-space-after="1" :level="6">Solid Light</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-pill text="Light Default" color="solid-light-default" />
                    <lv-pill text="Light Danger" color="solid-light-danger" />
                    <lv-pill text="Light Success" color="solid-light-success" />
                    <lv-pill text="Light Warning" color="solid-light-warning" />
                    <lv-pill text="Light Info" color="solid-light-info" />
                    <lv-pill text="Light Primary" color="solid-light-primary" />
                    <lv-pill text="Light Secondary" color="solid-light-secondary" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorSolidLight" />

            <lv-heading v-space-after="1" :level="6">Outline</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-pill text="Default" color="outline-default"/>
                    <lv-pill text="Danger" color="outline-danger" />
                    <lv-pill text="Success" color="outline-success" />
                    <lv-pill text="Warning" color="outline-warning" />
                    <lv-pill text="Danger" color="outline-primary" />
                    <lv-pill text="Info" color="outline-info" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorOutline" />
        </template>
    </lv-tabs>
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
const codeColorSolidLight = `
<lv-pill text="Light Default" color="light-default"/>
<lv-pill text="Light Danger" color="light-danger"/>
<lv-pill text="Light Success" color="light-success"/>
<lv-pill text="Light Warning" color="light-warning"/>
<lv-pill text="Light Danger" color="light-primary"/>
<lv-pill text="Light Info" color="light-info"/>
`.trim();
const codeColorOutline = `
<lv-pill text="Default" />
<lv-pill text="Danger" color="danger" />
<lv-pill text="Success" color="success" />
<lv-pill text="Warning" color="warning" />
<lv-pill text="Danger" color="primary" />
<lv-pill text="Info" color="info" />
`.trim();
const codeStates = `<lv-pill text="Closable" color="danger" closable/>`;
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
            codeColorSolidLight,
            codeColorOutline,
            codeStates,
            codeIcons,
        };
    },
};
</script>
