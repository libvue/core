<template>
    <div class="splash">
        <lv-hero v-space-after="4" :align="breakpoints.smallerOrEqual.md ? 'center' : 'right'" title="Libvue" description="An opensource collection of vue 3 components.">
            <template #title>
                <span class="content-logo" v-html="Logo"></span>
            </template>
            <template #image>
                <div class="preview">
                    <lv-widget class="preview__chart" title="Revenue" amount="2,530" :diff="10" type="chart" :labels="labels" :datasets="followersDatasets"/>
                    <lv-card class="preview__login">
                        <lv-heading v-space-after="1" level="3">Login</lv-heading>
                        <lv-input v-space-after=".5" icon="user" placeholder="Enter your username"></lv-input>
                        <lv-input v-space-after="1" icon="key" placeholder="Enter your password"></lv-input>
                        <lv-flex fill>
                            <lv-button label="Login" color="solid-primary"></lv-button>
                            <lv-button label="Cancel" color="outline-dimmed-default"></lv-button>
                        </lv-flex>
                    </lv-card>
                </div>
            </template>
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
                            <lv-text> Use your CSS breakpoints programmatically </lv-text>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
                <lv-grid-column :width="4" :md="12">
                    <lv-link block zoom-on-hover @click="$router.push({ path: '/docs/install' })">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">
                                <lv-icon v-space-after="0.5" name="component" />70+ Components
                            </lv-heading>
                            <lv-text> A lot of components at your disposal and more are coming! </lv-text>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
                <lv-grid-column :width="4" :md="12">
                    <lv-link block zoom-on-hover @click="onClickGithub">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">
                                <lv-icon v-space-after="0.5" name="package-open" />Open Source
                            </lv-heading>
                            <lv-text> We love open-source and we are ready for your contributions! </lv-text>
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
                            <lv-text> Out of the box support for light and dark color schemes. </lv-text>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
                <lv-grid-column :width="4" :md="12">
                    <lv-link block zoom-on-hover @click="$router.push({ path: '/docs/lv-grid' })">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">
                                <lv-icon v-space-after="0.5" name="grid-2x2" />Grid
                            </lv-heading>
                            <lv-text> Grid components ready to make any layout possible. </lv-text>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
                <lv-grid-column :width="4" :md="12">
                    <lv-link block zoom-on-hover @click="$router.push({ path: '/docs/v-space-after' })">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">
                                <lv-icon v-space-after="0.5" name="align-vertical-space-around" />Spacing
                            </lv-heading>
                            <lv-text>
                                Our components don't have outer spacing. Use our directive instead.
                            </lv-text>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
            </lv-grid-row>
        </lv-grid>

        <lv-separator v-space-after="4"></lv-separator>

        <lv-text v-space-after="2" align="center">
            Released under the MIT License. Copyright © Harmen de Vries
        </lv-text>
    </div>
</template>

<script>
import { useBreakpoints } from '../../lib/composables/useBreakpoints';
import Logo from '../assets/images/logo-header.svg?raw';

const install = `
npm install --save @libvue/core
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
            install,
            Logo,
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            followersDatasets: [
                {
                    label: 'Revenue',
                    hue: 250,
                    data: [4, 34, 20, 34, 27, 95],
                },
                {
                    label: 'Views',
                    hue: 220,
                    data: [334, 210, 364, 217, 255, 334],
                },
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
.content-logo {
    width: 100%;
    max-width: 200px;
}

.preview {
    position: relative;
    width: 400px;
    height: 300px;
    &__login {
        width: 70%;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    &__chart {
        width: 70%;
        position: absolute;
        top: 0;
        right: 0;
    }
}
</style>
