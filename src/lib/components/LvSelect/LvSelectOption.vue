<template>
    <div
        v-if="visible"
        class="lv-select-option"
        :class="classObject"
        tabindex="0"
        @click="onClickOption"
        @keydown.space.enter.prevent="onClickOption"
    >
        <lv-checkbox v-if="checkbox" tabindex="-1" :model-value="selected" class="lv-select-option__checkbox" />
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        option: {
            type: Object,
            required: true,
        },
        checkbox: {
            type: Boolean,
            default: false,
        },
        selected: {
            type: Boolean,
            default: false,
        },
        visible: {
            type: Boolean,
            default: true,
        }
    },
    emits: ['click'],
    computed: {
        classObject() {
            return {
                'lv-select-option--selected': this.selected,
                'lv-select-option--has-checkbox': this.checkbox,
            };
        },
    },
    methods: {
        onClickOption() {
            this.$emit('click', this.option);
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/animations/animations';

.lv-select-option {
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: var(--border-radius);
    padding: calc(var(--padding) * 1) calc(var(--padding) * 0.75);
    overflow: hidden;
    font-size: inherit;
    line-height: inherit;

    &__checkbox {
        margin-right: 0.5rem !important;
    }

    &:hover {
        background-color: var(--border-color-light);
    }
    &--has-checkbox {
        padding: calc(var(--padding) - 0.2rem) calc(var(--padding) - 0.2rem);
    }
    &--selected:not(&--has-checkbox) {
        background-color: var(--color-primary);
        color: var(--color-white);
    }
}
</style>
