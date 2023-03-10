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
            type: Boolean,
            default: true,
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
                'lv-card--padding': !!this.padding,
                'lv-card--border': !!this.border,
            }
        }
    }
};
</script>

<style lang="scss">
.lv-card {
    border-radius: var(--border-radius);
    background-color: var(--background-color);
    color: var(--text-color);
    font-size: var(--font-size);
    line-height: var(--line-height);

    &--inline {
        display: inline-block;
    }
    &--padding {
        padding: calc(var(--padding) * 1.5);
    }
    &--elevation {
        box-shadow: var(--shadow);
    }
    &--border {
        border: 1px solid var(--border-color);
    }
}
</style>
