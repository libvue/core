<template>
    <div
        v-if="isVisible"
        class="lv-select-option"
        :class="classObject"
        tabindex="0"
        @click="onClickOption"
        @keydown.space.enter.prevent="onClickOption"
    >
        <lv-checkbox v-if="multiple" :model-value="isSelected" class="lv-select-option__checkbox" />
        <slot></slot>
    </div>
</template>

<script>
export default {
    inject: ['value', 'multiple', 'searchable', 'searchValue'],
    props: {
        option: {
            type: Object,
            required: true,
        },
    },
    emits: ['click'],
    computed: {
        isSelected() {
            if (!this.value) return false;
            if (this.multiple) {
                const clonedModelValue = JSON.parse(JSON.stringify(this.value));
                clonedModelValue.forEach((i, index) => {
                    clonedModelValue[index] = JSON.stringify(i);
                });
                return clonedModelValue.includes(JSON.stringify(this.option));
            }
            return JSON.stringify(this.value) === JSON.stringify(this.option);
        },
        classObject() {
            return {
                'lv-select-option--multiple': this.multiple,
                'lv-select-option--selected': this.isSelected,
            };
        },
        isVisible() {
            if (!this.searchValue) {
                return true;
            }
            return this.searchable && this.option.label.includes(this.searchValue);
        },
    },
    methods: {
        onClickOption() {
            if (this.multiple) {
                if (this.isSelected) {
                    const clonedModelValue = JSON.parse(JSON.stringify(this.value));
                    const indexOfOption = clonedModelValue.findIndex(
                        (i) => JSON.stringify(i) === JSON.stringify(this.option)
                    );
                    clonedModelValue.splice(indexOfOption, 1);
                    this.$emit('click', clonedModelValue);
                } else {
                    this.$emit('click', [...this.value, this.option]);
                }
            } else if (this.isSelected) {
                this.$emit('click', null);
            } else {
                this.$emit('click', this.option);
            }
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
    font-size: var(--font-size);
    line-height: var(--font-size);

    &__checkbox {
        margin-right: 0.5rem !important;
    }

    &--multiple {
        padding: calc(var(--padding) - 0.2rem) calc(var(--padding) - 0.2rem);
    }

    &:hover {
        background-color: var(--border-color-light);
    }
    &--selected:not(&--multiple) {
        background-color: var(--color-primary);
        color: var(--color-white);
    }
}
</style>
