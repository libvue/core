<template>
    <lv-heading :level="3" v-space-after="0.5">Button</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">A simple button component</lv-heading>

    <lv-tabs :tabs="tabs" :active="activeTab" @change="(v) => activeTab = v">
        <template #colors="{ tab }">
            <lv-group v-space-after="1">
                <lv-button label="Default" />
                <lv-button label="Primary" color="primary" />
                <lv-button label="Warning" color="warning" />
                <lv-button label="Info" color="info" />
                <lv-button label="Success" color="success" />
            </lv-group>
            <lv-code v-space-after="1" lang="html" :code="code.color" />
        </template>
        <template #types="{ tab }">
            <lv-group v-space-after="1">
                <lv-button label="Default" />
                <lv-button label="Ghost" type="ghost" />
                <lv-button label="Ghost Primary" type="ghost" color="primary" />
                <lv-button label="Outline" type="outline" />
                <lv-button label="Outline Primary" type="outline" color="primary" />
            </lv-group>
            <lv-code v-space-after="1" lang="html" :code="code.types" />
        </template>
        <template #states="{ tab }">
            <lv-group v-space-after="1">
                <lv-button label="loading" loading />
                <lv-button disabled label="Disabled" />
            </lv-group>
            <lv-code v-space-after="1" lang="html" :code="code.states" />
        </template>
        <template #icons="{ tab }">
            <lv-group v-space-after="1">
                <lv-button icon="rocket" label="Hello" />
            </lv-group>
            <lv-code v-space-after="1" lang="html" :code="code.icons" />
        </template>
        <template #align>
            <lv-group v-space-after="1" fill>
                <lv-button icon="rocket" label="Default (center)" />
                <lv-button icon="rocket" label="Left" align="left" />
                <lv-button icon="rocket" label="Right" align="right" />
            </lv-group>
            <lv-code v-space-after="1" lang="html" :code="code.align" />
        </template>
    </lv-tabs>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'colors',
            tabs: [
                { id: 'colors', title: 'Colors', icon: 'paint-tool' },
                { id: 'types', title: 'Types', icon: 'minus-path' },
                { id: 'states', title: 'States', icon: 'spinner' },
                { id: 'icons', title: 'Icons', icon: 'icons' },
                { id: 'align', title: 'Text Alignment', icon: 'align-center' }
            ],
            code: {
                color: `<lv-button label="Default" />\n<lv-button label="Primary" color="primary" />\n<lv-button label="Warning" color="warning" />\n<lv-button label="Info" color="info" />\n<lv-button label="Success" color="success" />`,
                types: `<lv-button label="Default" />\n<lv-button label="Ghost" type="ghost" />\n<lv-button label="Ghost Primary" type="ghost" color="primary" />\n<lv-button label="Outline" type="outline" />\n<lv-button label="Outline Primary" type="outline" color="primary" />`,
                states: `<lv-button label="loading" loading />\n<lv-button disabled label="Disabled" />`,
                icons: `<lv-button icon="rocket" label="Hello" />`,
                align: `<lv-button icon="rocket" label="Default (center)" />\n<lv-button icon="rocket" label="Left" align="left" />\n<lv-button icon="rocket" label="Right" align="right" />`,
            }
        }
    }
}
</script>