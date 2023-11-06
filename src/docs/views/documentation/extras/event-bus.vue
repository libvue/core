<template>
    <lv-heading v-space-after="0.5" :level="3">eventBus</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A simple eventBus using tiny-emitter</lv-heading>
    <lv-heading v-space-after="1" :level="6">Install eventBus utility</lv-heading>
    <code-preview v-space-after="1" :code="installDirective" lang="javascript" />
</template>

<script>
export default {
    data() {
        return {
            installDirective: `import { eventBus } from '@libvue/core';`,
        };
    },
};
</script>
