<template>
    <lv-card class="lv-widget-chart" inline>
        <div class="lv-widget-chart__head">
            <div class="lv-widget-chart__amount">
                {{ amount }}
                <span v-if="prefix" class="lv-widget-chart__prefix">{{ prefix }}</span>
            </div>
            <div class="lv-widget-chart__title">
                {{ title }}
                <div v-if="diff" class="lv-widget-chart__diff" :class="{ 'lv-widget-chart__diff--negative': diff < 0 }">
                    <template v-if="diff > 0">+</template>{{ diff }}%
                </div>
            </div>
        </div>
        <lv-chart height="100px" :datasets="datasets" :labels="labels" :type="chartType" :show-axis="false" />
    </lv-card>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: null,
        },
        amount: {
            type: String,
            default: null,
        },
        diff: {
            type: Number,
            default: null,
        },
        prefix: {
            type: String,
            default: null,
        },
        chartType: {
            type: String,
            default: 'line',
            validator: (val) => ['line', 'bar'].includes(val),
        },
        labels: {
            type: Array,
            default: () => [],
        },
        datasets: {
            type: Array,
            default: () => [],
            validator: (datasets) => {
                let valid = true;
                datasets.forEach((dataset) => {
                    if (!dataset.label || !dataset.hue || !dataset.data) {
                        valid = false;
                    }
                });
                return valid;
            },
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';
.lv-widget-chart {
    padding: 1rem;

    &__head {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        color: $text-color-dimmed;
        font-weight: 500;
    }
    &__title {
        display: flex;
        margin-right: 10px;
        margin-bottom: 5px;
    }
    &__diff {
        margin-left: auto;
        color: $color-success;
        &--negative {
            color: $color-danger;
        }
    }
    &__amount {
        display: flex;
        align-items: flex-start;
        color: $text-color;
        font-weight: 600;
        font-size: 1.7rem;
        line-height: 1.7rem;
    }
    &__prefix {
        margin-right: 5px;
        color: $text-color-dimmed;
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 1.2rem;
    }
}
</style>
