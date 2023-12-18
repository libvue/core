<template>
    <lv-heading v-space-after="0.5" :level="3">Slider</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">An single slider input</lv-heading>

    <lv-notice color="solid-dimmed-success" v-space-after="1" icon="accessibility">
        <lv-flex gap=".2rem">
            Using <lv-link color="currentColor" href="https://www.w3.org/WAI/ARIA/apg/patterns/slider/" target="_blank" highlight>w3.org Aria Slider Pattern</lv-link>
        </lv-flex>
    </lv-notice>

    <lv-card v-space-after="1">
        <lv-flex direction="column">
            <lv-slider v-model="model" aria-label="Choose a value" :min="100" :max="200" :step="5"></lv-slider>
        </lv-flex>
    </lv-card>
    <code-preview :code="code" lang="html" />
    <component-details v-space-after="1" component="LvSlider"></component-details>
</template>

<script>
const code = `
<lv-slider v-model="model" aria-label="Choose a value" :min="100" :max="200" :step="5"></lv-slider>
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
