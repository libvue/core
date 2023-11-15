<template>
    <Teleport :to="teleportTarget">
        <div
            class="lv-drawer"
            :class="classObject"
            v-bind="$attrs"
            role="dialog"
            :aria-label="ariaLabel"
            :aria-labelledby="arialLabelledBy"
        >
            <transition name="fade">
                <div v-show="show" class="lv-drawer__backdrop" @click="onClickBackDrop"></div>
            </transition>
            <transition :name="animation">
                <div v-show="show" ref="content" class="lv-drawer__content">
                    <slot></slot>
                </div>
            </transition>
        </div>
    </Teleport>
</template>

<script>
import { useScrollLock } from '@vueuse/core';

export default {
    inheritAttrs: false,
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        placement: {
            type: String,
            default: 'bottom',
            validator: (val) => ['right', 'left', 'top', 'bottom'].includes(val),
        },
        ariaLabel: {
            type: String,
            default: null,
        },
        arialLabelledBy: {
            type: String,
            default: null,
        },
        teleportTarget: {
            type: String,
            default: 'body',
        },
        leftRightWidth: {
            type: String,
            default: 'auto',
        },
        topBottomHeight: {
            type: String,
            default: 'auto',
        },
    },
    emits: ['click-backdrop'],
    setup() {
        const scrollLock = useScrollLock(document.body);
        return {
            scrollLock,
        };
    },
    computed: {
        focusTrapOptions() {
            return {
                immediate: true,
                escapeDeactivates: false,
                fallbackFocus: document.body,
            };
        },
        classObject() {
            return {
                [`lv-drawer--placement-${this.placement}`]: true,
            };
        },
        animation() {
            if (this.placement === 'top') {
                return 'slide-top-to-bottom';
            }
            if (this.placement === 'bottom') {
                return 'slide-bottom-to-top';
            }
            if (this.placement === 'left') {
                return 'slide-left-to-right';
            }
            if (this.placement === 'right') {
                return 'slide-right-to-left';
            }
            return 'fade';
        },
    },
    watch: {
        show(val) {
            if (val) {
                this.scrollLock = true;
            } else {
                this.scrollLock = false;
            }
        },
    },
    methods: {
        onClickBackDrop(e) {
            this.$emit('click-backdrop', e);
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/transitions/slide';

.lv-drawer {
    $self: &;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--z-index-dialog);
    width: 100%;
    height: 100%;
    pointer-events: none;

    &__backdrop {
        position: absolute;
        background-color: var(--backdrop-color);
        width: 100%;
        height: 100%;
        pointer-events: all;
    }

    &__content {
        display: flex;
        position: absolute;
        flex-direction: column;
        box-sizing: border-box;
        box-shadow: var(--shadow-dialog);
        background-color: var(--background-color);
        padding: calc(var(--padding) * 2);
        height: 100%;
        overflow: auto;
        pointer-events: all;
    }

    &--placement-bottom {
        #{$self}__content {
            bottom: 0;
            width: 100%;
            height: v-bind(topBottomHeight);
        }
    }

    &--placement-top {
        #{$self}__content {
            top: 0;
            width: 100%;
            height: v-bind(topBottomHeight);
        }
    }

    &--placement-left {
        #{$self}__content {
            left: 0;
            width: v-bind(leftRightWidth);
            height: 100%;
        }
    }

    &--placement-right {
        #{$self}__content {
            right: 0;
            width: v-bind(leftRightWidth);
            height: 100%;
        }
    }
}
</style>
