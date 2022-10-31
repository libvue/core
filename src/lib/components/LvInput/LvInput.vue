<template>
    <div class="lv-input" :class="classObject">
        <lv-icon v-if="icon" class="lv-input__icon" :size="16" :name="icon" />
        <input
            v-bind="$attrs"
            :value="modelValue"
            class="lv-input__input"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled || loading"
            :readonly="readonly"
            tabindex="0"
            @input="onInput"
        />
        <lv-icon v-if="loading" class="lv-input__loading" :size="16" name="loader-2" />
    </div>
</template>

<script>
import LvIcon from '../LvIcon/LvIcon.vue';

export default {
    components: {
        LvIcon,
    },
    props: {
        modelValue: {
            type: [String, Number],
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
        error: {
            type: Boolean,
            default: false,
        },
        success: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text',
            validator(value) {
                return ['text', 'email', 'password', 'tel', 'file'].includes(value);
            },
        },
    },
    emits: ['update:modelValue'],
    computed: {
        classObject() {
            return {
                'lv-input--error': this.error,
                'lv-input--success': this.success,
                'lv-input--icon': this.icon,
                'lv-input--readonly': this.readonly,
                'lv-input--disabled': this.disabled || this.loading,
                'lv-input--loading': this.loading,
            };
        },
    },
    methods: {
        onInput(e) {
            this.$emit('update:modelValue', e.target.value);
        },
    },
};
</script>

<style lang="scss">
// Block
.lv-input {
    $self: &;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;
    color: var(--text-color);
    font-family: var(--font-family);

    // Elements
    &__icon {
        position: absolute;
        top: calc(var(--padding) * 0.75 + 2px);
        left: calc(var(--padding) - 2px);
        color: var(--text-color);
    }

    &__input {
        margin-bottom: 0;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        background-color: var(--background-color);
        padding: calc(var(--padding) * 0.75);
        color: var(--text-color);
        font-size: var(--font-size);
        font-family: var(--font-family);

        &::placeholder {
            color: var(--placeholder-color);
        }
    }

    &__hint {
        padding: 4px;
        color: var(--text-color-dimmed);
        font-size: var(--font-size-small);
    }

    &__loading {
        position: absolute;
        top: 10px;
        right: calc(var(--padding) - 2px);
        animation: rotate-cw 1s infinite linear;
        background-color: var(--border-color-light);
        color: var(--text-color-dimmed);
    }

    &--icon {
        #{$self}__input {
            box-sizing: border-box;
            padding-left: calc(var(--padding) + 16px + 4px);
        }
    }

    &--disabled {
        opacity: 1;
        pointer-events: none;
        user-select: none;
        #{$self}__icon {
            color: var(--placeholder-color);
        }
        #{$self}__input {
            background-color: var(--border-color-light);
            &::placeholder {
                color: var(--placeholder-color);
            }
        }
    }
}
</style>
