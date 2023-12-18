<template>
    <lv-card class="lv-widget-chart" inline>
        <div class="lv-widget-chart__head">
            <div class="lv-widget-chart__info">
                <div class="lv-widget-chart__title">{{ title }}</div>
                <div v-if="diff" class="lv-widget-chart__diff" :class="{ 'lv-widget-chart__diff--negative': diff < 0 }">
                    <template v-if="diff > 0">+</template>{{ diff }}%
                </div>
            </div>
            <div class="lv-widget-chart__amount">
                <span v-if="prefix" class="lv-widget-chart__prefix">{{ prefix }}</span>
                {{ amount }}
            </div>
        </div>
        <lv-chart height="70px" :datasets="datasets" :labels="labels" :type="chartType" :show-axis="false" />
    </lv-card>
</template>

<script>
import LvChart from "../LvChart/LvChart.vue";
import LvCard from "../LvCard/LvCard.vue";

export default {
    components: {
        LvCard,
        LvChart,
    },
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
.lv-widget-chart {
    padding: 1rem;
    width: 100%;

    &__head {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        color: var(--text-color-dimmed);
        font-weight: 500;
    }
    &__info {
        display: flex;
        margin-bottom: 1rem;
        min-width: 150px;
    }
    &__title {
        margin-right: 1rem;
    }
    &__diff {
        margin-left: auto;
        color: var(--color-success);
        &--negative {
            color: var(--color-danger);
        }
    }
    &__amount {
        display: flex;
        align-items: flex-start;
        margin-right: 10px;
        color: var(--text-color);
        font-weight: 600;
        font-size: var(--font-size-huge);
        line-height: var(--font-size-huge);
        margin-bottom: .5rem;
    }
    &__prefix {
        margin-right: 5px;
        color: var(--text-color-dimmed);
        font-weight: 500;
        font-size: var(--font-size-large);
        line-height: var(--font-size-large);
    }
}
</style>
