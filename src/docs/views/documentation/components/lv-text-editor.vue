<template>
    <lv-heading v-space-after="0.5" :level="3">Text Editor</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A fully functional wysiwyg editor with the power of tiptap!</lv-heading>
    <lv-card v-space-after="1">
        <lv-text-editor v-model="content"/>
    </lv-card>
    <lv-separator v-space-after="1" />
    <lv-text v-space-after="1">
        {{ content }}
    </lv-text>
    <code-preview v-space-after="1" lang="html" :code="code"/>
    <component-details :slots="['buttons']" component="LvTextEditor"></component-details>
</template>

<script>
const code = `
<lv-card v-space-after="1">
    <lv-text-editor v-model="content"/>
</lv-card>
`.trim();
export default {
    data() {
        return {
            code,
            content: `<h3>I'm a text editor powered by tiptap</h3><p>How are you <strong>doing</strong> today?</p><ul><li>One</li><li>Two</li></ul>`,
        }
    }
}
</script>
