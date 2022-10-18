<template>
    <lv-heading v-space-after="0.5" :level="3">Accordion</lv-heading>
    <lv-heading v-space-after="1" sub :level="6">An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content.</lv-heading>
    <lv-card v-space-after="1">
        <lv-accordion single>
            <lv-accordion-item title="I'm the first section">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </lv-accordion-item>
            <lv-accordion-item title="I'm the second section">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </lv-accordion-item>
            <lv-accordion-item title="I'm the third section">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </lv-accordion-item>
        </lv-accordion>
    </lv-card>
    <lv-code :code="code" lang="html" />
</template>

<script>
const code = `
<lv-accordion single>
    <lv-accordion-item title="I'm the first section">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </lv-accordion-item>
    <lv-accordion-item title="I'm the second section">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </lv-accordion-item>
    <lv-accordion-item title="I'm the third section">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </lv-accordion-item>
</lv-accordion>
`.trim();
export default {
    data() {
        return {
            code
        }
    }
}
</script>
