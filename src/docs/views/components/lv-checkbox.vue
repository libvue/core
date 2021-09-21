<template>
  <lv-heading :level="3" sticky>Checkbox</lv-heading>
  <lv-heading sub :level="6">A simple checkbox</lv-heading>
  <lv-group direction="column">
    <lv-checkbox :model-value="true" label="im a checkbox"/>
    <lv-checkbox :model-value="true" disabled label="im a checkbox"/>
    <lv-checkbox disabled label="im a checkbox"/>
    <lv-checkbox loading label="im a checkbox"/>
  </lv-group>
  <lv-code title="code" lang="html" :code="code"/>
</template>

<script>
export default {
  data() {
    return {
      code: `<lv-checkbox :model-value="true" label="im a checkbox"/>\n<lv-checkbox :model-value="true" disabled label="im a checkbox"/>\n<lv-checkbox disabled label="im a checkbox"/>\n<lv-checkbox loading label="im a checkbox"/>`
    }
  }
}
</script>