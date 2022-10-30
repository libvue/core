const vueTemplate = `
<template>
    <div class="%name%">
        Hello World
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.%name% {}
</style>
`.trim();

const docTemplate = `
<template>
    <lv-heading v-space-after="0.5" :level="3">%name%</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Component Description</lv-heading>
    <lv-card v-space-after="1">
        %component%
    </lv-card>
</template>

<script>
export default {}
</script>
`.trim();

const routeTemplate = `
    {
        path: '/docs/%kebab-name%',
        name: '%kebab-name%',
        component: %pascal-name%,
    }
`.trim();

module.exports = {
    vueTemplate,
    docTemplate,
    routeTemplate,
};
