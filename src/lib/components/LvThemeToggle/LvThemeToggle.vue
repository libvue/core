<template>
    <span class="lv-theme-toggle" :class="classObject" @click="onClick">
        <span class="lv-theme-toggle__thumb">
            <lv-icon :name="modelValue === 'light' ? 'sun' : 'moon'"/>
        </span>
    </span>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: 'dark',
            validator: (val) => ['light', 'dark'].includes(val)
        },
    },
    computed: {
        classObject() {
            return {
                [`lv-theme-toggle--${this.modelValue}`]: true
            }
        }
    },
    methods: {
        onClick() {
            if(this.modelValue === 'dark') {
                this.$emit('update:modelValue', 'light');
            } else {
                this.$emit('update:modelValue', 'dark');
            }
        }
    }
};
</script>

<style lang="scss">

.lv-theme-toggle {
    $self: &;
    display: inline-flex;
    margin-bottom: 0;
    border: 1px solid var(--border-color);
    border-radius: calc(var(--border-radius) * 3);
    background-color: var(--background-color);
    padding: calc(var(--padding) * 0.25);
    color: var(--text-color);
    font-size: var(--font-size);
    line-height: var(--font-size);
    font-family: var(--font-family);
    width: 50px;
    box-sizing: border-box;
    cursor: pointer;

    &__thumb {
        border: 1px solid var(--border-color);
        border-radius: 100%;
        font-size: var(--font-size-small);
        line-height: var(--font-size-small);
        padding: calc(var(--padding) * 0.15);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        transition: .2s all ease-in-out;
    }
    &--dark {
        #{$self}__thumb {
            margin-left: 23px;
        }
    }
}
</style>
