<template>
    <lv-heading v-space-after="0.5" :level="3">Toast</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Important messages at your service</lv-heading>

    <lv-heading v-space-after="1" :level="6">Component</lv-heading>
    <lv-card v-space-after="1">
        <lv-toast description="Monday, October 24, 2022 at 9:26 PM" title="Your work is saved" />
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />

    <lv-heading v-space-after="1" :level="6">Programmatic</lv-heading>
    <lv-card v-space-after="1">
        <lv-button label="Add toast programmatically" @click="addToast"/>
        <lv-toasts :max="3" :decay="3000" />
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="codeProgram" />
    <lv-code v-space-after="1" lang="js" :code="codeAddToast" />
</template>

<script>
const code = `
<lv-toast description="Monday, October 24, 2022 at 9:26 PM" title="Your work is saved" />
`.trim();
const codeProgram = `
<lv-button label="Add toast programmatically" @click="addToast"/>
<lv-toasts :max="3" :decay="3000" />
`.trim();
const codeAddToast = `
addToast() {
    this.libvue.addToast({
        title: 'Howdy!',
        description: 'This is a toast'
    })
}
`.trim();
export default {
    data() {
        return {
            code,
            codeProgram,
            codeAddToast
        }
    },
    methods: {
        addToast() {
            this.libvue.addToast({
                title: 'Howdy!',
                description: 'This is a toast',
            })
        }
    }
}
</script>
