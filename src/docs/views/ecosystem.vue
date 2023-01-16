<template>
    <lv-heading v-space-after="0.5" :level="3">Ecosystem</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">List of packages you might find useful</lv-heading>

    <lv-heading v-space-after="1" :level="6">@libvue/laravel-orion-api</lv-heading>
    <lv-paragraph v-space-after="1">
        A Laravel Orion compatible repository-based Javascript http-client powered by axios.
    </lv-paragraph>
    <lv-code v-space-after="2" code="npm install --save @libvue/laravel-orion-api" lang="bash"/>

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
