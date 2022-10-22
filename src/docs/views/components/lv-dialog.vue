<template>
    <lv-heading v-space-after="0.5" :level="3">Dialog</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A non-modal or modal dialog</lv-heading>
    <lv-card v-space-after="1">
        <lv-button label="Open the dialog" @click="showDialog = true"/>
        <lv-dialog :show="showDialog" @click-overlay="showDialog = false" :modal="false">
            <template #title>
                <lv-heading :level="4" v-space-after="1">Make a choice</lv-heading>
            </template>
            <template #description>
                <lv-heading :level="6">Do you want to continue?</lv-heading>
                <lv-paragraph v-space-after="0.5">Press continue to keep doing what you were doing.</lv-paragraph>
                <lv-input v-space-after="1" placeholder="Type something" />
            </template>
            <template #close>
                <lv-group>
                    <lv-button label="Cancel" color-type="outline" @click="showDialog = false"/>
                    <lv-button label="Continue" color="primary" @click="showDialog = false"/>
                </lv-group>
            </template>
        </lv-dialog>
    </lv-card>
    <lv-code :code="code" lang="html"/>
</template>

<script>
const code = `
<lv-button label="Open the dialog" @click="showDialog = true"/>
<lv-dialog :show="showDialog" @click-overlay="showDialog = false" :modal="false">
    <template #title>
        <lv-heading :level="4" v-space-after="1">Make a choice</lv-heading>
    </template>
    <template #description>
        <lv-heading :level="6">Do you want to continue?</lv-heading>
        <lv-paragraph v-space-after="0.5">Press continue to keep doing what you were doing.</lv-paragraph>
        <lv-input v-space-after="1" placeholder="Type something" />
    </template>
    <template #close>
        <lv-group>
            <lv-button label="Cancel" color-type="outline" @click="showDialog = false"/>
            <lv-button label="Continue" color="primary" @click="showDialog = false"/>
        </lv-group>
    </template>
</lv-dialog>
`.trim();
export default {
    data() {
        return {
            showDialog: false,
            code,
        }
    },
};
</script>
