<template>
  <lv-heading :level="3" sticky>Heading</lv-heading>
  <lv-heading sub :level="6">Headings rock</lv-heading>

  <lv-group>
    <lv-heading :level="1" sticky>Sticky Heading1</lv-heading>
    <lv-heading :level="6" sub>Level 6 sub heading</lv-heading>
    <lv-heading :level="2">Heading2</lv-heading>
    <lv-heading :level="3">Heading3</lv-heading>
    <lv-heading :level="4">Heading4</lv-heading>
    <lv-heading :level="5">Heading5</lv-heading>
    <lv-heading :level="6">Heading6</lv-heading>
  </lv-group>

  <lv-code title="code" lang="html" :code="code"/>
</template>


<script>
export default {
  data() {
    return {
      code: `<lv-heading :level="1" sticky>Sticky Heading1</lv-heading>\n<lv-heading :level="6" sub>Level 6 sub heading</lv-heading>\n<lv-heading :level="2">Heading2</lv-heading>\n<lv-heading :level="3">Heading3</lv-heading>\n<lv-heading :level="4">Heading4</lv-heading>\n<lv-heading :level="5">Heading5</lv-heading>\n<lv-heading :level="6">Heading6</lv-heading>`
    }
  }
}
</script>