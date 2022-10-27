<template>
    <div class="lv-pagination">
        <lv-button
            v-if="showArrows"
            icon="chevron-left"
            color="ghost-default"
            :disabled="modelValue === 1"
            @click="onClickPrev"
            class="lv-pagination__button"
        ></lv-button>
        <!-- visible pages -->
        <lv-button
            v-for="page in visiblePages"
            :key="page"
            :label="page.toString()"
            :color="page === modelValue ? 'solid-primary' : 'ghost-default'"
            @click="onClick(page)"
            class="lv-pagination__button"
        />
        <lv-button
            v-if="showArrows"
            icon="chevron-right"
            color="ghost-default"
            :disabled="modelValue === totalPages"
            @click="onClickNext"
            class="lv-pagination__button"
        ></lv-button>
    </div>
</template>

<script>
/**
 * Inspired by API's of Laravel orion and their pagination approach
 * More here: https://www.youtube.com/watch?v=6_Akr_ldKCQ&t=21s
 *            https://tailflow.github.io/laravel-orion-docs/
 */
export default {
    props: {
        modelValue: {
            type: Number,
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
    },
    computed: {
        visiblePages() {
            const minMax = (this.maxVisiblePages - 1) / 2;
            const visiblePages = [];
            if (this.totalPages <= this.maxVisiblePages) {
                // If the total pages is lower or equal to the maxVisible pages
                Array.from(Array(this.totalPages)).forEach((val, index) => {
                    visiblePages.push(index + 1);
                });
            } else if (this.modelValue <= minMax) {
                // Check if it is before the minMax
                Array.from(Array(this.maxVisiblePages)).forEach((val, index) => {
                    visiblePages.push(index + 1);
                });
            } else if (this.modelValue > minMax && this.modelValue < this.totalPages - minMax) {
                // Check if its in between
                Array.from(Array(minMax)).forEach((val, index) => {
                    visiblePages.push(this.modelValue - (index + 1));
                });
                visiblePages.push(this.modelValue);
                Array.from(Array(minMax)).forEach((val, index) => {
                    visiblePages.push(this.modelValue + (index + 1));
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
    emits: ['update:modelValue'],
    methods: {
        onClick(v) {
            this.$emit('update:modelValue', v);
        },
        onClickPrev() {
            this.$emit('update:modelValue', this.modelValue - 1);
        },
        onClickNext() {
            this.$emit('update:modelValue', this.modelValue + 1);
        },
    },
};
</script>

<style lang="scss">
.lv-pagination {
    user-select: none;

    &__button {
        min-width: 40px;
    }
}
</style>
