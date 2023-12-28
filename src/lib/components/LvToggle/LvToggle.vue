<template>
    <button class="lv-toggle" type="button" :aria-label="ariaLabel" :aria-labelledby="arialLabelledBy" :class="classObject" :aria-pressed="modelValue" @click="onClickToggle">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: Boolean,
            default: false,
            required: true,
        },
        ariaLabel: {
            type: String,
            default: null,
        },
        arialLabelledBy: {
            type: String,
            default: null,
        },
    },
    emits: ['update:modelValue'],
    computed: {
        classObject() {
            return {
                'lv-toggle--pressed': !!this.modelValue
            }
        }
    },
    methods: {
        onClickToggle() {
            this.$emit('update:modelValue', !this.modelValue);
        }
    }
};
</script>

<style lang="scss">
.lv-toggle {
    display: inline-flex;
    padding: calc(var(--padding) * 0.75);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--background-color);
    cursor: pointer;
    color: var(--text-color);
    &--pressed {
        background-color: var(--border-color-light);
    }
}
</style>
