<template>
    <lv-heading v-space-after="0.5" :level="3">useBreakpoints</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Extracts your CSS breakpoints so you can use it programmatically</lv-heading>

    <lv-heading v-space-after="1" :level="6">Install the composable</lv-heading>
    <code-preview v-space-after="1" lang="javascript" :code="codeInstall" />

    <lv-heading v-space-after="1" :level="6">Example</lv-heading>
    <lv-paragraph v-space-after="1">
        Resize the page to see updates.
    </lv-paragraph>
    <code-preview v-space-after="1" :code="JSON.stringify(breakpoints, null, 2)"></code-preview>

    <lv-heading v-space-after="1" :level="6">Change the breakpoints</lv-heading>
    <lv-paragraph v-space-after="1">
        The breakpoints in this composable are extracted from the CSS variables.
    </lv-paragraph>
    <code-preview v-space-after="1" lang="javascript" :code="codeChange" />

    <lv-heading v-space-after="1" :level="6">Computed Properties</lv-heading>
    <lv-card>
        <lv-table :rows="computedRows" :columns="computedColumns" />
    </lv-card>
</template>

<script>
import { useBreakpoints } from "../../../../lib/composables/useBreakpoints";

const codeInstall = `
import { useBreakpoints } from '@libvue/core';

export default {
    setup() {
        const { breakpoints } = useBreakpoints();
        return {
            breakpoints,
        }
    },
}
`.trim();

const codeChange = `
:root {
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --breakpoint-xxl: 1400px;
}
`.trim();

export default {
    setup() {
        const { breakpoints } = useBreakpoints();
        return {
            breakpoints,
        }
    },
    data() {
        return {
            codeInstall,
            codeChange,
            computedRows: [
                { name: 'breakpoints', description: 'An object containing the breakpoint data.' },
            ],
            computedColumns: {
                name: {
                    title: 'Name',
                    bold: true,
                },
                description: {
                    title: 'Description'
                },
            },
        };
    },
};
</script>
