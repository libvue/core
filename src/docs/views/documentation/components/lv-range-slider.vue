<template>
    <lv-heading v-space-after="0.5" :level="3">Range Slider</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">An double slider input</lv-heading>
    <lv-card v-space-after="1">
        <lv-flex direction="column">
            <lv-range-slider :min="100" :max="200" :step="5" v-model="model"></lv-range-slider>
        </lv-flex>
    </lv-card>
    <lv-code v-space-after="1" :code="code" lang="html" />
    <component-details component="LvRangeSlider"></component-details>
</template>

<script>
const code = `
<lv-range-slider :min="100" :max="200" :step="5" v-model="model"></lv-range-slider>
`.trim();
export default {
    data() {
        return {
            code,
            model: { from: 120, to: 150 },
        };
    },
};
</script>
