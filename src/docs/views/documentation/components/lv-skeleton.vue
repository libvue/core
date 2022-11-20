<template>
    <lv-heading v-space-after="0.5" :level="3">Skeleton</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Reserve space for upcoming data!</lv-heading>
    <lv-card v-space-after="1">
        <lv-skeleton/>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="codeDefault"/>
    <lv-card v-space-after="1">
        <lv-skeleton width="200px" height="100px"/>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="codeDimensions"/>
    <lv-card v-space-after="1">
        <lv-group>
            <lv-skeleton width="50px" height="50px" rounded/>
            <lv-skeleton width="50px" height="50px" squared/>
        </lv-group>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="codeShapes"/>
    <component-details component="LvSkeleton"></component-details>
</template>

<script>
const codeDefault = `<lv-skeleton/>`.trim();
const codeDimensions = `<lv-skeleton width="200px" height="100px"/>`.trim();
const codeShapes = `
<lv-skeleton width="50px" height="50px" rounded/>
<lv-skeleton width="50px" height="50px" squared/>
`.trim();
export default {
    data() {
        return {
            codeDefault,
            codeDimensions,
            codeShapes
        }
    }
}
</script>
