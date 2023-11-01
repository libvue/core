<template>
    <div class="lv-pagination">
        <lv-button
            v-if="showArrows && showFastArrows"
            icon="chevrons-left"
            color="ghost-default"
            :disabled="parsedModelValue === 1 || loading"
            class="lv-pagination__button"
            @click="onClickFirst"
        ></lv-button>
        <lv-button
            v-if="showArrows"
            icon="chevron-left"
            color="ghost-default"
            :disabled="parsedModelValue === 1 || loading"
            class="lv-pagination__button"
            @click="onClickPrev"
        ></lv-button>
        <!-- visible pages -->
        <lv-button
            v-for="page in visiblePages"
            :key="page"
            :label="page.toString()"
            :color="page === parsedModelValue ? 'solid-primary' : 'ghost-default'"
            class="lv-pagination__button"
            :loading="page === parsedModelValue && loading"
            :disabled="page !== parsedModelValue && loading"
            @click="onClick(page)"
        />
        <lv-button
            v-if="showArrows"
            icon="chevron-right"
            color="ghost-default"
            :disabled="parsedModelValue === totalPages || loading"
            class="lv-pagination__button"
            @click="onClickNext"
        ></lv-button>
        <lv-button
            v-if="showArrows && showFastArrows"
            icon="chevrons-right"
            color="ghost-default"
            :disabled="parsedModelValue === totalPages || loading"
            class="lv-pagination__button"
            @click="onClickLast"
        ></lv-button>
        <div v-if="showInfo" class="lv-pagination__info">
            {{ parsedModelValue }}/{{ totalPages }}
        </div>
    </div>
</template>

<script>
import LvButton from "../LvButton/LvButton.vue";

/**
 * Inspired by API's of Laravel orion and their pagination approach
 * More here: https://www.youtube.com/watch?v=6_Akr_ldKCQ&t=21s
 *            https://tailflow.github.io/laravel-orion-docs/
 */
export default {
    components: { LvButton },
    props: {
        /**
         * Expected a number, but can be string as well. Since the state
         * of a page can be stored in the querystring, which is often
         * parsed as a String instead of integer.
         */
        modelValue: {
            type: [Number, String],
            default: 1,
        },
        /**
         * Sets the items per page
         * Given bij meta.per_page in laravel orion
         */
        itemsPerPage: {
            type: Number,
            default: 10,
        },
        /**
         * Sets the items per page
         * Given bij meta.last_page in laravel orion
         */
        totalPages: {
            type: Number,
            required: true,
        },
        /**
         * Sets the max visible pages
         * Must be an odd number
         */
        maxVisiblePages: {
            type: Number,
            default: 5,
            validator: (val) => val % 2 === 1,
        },
        /**
         * Show/hide the arrows
         */
        showArrows: {
            type: Boolean,
            default: true,
        },
        /**
         * Show/hide additional info
         */
        showInfo: {
            type: Boolean,
            default: true,
        },
        /**
         * Show/hide fast arrows
         */
        showFastArrows: {
            type: Boolean,
            default: false,
        },
        /**
         * Loading
         */
        loading: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    computed: {
        parsedModelValue() {
            return parseInt(this.modelValue, 10);
        },
        visiblePages() {
            const minMax = (this.maxVisiblePages - 1) / 2;
            const visiblePages = [];
            if (this.totalPages <= this.maxVisiblePages) {
                // If the total pages is lower or equal to the maxVisible pages
                Array.from(Array(this.totalPages)).forEach((val, index) => {
                    visiblePages.push(index + 1);
                });
            } else if (this.parsedModelValue <= minMax) {
                // Check if it is before the minMax
                Array.from(Array(this.maxVisiblePages)).forEach((val, index) => {
                    visiblePages.push(index + 1);
                });
            } else if (this.parsedModelValue > minMax && this.parsedModelValue < this.totalPages - minMax) {
                // Check if its in between
                Array.from(Array(minMax)).forEach((val, index) => {
                    visiblePages.push(this.parsedModelValue - (index + 1));
                });
                visiblePages.push(this.parsedModelValue);
                Array.from(Array(minMax)).forEach((val, index) => {
                    visiblePages.push(this.parsedModelValue + (index + 1));
                });
            } else {
                // Check if its after the minMax
                Array.from(Array(this.maxVisiblePages)).forEach((val, index) => {
                    visiblePages.push(this.totalPages - index);
                });
            }
            return visiblePages.sort((a, b) => a - b);
        },
        hasOverflow() {
            const visiblePagesSecondToLastVisible = this.visiblePages.includes(this.totalPages - 1);
            return this.totalPages - this.visiblePages.length > 1 && !visiblePagesSecondToLastVisible;
        },
    },
    methods: {
        onClick(v) {
            this.$emit('update:modelValue', v);
        },
        onClickPrev() {
            this.$emit('update:modelValue', this.parsedModelValue - 1);
        },
        onClickNext() {
            this.$emit('update:modelValue', this.parsedModelValue + 1);
        },
        onClickFirst() {
            this.$emit('update:modelValue', 1);
        },
        onClickLast() {
            this.$emit('update:modelValue', this.totalPages);
        }
    },
};
</script>

<style lang="scss">
.lv-pagination {
    user-select: none;
    display: flex;
    align-items: center;

    &__button {
        min-width: 40px;
    }

    &__info {
        margin-left: auto;
        color: var(--text-color-dimmed);
    }
}
</style>
