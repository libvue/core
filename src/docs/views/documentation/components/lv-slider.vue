<template>
    <lv-heading v-space-after="0.5" :level="3">Slider</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">An single slider input</lv-heading>
    <lv-card v-space-after="1">
        <lv-slider v-model="model" :min="100" :max="200" :step="5"></lv-slider>
        <lv-slider v-model="model" disabled :min="100" :max="200" :step="5"></lv-slider>
        <lv-slider v-model="model" loading :min="100" :max="200" :step="5"></lv-slider>
    </lv-card>
    <lv-code :code="code" lang="html" />
</template>

<script>
const code = `
<lv-slider v-model="model" :min="100" :max="200" :step="5"></lv-slider>
<lv-slider v-model="model" disabled :min="100" :max="200" :step="5"></lv-slider>
<lv-slider v-model="model" loading :min="100" :max="200" :step="5"></lv-slider>
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
