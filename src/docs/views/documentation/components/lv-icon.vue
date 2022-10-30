<template>
    <lv-heading v-space-after="0.5" :level="3">Icon</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Use lucide icons in your project</lv-heading>

    <lv-heading v-space-after="1" :level="6">Example</lv-heading>
    <lv-card v-space-after="1">
        <lv-icon name="github" :push="0.5" />
        <lv-icon name="rocket" :push="0.5" size="24" />
        <lv-icon name="moon" size="32" />
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />
    <lv-paragraph v-space-after="1">
        You can check all possible icons at <lv-link to="http://www.lucide.dev" target="_blank">lucide.dev</lv-link>!
    </lv-paragraph>

    <lv-heading v-space-after="1" :level="6">Accessibility</lv-heading>
    <lv-paragraph v-space-after="1">
        Applies the
        <lv-link
            to="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden"
            target="_blank"
        >
            aria-hidden
        </lv-link> attribute.
    </lv-paragraph>
</template>

<script>
const code = `
<lv-icon name="github" :push=".5" />
<lv-icon name="rocket" :push=".5" size="24"/>
<lv-icon name="moon" size="32"/>
`.trim();
export default {
    data() {
        return {
            code,
        };
    },
};
</script>
