<template>
    <component :is="layoutComponent"></component>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";

export default {
    computed: {
        layoutComponent() {
            return DefaultLayout;
        },
    },
};
</script>
