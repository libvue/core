<template>
    <div
        ref="select"
        class="lv-select"
        :class="classObject"
        role="combobox"
        :aria-expanded="dropdownVisible"
        aria-haspopup="listbox"
        @keydown.esc="onEscape"
    >
        <!-- Input -->
        <div
            ref="combobox"
            class="lv-select__input"
            tabindex="0"
            @click="onClickSelection"
            @keydown.enter.space.prevent="onClickSelection"
        >
            <!-- Single value -->
            <div v-if="!multiple" class="lv-select__value">
                <slot v-if="hasValue" name="value" :option="selectedOption">
                    {{ selectedOption[optionLabelKey] }}
                </slot>
                <input
                    v-else-if="searchable"
                    v-model="search"
                    class="lv-select__search"
                    type="text"
                    :placeholder="placeholder"
                />
                <div v-else class="lv-select__placeholder">
                    {{ placeholder }}
                </div>
            </div>
            <!-- Multi value -->
            <div v-else-if="multiple" class="lv-select__value">
                <template v-if="hasValue">
                    <span v-for="(option, index) in selectedOptions" :key="index" class="lv-select__value-item">
                        <slot name="value" :option="option">
                            {{ option[optionLabelKey] }}
                        </slot>
                    </span>
                </template>
                <input
                    v-else-if="searchable"
                    v-model="search"
                    class="lv-select__search"
                    type="text"
                    :placeholder="placeholder"
                />
                <div v-else class="lv-select__placeholder">
                    {{ placeholder }}
                </div>
            </div>

            <!-- Icons -->
            <lv-icon v-if="loading" class="lv-select__loading" name="loader-2" />
            <lv-icon v-else class="lv-select__icon" name="chevron-down"></lv-icon>
        </div>
        <!-- Dropdown -->
        <transition name="dropdown">
            <div v-show="dropdownVisible" class="lv-select__dropdown" role="listbox">
                <template v-if="searchedOptions.length > 0">
                    <lv-select-option
                        v-for="(option, index) in searchedOptions"
                        :key="index"
                        :option="option"
                        :selected="isSelected(option)"
                        :checkbox="!!multiple"
                        @click="onClickOption"
                    >
                        <slot name="option" :option="option">{{ option.label }}</slot>
                    </lv-select-option>
                </template>
                <template v-else>
                    <div class="lv-select__no-options">
                        <slot name="no-options"> No options found </slot>
                    </div>
                </template>
            </div>
        </transition>
    </div>
</template>

<script>
import { onClickOutside } from '@vueuse/core';
import propSizeMixin from '../../mixins/propSizeMixin';
import LvSelectOption from './LvSelectOption.vue';
import LvIcon from "../LvIcon/LvIcon.vue";

export default {
    components: {
        LvIcon,
        LvSelectOption,
    },
    mixins: [propSizeMixin()],
    props: {
        modelValue: {
            type: [String, Number, Array],
            default: null,
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        searchable: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: (props) => (props.searchable ? 'Search an option' : 'Choose an option'),
        },
        clearable: {
            type: Boolean,
            default: true,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        teleportTarget: {
            type: String,
            default: 'body',
        },
        options: {
            type: Array,
            default: () => [],
        },
        optionValueKey: {
            type: String,
            default: 'value',
        },
        optionLabelKey: {
            type: String,
            default: 'label',
        },
    },
    emits: ['update:modelValue'],
    data() {
        return {
            dropdownVisible: false,
            focusedOptionIndex: null,
            search: null,
        };
    },
    computed: {
        searchedOptions() {
            if (this.search) {
                return this.options.filter((option) =>
                    option[this.optionLabelKey].toLowerCase().includes(this.search.toLowerCase())
                );
            }
            return this.options;
        },
        selectedOption() {
            if (this.multiple) {
                return false;
            }
            const foundOption = this.options.find((option) => option[this.optionValueKey] === this.modelValue);
            return foundOption || false;
        },
        selectedOptions() {
            if (!this.multiple) {
                return false;
            }
            return this.options.filter((option) => this.modelValue.includes(option[this.optionValueKey]));
        },
        focusTrapOptions() {
            return {
                immediate: true,
                escapeDeactivates: false,
                fallbackFocus: document.body,
            };
        },
        hasValue() {
            if (this.multiple && this.modelValue.length > 0) {
                return true;
            }
            if (!this.multiple && this.modelValue) {
                return true;
            }
            return false;
        },
        classObject() {
            return {
                [`lv-select--size-${this.size}`]: true,
                'lv-select--disabled': !!this.disabled || !!this.loading,
                'lv-select--loading': !!this.loading,
            };
        },
    },
    watch: {
        search(val) {
            if (!this.dropdownVisible && val) {
                this.dropdownVisible = true;
            }
        },
        value(val) {
            // If value changes (not in multiple mode) close the dropdown
            if (!this.multiple && this.dropdownVisible) {
                this.dropdownVisible = false;
            }
            // If value changes, clear the search if there is any
            if (val && this.search) {
                this.search = null;
            }
        },
    },
    mounted() {
        onClickOutside(this.$refs.select, () => {
            this.dropdownVisible = false;
        });
    },
    methods: {
        onClickSelection() {
            this.dropdownVisible = !this.dropdownVisible;
        },
        onEscape() {
            this.dropdownVisible = false;
        },
        onClickOption(option) {
            // Single Mode
            if (!this.multiple) {
                // If already and clearable, clear it!
                if (this.modelValue === option[this.optionValueKey] && this.clearable) {
                    this.$emit('update:modelValue', null);
                }
                // New value, emit it, and close the dropDown
                else {
                    this.$emit('update:modelValue', option[this.optionValueKey]);
                    this.dropdownVisible = false;
                }
            }
            // Multiple mode
            else if (this.multiple) {
                const clonedModelValue = [...this.modelValue];
                // Check of modelValue already contains it, then remove it
                if (this.modelValue.includes(option[this.optionValueKey])) {
                    const indexOfExistingValue = this.modelValue.findIndex(
                        (entry) => entry === option[this.optionValueKey]
                    );
                    clonedModelValue.splice(indexOfExistingValue, 1);
                    this.$emit('update:modelValue', clonedModelValue);
                }
                // It's a new value, just add it
                else {
                    clonedModelValue.push(option[this.optionValueKey]);
                    this.$emit('update:modelValue', clonedModelValue);
                }
            }
        },
        isSelected(option) {
            if (this.multiple && this.modelValue.includes(option[this.optionValueKey])) {
                return true;
            }
            if (!this.multiple && this.modelValue === option[this.optionValueKey]) {
                return true;
            }
            return false;
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/animations/animations';
@import '../../scss/mixins/sizeMixin';

.lv-select {
    $self: &;
    position: relative;

    &__input {
        display: flex;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
    }

    &__value {
        display: flex;
        width: 100%;

        &-item {
            display: flex;
            margin: calc(calc(var(--padding) * 0.5) * -1) 10px calc(calc(var(--padding) * 0.5) * -1)
                calc(calc(var(--padding) * 0.5) * -1);
            border-radius: var(--border-radius);
            background-color: var(--color-primary);
            padding: calc(var(--padding) * 0.5);
            color: var(--color-white);
        }
    }

    &__search {
        flex-grow: 1;
        box-sizing: border-box;
        margin: -1px 0;
        outline: 0;
        border: 0;
        background: transparent;
        padding: 0;
        color: var(--text-color);
        font-size: inherit;
        line-height: inherit;
        &::placeholder {
            color: var(--placeholder-color);
        }
    }
    &__placeholder {
        color: var(--placeholder-color);
    }
    &__icon {
        position: absolute;
        top: 50%;
        right: calc(var(--padding) - 2px);
        transform: translateY(-50%);
        background-color: var(--background-color);
        color: var(--text-color-dimmed);
    }

    &__dropdown {
        position: absolute;
        z-index: var(--z-index-dropdown);
        margin-top: calc(var(--padding) * 0.5);
        box-shadow: var(--shadow);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        background-color: var(--background-color);
        padding: calc(var(--padding) * 0.5);
        width: 100%;
        max-height: 200px;
        overflow-y: auto;
        font-size: inherit;
    }

    &__no-options {
        $noOptions: &;
        padding: calc(var(--padding) * 0.75);
    }

    &--disabled {
        pointer-events: none;

        #{$self}__input {
            background-color: var(--border-color-light);
            &::placeholder {
                color: var(--placeholder-color);
            }
        }
    }

    &__loading {
        position: absolute;
        top: 50%;
        right: calc(var(--padding) - 2px);
        animation: rotate-cw 1s infinite linear;
        margin-top: -0.5em;
        color: var(--text-color-dimmed);
    }

    @include size-mixin('.lv-select__value');
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
