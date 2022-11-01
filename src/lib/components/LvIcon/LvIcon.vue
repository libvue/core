<template>
    <svg
        ref="icon"
        class="lv-icon"
        viewBox="0 0 24 24"
        :width="computedSize"
        :height="computedSize"
        aria-hidden="true"
        :style="push ? `margin-right: ${push}rem;` : false"
        :data-name="name"
    >
        <use :href="`${spritePath}#${name}`" />
    </svg>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'exclamation-triangle',
        },
        size: {
            type: Number,
            default: null,
        },
        push: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            fallbackSize: 14, // equal to 0.875rem
            parentFontSize: null,
        };
    },
    computed: {
        computedSize() {
            // If prop:size is set, this must lead
            if (this.size) {
                return this.size;
            }
            // If we can get the fontsize from the parent, use it!
            if (this.parentFontSize) {
                return this.parentFontSize;
            }
            // Otherwise use the fallback size
            return this.fallbackSize;
        },
        spritePath() {
            return './node_modules/lucide-static/sprite.svg';
        },
    },
    mounted() {
        this.parentFontSize = this.getParentFontSize();
    },
    methods: {
        getParentFontSize() {
            if (this.$parent.$el) {
                return window.getComputedStyle(this.$parent.$el).getPropertyValue('font-size');
            }
            return null;
        },
    },
};
</script>

<style lang="scss">
.lv-icon {
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: inherit;
}
</style>
