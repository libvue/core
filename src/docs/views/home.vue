<template>
    <div class="splash">
        <lv-hero v-space-after="4" title="Libvue" description="An opensource collection of vue 3 components.">
            <template #buttons>
                <lv-button color="solid-primary" icon="book" @click="$router.push({ path: '/docs/install' })">
                    Documentation
                </lv-button>
                <lv-button color="solid-dimmed-primary" icon="github" @click="onClickGithub">Github</lv-button>
            </template>
        </lv-hero>

        <lv-separator v-space-after="4"></lv-separator>

        <lv-grid v-space-after="4" gap="1.5rem">
            <lv-grid-row gap="1.5rem">
                <lv-grid-column :width="4" :md="12">
                    <lv-link block zoom-on-hover @click="$router.push({ path: '/docs/use-breakpoints' })">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">
                                <lv-icon v-space-after="0.5" name="scaling" />Responsive
                            </lv-heading>
                            <lv-paragraph> Use your CSS breakpoints programmatically </lv-paragraph>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
                <lv-grid-column :width="4" :md="12">
                    <lv-link block zoom-on-hover @click="$router.push({ path: '/docs/install' })">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">
                                <lv-icon v-space-after="0.5" name="component" />70+ Components
                            </lv-heading>
                            <lv-paragraph> A lot of components at your disposal and more are coming! </lv-paragraph>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
                <lv-grid-column :width="4" :md="12">
                    <lv-link block zoom-on-hover @click="onClickGithub">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">
                                <lv-icon v-space-after="0.5" name="package-open" />Open Source
                            </lv-heading>
                            <lv-paragraph> We love open-source and we are ready for your contributions! </lv-paragraph>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
            </lv-grid-row>
            <lv-grid-row gap="1.5rem">
                <lv-grid-column :width="4" :md="12">
                    <lv-link block zoom-on-hover @click="$router.push({ path: '/docs/theming' })">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">
                                <lv-icon v-space-after="0.5" name="palette" />Theming
                            </lv-heading>
                            <lv-paragraph> Out of the box support for light and dark color schemes. </lv-paragraph>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
                <lv-grid-column :width="4" :md="12">
                    <lv-link block zoom-on-hover @click="$router.push({ path: '/docs/lv-grid' })">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">
                                <lv-icon v-space-after="0.5" name="grid-2x2" />Grid
                            </lv-heading>
                            <lv-paragraph> Grid components ready to make any layout possible. </lv-paragraph>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
                <lv-grid-column :width="4" :md="12">
                    <lv-link block zoom-on-hover @click="$router.push({ path: '/docs/spacing' })">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">
                                <lv-icon v-space-after="0.5" name="align-vertical-space-around" />Spacing
                            </lv-heading>
                            <lv-paragraph>
                                Our components don't have outer spacing. Use our directive instead.
                            </lv-paragraph>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
            </lv-grid-row>
        </lv-grid>

        <lv-separator v-space-after="4"></lv-separator>

        <lv-paragraph v-space-after="2" align="center">
            Released under the MIT License. Copyright © Harmen de Vries
        </lv-paragraph>
    </div>
</template>

<script>
const install = `
> npm install --save @libvue/core
`.trim();

const registerScript = `
import libvue from '@libvue/core';
app.use(libvue);
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
    methods: {
        onClickGithub() {
            window.open('https://github.com/libvue/core', '_blank');
        },
    },
};
</script>

<style lang="scss">
.splash {
    --max-width: 1200px !important;
}
.splash {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: auto;
    padding-top: 50px;
    height: 100%;
}
.feature-card {
    height: 100%;
}
</style>
