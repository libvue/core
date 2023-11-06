<template>
    <lv-heading v-space-after="0.5" :level="3">Installation</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">How to get started with libvue</lv-heading>

    <lv-heading v-space-after="1" :level="6">Install</lv-heading>
    <code-preview v-space-after="1" :code="install" lang="bash" />

    <lv-heading v-space-after="1" :level="6">Basic Configuration</lv-heading>
    <code-preview
        v-space-after="2"
        :files="registerFiles"
        :active="activeRegisterFile"
        @change-file="(v) => (activeRegisterFile = v)"
    />
</template>

<script>
const install = `
npm install --save @libvue/core
`.trim();

const registerScript = `
import { LvButton, LvTable, spaceAfter } from '@libvue/core';

// Register components
app.component('LvButton', LvButton);
app.component('LvTable', LvTable);

// Register directives
app.directive('space-after', spaceAfter);
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
                { id: 'scss', filename: 'app.scss', lang: 'css', code: registerScss },
            ],
        };
    },
};
</script>
