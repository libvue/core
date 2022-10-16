<template>
    <lv-heading v-space-after="0.5" :level="3">Range Slider</lv-heading>
    <lv-heading v-space-after="1" sub :level="6">An multi-typed input for your fancy forms</lv-heading>
    <lv-card v-space-after="1">
        <lv-range-slider :min="100" :max="200" :step="5" :value="{ from: 120, to: 150 }"></lv-range-slider>
        <lv-range-slider disabled :min="100" :max="200" :step="5" :value="{ from: 120, to: 150 }"></lv-range-slider>
        <lv-range-slider loading :min="100" :max="200" :step="5" :value="{ from: 120, to: 150 }"></lv-range-slider>
    </lv-card>
    <lv-code :code="code" lang="html" />
</template>

<script>
const code = `
<lv-range-slider :min="100" :max="200" :step="5" :value="{ from: 120, to: 150 }"></lv-range-slider>
`.trim();
export default {
    data() {
        return {
            code
        };
    },
};
</script>
