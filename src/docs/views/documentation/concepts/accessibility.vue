<template>
    <lv-heading v-space-after="0.5" :level="3">Accessibility</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">If possible, we try to follow the ARIA Authoring Practices Guide (APG)</lv-heading>

    <lv-text v-space-after="1">
        When applicable, our components follow the ARIA Authoring Practices Guide (APG). You can see if a
        component is following these guidelines by a notice above on that page. It look likes this:
    </lv-text>

    <lv-notice color="solid-dimmed-success" v-space-after="1" icon="accessibility">
        <lv-flex gap=".2rem">
            Using <lv-link color="currentColor" href="https://www.w3.org/WAI/ARIA/apg/patterns/" target="_blank" highlight>w3.org Aria Patterns</lv-link>
        </lv-flex>
    </lv-notice>

    <lv-heading v-space-after="1" :level="5">How to use</lv-heading>
    <lv-text v-space-after="1">
        Our components set some attributes like <lv-code>role</lv-code>, <lv-code>aria-modal</lv-code> or <lv-code>aria-checked</lv-code> automatically, but attributes
        like <lv-code>aria-label</lv-code> or <lv-code>aria-labelledBy</lv-code> are up to you to add when applicable. You can see on the details page of a component
        which aria props are available. Tip: Use lighthouse to check if you're not missing anything.
    </lv-text>

    <lv-heading v-space-after="1" :level="5">Design Choices</lv-heading>
    <lv-list v-space-after="1">
        <lv-list-item>
            No ARIA is better then bad ARIA, but because we've added some aria attributes automatically, you MUST add the missing aria attributes yourself. In the future
            we might consider making these accesibility attributes optional.
        </lv-list-item>
        <lv-list-item>
            All form elements except radio buttons in libvue are still focusable when they are disabled.
        </lv-list-item>
        <lv-list-item>
            Our form elements support placeholders but you should always use labels for form elements and placeholders as an addition.
            <lv-list>
                <lv-list-item>LvCheckbox, LvSwitch and the LvRadio component have a prop:label and prop:labelFor that inserts a label next to it.</lv-list-item>
                <lv-list-item>All other form elements should use LvText with the prop:as set to 'label' and the prop:labelFor set to the id of the form element.</lv-list-item>
            </lv-list>
        </lv-list-item>
        <lv-list-item>
            LvDialog can be modal or non-modal. Depending of this choice, focus trapping is automaticalliy disabled or not.
        </lv-list-item>
    </lv-list>

    <lv-heading v-space-after="1" :level="5">ARIA Compatible Components</lv-heading>
    <lv-list>
        <lv-list-item>LvAccordion</lv-list-item>
        <lv-list-item>LvBreadcrumbs</lv-list-item>
        <lv-list-item>LvButton</lv-list-item>
        <lv-list-item>LvCheckbox</lv-list-item>
        <lv-list-item>LvDialog</lv-list-item>
        <lv-list-item>LvNotice</lv-list-item>
        <lv-list-item>LvRadio</lv-list-item>
        <lv-list-item>LvRangeSlider</lv-list-item>
        <lv-list-item>LvLink</lv-list-item>
        <lv-list-item>LvToggle</lv-list-item>
        <lv-list-item>lvSwitch</lv-list-item>
        <lv-list-item>lvSlider</lv-list-item>
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
