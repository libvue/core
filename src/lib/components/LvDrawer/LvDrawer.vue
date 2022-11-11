<template>
    <Teleport :to="teleportTarget">
        <div v-show="show" class="lv-drawer" :class="classObject" role="dialog">
            <transition name="fade">
                <div v-if="show" class="lv-drawer__overlay"></div>
            </transition>
            <transition :name="animation">
                <div v-show="show" ref="content" class="lv-drawer__content">
                    <UseFocusTrap v-if="show" class="lv-drawer__trap" :options="focusTrapOptions">
                        <slot></slot>
                    </UseFocusTrap>
                </div>
            </transition>
        </div>
    </Teleport>
</template>

<script>
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component';
import { onClickOutside } from '@vueuse/core';

export default {
    components: {
        UseFocusTrap,
    },
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
        }
    },
    emits: ['click-overlay'],
    computed: {
        focusTrapOptions() {
            return {
                immediate: true,
                escapeDeactivates: false,
                fallbackFocus: document.body,
            }
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
    mounted() {
        onClickOutside(this.$refs.content, () => {
            this.onClickOverlay();
        });
    },
    methods: {
        onClickOverlay() {
            this.$emit('click-overlay');
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

    &__overlay {
        position: absolute;
        background-color: rgba(11, 11, 12, 0.27);
        width: 100%;
        height: 100%;
    }

    &__content {
        position: absolute;
        box-sizing: border-box;
        box-shadow: var(--shadow-dialog);
        background-color: var(--background-color);
        padding: calc(var(--padding) * 2);
    }

    &__trap {
        display: flex;
        flex-direction: column;
        height: 100%;
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
            height: 100%;
            width: v-bind(leftRightWidth);
        }
    }

    &--placement-right {
        #{$self}__content {
            right: 0;
            height: 100%;
            width: v-bind(leftRightWidth);
        }
    }
}
</style>
