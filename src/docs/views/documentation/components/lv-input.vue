<template>
    <lv-heading v-space-after="0.5" :level="3">Input</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">An multi-typed input for your fancy forms</lv-heading>
    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => onChangeTab(v)">
        <template #types>
            <lv-card v-space-after="1">
                <lv-flex direction="column">
                    <lv-input type="text" icon="user" placeholder="Enter your username" />
                    <lv-input type="password" icon="key" placeholder="Enter your password" />
                    <lv-input type="email" icon="mail" placeholder="Enter your e-mail" />
                    <lv-input type="tel" icon="phone" placeholder="Enter your phonenumber" />
                </lv-flex>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeTypes" />
        </template>
        <template #states>
            <lv-card v-space-after="1">
                <lv-flex direction="column">
                    <lv-input placeholder="Default" />
                    <lv-input readonly placeholder="Readonly" />
                    <lv-input disabled placeholder="Disabled" />
                    <lv-input loading placeholder="Loading" />
                </lv-flex>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeStates" />
        </template>
        <template #sizes>
            <lv-card v-space-after="1">
                <lv-flex direction="column">
                    <lv-input icon="github" placeholder="Large size" size="large" loading />
                    <lv-input icon="github" placeholder="Default size" size="default" loading />
                    <lv-input icon="github" placeholder="Small size" size="small" loading />
                    <lv-input icon="github" placeholder="Tiny size" size="tiny" loading />
                </lv-flex>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeStates" />
        </template>
    </lv-tabs>
    <component-details component="LvInput"></component-details>
</template>

<script>
const codeTypes = `
<lv-input type="text" icon="user" placeholder="Enter your username" />
<lv-input type="password" icon="key" placeholder="Enter your password" />
<lv-input type="email" icon="mail" placeholder="Enter your e-mail" />
<lv-input type="tel" icon="phone" placeholder="Enter your phonenumber" />
`.trim();

const codeStates = `
<lv-input placeholder="Default" />
<lv-input readonly placeholder="Readonly" />
<lv-input disabled placeholder="Disabled" />
<lv-input loading placeholder="Loading" />
`.trim();

const codeSizes = `
<lv-input icon="github" placeholder="Large size" size="large" />
<lv-input icon="github" placeholder="Default size" size="default" />
<lv-input icon="github" placeholder="Small size" size="small" />
<lv-input icon="github" placeholder="Tiny size" size="tiny" />
`.trim();

export default {
    data() {
        return {
            codeTypes,
            codeStates,
            codeSizes,
            activeTab: 'types',
            tabs: [
                { id: 'types', title: 'Types', icon: 'form-input' },
                { id: 'states', title: 'States', icon: 'loader-circle' },
                { id: 'sizes', title: 'Sizes', icon: 'scaling' },
            ],
        };
    },
    methods: {
        onChangeTab(tab) {
            this.activeTab = tab;
        },
    },
};
</script>
