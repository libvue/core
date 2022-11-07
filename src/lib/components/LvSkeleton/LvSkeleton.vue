<template>
    <div class="lv-skeleton" :class="classObject"></div>
</template>

<script>
export default {
    props: {
        width: {
            type: String,
            default: '100px'
        },
        height: {
            type: String,
            default: 'auto',
        },
        squared: {
            type: Boolean,
            default: false,
        },
        rounded: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        classObject() {
            return {
                'lv-skeleton--squared': !!this.squared,
                'lv-skeleton--rounded': !!this.rounded,
            }
        }
    }
};
</script>

<style lang="scss">
.lv-skeleton {
    display: inline-flex;
    min-height: 1rem;
    background-image: linear-gradient(270deg,var(--skeleton-tint1),var(--skeleton-tint2),var(--skeleton-tint2),var(--skeleton-tint1));
    background-size: 400% 100%;
    animation: background 8s ease-in-out infinite;
    border-radius: var(--border-radius);
    width: v-bind(width);
    height: v-bind(height);
    &--rounded {
        border-radius: 100%;
    }
    &--squared {
        border-radius: 0;
    }
}
@keyframes background {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}
</style>
