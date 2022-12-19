<template>
    <lv-heading v-space-after="0.5" :level="3">Installation</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">How to get started with libvue</lv-heading>

    <lv-paragraph v-space-after="1">
        Libvue is made for vite.js and only exposes the source files in the npm package.
    </lv-paragraph>

    <lv-heading v-space-after="1" :level="6">Install</lv-heading>
    <lv-code v-space-after="1" :code="install" lang="javascript" />

    <lv-heading v-space-after="1" :level="6">Basic Configuration</lv-heading>
    <lv-code v-space-after="2" :files="registerFiles" :active="activeRegisterFile" @change-file="(v) => activeRegisterFile = v" />

    <lv-notice icon="info" color="solid-dimmed-info" v-space-after="1">You are responsible for importing the components where they are needed.</lv-notice>
</template>

<script>
const install = `
> npm install --save @libvue/core
`.trim();

const registerScript = `
import { spaceAfter, LvButton, LvTable } from '@libvue/core';

// Register spaceAfter directive
app.directive('space-after', spaceAfter);

// Register Common Components
app.component('LvButton', LvButton);
app.component('LvTable', LvTable);
`.trim();

const registerScss = `
@import '@libvue/core';

html {
    min-height: 100%;
    height: 100%;
    font-size: 100%;
}
body {
    margin: 0;
    font-family: "Inter", sans-serif;
    height: 100%;
    font-size: .875rem;
    line-height: 1.5;
}
#app {
    display: flex;
    min-height: 100%;
}
`.trim();

export default {
    data() {
        return {
            install,
            activeRegisterFile: 'main',
            registerFiles: [
                { id: 'main', filename: 'main.js', lang: 'js', code: registerScript },
                { id: 'scss', filename: 'app.scss', lang: 'css', code: registerScss }
            ],
        };
    },
};
</script>
