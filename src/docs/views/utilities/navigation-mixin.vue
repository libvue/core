<template>
    <lv-heading :level="3" v-space-after="0.5">navigationMixin</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">Some extra functionality for links</lv-heading>
    <lv-notice icon="bell" v-space-after="1">It depends vue-router so you need to install it as a dependency.</lv-notice>

    <lv-heading :level="6" v-space-after="1">Install the mixin</lv-heading>
    <lv-paragraph v-space-after="1">
        The navigationMixin is especially made for navigational components. It exists out of three parts: props, computed properties and methods.
    </lv-paragraph>
    <lv-code v-space-after="1" lang="js" :code="install" />

    <lv-heading :level="6" v-space-after="1">Added Props</lv-heading>
    <lv-table v-space-after="1" :rows="propsRows" :columns="propsColumns" />

    <lv-heading :level="6" v-space-after="1">Added Methods</lv-heading>
    <lv-table v-space-after="1" :rows="methodRows" :columns="methodColumns  " />

    <lv-heading :level="6" v-space-after="1">Added Computed Properties</lv-heading>
    <lv-table v-space-after="1" :rows="computedRows" :columns="computedColumns" />
</template>

<script>
export default {
    data() {
        return {
            install: `import { navigationMixin } from 'libvue';\nexport default {\n  mixins: [navigationMixin];\n}`,
            computedRows: [
                { name: 'toEqualsCurrentRoute', description: 'Use this to set your components active state based on the current active route.' },
                { name: 'href', description: 'Converts prop:to to a proper href url.' },
                { name: 'isExternalLink', description: 'Getter to check if prop:to is an external link' },
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
            methodRows: [
                { name: 'onClick', description: 'Use this method and it will automatically listen for (cmd/ctrl) clicks and honor the target.', params: 'event' },
            ],
            methodColumns: {
                name: {
                    title: 'Name',
                    bold: true,
                },
                params: {
                    title: 'Params'
                },
                description: {
                    title: 'Description'
                },
            },
            propsRows: [
                { name: 'to', description: 'Navigate to a relative or absolute path. (Will automatically try to resolve the route)', default: 'null' },
                { name: 'target', description: 'Set the target to _self or _blank', default: '_self' }
            ],
            propsColumns: {
                name: {
                    title: 'Name',
                    bold: true,
                },
                default: {
                    title: 'Default'
                },
                description: {
                    title: 'Description'
                },
            },
        };
    },
};
</script>
