<template>
    <lv-heading v-space-after="0.5" :level="3">Extensions</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A list of extensions for libvue</lv-heading>

    <lv-heading v-space-after="1" :level="6">@libvue/extension-dashboard</lv-heading>
    <lv-paragraph v-space-after="1">If you need more charts, widgets and other common components you'll see in an dashboard this extension might be for you.</lv-paragraph>
    <lv-code v-space-after="1" code="npm install --save @libvue/extension-dashboard" lang="bash"/>

    <lv-divider v-space-after="1" />

    <lv-heading v-space-after="1" :level="6">@libvue/extension-home-automation</lv-heading>
    <lv-paragraph v-space-after="1">If you need more charts, widgets and other common components you'll see in an dashboard this extension might be for you.</lv-paragraph>
    <lv-code v-space-after="1" code="npm install --save @libvue/extension-home-automation" lang="bash"/>
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
