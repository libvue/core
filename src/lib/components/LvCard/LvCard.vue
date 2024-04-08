<template>
    <div class="lv-card" :class="classObject">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        inline: {
            type: Boolean,
            default: false,
        },
        elevation: {
            type: Boolean,
            default: true,
        },
        padding: {
            type: String,
            default: 'calc(var(--padding) * 1.5)',
        },
        border: {
            type: Boolean,
            default: true,
        }
    },
    computed: {
        classObject() {
            return {
                'lv-card--elevation': !!this.elevation,
                'lv-card--inline': !!this.inline,
                'lv-card--border': !!this.border,
            }
        }
    }
};
</script>

<style lang="scss">
.lv-card {
    display: block;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--background-color);
    color: var(--text-color);
    font-size: var(--font-size);
    line-height: var(--line-height);
    padding: v-bind(padding);

    &--inline {
        display: inline-block;
        width: initial;
    }
    &--elevation {
        box-shadow: var(--shadow);
    }
    &--border {
        border: 1px solid var(--border-color);
    }
}
</style>
