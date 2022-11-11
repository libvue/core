<template>
    <lv-heading v-space-after="0.5" :level="3">Spacing</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">All of our components are marginless.</lv-heading>

    <lv-heading v-space-after="1" :level="6">Use v-space-after directive</lv-heading>
    <lv-paragraph v-space-after="1">
        You can use this directive immediately if you install libvue and register it as a vue plugin.
    </lv-paragraph>
    <lv-paragraph v-space-after="1">
        We don't know the spacing we should apply, so we do NOT apply any. Use the v-space-after directive to apply
        spacing to the components. This directive automatically checks for the flex direction if you are using (inline) flex.
    </lv-paragraph>
    <lv-heading v-space-after="1" :level="6">Example</lv-heading>
    <lv-card v-space-after="1">
        <lv-heading v-space-after="1" :level="5">Heading</lv-heading>
        <lv-paragraph>
            Hello
        </lv-paragraph>
    </lv-card>
    <lv-code v-space-after="1" :code="codeExample" lang="html" />
    <lv-heading v-space-after="1" :level="6">Install directive only</lv-heading>
    <lv-code v-space-after="1" :code="installDirective" lang="javascript" />
</template>

<script>
const codeExample = `
<lv-heading :level="5" v-space-after="1">Heading</lv-heading>
<lv-paragraph>
    Hello
</lv-paragraph>
`.trim();
export default {
    data() {
        return {
            codeExample,
            installDirective: `import { spaceAfter } from 'libvue';\napp.directive(spaceAfter)`,
        };
    },
};
</script>
