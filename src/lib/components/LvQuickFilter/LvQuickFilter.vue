<template>
    <div class="lv-quick-filter" :class="classObject">
        <div class="lv-quick-filter__input" tabindex="0" @focus="onFocusInput" @blur="onBlurInput" >
            <lv-flex class="lv-quick-filter__pills" v-if="Object.values(modelResults).length > 0" gap=".25rem">
                <lv-pill class="lv-quick-filter__pill" v-for="object, key in modelResults" :prefix="`${object.label}:`" :text="object.value" size="small" color="solid-dimmed-primary" @close="onClickClosePill(key)" closable/>
            </lv-flex>
            <input ref="input" tabindex="-1" @focus="onFocusInput" @blur="onBlurInput" class="lv-quick-filter__search" placeholder="Search anything" type="text" v-model="search" />
        </div>

        <transition name="dropdown">
            <div v-show="dropdownVisible" class="lv-quick-filter__dropdown" role="listbox">
                <template v-for="(object, key) in dropdownResults">
                    <div class="lv-quick-filter__results">
                        <div class="lv-quick-filter__results-title">{{ object.label }}</div>
                        <!-- Input -->
                        <template v-if="object.value">
                            <div class="lv-quick-filter__result" @click="onClickResult(key)">{{ object.value }}</div>
                        </template>
                        <!-- Select -->
                        <template v-if="object.options">
                            <div v-for="option in object.options" @click="onClickResult(key, option.value)" class="lv-quick-filter__result">{{ option.label }}</div>
                        </template>
                    </div>
                </template>
            </div>
        </transition>
    </div>
</template>

<script>
import propSizeMixin from '../../mixins/propSizeMixin';
import LvPill from '../LvPill/LvPill.vue'

export default {
    mixins: [propSizeMixin('default')],
    components: {
        LvPill
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
        },
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
                    value.options.forEach((option) => {
                        if (option.value === value.model) {
                            label = option.label;
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
                        // Check if search matches any options
                        const options = [];
                        value.options.forEach((option) => {
                            if (option.label.toLowerCase().includes(this.search.toLowerCase())) {
                                options.push(option);
                            }
                        });
                        // Check if options has any results;
                        if (options.length > 0) {
                            results[key] = {
                                label: value.label,
                                options,
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
                if(val.length > 0 && Object.values(this.dropdownResults).length > 0) {
                    this.dropdownVisible = true;
                } else {
                    this.dropdownVisible = false;
                }
            },
            immediate: true,
        },
        focused: {
            handler(val) {
                if(val && this.search.length > 0  && Object.values(this.dropdownResults).length > 0) {
                    this.dropdownVisible = true;
                } else {
                    this.dropdownVisible = false;
                }
            },
            immediate: true
        }
    },
    data() {
        return {
            focused: false,
            dropdownVisible: false,
            search: '',
        };
    },
    emits: ['clear:filter', 'update:filter'],
    methods: {
        onFocusInput() {
            this.focused = true;
            this.$refs.input.focus();
        },
        onBlurInput() {
            this.focused = false;
            this.$refs.input.blur();
        },
        onClickClosePill(key) {
            this.$emit('clear:filter', key);
        },
        onClickResult(key, value) {
            // No value? Use the search!
            if(!value) {
                this.$emit('update:filter', {
                    key,
                    value: this.search,
                })
            } else {
                this.$emit('update:filter', {
                    key,
                    value,
                })
            };
            // clear the search
            this.search = '';
            this.$refs.input.focus();
        }
    }
};
</script>

<style lang="scss">
@import '../../scss/mixins/sizeMixin';
.lv-quick-filter {
    $self: &;
    position: relative;
    width: 100%;
    &__input {
        display: flex;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
    }
    &__search {
        flex-grow: 1;
        border: 0;
        font-size: inherit;
        &:focus {
            outline: 0;
        }
    }
    &__values {
        font-size: inherit;
    }
    &__pills {
        display: flex;
        align-items: center;
        margin-right: .25rem;
    }
    &__pill {
        margin: -.25rem 0;
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
        max-height: 300px;
        overflow-y: auto;
        font-size: inherit;
        outline: 0;
    }
    &__results {
        &-title {
            font-weight: 600;
            margin-bottom: .25rem;
        }
    }
    &__result {
        border-radius: var(--border-radius);
        &:hover {
            background-color: var(--border-color-light);
        }
    }

    &--focused {
        #{$self}__input {
            outline: -webkit-focus-ring-color auto 1px;
        }
    }

    @include size-mixin('.lv-quick-filter__input');
    @include size-mixin('.lv-quick-filter__results-title');
    @include size-mixin('.lv-quick-filter__result');
}
</style>
