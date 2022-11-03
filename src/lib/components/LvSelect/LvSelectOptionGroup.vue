<template>
    <div class="lv-select-option-group">
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
        }
    },
    updated() {
        this.$nextTick(() => {
            this.visibleOptions = this.getVisibleOptions();
        });
    },
    mounted() {
        this.visibleOptions = this.getVisibleOptions();
    },
    methods: {
        getVisibleOptions() {
            return this.$el.querySelectorAll('.lv-select-option').length;
        },
    }
}
</script>

<style lang="scss">
.lv-select-option-group {
    display: none;
    &:has(div:not(.lv-select-option-group__title)) {
        display: block;
    }
    &:not(&:first-of-type) {
        margin-top: .5rem;
    }
    &__title {
        padding: calc(var(--padding) * .5) calc(var(--padding) * .75);
        margin-bottom: .5rem;
        font-size: var(--font-size-small);
        font-weight: bold;
    }
}
</style>
