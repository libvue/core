<template>
    <lv-heading v-space-after="0.5" :level="3">Theme Toggle</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A component just for toggling your theme</lv-heading>
    <lv-card v-space-after="1">
        <lv-theme-toggle v-model="theme"/>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />
    <component-details component="LvThemeToggle"></component-details>
</template>

<script>
export default {
    data() {
        return {
            code: `<lv-theme-toggle v-model="theme"/>`,
            theme: 'light',
        };
    },
};
</script>
