<template>
    <lv-heading v-space-after="0.5" :level="3">v-space-after</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Used for creating some space between your elements</lv-heading>
    <lv-heading v-space-after="1" :level="6">Install v-space-after directive</lv-heading>
    <lv-code v-space-after="1" :code="installDirective" lang="javascript" />

    <lv-heading v-space-after="1" :level="6">Example</lv-heading>
    <lv-card v-space-after="1">
        <lv-card v-space-after="1" :level="5">I'm a card with v-space-after=1</lv-card>
        <lv-card v-space-after="2">
            I'm a card with v-space-after=2
        </lv-card>
        <lv-card>
            I'm here for fun
        </lv-card>
    </lv-card>
    <lv-code v-space-after="1" :code="codeExample" lang="html" />
</template>

<script>
const codeExample = `
<lv-card v-space-after="1" :level="5">I'm a card with v-space-after=1</lv-card>
<lv-card v-space-after="2">
    I'm a card with v-space-after=2
</lv-card>
<lv-card>
    I'm here for fun
</lv-card>
`.trim();
export default {
    data() {
        return {
            codeExample,
            installDirective: `import { spaceAfter } from '@libvue/core';\napp.directive(spaceAfter)`,
        };
    },
};
</script>
