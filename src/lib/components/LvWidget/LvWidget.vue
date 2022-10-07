<template>
    <component :is="component" v-bind="$attrs" />
</template>

<script>
import LvWidgetNumber from './LvWidgetNumber.vue';
import LvWidgetChart from './LvWidgetChart.vue';

export default {
    props: {
        type: {
            type: String,
            default: 'number',
            validator: (val) => ['number', 'chart'].includes(val),
        },
    },
    computed: {
        component() {
            if (this.type === 'number') {
                return LvWidgetNumber;
            }
            if (this.type === 'chart') {
                return LvWidgetChart;
            }
        },
    },
};
</script>
