<template>
    <div class="splash">
        <lv-hero
            v-space-after="4"
            title="Libvue"
            description="An extendable collection of Vue components to quickly scaffold interfaces."
        >
            <template #buttons>
                <lv-button color="solid-primary" icon="book-open" @click="$router.push('/docs/install')">
                    Documentation
                </lv-button>
                <lv-button color="solid-dimmed-primary" icon="github" @click="goToGithub">Github</lv-button>
            </template>
        </lv-hero>
        <lv-separator v-space-after="4"></lv-separator>
        <lv-grid gap="1.5rem">
            <lv-grid-row gap="1.5rem">
                <lv-grid-column :level="4">
                    <lv-link to="/docs/theming">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">Dark/Light Theme</lv-heading>
                            <lv-paragraph v-space-after="1">
                                This library is dark-mode friendly.
                            </lv-paragraph>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
                <lv-grid-column :level="4">
                    <lv-card class="feature-card">
                        <lv-heading v-space-after="1" :level="5">Customizable</lv-heading>
                        <lv-paragraph v-space-after="1">
                            You can change a lot of styling!
                        </lv-paragraph>
                    </lv-card>
                </lv-grid-column>
                <lv-grid-column :level="4">
                    <lv-link to="/extensions">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">Extensible</lv-heading>
                            <lv-paragraph v-space-after="1">
                                Our core has a lot, but our extensions provide even more.
                            </lv-paragraph>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
            </lv-grid-row>
            <lv-grid-row gap="1.5rem">
                <lv-grid-column :level="4">
                    <lv-link to="/docs/grid">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">Grid</lv-heading>
                            <lv-paragraph v-space-after="1">
                                Grid components ready to make any layout possible.
                            </lv-paragraph>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
                <lv-grid-column :level="4">
                    <lv-link to="/docs/spacing">
                        <lv-card class="feature-card">
                            <lv-heading v-space-after="1" :level="5">Spacing</lv-heading>
                            <lv-paragraph v-space-after="1">
                                Our components don't have margins. Use our directive for adding it on the fly.
                            </lv-paragraph>
                        </lv-card>
                    </lv-link>
                </lv-grid-column>
                <lv-grid-column :level="4">
                    <lv-card class="feature-card">
                        <lv-heading v-space-after="1" :level="5">ARIA support</lv-heading>
                        <lv-paragraph v-space-after="1">
                            Our components all follow the aria guidelines.
                        </lv-paragraph>
                    </lv-card>
                </lv-grid-column>
            </lv-grid-row>
        </lv-grid>
    </div>
</template>

<script>
export default {
    methods: {
        goToGithub() {
            window.open('https://github.com/harmendv/libvue', '_blank');
        },
    },
};
</script>

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
