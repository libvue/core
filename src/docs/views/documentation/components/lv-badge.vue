<template>
    <lv-heading v-space-after="0.5" :level="3">Badge</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A simple badge component</lv-heading>
    <lv-heading v-space-after="1" :level="6">Standalone</lv-heading>
    <lv-card v-space-after="1">
        <lv-flex>
            <lv-badge text="hello" />
            <lv-badge text="hello" color="solid-warning" />
            <lv-badge text="hello" color="solid-dimmed-success" />
            <lv-badge text="hello" color="outline-info" />
        </lv-flex>
    </lv-card>
    <code-preview v-space-after="1" lang="html" :code="codeDefault" />
    <lv-heading v-space-after="1" :level="6">Slotted</lv-heading>
    <lv-card v-space-after="1">
        <lv-badge text="hello">
            <lv-button label="Im a button" />
        </lv-badge>
    </lv-card>
    <code-preview v-space-after="1" lang="html" :code="codeSlotted" />
    <component-details :slots="['default']" component="LvBadge"></component-details>
</template>

<script>
const codeDefault = `
<lv-badge text="hello" />
<lv-badge text="hello" color="solid-warning" />
<lv-badge text="hello" color="solid-dimmed-success" />
`.trim();
const codeSlotted = `
<lv-badge text="hello">
    <lv-button label="Im a button"/>
</lv-badge>
`.trim();

export default {
    data() {
        return {
            codeDefault,
            codeSlotted,
        };
    },
};
</script>
