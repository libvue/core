<template>
    <Teleport :to="teleportTarget">
        <component
            :is="focusTrap ? 'UseFocusTrap' : 'div'"
            v-if="computedShow && mounted"
            :options="focusTrap ? focusTrapOptions : null"
            class="lv-drawer"
            role="dialog"
            :class="classObject"
            :aria-modal="modal"
            :aria-label="ariaLabel"
            :aria-labelledby="arialLabelledBy"
            v-bind="$attrs"
        >
            <transition name="fade" appear>
                <div v-show="show" class="lv-drawer__backdrop" @click="onClickBackDrop"></div>
            </transition>
            <transition :name="animation" appear>
                <div v-show="show" ref="content" class="lv-drawer__content">
                    <slot></slot>
                </div>
            </transition>
        </component>
    </Teleport>
</template>

<script>
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component';
import { useScrollLock } from '@vueuse/core';
import { useTimings } from "../../composables/useTimings";

export default {
    components: {
        UseFocusTrap,
    },
    inheritAttrs: false,
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        modal: {
            type: Boolean,
            default: false,
        },
        placement: {
            type: String,
            default: 'bottom',
            validator: (val) => ['right', 'left', 'top', 'bottom'].includes(val),
        },
        leftRightWidth: {
            type: String,
            default: 'auto',
        },
        topBottomHeight: {
            type: String,
            default: 'auto',
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
        focusTrap: {
            type: Boolean,
            default: (props) => !!props.modal,
        },
    },
    emits: ['click-backdrop'],
    setup() {
        const isLocked = useScrollLock(document.body);
        const { timeDouble, cssTimeToMilliSeconds } = useTimings();

        return {
            isLocked,
            timeDouble,
            cssTimeToMilliSeconds,
        };
    },
    data() {
        return {
            mounted: false,
            computedShow: false,
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
            this.isLocked = !!val;

            if (val) {
                this.computedShow = true;
            } else {
                setTimeout(() => {
                    this.computedShow = false;
                }, this.cssTimeToMilliSeconds(this.timeDouble));
            }
        },
    },
    mounted() {
        this.mounted = true;
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
