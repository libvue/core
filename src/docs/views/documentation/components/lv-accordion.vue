<template>
    <lv-heading v-space-after="0.5" :level="3">Accordion</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">
        An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or
        thumbnail representing a section of content.
    </lv-heading>
    <lv-card v-space-after="1">
        <lv-accordion icon="github" title="Github" initial-expanded>
            GitHub is a web-based platform that provides version control and collaboration tools for software
            development projects.
        </lv-accordion>
        <lv-accordion icon="accessibility" title="Accessibility">
            Accessibility refers to designing products, services, or environments to ensure that they can be used by
            people with disabilities.
        </lv-accordion>
        <lv-accordion icon="bike" title="Bike">
            A bike is a two-wheeled vehicle that is powered by pedaling and commonly used for transportation,
            recreation, or exercise.
        </lv-accordion>
    </lv-card>
    <lv-code v-space-after="1" :code="code" lang="html" />
    <component-details component="LvAccordion"></component-details>
</template>

<script>
import LvAccordion from '../../../../lib/components/LvAccordion/LvAccordion.vue';
import LvCard from '../../../../lib/components/LvCard/LvCard.vue';
import LvHeading from '../../../../lib/components/LvHeading/LvHeading.vue';
import LvCode from '../../../../lib/components/LvCode/LvCode.vue';

const code = `
<lv-accordion icon="github" title="Github" initial-expanded>
    GitHub is a web-based platform that provides version control and collaboration tools for software
    development projects.
</lv-accordion>
<lv-accordion icon="accessibility" title="Accessibility">
    Accessibility refers to designing products, services, or environments to ensure that they can be used by
    people with disabilities.
</lv-accordion>
<lv-accordion icon="bike" title="Bike">
    A bike is a two-wheeled vehicle that is powered by pedaling and commonly used for transportation,
    recreation, or exercise.
</lv-accordion>
`.trim();
export default {
    components: { LvCode, LvHeading, LvCard, LvAccordion },
    data() {
        return {
            code,
            model: 'github',
        };
    },
};
</script>
