<template>
    <lv-heading v-space-after="0.5" :level="3">Dialog</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A non-modal or modal dialog</lv-heading>

    <lv-notice color="solid-dimmed-success" v-space-after="1" icon="accessibility">
        <lv-flex gap=".2rem">
            Using <lv-link color="currentColor" href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/" target="_blank" highlight>w3.org Aria Dialog Pattern</lv-link>
        </lv-flex>
    </lv-notice>

    <lv-card v-space-after="1">
        <lv-button label="Open the dialog" @click="showDialog = true"/>
        <lv-dialog :show="showDialog" @click-backdrop="showDialog = false" :modal="false">
            <template #title>
                <lv-heading :level="4" v-space-after="1">Make a choice</lv-heading>
            </template>
            <template #content>
                <lv-heading :level="6">Do you want to continue?</lv-heading>
                <lv-paragraph v-space-after="0.5">Press continue to keep doing what you were doing.</lv-paragraph>
                <lv-switch v-model="model" v-space-after="1" label="Enable something"/>
                <lv-input v-space-after="1" placeholder="Type something" />
            </template>
            <template #close>
                <lv-flex>
                    <lv-button label="Continue" color="solid-primary" @click="showDialog = false"/>
                    <lv-button label="Cancel" color="solid-dimmed-primary" @click="showDialog = false"/>
                </lv-flex>
            </template>
        </lv-dialog>
    </lv-card>
    <code-preview v-space-after="1" :code="code" lang="html"/>
    <component-details component="LvDialog"></component-details>
</template>

<script>
const code = `
<lv-button label="Open the dialog" @click="showDialog = true"/>
<lv-dialog :show="showDialog" @click-overlay="showDialog = false" :modal="false">
    <template #title>
        <lv-heading :level="4" v-space-after="1">Make a choice</lv-heading>
    </template>
    <template #content>
        <lv-heading :level="6">Do you want to continue?</lv-heading>
        <lv-paragraph v-space-after="0.5">Press continue to keep doing what you were doing.</lv-paragraph>
        <lv-input v-space-after="1" placeholder="Type something" />
    </template>
    <template #close>
        <lv-flex>
            <lv-button label="Continue" color="solid-primary" @click="showDialog = false"/>
            <lv-button label="Cancel" color="solid-dimmed-primary" @click="showDialog = false"/>
        </lv-flex>
    </template>
</lv-dialog>
`.trim();
export default {
    data() {
        return {
            showDialog: false,
            code,
            model: false,
        }
    },
};
</script>
