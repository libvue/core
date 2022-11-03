<template>
    <div class="splash">
        <lv-hero
            v-space-after="4"
            title="Libvue"
            description="An extensible collection of vue.js 3 components."
        >
            <template #buttons>
                <lv-button color="solid-primary" icon="book-open" to="/docs/install">
                    Documentation
                </lv-button>
                <lv-button color="solid-dimmed-primary" icon="github" to="https://github.com/harmendv/libvue" target="_blank">Github</lv-button>
            </template>
        </lv-hero>
        <lv-separator v-space-after="4"></lv-separator>
        <lv-grid gap="1.5rem">
            <lv-grid-row gap="1.5rem">
                <lv-grid-column :level="4">
                    <lv-link to="/docs/theming">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">
                                <lv-icon v-space-after=".5" name="palette"/>Themable
                            </lv-heading>
                            <lv-paragraph>
                                Out of the box support for light and dark color schemes.
                            </lv-paragraph>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
                <lv-grid-column :level="4">
                    <lv-link to="/extensions">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">
                                <lv-icon v-space-after=".5" name="plug"/>Extensible
                            </lv-heading>
                            <lv-paragraph>
                                You can extend libvue with our or your own extensions.
                            </lv-paragraph>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
                <lv-grid-column :level="4">
                    <lv-card class="feature-card">
                        <lv-heading v-space-after="1" :level="5">
                            <lv-icon v-space-after=".5" name="feather"/>Lightweight
                        </lv-heading>
                        <lv-paragraph>
                            The entire library is g-zipped 35kb.
                        </lv-paragraph>
                    </lv-card>
                </lv-grid-column>
            </lv-grid-row>
            <lv-grid-row gap="1.5rem">
                <lv-grid-column :level="4">
                    <lv-link to="/docs/grid">
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
                <lv-grid-column :level="4">
                    <lv-link to="/docs/accessibility">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">
                                <lv-icon v-space-after=".5" name="accessibility"/>Accessibility
                            </lv-heading>
                            <lv-paragraph>
                                We follow the ARIA guidelines and test with lighthouse for accessibility.
                            </lv-paragraph>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
            </lv-grid-row>
        </lv-grid>
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
