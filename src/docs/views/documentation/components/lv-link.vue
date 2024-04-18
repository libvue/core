<template>
    <lv-heading v-space-after="0.5" :level="3">Link</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Link anything to anywhere</lv-heading>

    <lv-notice color="solid-dimmed-success" v-space-after="1" icon="accessibility">
        <lv-flex gap=".2rem">
            Using <lv-link color="currentColor" href="https://www.w3.org/WAI/ARIA/apg/patterns/link/" target="_blank" highlight>w3.org Aria Link Pattern</lv-link>
        </lv-flex>
    </lv-notice>

    <lv-card v-space-after="1">
        <lv-link>No Styling by default</lv-link>
    </lv-card>
    <code-preview v-space-after="1" lang="html" code='<lv-link>No Styling by default</lv-link>' />

    <lv-card v-space-after="1">
        <lv-link highlight>Highlighted</lv-link>
    </lv-card>
    <code-preview v-space-after="1" lang="html" code='<lv-link highlight>Highlighted</lv-link>' />

    <lv-card v-space-after="1">
        <lv-link :zoom-on-hover="true"><lv-card>Any content</lv-card></lv-link>
    </lv-card>
    <code-preview v-space-after="1" lang="html" code='<lv-link :zoom-on-hover="true"><lv-card>Any content</lv-card></lv-link>' />
    <component-details :slots="['default']" component="LvLink"></component-details>
</template>

<script>
export default {
    data() {
        return { };
    },
};
</script>
