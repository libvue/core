<template>
    <lv-heading v-space-after="0.5" :level="3">Progress Steps</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Used for showing the completion progress of a task.</lv-heading>
    <lv-card v-space-after="1">
        <lv-progress-steps :steps="steps" :active="activeStep" @change-step="(v) => (activeStep = v)" />
    </lv-card>
    <lv-code v-space-after="1" :files="files" :active="activeFile" @change-file="(v) => (activeFile = v)"></lv-code>
    <component-details component="LvProgressSteps"></component-details>
</template>

<script>
const codeTemplate = `
<lv-progress-steps :steps="steps" :active="activeStep" @change-step="(v) => (activeStep = v)" />
`.trim();
const codeScript = `
activeStep: 'check',
steps: [
    { id: 'files', prefix: '1.', title: 'Select', completed: true },
    { id: 'build', prefix: '2.', title: 'Build', completed: true },
    { id: 'check', prefix: '3.', title: 'Check', completed: false },
    { id: 'publish', prefix: '4.', title: 'Publish', completed: false, disabled: true },
],
`.trim();

export default {
    data() {
        return {
            activeFile: 'template',
            files: [
                { id: 'template', filename: 'template', code: codeTemplate },
                { id: 'script', filename: 'script', code: codeScript },
            ],
            activeStep: 'check',
            steps: [
                { id: 'files', prefix: '1.', title: 'Select', completed: true },
                { id: 'build', prefix: '2.', title: 'Build', completed: true },
                { id: 'check', prefix: '3.', title: 'Check', completed: false },
                { id: 'publish', prefix: '4.', title: 'Publish', completed: false, disabled: true },
            ],
        };
    },
};
</script>
