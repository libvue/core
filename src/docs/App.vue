<template>
    <component :is="layoutComponent"></component>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";
import BreakpointMixin from "../lib/mixins/breakpointMixin";
import EmptyLayout from "./layouts/EmptyLayout.vue";

export default {
    mixins: [BreakpointMixin],
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
