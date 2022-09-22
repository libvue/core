<template>
    <lv-heading :level="3" v-space-after="0.5">Installation</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">How to get started with libvue</lv-heading>

    <lv-heading :level="6" v-space-after="1">Install entire library</lv-heading>
    <lv-paragraph v-space-after="1">
        If you want all the components & directives just follow the step below;
    </lv-paragraph>
    <lv-code v-space-after="1" lang="js" code="$ npm install --save libvue@latest" />
    <lv-code v-space-after="1" :code="installFullCode" lang="js" />
    <lv-heading :level="6" v-space-after="1">Cherry pick some components</lv-heading>
    <lv-code v-space-after="1" :code="installCherryCode" lang="js" />

    <lv-notice icon="bell"> Note: both use a global css file so that this library can also be used in a SSR environment.</lv-notice>
</template>

<script>
export default {
    data() {
        return {
            installFullCode: `import 'libvue/dist/style.css'; \nimport libvue from 'libvue';\n\napp.use(libvue);`,
            installCherryCode: `import 'libvue/dist/style.css'; \nimport { LvButton } from 'libvue';\n\napp.component(LvButton);`,
        };
    },
};
</script>
