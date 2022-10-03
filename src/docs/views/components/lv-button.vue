<template>
    <lv-heading :level="3" v-space-after="0.5">Button</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">A simple button component</lv-heading>

    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #colors="{ tab }">
            <lv-heading :level="6" v-space-after="1">Solid</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-button label="Default" />
                    <lv-button label="Primary" color="primary" />
                    <lv-button label="Warning" color="warning" />
                    <lv-button label="Info" color="info" />
                    <lv-button label="Success" color="success" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorSolid" />

            <lv-heading :level="6" v-space-after="1">Light</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-button label="Light Default" color="light-default"/>
                    <lv-button label="Light Primary" color="light-primary" />
                    <lv-button label="Light Warning" color="light-warning" />
                    <lv-button label="Light Info" color="light-info" />
                    <lv-button label="Light Success" color="light-success" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorSolidLight" />

            <lv-heading :level="6" v-space-after="1">Outline</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-button label="Outline Default" color-type="outline"/>
                    <lv-button label="Outline Primary" color="primary" color-type="outline" />
                    <lv-button label="Outline Warning" color="warning" color-type="outline" />
                    <lv-button label="Outline Info" color="info" color-type="outline" />
                    <lv-button label="Outline Success" color="success" color-type="outline" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorOutline" />

            <lv-heading :level="6" v-space-after="1">Outline Light</lv-heading>
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-button label="Outline Light Default" color="light-default" color-type="outline"/>
                    <lv-button label="Outline Light Primary" color="light-primary" color-type="outline" />
                    <lv-button label="Outline Light Warning" color="light-warning" color-type="outline" />
                    <lv-button label="Outline Light Info" color="light-info" color-type="outline" />
                    <lv-button label="Outline Light Success" color="light-success" color-type="outline" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeColorOutlineLight" />

        </template>
        <template #states="{ tab }">
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-button label="loading" loading />
                    <lv-button disabled label="Disabled" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="code.states" />
        </template>
        <template #icons="{ tab }">
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
    </lv-tabs>
</template>

<script>
const codeColorSolid = `
<lv-button label="Default" />
<lv-button label="Primary" color="primary" />
<lv-button label="Warning" color="warning" />
<lv-button label="Info" color="info" />
<lv-button label="Success" color="success" />
`.trim();
const codeColorSolidLight = `
<lv-button label="Light Default" color="light-default"/>
<lv-button label="Light Primary" color="light-primary" />
<lv-button label="Light Warning" color="light-warning" />
<lv-button label="Light Info" color="light-info" />
<lv-button label="Light Success" color="light-success" />
`.trim();
const codeColorOutline = `
<lv-button label="Outline Default" color-type="outline"/>
<lv-button label="Outline Primary" color="primary" color-type="outline" />
<lv-button label="Outline Warning" color="warning" color-type="outline" />
<lv-button label="Outline Info" color="info" color-type="outline" />
<lv-button label="Outline Success" color="success" color-type="outline" />
`.trim();
const codeColorOutlineLight = `
<lv-button label="Outline Light Default" color="light-default" color-type="outline"/>
<lv-button label="Outline Light Primary" color="light-primary" color-type="outline" />
<lv-button label="Outline Light Warning" color="light-warning" color-type="outline" />
<lv-button label="Outline Light Info" color="light-info" color-type="outline" />
<lv-button label="Outline Light Success" color="light-success" color-type="outline" />
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
            ],
            codeColorSolid,
            codeColorSolidLight,
            codeColorOutline,
            codeColorOutlineLight,
            code: {
                states: `<lv-button label="loading" loading />\n<lv-button disabled label="Disabled" />`,
                icons: `<lv-button icon="rocket" label="Hello" />`,
                align: `<lv-button icon="rocket" label="Default (center)" />\n<lv-button icon="rocket" label="Left" align="left" />\n<lv-button icon="rocket" label="Right" align="right" />`,
            },
        };
    },
};
</script>
