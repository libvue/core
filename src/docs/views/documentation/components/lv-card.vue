<template>
    <lv-heading v-space-after="0.5" :level="3">Card</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A nice little wrapper around your content</lv-heading>

    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #default>
            <lv-card v-space-after="1">I'm a default card</lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeDefault" />
        </template>
        <template #inline>
            <lv-card v-space-after="1" inline>I'm an inline card</lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeInline" />
        </template>
        <template #alt-padding>
            <lv-card v-space-after="1" padding="3rem">Altered padding</lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeAltPadding" />
            <lv-card v-space-after="1" :padding="false">No padding</lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeNoPadding" />
        </template>
        <template #no-elevation>
            <lv-card v-space-after="1" :elevation="false">No elevation</lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeNoElevation" />
        </template>
        <template #no-border>
            <lv-card v-space-after="1" :border="false">No border</lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeNoBorder" />
        </template>
    </lv-tabs>
    <component-details component="LvCard"></component-details>
</template>

<script>
const codeDefault = `
<lv-card>I'm a default card</lv-card>
`.trim();
const codeInline = `
<lv-card inline>I'm an inline card</lv-card>
`.trim();
const codeNoPadding = `
<lv-card v-space-after="1" :padding="false">No padding</lv-card>
`.trim();
const codeAltPadding = `
<lv-card v-space-after="1" padding="3rem">No padding</lv-card>
`.trim();
const codeNoElevation = `
<lv-card v-space-after="1" :elevation="false">No elevation</lv-card>
`.trim();
const codeNoBorder = `
<lv-card v-space-after="1" :border="false">No border</lv-card>
`.trim();

export default {
    data() {
        return {
            activeTab: 'default',
            tabs: [
                { id: 'default', title: 'Default' },
                { id: 'inline', title: 'Inline' },
                { id: 'alt-padding', title: 'Altered Padding' },
                { id: 'no-elevation', title: 'No Elevation' },
                { id: 'no-border', title: 'No Border' },
            ],
            codeDefault,
            codeInline,
            codeNoPadding,
            codeNoElevation,
            codeNoBorder,
            codeAltPadding,
        };
    },
};
</script>
