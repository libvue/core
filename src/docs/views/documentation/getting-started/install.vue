<template>
    <lv-heading v-space-after="0.5" :level="3">Installation</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">How to get started with libvue</lv-heading>

    <lv-heading v-space-after="1" :level="6">Install entire library</lv-heading>
    <lv-paragraph v-space-after="1"> If you want all the components & directives just follow the step below; </lv-paragraph>
    <lv-code v-space-after="1" :code="install" lang="shell" />
    <lv-heading v-space-after="1" :level="6">Register as a vue plugin</lv-heading>
    <lv-code v-space-after="1" :code="register" lang="js" />
</template>

<script>
const install = `
> npm install --save @harmendv/libvue
`.trim();
const register = `
import '@harmendv/libvue/dist/style.css';
import libvue from '@harmendv/libvue';

app.use(libvue);
`.trim();
export default {
    data() {
        return {
            install,
            register
        };
    },
};
</script>
