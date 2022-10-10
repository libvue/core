<template>
    <div
        class="lv-select"
        :class="classObject"
        role="combobox"
        :aria-expanded="dropdownVisible"
        aria-haspopup="listbox"
    >
        <div class="lv-select__input" @click="onClickSelection">
            <div v-if="selectedOption" class="lv-select__selection">
                <div v-if="selectedOption.image" class="lv-select__selection-image">
                    <img :src="selectedOption.image" :alt="selectedOption.label" />
                </div>
                <div class="lv-select__selection-label">
                    {{ selectedOption.label }}
                </div>
            </div>
            <div v-else class="lv-select__placeholder">{{ placeholder }}</div>
            <lv-icon class="lv-select__icon" name="chevron-down"></lv-icon>
        </div>
        <transition name="dropdown" role="listbox">
            <div v-show="dropdownVisible" class="lv-select__dropdown">
                <div v-if="noOptions" class="lv-select__no-options">No options found</div>
                <div
                    v-for="(option, index) in options"
                    v-else
                    :key="index"
                    class="lv-select__option"
                    :class="{
                        'lv-select__option--active': option.value === modelValue,
                        'lv-select__option--disabled': !!option.disabled,
                    }"
                    role="option"
                    :aria-selected="option.value === modelValue"
                    @click="onClickOption(option)"
                >
                    <div v-if="option.image" class="lv-select__option-image">
                        <img :src="option.image" :alt="option.label" />
                    </div>
                    <div class="lv-select__option-label">{{ option.label }}</div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: [Number, String],
            default: null,
        },
        placeholder: {
            type: String,
            default: 'Choose an option',
        },
        options: {
            type: Array,
            default: () => [],
            validator: (optionsArray) => {
                let isValid = true;
                optionsArray.forEach((opt) => {
                    if (!opt.label || !opt.value) {
                        isValid = false;
                    }
                });
                return isValid;
            },
        },
        clearable: {
            type: Boolean,
            default: true,
        },
    },
    emits: ['update:modelValue'],
    data() {
        return {
            dropdownVisible: false,
        };
    },
    computed: {
        noOptions() {
            return this.options.length === 0;
        },
        classObject() {
            return {};
        },
        selectedOption() {
            return this.options.find((i) => i.value === this.modelValue) || false;
        },
    },
    methods: {
        onClickOption(option) {
            if (this.modelValue === option.value && this.clearable) {
                this.$emit('update:modelValue', null);
            } else {
                this.$emit('update:modelValue', option.value);
            }
            this.dropdownVisible = false;
        },
        onClickSelection() {
            this.dropdownVisible = !this.dropdownVisible;
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';
.lv-select {
    position: relative;

    &__input {
        display: flex;
        border: 1px solid $border-color;
        border-radius: $border-radius;
    }

    &__selection {
        display: flex;
        &-image {
            border: 4px solid #fff;
            border-radius: $border-radius;
            background-color: $background-color;
            width: calc(calc($padding * 2) + $font-size - 8px);
            height: calc(calc($padding * 2) + $font-size - 8px);
            img {
                border-radius: $border-radius;
                width: 100%;
                height: 100%;
            }
        }
        &-label {
            padding: $padding;
            font-size: $font-size;
            line-height: $font-size;
        }
    }
    &__placeholder {
        padding: $padding;
        color: $text-color-dimmed;
        font-size: $font-size;
        line-height: $font-size;
    }
    &__icon {
        margin-left: auto;
        padding: $padding;
        font-size: $font-size;
        line-height: $font-size;
    }

    &__dropdown {
        position: absolute;
        z-index: $z-index-dropdown;
        margin-top: -1px;
        box-shadow: $shadow;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        background-color: $background-color;
        width: calc(100% - 2px);
    }
    &__no-options {
        padding: $padding;
    }
    &__option {
        display: flex;
        transition: 0.1s all;
        cursor: pointer;
        overflow: hidden;
        font-size: $font-size;
        line-height: $font-size;

        &-image {
            border: 4px solid #fff;
            background-color: $background-color;
            width: calc(calc($padding * 2) + $font-size - 8px);
            height: calc(calc($padding * 2) + $font-size - 8px);
            img {
                border-radius: $border-radius;
                width: 100%;
                height: 100%;
            }
        }
        &-label {
            padding: $padding;
        }

        &:first-of-type {
            border-radius: $border-radius $border-radius 0 0;
        }
        &:last-of-type {
            border-radius: 0 0 $border-radius $border-radius;
        }
        &:hover:not(&--active) {
            background-color: $border-color;
        }
        &--active {
            background-color: $color-primary;
            color: $text-color-inverted;
        }
        &--disabled {
            pointer-events: none;
            color: $text-color-dimmed;
            text-decoration: line-through;
        }
    }
}

.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.1s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    transform: translateY(-5px);
    opacity: 0;
}
</style>
