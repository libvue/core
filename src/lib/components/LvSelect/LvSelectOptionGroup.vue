<template>
    <div class="lv-select-option-group" v-show="visibleOptions">
        <div class="lv-select-option-group__title">{{ title }}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            visibleOptions: null,
            element: null,
        }
    },
    updated() {
        this.$nextTick(() => {
            this.visibleOptions = this.getVisibleOptions();
        });
    },
    mounted() {
        this.element = this.$el;
        this.visibleOptions = this.getVisibleOptions();
    },
    methods: {
        getVisibleOptions() {
            if(this.element) {
                return this.element.querySelectorAll('.lv-select-option').length;
            }
            return 0;
        },
    }
}
</script>

<style lang="scss">
.lv-select-option-group {
    display: none;
    margin-top: .5rem;
    &:has(div:not(.lv-select-option-group__title)) {
        display: block;
    }
    &__title {
        padding: calc(var(--padding) * .5) calc(var(--padding) * .75);
        margin-bottom: .5rem;
        font-size: var(--font-size-small);
        font-weight: bold;
    }
}
</style>
