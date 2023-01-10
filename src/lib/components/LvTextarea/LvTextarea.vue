<template>
    <div class="lv-textarea" :class="classObject">
        <textarea class="lv-textarea__textarea" :value="modelValue" :disabled="disabled" :placeholder="placeholder" @input="onChange"></textarea>
        <lv-spinner v-if="loading" class="lv-textarea__loading" />
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: null,
        },
        placeholder: {
            type: String,
            default: 'Enter your text here',
        },
        loading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        height: {
            type: String,
            default: 'auto',
        },
        minHeight: {
            type: String,
            default: '100px',
        }
    },
    emits: ['update:modelValue'],
    computed: {
        classObject() {
            return {
                'lv-textarea--disabled': this.disabled || this.loading,
                'lv-textarea--loading': this.loading,
                [this.$attrs.class]: !!this.$attrs.class,
            };
        },
    },
    methods: {
        onChange(e) {
            this.$emit('update:modelValue', e.target.value);
        }
    }
};
</script>

<style lang="scss">
.lv-textarea {
    $self: &;
    position: relative;

    &__textarea {
        margin: 0;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        background-color: var(--background-color);
        padding: var(--padding);
        width: 100%;
        resize: vertical;
        color: var(--text-color);
        font-family: var(--font-family);
        height: v-bind(height);
        min-height: v-bind(minHeight);

        &::placeholder {
            color: var(--placeholder-color);
        }
    }

    &__loading {
        position: absolute;
        top: calc(var(--padding) - 2px);
        right: calc(var(--padding) - 2px);
        background-color: var(--border-color-light);
        color: var(--text-color-dimmed);
    }

    &--disabled {
        opacity: 1;
        pointer-events: none;
        user-select: none;
        #{$self}__textarea {
            background-color: var(--border-color-light);
            &::placeholder {
                color: var(--placeholder-color);
            }
        }
    }

}
</style>
