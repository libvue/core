<template>
    <component :is="layoutComponent"></component>
</template>

<script>
import SplashLayout from "./layouts/SplashLayout.vue";
import DocsLayout from "./layouts/DocsLayout.vue";

export default {
    computed: {
        layoutComponent() {
            if(this.$route.meta.layout === 'splash') {
                return SplashLayout
            }
            return DocsLayout;
        },
    },
};
</script>