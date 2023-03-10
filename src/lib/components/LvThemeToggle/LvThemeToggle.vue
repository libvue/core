<template>
    <span class="lv-theme-toggle" :class="classObject" @click="onClick">
        <span class="lv-theme-toggle__thumb">
            <lv-icon :name="modelValue === 'light' ? 'sun' : 'moon'" />
        </span>
    </span>
</template>

<script>
import LvIcon from "../LvIcon/LvIcon.vue";

export default {
    components: { LvIcon },
    props: {
        modelValue: {
            type: String,
            default: 'dark',
            validator: (val) => ['light', 'dark'].includes(val),
        },
    },
    computed: {
        classObject() {
            return {
                [`lv-theme-toggle--${this.modelValue}`]: true,
            };
        },
    },
    methods: {
        onClick() {
            if (this.modelValue === 'dark') {
                this.$emit('update:modelValue', 'light');
            } else {
                this.$emit('update:modelValue', 'dark');
            }
        },
    },
};
</script>

<style lang="scss">
.lv-theme-toggle {
    $self: &;
    display: inline-flex;
    cursor: pointer;
    box-sizing: border-box;
    margin-bottom: 0;
    border: 1px solid var(--border-color);
    border-radius: calc(var(--border-radius) * 3);
    background-color: var(--background-color);
    padding: calc(var(--padding) * 0.25);
    width: 50px;
    color: var(--text-color);
    font-size: var(--font-size);
    line-height: var(--line-height);
    font-family: var(--font-family);

    &__thumb {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s margin ease-in-out;
        box-sizing: border-box;
        border: 1px solid var(--border-color);
        border-radius: 100%;
        padding: calc(var(--padding) * 0.15);
        font-size: var(--font-size-small);
        line-height: var(--line-height-small);
    }
    &--dark {
        #{$self}__thumb {
            margin-left: 23px;
        }
    }
}
</style>
