<template>
    <lv-heading v-space-after="0.5" :level="3">Breakpoint Mixin</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Some extra functionality for links</lv-heading>

    <lv-heading v-space-after="1" :level="6">Install the mixin</lv-heading>
    <lv-code v-space-after="1" lang="javascript" :code="codeInstall" />

    <lv-heading v-space-after="1" :level="6">Change the breakpoints</lv-heading>
    <lv-paragraph v-space-after="1">
        The breakpoints in this mixin are extracted from the CSS variables.
    </lv-paragraph>
    <lv-code v-space-after="1" lang="javascript" :code="codeChange" />

    <lv-heading v-space-after="1" :level="6">Computed Properties</lv-heading>
    <lv-card>
        <lv-table :rows="computedRows" :columns="computedColumns" />
    </lv-card>
</template>

<script>
const codeInstall = `
import { breakpointMixin } from 'libvue';

export default {
  mixins: [breakpointMixin];
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
