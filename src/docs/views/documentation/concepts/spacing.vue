<template>
    <lv-heading v-space-after="0.5" :level="3">Spacing</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Use this to set spacing between your elements</lv-heading>

    <lv-text>
        Use the <lv-link @click="onClickLink" highlight>v-space-after</lv-link> directive to apply spacing after the components. This
        directive automatically checks the flex-direction if you are using flex or inline-flex.
    </lv-text>
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
