<template>
    <lv-heading v-space-after="0.5" :level="3">Accessibility</lv-heading>
    <lv-heading v-space-after="2" sub :level="6"
        >Making your components a bit more user friendly following the ARIA Authoring Practices Guide (APG)</lv-heading
    >

    <lv-text v-space-after="1">
        When applicable, our components follow the ARIA Authoring Practices Guide (APG). You can see if a component is
        following these guidelines by a notice above on that page. It look likes this:
    </lv-text>

    <lv-notice v-space-after="1" color="solid-dimmed-success" icon="accessibility">
        <lv-flex gap=".2rem">
            Using
            <lv-link color="currentColor" href="https://www.w3.org/WAI/ARIA/apg/patterns/" target="_blank" highlight
                >w3.org Aria Patterns</lv-link
            >
        </lv-flex>
    </lv-notice>

    <lv-text v-space-after="2">
        Our components set some attributes like <lv-code>role</lv-code>, <lv-code>aria-modal</lv-code> or
        <lv-code>aria-checked</lv-code> automatically, but attributes like <lv-code>aria-label</lv-code> or
        <lv-code>aria-labelledBy</lv-code> are up to you to add when applicable. You can see on the details page of a
        component which aria props are available. Tip: Use lighthouse to check if you're not missing anything.
    </lv-text>

    <lv-heading v-space-after="1" :level="5">Design Choices</lv-heading>
    <lv-list v-space-after="2">
        <lv-list-item>
            No ARIA is better then bad ARIA, but because we've added some aria attributes automatically, you MUST add
            the missing aria attributes yourself. In the future we might consider making these accesibility attributes
            optional.
        </lv-list-item>
        <lv-list-item>
            All form elements except radio buttons in libvue are still focusable when they are disabled.
        </lv-list-item>
        <lv-list-item>
            Our form elements support placeholders but you should always use labels for form elements and placeholders
            as an addition.
            <lv-list>
                <lv-list-item
                    >LvCheckbox, LvSwitch and the LvRadio component have a prop:label and prop:labelFor that inserts a
                    label next to it.</lv-list-item
                >
                <lv-list-item
                    >All other form elements should use LvText with the prop:as set to 'label' and the prop:labelFor set
                    to the id of the form element.</lv-list-item
                >
            </lv-list>
        </lv-list-item>
        <lv-list-item>
            LvDialog can be modal or non-modal. Depending of this choice, focus trapping is automaticalliy disabled or
            not.
        </lv-list-item>
    </lv-list>

    <lv-heading v-space-after="1" :level="5">ARIA Compatible Components</lv-heading>
    <lv-card>
        <lv-table :rows="componentRows" :columns="componentColumns" :row-action="onClickRow">
            <template #link="{ value }">
                <lv-link highlight @click="(e) => onClickDocumentation(value, e)">
                    <lv-icon name="external-link" /> Visit w3.org
                </lv-link>
            </template>
        </lv-table>
    </lv-card>
</template>

<script>
export default {
    data() {
        return {
            componentRows: [
                {
                    name: 'LvAccordion',
                    notes: '-',
                    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/',
                    path: 'lv-accordion',
                },
                {
                    name: 'LvBreadcrumbs',
                    notes: '-',
                    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/',
                    path: 'lv-breadcrumbs',
                },
                {
                    name: 'LvButton',
                    notes: 'Needs aria-label',
                    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
                    path: 'lv-button',
                },
                {
                    name: 'LvCheckbox',
                    notes: 'Needs aria-label',
                    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/',
                    path: 'lv-checkbox',
                },
                {
                    name: 'LvDialog',
                    notes: 'Needs aria-label',
                    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
                    path: 'lv-dialog',
                },
                {
                    name: 'LvHeading',
                    notes: '-',
                    link: 'https://www.w3.org/WAI/ARIA/apg/practices/structural-roles/',
                    path: 'lv-heading',
                },
                {
                    name: 'LvLink',
                    notes: 'Needs aria-label',
                    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/link/',
                    path: 'lv-link',
                },
                {
                    name: 'LvNotice',
                    notes: '-',
                    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/alert/',
                    path: 'lv-notice',
                },
                {
                    name: 'LvRadio',
                    notes: 'Needs aria-label',
                    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/radio/',
                    path: 'lv-radio',
                },
                {
                    name: 'LvRangeSlider',
                    notes: 'Needs aria-label-thumb-one and aria-label-thumb-two ',
                    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/',
                    path: 'lv-range-slider',
                },
                {
                    name: 'LvSlider',
                    notes: 'Needs aria-label',
                    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/slider/',
                    path: 'lv-slider',
                },
                {
                    name: 'LvSwitch',
                    notes: 'Needs aria-label',
                    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/switch/',
                    path: 'lv-switch',
                },
                {
                    name: 'LvToggle',
                    notes: 'Needs aria-label',
                    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
                    path: 'lv-toggle',
                },
            ],
            componentColumns: {
                name: {
                    title: 'Component',
                },
                link: {
                    title: 'Documentation',
                },
                notes: {
                    title: 'Notes',
                },
            },
        };
    },
    methods: {
        onClickRow(v) {
            this.$router.push({ name: v.row.path });
        },
        onClickDocumentation(v, e) {
            e.stopPropagation();
            window.open(v, '_blank');
        },
    },
};
</script>
