<template>
    <div class="splash">
        <lv-hero
            v-space-after="4"
            title="Libvue"
            description="An opensource collection of vue.js 3 components."
        >
            <template #buttons>
                <lv-button color="solid-primary" icon="book-open" to="/docs/install">
                    Documentation
                </lv-button>
                <lv-button color="solid-dimmed-primary" icon="github" to="https://github.com/harmendv/libvue" target="_blank">Github</lv-button>
            </template>
        </lv-hero>

        <lv-separator v-space-after="4"></lv-separator>

        <lv-grid v-space-after="4" gap="1.5rem">
            <lv-grid-row gap="1.5rem">
                <lv-grid-column :level="4">
                    <lv-link to="/docs/theming">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">
                                <lv-icon v-space-after=".5" name="palette"/>Theming
                            </lv-heading>
                            <lv-paragraph>
                                Out of the box support for light and dark color schemes.
                            </lv-paragraph>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
                <lv-grid-column :level="4">
                    <lv-link to="/docs/lv-grid">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">
                                <lv-icon v-space-after=".5" name="grid"/>Grid
                            </lv-heading>
                            <lv-paragraph>
                                Grid components ready to make any layout possible.
                            </lv-paragraph>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
                <lv-grid-column :level="4">
                    <lv-link to="/docs/spacing">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">
                                <lv-icon v-space-after=".5" name="align-vertical-space-around"/>Spacing
                            </lv-heading>
                            <lv-paragraph>
                                Our components don't have margins. Use our directive for adding it on the fly.
                            </lv-paragraph>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
            </lv-grid-row>
        </lv-grid>

        <lv-separator v-space-after="4"/>

        <lv-paragraph align="center" v-space-after="2">
            Released under the MIT License.
            Copyright © Harmen de Vries
        </lv-paragraph>
    </div>
</template>

<style lang="scss">
.splash {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: auto;
    padding-top: 100px;
    height: 100%;
}
.feature-card {
    height: 100%;
}
</style>
