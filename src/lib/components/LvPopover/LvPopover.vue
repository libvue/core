<template>
    <div
        ref="popover"
        class="lv-popover"
        role="dialog"
        :class="classObject"
        @mouseenter="onHoverTrigger"
        @mouseleave="onBlurTrigger"
    >
        <div ref="trigger" class="lv-popover__trigger" @click="onClickTrigger">
            <slot name="trigger"></slot>
        </div>
        <transition name="fade">
            <div v-show="showPopover" ref="tooltip" class="lv-popover__tooltip">
                <svg
                    v-if="showArrow"
                    class="lv-popover__arrow"
                    width="15"
                    height="8"
                    viewBox="0 0 30 10"
                    preserveAspectRatio="none"
                >
                    <polygon points="0,0 30,0 15,10"></polygon>
                </svg>
                <div class="lv-popover__content">
                    <slot name="content"></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { onClickOutside } from '@vueuse/core';
import { createPopper } from '@popperjs/core';

export default {
    props: {
        trigger: {
            type: String,
            default: 'click',
            validator: (val) => ['click', 'hover'].includes(val),
        },
        placement: {
            type: String,
            default: 'bottom',
            validator: (val) => ['bottom', 'left', 'right', 'top'].includes(val),
        },
        showArrow: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            showPopover: false,
        };
    },
    computed: {
        classObject() {
            return {
                [`lv-popover--placement-${this.placement}`]: true,
            };
        },
    },
    watch: {
        showPopover: {
            handler(val) {
                if (val) {
                    this.createTooltip();
                }
            },
            flush: 'post',
        },
    },
    mounted() {
        onClickOutside(this.$refs.popover, () => {
            this.showPopover = false;
        });
    },
    methods: {
        createTooltip() {
            createPopper(this.$refs.trigger, this.$refs.tooltip, {
                placement: this.placement,
                strategy: 'absolute',
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, this.showArrow ? 10 : 4],
                        },
                    },
                ],
            });
        },
        onClickTrigger() {
            if (this.trigger === 'click') {
                this.showPopover = true;
            }
        },
        onHoverTrigger() {
            if (this.trigger === 'hover') {
                this.showPopover = true;
            }
        },
        onBlurTrigger() {
            if (this.trigger === 'hover') {
                this.showPopover = false;
            }
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';
.lv-popover {
    $self: &;

    &__arrow {
        fill: $background-color;
        stroke: $border-color;
        stroke-width: 1;
        stroke-dasharray: 0 30 5;
        position: absolute;
        z-index: 2;
    }
    &__content {
        position: relative;
        z-index: 1;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        background-color: $background-color;
        padding: $padding;
    }
    &__tooltip {
        position: relative;
        z-index: $z-index-dropdown;
        transition: 0.2s opacity ease;
        box-shadow: $shadow-popover;
        padding-bottom: 0;
    }

    &--placement-bottom {
        #{$self}__arrow {
            top: 1px;
            left: 50%;
            transform: translate(-50%, -100%) rotate(180deg);
        }
    }

    &--placement-top {
        #{$self}__arrow {
            bottom: 1px;
            left: 50%;
            transform: translate(-50%, 100%) rotate(0deg);
        }
    }

    &--placement-left {
        #{$self}__arrow {
            top: 50%;
            right: 3px;
            transform: translate(100%, -50%) rotate(-90deg);
        }
    }

    &--placement-right {
        #{$self}__arrow {
            top: 50%;
            left: 5px;
            transform: translate(-100%, -50%) rotate(90deg);
        }
    }
}
</style>
