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
            @keydown.enter.space.prevent="onClickSelection"
        >
            <!-- Single value -->
            <div v-if="hasValue && !multiple" class="lv-select__value">
                <slot name="value" :value="value">
                    {{ value.label }}
                </slot>
            </div>
            <!-- Multi value -->
            <div v-else-if="hasValue && multiple" class="lv-select__values">
                <span v-for="(entry, index) in value" :key="index" class="lv-select__values-item">
                    <slot name="value" :values="value" :value="entry">
                        {{ entry.label }}
                    </slot>
                </span>
            </div>
            <!-- If searchable -->
            <input
                v-else-if="searchable"
                v-model="search"
                class="lv-select__search"
                type="text"
                :placeholder="placeholder"
            />
            <!-- No value -->
            <div v-else class="lv-select__placeholder">{{ placeholder }}</div>
            <lv-icon v-if="loading" class="lv-select__loading" :size="16" name="loader-2" />
            <lv-icon v-else class="lv-select__icon" name="chevron-down"></lv-icon>
        </div>
        <!-- Dropdown -->
        <transition name="dropdown">
            <div v-show="dropdownVisible" class="lv-select__dropdown" role="listbox">
                <slot></slot>
                <div v-if="!visibleOptions" class="lv-select__no-options">No options found</div>
            </div>
        </transition>
    </div>
</template>

<script>
import { onClickOutside } from '@vueuse/core';
import { computed } from 'vue';

export default {
    provide() {
        return {
            value: computed(() => this.value),
            multiple: computed(() => this.multiple),
            searchable: computed(() => this.searchable),
            searchValue: computed(() => this.search),
            visibleOptions: computed(() => this.visibleOptions),
        };
    },
    props: {
        value: {
            type: [Object, Array],
            default: null,
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: 'Choose an option',
        },
        searchable: {
            type: Boolean,
            default: false,
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
    data() {
        return {
            dropdownVisible: false,
            focusedOptionIndex: null,
            search: null,
            visibleOptions: null,
        };
    },
    computed: {
        hasValue() {
            if (this.multiple && this.value.length > 0) {
                return true;
            }
            if (!this.multiple && this.value) {
                return true;
            }
            return false;
        },
        classObject() {
            return {
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
        this.visibleOptions = this.getVisibleOptions();
        onClickOutside(this.$refs.select, () => {
            this.dropdownVisible = false;
        });
    },
    updated() {
        this.$nextTick(() => {
            this.visibleOptions = this.getVisibleOptions();
        });
    },
    methods: {
        getVisibleOptions() {
            return this.$el.querySelectorAll('.lv-select-option').length;
        },
        onClickSelection() {
            this.dropdownVisible = !this.dropdownVisible;
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

    &__value {
        display: flex;
        padding: var(--padding);
        font-size: var(--font-size);
        line-height: var(--font-size);
    }
    &__values {
        display: flex;
        padding: calc(var(--padding) * 0.5);
        font-size: var(--font-size);
        line-height: var(--font-size);
        &-item {
            margin-right: 5px;
            border-radius: var(--border-radius);
            background-color: var(--color-primary);
            padding: calc(var(--padding) * 0.5);
            color: var(--color-white);
        }
    }
    &__search {
        flex-grow: 1;
        box-sizing: border-box;
        outline: 0;
        border: 0;
        background: transparent;
        padding: calc(var(--padding) - 1px) var(--padding);
        color: var(--text-color);
        font-size: var(--font-size);
        line-height: var(--font-size);
    }
    &__placeholder {
        padding: var(--padding);
        color: var(--text-color-dimmed);
        font-size: var(--font-size);
        line-height: var(--font-size);
    }
    &__icon {
        position: absolute;
        top: 13px;
        right: calc(var(--padding) - 2px);
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
    }

    &__no-options {
        $noOptions: &;
        padding: var(--padding);
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
        background-color: var(--background-color);
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
