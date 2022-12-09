<template>
    <div class="lv-popover">
        <slot name="reference"></slot>
        <tippy target="_parent" :interactive="interactive" :placement="placement" :trigger="trigger" :visible="visible">
            <div class="lv-popover__content" :style="`padding: ${padding}`">
                <slot name="content"></slot>
            </div>
        </tippy>
    </div>
</template>

<script>
import { Tippy } from "tippy.vue";
// eslint-disable-next-line import/no-extraneous-dependencies
import tippy from 'tippy.js';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/animations/shift-toward-subtle.css';

const svgArrow = `
<svg width="16" height="6">
    <path class="lv-popover__arrow-border" d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"/>
    <path class="lv-popover__arrow-fill" d="m0 7s2 0 5-4c1-1 2-2 3-2 1 0 2 1 3 2 3 4 5 4 5 4h-16z"/>
</svg>
`.trim();

export default {
    components: {
        Tippy,
    },
    props: {
        trigger: {
            type: String,
            default: 'mouseenter',
        },
        placement: {
            type: String,
            default: 'auto',
            validator: (val) => ['bottom', 'left', 'right', 'top', 'auto'].includes(val),
        },
        showArrow: {
            type: Boolean,
            default: true,
        },
        visible: {
            type: Boolean,
            default: true,
        },
        padding: {
            type: String,
            default: '1rem',
        },
        show: {
            type: Boolean,
            default: false,
        },
        interactive: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        this.setDefaultProps();
    },
    methods: {
        setDefaultProps() {
            tippy.setDefaultProps({
                arrow: this.showArrow ? svgArrow : false,
                theme: 'libvue',
                animation: 'shift-toward-subtle',
                duration: 100,
            });
        }
    }
};
</script>


<style lang="scss">
@import '../../scss/transitions/fade';
@import 'tippy.js/dist/tippy.css';

.lv-popover {
    $self: &;
    display: flex;
    height: 100%;

    &__content {
        position: relative;
        z-index: var(--z-index-dropdown);
        transition: 0.2s opacity ease;
        box-shadow: var(--shadow-popover);
        padding-bottom: 0;
    }
    &__arrow-border {
        fill: var(--border-color);
    }
    &__arrow-fill {
        fill: var(--background-color);
    }
}
</style>

<style lang="scss">
.tippy-box[data-theme~='libvue'] {
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--background-color) !important;
    color: var(--text-color);
    padding: 0;
    .tippy-content {
        padding: 0;
    }
}
</style>
