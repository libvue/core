<template>
    <lv-heading v-space-after="0.5" :level="3">Color Picker</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Used for picking a hex color</lv-heading>

    <lv-color-picker v-space-after="1" v-model="color"></lv-color-picker>

    <component-details component="LvColorPicker"></component-details>
</template>

<script>
export default {
    data() {
        return {
            color: '#ff5522'
        };
    },
};
</script>
