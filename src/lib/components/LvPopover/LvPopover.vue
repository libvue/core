<template>
    <div ref="popover" class="lv-popover" role="dialog" :class="classObject">
        <div ref="reference" class="lv-popover__reference">
            <slot name="reference"></slot>
        </div>
        <transition name="fade">
            <div ref="tooltip" style="display: none" class="lv-popover__tooltip">
                <div class="lv-popover__content">
                    <slot name="content"></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import tippy, { followCursor } from 'tippy.js';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/animations/shift-toward-subtle.css';

const svgArrow = `
<svg width="16" height="6">
    <path class="lv-popover__arrow-border" d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"/>
    <path class="lv-popover__arrow-fill" d="m0 7s2 0 5-4c1-1 2-2 3-2 1 0 2 1 3 2 3 4 5 4 5 4h-16z"/>
</svg>
`.trim();

export default {
    props: {
        trigger: {
            type: String,
            default: 'mouseenter',
        },
        triggerTarget: {
            type: Object,
            default: null,
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
            default: '.5rem'
        },
        show: {
            type: Boolean,
            default: false,
        },
        interactive: {
            type: Boolean,
            default: false,
        },
        followCursor: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        classObject() {
            return {
                [`lv-popover--placement-${this.placement}`]: true,
            };
        },
    },
    data() {
        return {
            instance: null,
            contentChangeObserver: null,
        }
    },
    watch: {
        show: {
            handler(val) {
                if(this.trigger === 'manual' && this.instance) {
                    if(val) {
                        this.instance.show();
                    } else {
                        this.instance.hide();
                    }
                }
            },
            immediate: true,
        }
    },
    mounted() {
        this.createTooltip();

        // Create the observer (and what to do on changes...)
        this.contentChangeObserver = new MutationObserver(() => {
            this.instance.setContent(this.$refs.tooltip.innerHTML)
        });

        // Set up the observer
        this.contentChangeObserver.observe(
            this.$refs.tooltip,
            { attributes: true, childList: true, characterData: true, subtree: true }
        );
    },
    beforeUnmount() {
        this.contentChangeObserver.disconnect();
    },
    methods: {
        createTooltip() {
            this.instance = tippy(this.$refs.reference, {
                triggerTarget: this.triggerTarget,
                trigger: this.trigger,
                interactive: this.interactive,
                theme: 'libvue',
                arrow: this.showArrow ? svgArrow : false,
                allowHTML: true,
                plugins: [followCursor],
                content: this.$refs.tooltip.innerHTML,
                placement: this.placement,
                followCursor: this.followCursor,
                animation: 'shift-toward-subtle',
                duration: 100,
            });
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/transitions/fade';
@import 'tippy.js/dist/tippy.css';

.lv-popover {
    $self: &;
    display: flex;
    height: 100%;

    &__reference {
        display: inline;
        width: 100%;
        height: 100%;
    }
    &__tooltip {
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
    padding: v-bind(padding);
    color: var(--text-color);
}
</style>
