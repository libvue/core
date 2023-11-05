<template>
    <lv-heading v-space-after="0.5" :level="3">Accessibility</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">If possible, we try to follow the ARIA Authoring Practices Guide (APG)</lv-heading>

    <lv-paragraph v-space-after="1">
        When applicable, our components follow the ARIA Authoring Practices Guide (APG). You can see if a
        component is following these guidelines by a notice above on that page.
    </lv-paragraph>

    <lv-paragraph v-space-after="1">
        Keep in mind that disabled and or loading form elements are still focusable.
    </lv-paragraph>
</template>

<script>
export default {
    methods: {
        onClickLink() {
            this.$router.push({ path: 'v-space-after' })
        }
    }
}
</script>
