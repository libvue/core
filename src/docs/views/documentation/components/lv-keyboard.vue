<template>
    <lv-heading v-space-after="0.5" :level="3">Keyboard</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">The Keyboard Input element</lv-heading>

    <lv-card v-space-after="1">
        <lv-heading v-space-after="0.5" :level="6">Mac layout</lv-heading>
        <lv-text v-space-after="1">
            Press <lv-keyboard meta>D</lv-keyboard> to minimize all windows.
            Press <lv-keyboard ctrl alt shift>DEL</lv-keyboard> to open the task manager.
        </lv-text>
        <lv-heading v-space-after="0.5" :level="6">Windows layout</lv-heading>
        <lv-text v-space-after="1">
            Press <lv-keyboard meta layout="windows">D</lv-keyboard> to minimize all windows.
            Press <lv-keyboard ctrl alt shift layout="windows">DEL</lv-keyboard> to open the task manager.
        </lv-text>
        <lv-heading v-space-after="0.5" :level="6">Linux layout</lv-heading>
        <lv-text>
            Press <lv-keyboard meta layout="linux">D</lv-keyboard> to minimize all windows.
            Press <lv-keyboard ctrl alt shift layout="linux">DEL</lv-keyboard> to open the task manager.
        </lv-text>
    </lv-card>

    <code-preview v-space-after="1" lang="html" :code="code" />
    <component-details component="LvKeyboard"></component-details>
</template>

<script>
import LvText from "../../../../lib/components/LvText/LvText.vue";

const code = `
<lv-heading v-space-after="0.5" :level="6">Mac layout</lv-heading>
<lv-text v-space-after="1">
    Press <lv-keyboard meta>D</lv-keyboard> to minimize all windows.
    Press <lv-keyboard ctrl alt shift>DEL</lv-keyboard> to open the task manager.
</lv-text>
<lv-heading v-space-after="0.5" :level="6">Windows layout</lv-heading>
<lv-text v-space-after="1">
    Press <lv-keyboard meta layout="windows">D</lv-keyboard> to minimize all windows.
    Press <lv-keyboard ctrl alt shift layout="windows">DEL</lv-keyboard> to open the task manager.
</lv-text>
<lv-heading v-space-after="0.5" :level="6">Linux layout</lv-heading>
<lv-text>
    Press <lv-keyboard meta layout="linux">D</lv-keyboard> to minimize all windows.
    Press <lv-keyboard ctrl alt shift layout="linux">DEL</lv-keyboard> to open the task manager.
</lv-text>
`.trim();

export default {
    components: { LvText },
    data() {
        return {
            code,
        };
    },
};
</script>
