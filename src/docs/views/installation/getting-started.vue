<template>
  <lv-heading :level="3" sticky>Getting Started</lv-heading>
  <lv-heading sub :level="6">How to get started with libvue</lv-heading>

  <lv-heading :level="5">Install entire library</lv-heading>
  <lv-code title="In Terminal" lang="bash" code="npm install --save libvue@latest"/>
  <lv-code title="main.js" :code="installFullCode" lang="js"/>
  <lv-heading :level="5">Cherry pick some components</lv-heading>
  <lv-code title="main.js" :code="installCherryCode" lang="js"/>

  Note: both use a global css file so that this library can also be used in a SSR environment.
</template>

<script>
export default {
  data() {
    return {
      installFullCode: `import 'libvue/dist/style.css'; \nimport libvue from 'libvue';\nVue.use(libvue); // or app.use(libvue) in vue3`,
      installCherryCode: `import 'libvue/dist/style.css'; \nimport { LvButton } from 'libvue';\nVue.component(LvButton); // or app.component(LvButton) in vue3`
    }
  }
}
</script>