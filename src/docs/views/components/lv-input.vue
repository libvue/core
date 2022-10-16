<template>
    <lv-heading v-space-after="0.5" :level="3">Input</lv-heading>
    <lv-heading v-space-after="1" sub :level="6">An multi-typed input for your fancy forms</lv-heading>
    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => onChangeTab(v)">
        <template #types>
            <lv-card v-space-after="1">
                <lv-group direction="column">
                    <lv-input type="text" placeholder="Enter your username" />
                    <lv-input type="password" placeholder="Enter your password" />
                    <lv-input type="email" placeholder="Enter your e-mail" />
                    <lv-input type="tel" placeholder="Enter your phonenumber" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeTypes" />
        </template>
        <template #states>
            <lv-card v-space-after="1">
                <lv-group direction="column">
                    <lv-input icon="user" placeholder="Default" />
                    <lv-input icon="user" readonly placeholder="Readonly" />
                    <lv-input icon="user" disabled placeholder="Disabled" />
                    <lv-input icon="user" loading placeholder="Loading" />
                </lv-group>
            </lv-card>

            <lv-code v-space-after="1" lang="html" :code="codeStates" />
        </template>
    </lv-tabs>
</template>

<script>
const codeTypes = `
<lv-input type="text" placeholder="Enter your username" />
<lv-input type="password" placeholder="Enter your password" />
<lv-input type="email" placeholder="Enter your e-mail" />
<lv-input type="tel" placeholder="Enter your phonenumber" />
`.trim();

const codeStates = `
<lv-input icon="user" placeholder="Default" />
<lv-input icon="user" readonly placeholder="Readonly" />
<lv-input icon="user" disabled placeholder="Disabled" />
<lv-input icon="user" loading placeholder="Loading" />
`.trim();

export default {
    data() {
        return {
            codeTypes,
            codeStates,
            activeTab: 'types',
            tabs: [
                { id: 'types', title: 'Types', icon: 'form-input' },
                { id: 'states', title: 'States', icon: 'loader-2' },
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
