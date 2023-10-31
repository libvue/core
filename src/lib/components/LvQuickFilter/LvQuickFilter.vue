<template>
    <div class="lv-quick-filter" :class="classObject" tabindex="-1">
        <div class="lv-quick-filter__input-container">
            <lv-input
                ref="input"
                v-model="search"
                class="lv-quick-filter__input"
                :placeholder="placeholder"
                :icon="icon"
                type="text"
                @focus="onFocusInput"
                @blur="onBlurInput"
            />
            <lv-flex v-if="hasModelResults" class="lv-quick-filter__pills" gap=".25rem" align-items="center">
                <lv-pill
                    v-for="(object, key) in modelResults"
                    :key="key"
                    class="lv-quick-filter__pill"
                    :prefix="`${object.label}:`"
                    :text="object.value"
                    size="small"
                    color="solid-dimmed-primary"
                    closable
                    @close="onClickClosePill(key)"
                />
            </lv-flex>
        </div>

        <transition name="dropdown">
            <div v-show="dropdownVisible" class="lv-quick-filter__dropdown" role="listbox">
                <!-- Generated dropdownResults -->
                <template v-for="(object, key) in dropdownResults">
                    <div class="lv-quick-filter__results">
                        <div class="lv-quick-filter__results-title">{{ object.label }}</div>
                        <!-- Input -->
                        <template v-if="object.value">
                            <div :key="key" class="lv-quick-filter__result" tabindex="0" @click="onClickResult(key)">
                                {{ object.value }}
                            </div>
                        </template>
                        <!-- Select -->
                        <template v-else-if="object.options">
                            <div
                                v-for="(option, optionKey) in object.options"
                                :key="optionKey"
                                class="lv-quick-filter__result"
                                @click="onClickResult(key, option[object.valueKey])"
                            >
                                {{ option[object.labelKey || 'label'] }}
                            </div>
                        </template>
                    </div>
                </template>
            </div>
        </transition>
    </div>
</template>

<script>
import propSizeMixin from '../../mixins/propSizeMixin';
import LvPill from '../LvPill/LvPill.vue';

export default {
    mixins: [propSizeMixin('default')],
    components: {
        LvPill,
    },
    props: {
        loading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        filters: {
            type: Object,
            default: () => ({}),
            validator: (obj) => {
                let isValid = true;
                Object.values(obj).forEach((entry) => {
                    if (typeof entry.model === 'undefined') {
                        isValid = false;
                        console.warn(`model field is missing in entry: ${JSON.stringify(entry)}`);
                    }
                    if (typeof entry.label === 'undefined') {
                        isValid = false;
                        console.warn(`label field is missing in entry: ${JSON.stringify(entry)}`);
                    }
                    if (typeof entry.type === 'undefined') {
                        isValid = false;
                        console.warn(`type field is missing in entry: ${JSON.stringify(entry)}`);
                    }
                });
                return isValid;
            },
        },
        placeholder: {
            type: String,
            default: 'Search anything',
        },
        icon: {
            type: String,
            default: null,
        },
    },
    emits: ['clear:filter', 'update:filter'],
    data() {
        return {
            focused: false,
            dropdownVisible: false,
            search: '',
        };
    },
    computed: {
        classObject() {
            return {
                [`lv-quick-filter--size-${this.size}`]: true,
                'lv-quick-filter--disabled': !!this.disabled || !!this.loading,
                'lv-quick-filter--loading': !!this.loading,
                'lv-quick-filter--focused': !!this.focused,
            };
        },
        modelResults() {
            const results = {};

            Object.entries(this.filters).forEach(([key, value]) => {
                // If type is input, always give it as an option
                if (value.type === 'input' && value.model) {
                    results[key] = {
                        label: value.label,
                        value: value.model,
                    };
                } else if (value.type === 'select' && value.model) {
                    // Find the label of the model
                    let label = null;

                    const labelKey = value.labelKey || 'label';
                    const valueKey = value.valueKey || 'value';

                    value.options.forEach((option) => {
                        if (option[valueKey] === value.model) {
                            label = option[labelKey];
                        }
                    });
                    // Check if options has any results;
                    if (label) {
                        results[key] = {
                            label: value.label,
                            value: label,
                        };
                    }
                }
            });
            return results;
        },
        hasModelResults() {
            return Object.entries(this.modelResults).length > 0;
        },
        dropdownResults() {
            const results = {};
            if (this.search.length > 0) {
                Object.entries(this.filters).forEach(([key, value]) => {
                    // If type is input, always give it as an option
                    if (value.type === 'input') {
                        results[key] = {
                            label: value.label,
                            value: this.search,
                        };
                    } else if (value.type === 'select' && value.options.length > 0) {

                        const labelKey = value.labelKey || 'label';
                        const valueKey = value.valueKey || 'value';

                        // Check if search matches any options
                        const options = [];
                        value.options.forEach((option) => {
                            if (option[labelKey].toLowerCase().includes(this.search.toLowerCase())) {
                                options.push(option);
                            }
                        });
                        // Check if options has any results;
                        if (options.length > 0) {
                            results[key] = {
                                label: value.label,
                                options,
                                labelKey,
                                valueKey,
                            };
                        }
                    }
                });
            }
            return results;
        },
    },
    watch: {
        search: {
            handler(val) {
                if (val.length > 0 && Object.values(this.dropdownResults).length > 0) {
                    this.dropdownVisible = true;
                } else {
                    this.dropdownVisible = false;
                }
            },
            immediate: true,
        },
        focused: {
            handler(val) {
                if (val && this.search.length > 0 && Object.values(this.dropdownResults).length > 0) {
                    this.dropdownVisible = true;
                } else {
                    this.dropdownVisible = false;
                }
            },
            immediate: true,
        },
    },
    methods: {
        onFocusInput() {
            this.focused = true;
        },
        onBlurInput() {
            this.focused = false;
        },
        onClickClosePill(key) {
            this.$emit('clear:filter', key);
        },
        onClickResult(key, value) {
            // No value? Use the search!
            if (!value) {
                this.$emit('update:filter', {
                    key,
                    value: this.search,
                });
            } else {
                this.$emit('update:filter', {
                    key,
                    value,
                });
            }
            // Refocus the input
            this.$refs.input.$el.querySelector('.lv-input__input').focus();

            // clear the search
            this.search = '';
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/mixins/sizeMixin';
.lv-quick-filter {
    $self: &;
    position: relative;

    &__input-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        background-color: var(--background-color);
    }

    &__input {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 100%;
        border: 0 !important;
        background: none;
        &:focus {
            outline: 0;
        }
    }
    &__pills {
        display: flex;
        flex-shrink: 0;
        flex-direction: row;
        flex-wrap: nowrap;
        padding: 0.25rem;
        max-width: 75%;
        overflow: auto;
    }
    &__dropdown {
        position: absolute;
        z-index: var(--z-index-dropdown);
        margin-top: calc(var(--padding) * 0.5);
        outline: 0;
        box-shadow: var(--shadow);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        background-color: var(--background-color);
        padding: calc(var(--padding) * 0.5);
        width: 100%;
        max-height: 300px;
        overflow-y: auto;
        font-size: inherit;
    }
    &__results {
        &-title {
            margin-bottom: 0.25rem;
            font-weight: 600;
        }
    }
    &__result {
        cursor: pointer;
        border-radius: var(--border-radius);
        &:hover {
            background-color: var(--border-color-light);
        }
    }

    &--focused {
        #{$self}__input-container {
            outline: -webkit-focus-ring-color auto 1px;
        }
    }

    // Dropdown
    @include size-mixin('.lv-quick-filter__result');
    @include size-mixin('.lv-quick-filter__results-title');
}
</style>
