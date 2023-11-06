<template>
    <div
        class="lv-checkbox"
        :class="classObject"
        aria-label="checkbox"
        :aria-checked="indeterminate ? 'mixed' : !!modelValue"
    >
        <div class="lv-checkbox__checkbox">
            <input
                :id="labelFor"
                ref="checkbox"
                class="lv-checkbox__input"
                type="checkbox"
                :checked="modelValue"
                v-bind="$attrs"
                @click.stop="toggleCheckbox"
            />
            <lv-icon v-if="indeterminate" class="lv-checkbox__icon" name="minus" />
            <lv-icon v-else-if="modelValue && !loading" class="lv-checkbox__icon" name="check" />
            <lv-spinner v-if="loading" class="lv-checkbox__loader" />
        </div>
        <label v-if="label" :for="labelFor" class="lv-checkbox__label">{{ label }}</label>
    </div>
</template>

<script>
import LvIcon from '../LvIcon/LvIcon.vue';
import LvSpinner from '../LvSpinner/LvSpinner.vue';

export default {
    components: { LvIcon, LvSpinner },
    inheritAttrs: false,
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: '',
        },
        labelFor: {
            type: String,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        indeterminate: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    computed: {
        classObject() {
            return {
                'lv-checkbox--checked': !!this.modelValue,
                'lv-checkbox--disabled': this.disabled || this.loading,
                'lv-checkbox--loading': this.loading,
                [`${this.$attrs.class}`]: !!this.$attrs.class,
            };
        },
    },
    watch: {
        indeterminate(val) {
            this.$refs.checkbox.indeterminate = !!val;
        },
    },
    methods: {
        toggleCheckbox() {
            if (!this.loading && !this.disabled) {
                this.$emit('update:modelValue', !this.modelValue);
            }
        },
    },
};
</script>

<style lang="scss">
.lv-checkbox {
    $self: &;
    display: inline-flex;
    position: relative;
    align-items: center;

    &__input {
        appearance: none;
        transition: var(--transition-time) background-color var(--transition-easing);
        cursor: pointer;
        margin: 0;
        border: 2px solid var(--border-color);
        border-radius: 3px;
        width: 1.2rem;
        height: 1.2rem;
    }
    &__checkbox {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
    }
    &--checked {
        #{$self}__input {
            border: 2px solid var(--color-primary);
            background-color: var(--color-primary);
        }
        #{$self}__icon {
            color: var(--background-color);
        }
    }

    &--disabled {
        #{$self}__input {
            cursor: default;
            border: 2px solid var(--border-color-light);
        }
        #{$self}__label {
            cursor: default;
            color: var(--text-color-dimmed);
        }
        #{$self}__icon {
            color: var(--text-color-dimmed);
        }
    }

    &--checked#{$self}--disabled {
        #{$self}__input {
            opacity: 0.45;
            border: 2px solid var(--color-primary);
            background-color: var(--color-primary);
        }
        #{$self}__label {
            cursor: default;
            color: var(--text-color-dimmed);
        }
        #{$self}__icon {
            color: var(--background-color);
        }
    }

    &__loader {
        position: absolute;
        top: 4px;
        left: 4px;
        width: 11px;
        height: 11px;
        pointer-events: none;
        color: var(--color-default);
    }

    &--checked #{$self}__loader {
        color: var(--background-color);
    }

    &__icon {
        position: absolute;
        top: 3px;
        left: 3px;
        width: 14px;
        height: 14px;
        pointer-events: none;
        color: var(--color-default);
    }

    &__label {
        cursor: pointer;
        margin-left: 0.5rem;
        font-size: var(--font-size);
        line-height: var(--line-height);
    }
}
</style>
