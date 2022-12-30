<template>
    <svg
        ref="icon"
        class="lv-spinner"
        viewBox="0 0 24 24"
        :width="computedSize"
        :height="computedSize"
        aria-hidden="true"
        :style="push ? `margin-right: ${push}rem;` : false"
        data-name="loader-2"
    >
        <use :href="`${spritePath}#loader-2`" />
        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 0 0" to="359 0 0" :dur="duration" additive="sum" repeatCount="indefinite" />
    </svg>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import spriteUrl from 'lucide-static/sprite.svg?url';

export default {
    props: {
        size: {
            type: Number,
            default: null,
        },
        push: {
            type: Number,
            default: 0,
        },
        duration: {
            type: String,
            default: '0.5s'
        }
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
            return spriteUrl;
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
.lv-spinner {
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
