<template>
    <lv-heading v-space-after="0.5" :level="3">Spacing</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Oops we forgot the spacing, or didn't we?</lv-heading>

    <lv-paragraph v-space-after="1">
        We didn't know the spacing we should apply so we decided to apply none. It's up to you!
    </lv-paragraph>
    <lv-paragraph>
        Use the <lv-link @click="onClickLink" highlight>v-space-after</lv-link> directive to apply spacing after the components. This
        directive automatically checks the flex-direction if you are using flex or inline-flex.
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
