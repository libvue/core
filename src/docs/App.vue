<template>
    <component :is="layoutComponent"></component>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";
import EmptyLayout from "./layouts/EmptyLayout.vue";

export default {
    computed: {
        layoutComponent() {
            if(this.$route.meta?.layout === 'empty') {
                return EmptyLayout;
            }
            return DefaultLayout;
        },
    },
};
</script>
