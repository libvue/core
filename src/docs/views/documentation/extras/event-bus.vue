<template>
    <lv-heading v-space-after="0.5" :level="3">eventBus</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A simple eventBus using tiny-emitter</lv-heading>
    <lv-heading v-space-after="1" :level="6">Example</lv-heading>
    <code-preview v-space-after="1" :code="usageCode" lang="javascript" />
</template>

<script>
const usageCode = `
import { eventBus } from '@libvue/core';

export default {
   mounted() {
      this.eventBus.$on('eventName', (msg) => { console.log(msg) });
   },
   methods: {
      onClick() {
         this.eventBus.$emit('eventName', 'hello world');
      }
   }
}
`.trim();
export default {
    data() {
        return {
            usageCode,
            installDirective: `import { eventBus } from '@libvue/core';`,
        };
    },
};
</script>
