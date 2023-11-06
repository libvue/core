<template>
    <lv-heading v-space-after="0.5" :level="3">Accessibility</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">If possible, we try to follow the ARIA Authoring Practices Guide (APG)</lv-heading>

    <lv-paragraph v-space-after="1">
        When applicable, our components follow the ARIA Authoring Practices Guide (APG). You can see if a
        component is following these guidelines by a notice above on that page. It look likes this:
    </lv-paragraph>

    <lv-notice color="solid-dimmed-success" v-space-after="1" icon="accessibility">
        <lv-flex gap=".2rem">
            Using <lv-link color="currentColor" href="https://www.w3.org/WAI/ARIA/apg/patterns/" target="_blank" highlight>w3.org Aria Patterns</lv-link>
        </lv-flex>
    </lv-notice>

    <lv-paragraph v-space-after="1">
        Below is a list of design choices we made or you should be aware of.
    </lv-paragraph>

    <lv-heading v-space-after="1" :level="5">Design Choices</lv-heading>
    <lv-list v-space-after="1">
        <lv-list-item>
            All form elements except radio buttons in libvue are still focusable when they are disabled.
        </lv-list-item>
        <lv-list-item>
            Our form elements support placeholders but you should always use labels for form elements and placeholders as an addition.
            <lv-list>
                <lv-list-item>LvCheckbox and the LvRadio component have a prop:label and prop:labelFor that inserts a label as text next to it.</lv-list-item>
                <lv-list-item>All other form elements should use LvText with the prop:as set to 'label' and the prop:labelFor set to the id of the form element.</lv-list-item>
            </lv-list>
        </lv-list-item>
        <lv-list-item>
            LvDialog can be modal or non-modal. Depending of this choice, focus trapping is automaticalliy disabled or not.
        </lv-list-item>
    </lv-list>

    <lv-heading v-space-after="1" :level="5">ARIA Compatible Components</lv-heading>
    <lv-list>
        <lv-list-item>LvCheckbox</lv-list-item>
        <lv-list-item>LvRadio</lv-list-item>
        <lv-list-item>LvNotice</lv-list-item>
        <lv-list-item>LvBreadcrumbs</lv-list-item>
        <lv-list-item>LvButton</lv-list-item>
        <lv-list-item>LvToggle</lv-list-item>
        <lv-list-item>LvDialog</lv-list-item>
        <lv-list-item>and more to come</lv-list-item>
    </lv-list>
</template>

<script>
export default {
    methods: {
        onClickLink() {
            this.$router.push({ path: 'v-space-after' })
        }
    }
}
</script>
