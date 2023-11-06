<template>
    <lv-heading v-space-after="0.5" :level="3">Fragment Link</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Add a fragment link to anything</lv-heading>
    <lv-card v-space-after="1">
        <lv-fragment-link id="heading-1" v-space-after=".5">
            <lv-heading :level="6">Heading 1</lv-heading>
        </lv-fragment-link>
        <lv-text v-space-after="1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda autem beatae dicta dignissimos fugiat, iusto minima quae quibusdam sequi, tempore totam. Aperiam eaque ipsum numquam quia ullam. Impedit, praesentium.</lv-text>
        <lv-fragment-link id="heading-2" v-space-after=".5">
            <lv-heading :level="6">Heading 2</lv-heading>
        </lv-fragment-link>
        <lv-text v-space-after="1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda autem beatae dicta dignissimos fugiat, iusto minima quae quibusdam sequi, tempore totam. Aperiam eaque ipsum numquam quia ullam. Impedit, praesentium.</lv-text>
        <lv-fragment-link id="heading-3" v-space-after=".5">
            <lv-heading :level="6">Heading 3</lv-heading>
        </lv-fragment-link>
        <lv-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda autem beatae dicta dignissimos fugiat, iusto minima quae quibusdam sequi, tempore totam. Aperiam eaque ipsum numquam quia ullam. Impedit, praesentium.</lv-text>
    </lv-card>
    <code-preview  v-space-after="1" lang="html" :code="code"/>
    <component-details component="LvFragmentLink"></component-details>
</template>

<script>
const code = `
<lv-fragment-link id="heading-1" v-space-after=".5">
    <lv-heading :level="6">Heading 1</lv-heading>
</lv-fragment-link>
<lv-text v-space-after="1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda autem beatae dicta dignissimos fugiat, iusto minima quae quibusdam sequi, tempore totam. Aperiam eaque ipsum numquam quia ullam. Impedit, praesentium.</lv-text>
<lv-fragment-link id="heading-2" v-space-after=".5">
    <lv-heading :level="6">Heading 2</lv-heading>
</lv-fragment-link>
<lv-text v-space-after="1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda autem beatae dicta dignissimos fugiat, iusto minima quae quibusdam sequi, tempore totam. Aperiam eaque ipsum numquam quia ullam. Impedit, praesentium.</lv-text>
<lv-fragment-link id="heading-3" v-space-after=".5">
    <lv-heading :level="6">Heading 3</lv-heading>
</lv-fragment-link>
<lv-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda autem beatae dicta dignissimos fugiat, iusto minima quae quibusdam sequi, tempore totam. Aperiam eaque ipsum numquam quia ullam. Impedit, praesentium.</lv-text>
`.trim();
export default {
    data() {
        return {
            code,
        }
    }
}
</script>
