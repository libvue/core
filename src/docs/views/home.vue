<template>
    <div class="splash">

        <lv-hero title="Libvue" description="An extendable collection of Vue components to quickly scaffold interfaces." v-space-after="4">
            <template #buttons>
                <lv-button color="primary" icon="book-open" @click="$router.push('install')">Documentation</lv-button>
                <lv-button color-type="outline" icon="github" @click="goToGithub">Github</lv-button>
            </template>
        </lv-hero>

        <lv-divider v-space-after="4"></lv-divider>

        <lv-group direction="column" style="width: 100%;" gap="2rem">
            <lv-card>
                <lv-heading v-space-after="1" level="6">Core</lv-heading>
                <lv-code code="> npm install --save @libvue/core" lang="shell" />
            </lv-card>
            <lv-card>
                <lv-heading v-space-after="1" level="6">Extension: Dashboard</lv-heading>
                <lv-code code="> npm install --save @libvue/extension-dashboard" lang="shell" />
            </lv-card>
            <lv-card>
                <lv-heading v-space-after="1" level="6">Extension: Home Automation</lv-heading>
                <lv-code code="> npm install --save @libvue/extension-home-automation" lang="shell" />
            </lv-card>
        </lv-group>

    </div>
</template>

<script>
export default {
    methods: {
        goToGithub() {
            window.open('https://github.com/harmendv/libvue', '_blank');
        }
    },
};
</script>

<style lang="scss">
@import '../../lib/scss/variables/index';

.splash {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    margin: auto;
    padding-top: 100px;
}
</style>
