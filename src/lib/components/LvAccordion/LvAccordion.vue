<template>
    <div class="lv-accordion">
        <slot></slot>
    </div>
</template>

<script>
import eventBus from '../../utils/eventBus';

export default {
    props: {
        single: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        if(this.single) {
            this.startListener();
        }
    },
    methods: {
        startListener() {
            eventBus.$on('accordion-item:open', (uuid) => {
                eventBus.$emit('accordion:close', uuid)
            })
        }
    }
};
</script>

<style lang="scss">
</style>
