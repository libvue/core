<template>
    <lv-heading v-space-after="0.5" :level="3">Range Slider</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">An double slider input</lv-heading>

    <lv-notice color="solid-dimmed-success" v-space-after="1" icon="accessibility">
        <lv-flex gap=".2rem">
            Using <lv-link color="currentColor" href="https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/" target="_blank" highlight>w3.org Aria Slider (Multi-Thumb) Pattern</lv-link>
        </lv-flex>
    </lv-notice>

    <lv-card v-space-after="1">
        <lv-flex direction="column">
            <lv-range-slider :min="100" :max="200" :step="5" v-model="model" aria-label-thumb-one="Choose first value" aria-label-thumb-two="Choose second value"></lv-range-slider>
        </lv-flex>
    </lv-card>
    <code-preview v-space-after="1" :code="code" lang="html" />
    <component-details component="LvRangeSlider"></component-details>
</template>

<script>
const code = `
<lv-range-slider :min="100" :max="200" :step="5" v-model="model" aria-label-thumb-one="Choose first value" aria-label-thumb-two="Choose second value"></lv-range-slider>
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
