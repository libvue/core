<template>
    <div class="lv-color-swatch" :class="classObject"></div>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: '3rem',
        },
        color: {
            type: String,
            default: 'var(--color-primary)'
        },
        rounded: {
            type: Boolean,
            default: false,
        },
        squared: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        classObject() {
            return {
                'lv-color-swatch--rounded': this.rounded,
                'lv-color-swatch--squared': this.squared,
            }
        }
    }
};
</script>

<style lang="scss">
.lv-color-swatch {
    width: v-bind(size);
    height: v-bind(size);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: v-bind(color);

    &--rounded {
        border-radius: 100%;
    }
    &--squared {
        border-radius: 0;
    }
}
</style>
