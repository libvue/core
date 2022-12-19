<template>
    <div class="lv-accordion">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        single: {
            type: Boolean,
            default: false,
        },
        eventBus: {
            type: Object,
            required: true,
        }
    },
    mounted() {
        if (this.single) {
            this.startListener();
        }
    },
    methods: {
        startListener() {
            this.eventBus.$on('accordion-item:open', (uuid) => {
                this.eventBus.$emit('accordion:close', uuid);
            });
        },
    },
};
</script>
