<template>
    <lv-heading v-space-after="0.5" :level="3">Spacing</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">All of our components are margin-less.</lv-heading>

    <lv-heading v-space-after="1" :level="6">Use v-space-after directive</lv-heading>
    <lv-paragraph v-space-after="1">
        We don't know the spacing we should apply, so we do NOT apply any. Use the v-space-after directive to apply
        spacing to the components. This directive automatically checks for the direction if you are using flex.
    </lv-paragraph>
    <lv-code v-space-after="1" :code="directiveCode" lang="html" />
    <lv-heading v-space-after="1" :level="6">Only install the directive</lv-heading>
    <lv-code v-space-after="1" :code="installDirective" lang="js" />
</template>

<script>
export default {
    data() {
        return {
            directiveCode: `<lv-heading v-space-after="1">`,
            installDirective: `import { spaceAfter } from 'libvue';\napp.directive(spaceAfter)`,
        };
    },
};
</script>
