<template>
    <lv-card class="lv-widget-number" inline>
        <div class="lv-widget-number__head">
            <div class="lv-widget-number__info">
                <div class="lv-widget-number__title">{{ title }}</div>
                <div v-if="diff" class="lv-widget-number__diff" :class="{ 'lv-widget-number__diff--negative': diff < 0 }">
                    <template v-if="diff > 0">+</template>{{ diff }}%
                </div>
            </div>
            <div class="lv-widget-number__amount">
                <span v-if="prefix" class="lv-widget-number__prefix">{{ prefix }}</span>
                {{ amount }}
            </div>
        </div>
    </lv-card>
</template>

<script>
import LvCard from "../LvCard/LvCard.vue";

export default {
    components: { LvCard },
    props: {
        type: {
            type: String,
            default: 'number',
            validator: (val) => ['number', 'graph', 'bar', 'list'].includes(val),
        },
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
    },
};
</script>

<style lang="scss">
.lv-widget-number {
    padding: 1rem;
    width: 100%;

    &__head {
        display: flex;
        flex-direction: column;
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
        font-size: 1.7rem;
        line-height: 1.7rem;
    }

    &__prefix {
        margin-right: 5px;
        color: var(--text-color-dimmed);
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 1.2rem;
    }
}
</style>
