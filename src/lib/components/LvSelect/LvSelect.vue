<template>
    <div
        ref="select"
        class="lv-select"
        :class="classObject"
        role="combobox"
        :aria-expanded="dropdownVisible"
        aria-haspopup="listbox"
    >
        <!-- Input -->
        <div
            ref="combobox"
            class="lv-select__input"
            tabindex="0"
            @click="onClickSelection"
            @keydown="onKeydownCombobox"
        >
            <div v-if="selectedOption" class="lv-select__selection">
                <div v-if="selectedOption.image && showImages" class="lv-select__selection-image">
                    <img :src="selectedOption.image" :alt="selectedOption.label" />
                </div>
                <div class="lv-select__selection-label">
                    {{ selectedOption.label }}
                </div>
            </div>
            <div v-else class="lv-select__placeholder">{{ placeholder }}</div>
            <lv-icon v-if="loading" class="lv-select__loading" :size="16" name="loader-2" />
            <lv-icon v-else class="lv-select__icon" name="chevron-down"></lv-icon>
        </div>
        <!-- Dropdown -->
        <transition name="dropdown">
            <div v-show="dropdownVisible" class="lv-select__dropdown" role="listbox">
                <template v-if="!showGroups">
                    <div v-if="noOptions" class="lv-select__no-options">No options found</div>
                    <div
                        v-for="(option, index) in options"
                        v-else
                        :key="index"
                        ref="options"
                        class="lv-select__option"
                        :class="{
                            'lv-select__option--active': option.value === modelValue,
                        }"
                        role="option"
                        tabindex="0"
                        :aria-selected="option.value === modelValue"
                        @click="onClickOption(option)"
                        @focus="onFocusOption(index)"
                        @blur="onBlurOption"
                        @keydown="onKeydownOption(option, $event)"
                    >
                        <div v-if="option.image && showImages" class="lv-select__option-image">
                            <img :src="option.image" :alt="option.label" />
                        </div>
                        <div class="lv-select__option-label">{{ option.label }}</div>
                    </div>
                </template>
                <template v-else>
                    <div v-if="noOptions" class="lv-select__no-options">No options found</div>
                    <div
                        v-for="(groupOptions, groupTitle, groupIndex) in optionsByGroup"
                        v-else
                        :key="groupTitle"
                        class="lv-select__opt-group"
                    >
                        <h3 class="lv-select__opt-group-title">{{ groupTitle }}</h3>
                        <div
                            v-for="(option, index) in groupOptions"
                            :key="index"
                            ref="options"
                            class="lv-select__option"
                            :class="{
                                'lv-select__option--active': option.value === modelValue,
                            }"
                            role="option"
                            tabindex="0"
                            :aria-selected="option.value === modelValue"
                            @focus="onFocusGroupOption(option)"
                            @click="onClickOption(option)"
                            @blur="onBlurOption"
                            @keydown="onKeydownOption(option, $event)"
                        >
                            <div v-if="option.image && showImages" class="lv-select__option-image">
                                <img :src="option.image" :alt="option.label" />
                            </div>
                            <div class="lv-select__option-label">
                                {{ option.label }}
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </transition>
    </div>
</template>

<script>
import { onClickOutside } from '@vueuse/core';

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
        showImages: {
            type: Boolean,
            default: false,
        },
        showGroups: {
            type: Boolean,
            default: false,
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
        loading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    data() {
        return {
            dropdownVisible: false,
            focusedOptionIndex: null,
        };
    },
    computed: {
        noOptions() {
            return this.options.length === 0;
        },
        classObject() {
            return {
                'lv-select--disabled': !!this.disabled || !!this.loading,
                'lv-select--loading': !!this.loading,
            };
        },
        optionsByGroup() {
            const optionsByGroup = {};
            this.options.forEach((option) => {
                // Create an object keyed by the group
                if (option.group && !optionsByGroup[option.group]) {
                    optionsByGroup[option.group] = [];
                }
                // Only allow options with groups
                if (option.group) {
                    optionsByGroup[option.group].push(option);
                }
            });
            return optionsByGroup;
        },
        selectedOption() {
            return this.options.find((i) => i.value === this.modelValue) || false;
        },
    },
    mounted() {
        onClickOutside(this.$refs.select, () => {
            this.dropdownVisible = false;
        });
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
        onKeydownOption(option, event) {
            if (event.keyCode === 38) {
                this.onKeydownOptionUp(event);
            } else if (event.keyCode === 40) {
                this.onKeydownOptionDown(event);
            } else if (event.keyCode === 32 || event.keyCode === 13) {
                this.onKeydownOptionSpaceEnter(option, event);
            } else if (event.keyCode === 9) {
                event.preventDefault();
            } else if (event.keyCode === 27) {
                this.dropdownVisible = false;
                this.$refs.combobox.focus();
            }
        },
        onKeydownOptionSpaceEnter(option, event) {
            event.preventDefault();
            if (this.modelValue === option.value && this.clearable) {
                this.$emit('update:modelValue', null);
            } else {
                this.$emit('update:modelValue', option.value);
            }
            this.dropdownVisible = false;
            this.$refs.combobox.focus();
        },
        onKeydownOptionUp(e) {
            e.preventDefault();
            if (this.focusedOptionIndex === null) {
                this.$refs.options[0].focus();
            } else if (this.focusedOptionIndex > 0) {
                this.$refs.options[this.focusedOptionIndex - 1].focus();
            }
        },
        onKeydownOptionDown(e) {
            e.preventDefault();
            if (this.focusedOptionIndex === null) {
                this.$refs.options[this.$refs.options.length - 1].focus();
            } else if (this.focusedOptionIndex < this.$refs.options.length - 1) {
                this.$refs.options[this.focusedOptionIndex + 1].focus();
            }
        },
        onKeydownCombobox(e) {
            if (e.keyCode === 32 || e.keyCode === 13) {
                this.onKeydownComboboxSpaceEnter(e);
            } else if (e.keyCode === 38) {
                this.onKeydownComboboxUp();
            } else if (e.keyCode === 40) {
                this.onKeydownComboboxDown();
            } else if (e.keyCode === 35) {
                this.onKeydownComboboxEnd(e);
            } else if (e.keyCode === 36) {
                this.onKeydownComboboxHome(e);
            } else if (e.keyCode === 27) {
                this.dropdownVisible = false;
            }
        },
        onKeydownComboboxSpaceEnter(e) {
            e.preventDefault();
            // Opens the listbox without moving focus or changing selection.
            this.dropdownVisible = !this.dropdownVisible;
        },
        onKeydownComboboxUp() {
            if (!this.dropdownVisible) {
                // First opens the listbox if it is not already displayed
                this.dropdownVisible = true;
                //  and then moves visual focus to the first option.
            }
        },
        onKeydownComboboxDown() {
            if (!this.dropdownVisible) {
                // Opens the listbox if it is not already displayed without moving focus or changing selection.
                this.dropdownVisible = true;
            }
        },
        onKeydownComboboxEnd(e) {
            e.preventDefault();
            if (!this.dropdownVisible) {
                // Opens the listbox
                this.dropdownVisible = true;
                //  and moves visual focus to the last option.
                //  and moves visual focus to the first option.
                this.$nextTick(() => {
                    this.$refs.options[this.$refs.options.length - 1].focus();
                });
            }
        },
        onKeydownComboboxHome(e) {
            e.preventDefault();
            if (!this.dropdownVisible) {
                // Opens the listbox
                this.dropdownVisible = true;
                //  and moves visual focus to the first option.
                this.$nextTick(() => {
                    this.$refs.options[0].focus();
                });
            }
        },
        onFocusOption(index) {
            this.focusedOptionIndex = index;
        },
        onFocusGroupOption(option) {
            this.focusedOptionIndex = Object.values(this.optionsByGroup)
                .flatMap((i) => i)
                .findIndex((i) => JSON.stringify(i) === JSON.stringify(option));
        },
        onBlurOption() {
            this.focusedOptionIndex = null;
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/animations/animations';

.lv-select {
    $self: &;
    position: relative;

    &__input {
        display: flex;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
    }

    &__selection {
        display: flex;
        &-image {
            border: 4px solid var(--background-color);
            border-radius: var(--border-radius);
            background-color: var(--background-color);
            width: calc(calc(var(--padding) * 2) + var(--font-size));
            height: calc(calc(var(--padding) * 2) + var(--font-size) );
            img {
                border-radius: var(--border-radius);
                width: 100%;
                height: 100%;
            }
        }
        &-label {
            padding: var(--padding);
            font-size: var(--font-size);
            line-height: var(--font-size);
        }
    }
    &__placeholder {
        padding: var(--padding);
        color: var(--text-color-dimmed);
        font-size: var(--font-size);
        line-height: var(--font-size);
    }
    &__icon {
        margin-left: auto;
        padding: var(--padding);
        font-size: var(--font-size);
        line-height: var(--font-size);
    }

    &__dropdown {
        position: absolute;
        z-index: var(--z-index-dropdown);
        margin-top: -1px;
        box-shadow: var(--shadow);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        background-color: var(--background-color);
        width: calc(100% - 2px);
    }
    &__no-options {
        padding: var(--padding);
    }
    &__opt-group {
        #{$self}__option {
            &:first-of-type {
                border-radius: 0;
            }
            &:last-of-type {
                border-radius: 0;
            }
        }
        &:last-of-type {
            #{$self}__option {
                &:last-of-type {
                    border-radius: 0 0 var(--border-radius) var(--border-radius);
                }
            }
        }
        &-title {
            margin: 0;
            padding: var(--padding);
            font-size: var(--font-size);
        }
    }
    &__option {
        display: flex;
        transition: 0.1s all;
        cursor: pointer;
        overflow: hidden;
        font-size: var(--font-size);
        line-height: var(--font-size);

        &-image {
            border: 4px solid var(--background-color);
            background-color: var(--background-color);
            width: calc(calc(var(--padding) * 2) + var(--font-size));
            height: calc(calc(var(--padding) * 2) + var(--font-size));
            img {
                border-radius: var(--border-radius);
                width: 100%;
                height: 100%;
            }
        }
        &-label {
            padding: var(--padding);
        }

        &:first-of-type {
            border-radius: var(--border-radius) var(--border-radius) 0 0;
        }
        &:last-of-type {
            border-radius: 0 0 var(--border-radius) var(--border-radius);
        }
        &:hover:not(&--active) {
            background-color: var(--border-color);
        }
        &--active {
            background-color: var(--color-primary);
            color: var(--color-white);
        }
    }

    &--disabled {
        pointer-events: none;

        #{$self}__input {
            color: var(--text-color-dimmed);
        }
    }

    &__loading {
        position: absolute;
        top: 13px;
        right: calc(var(--padding) - 2px);
        animation: rotate-cw 1s infinite linear;
        background-color: #fafafa;
        color: var(--text-color-dimmed);
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
