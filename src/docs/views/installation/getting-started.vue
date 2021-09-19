<template>
  <lv-heading :level="3" sticky>Getting Started</lv-heading>
  <lv-heading sub :level="6">How to get started with libvue</lv-heading>

  <lv-heading :level="5">Install entire library</lv-heading>
  <lv-code title="In Terminal" lang="bash" code="npm install --save libvue@latest"/>
  <lv-code title="main.js" :code="installFullCode" lang="js"/>
  <lv-heading :level="5">Cherry pick some components</lv-heading>
  <lv-code title="main.js" :code="installCherryCode" lang="js"/>
</template>

<script>
export default {
  data() {
    return {
      installFullCode: `import libvue from 'libvue';\nVue.use(libvue); // or app.use(libvue) in vue3`,
      installCherryCode: `import { LvButton } from 'libvue';\nVue.component(LvButton); // or app.component(LvButton) in vue3`
    }
  }
}
</script>