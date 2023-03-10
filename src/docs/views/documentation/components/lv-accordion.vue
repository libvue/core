<template>
    <lv-heading v-space-after="0.5" :level="3">Accordion</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content.</lv-heading>
    <lv-card v-space-after="1">
        <lv-accordion single :event-bus="eventBus">
            <lv-accordion-item icon="github" title="Github" initial-open :event-bus="eventBus">
                GitHub is a web-based platform that provides version control and collaboration tools for software development projects.
            </lv-accordion-item>
            <lv-accordion-item icon="accessibility" title="Accessibility" :event-bus="eventBus">
                Accessibility refers to designing products, services, or environments to ensure that they can be used by people with disabilities.
            </lv-accordion-item>
            <lv-accordion-item icon="bike"  title="Bike" :event-bus="eventBus">
                A bike is a two-wheeled vehicle that is powered by pedaling and commonly used for transportation, recreation, or exercise.
            </lv-accordion-item>
        </lv-accordion>
    </lv-card>
    <lv-code :code="code" lang="html" />
</template>

<script>
import { eventBus } from "../../../../lib/main";

const code = `
<lv-accordion single :event-bus="eventBus">
    <lv-accordion-item icon="github" title="Github" initial-open :event-bus="eventBus">
        GitHub is a web-based platform that provides version control and collaboration tools for software development projects.
    </lv-accordion-item>
    <lv-accordion-item icon="accessibility" title="Accessibility" :event-bus="eventBus">
        Accessibility refers to designing products, services, or environments to ensure that they can be used by people with disabilities.
    </lv-accordion-item>
    <lv-accordion-item icon="bike"  title="Bike" :event-bus="eventBus">
        A bike is a two-wheeled vehicle that is powered by pedaling and commonly used for transportation, recreation, or exercise.
    </lv-accordion-item>
</lv-accordion>
`.trim();
export default {
    data() {
        return {
            eventBus,
            code
        }
    },
    mounted() {
        console.log(this.$root);
    }
}
</script>
