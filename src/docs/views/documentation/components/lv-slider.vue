<template>
    <lv-heading v-space-after="0.5" :level="3">Slider</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">An single slider input</lv-heading>
    <lv-card v-space-after="1">
        <lv-flex direction="column">
            <lv-slider v-model="model" :min="100" :max="200" :step="5"></lv-slider>
        </lv-flex>
    </lv-card>
    <code-preview :code="code" lang="html" />
    <component-details v-space-after="1" component="LvSlider"></component-details>
</template>

<script>
const code = `
<lv-slider v-model="model" :min="100" :max="200" :step="5"></lv-slider>
`.trim();
export default {
    data() {
        return {
            code,
            model: 110,
        };
    },
};
</script>
