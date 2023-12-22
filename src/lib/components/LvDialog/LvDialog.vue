<template>
    <Teleport :to="teleportTarget">
        <component
            :is="focusTrap ? 'UseFocusTrap' : 'div'"
            v-if="computedShow && mounted"
            :options="focusTrap ? focusTrapOptions : null"
            class="lv-dialog"
            :class="classObject"
            role="dialog"
            :aria-modal="modal"
            :aria-label="ariaLabel"
            :aria-labelledby="arialLabelledBy"
            v-bind="$attrs"
        >
            <transition name="fade" appear>
                <div v-if="show" class="lv-dialog__backdrop" @click="onClickBackdrop"></div>
            </transition>
            <transition name="fade-slide-up" appear>
                <div v-if="show" ref="content" class="lv-dialog__window">
                    <slot name="default">
                        <div v-if="!!$slots.header" class="lv-dialog__header"><slot name="header"></slot></div>
                        <div v-if="!!$slots.content" class="lv-dialog__content"><slot name="content"></slot></div>
                        <div v-if="!!$slots.footer" class="lv-dialog__footer"><slot name="footer"></slot></div>
                    </slot>
                </div>
            </transition>
        </component>
    </Teleport>
</template>

<script>
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component';
import { useScrollLock } from '@vueuse/core';
import { useTimings } from '../../composables/useTimings';

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
        maxWidth: {
            type: String,
            default: '900px'
        },
        overflowY: {
            type: String,
            default: 'auto',
        },
        fullscreen: {
            type: Boolean,
            default: false,
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
                'lv-dialog--fullscreen': this.fullscreen,
            };
        }
    },
    watch: {
        show: {
            handler(val) {
                this.isLocked = !!val;
                // If invisible, directly show
                // Otherwise hide with a delay
                if (val) {
                    this.computedShow = true;
                } else {
                    setTimeout(() => {
                        this.computedShow = false;
                    }, this.cssTimeToMilliSeconds(this.timeDouble));
                }
            },
            immediate: true,
        },
    },
    mounted() {
        this.mounted = true;
    },
    methods: {
        onClickBackdrop(e) {
            this.$emit('click-backdrop', e);
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/transitions/fade';

.lv-dialog {
    $self: &;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    z-index: var(--z-dialog);
    padding: 1.5rem;
    width: 100%;
    height: 100%;

    &__backdrop {
        position: absolute;
        background-color: var(--backdrop-color);
        width: 100%;
        height: 100%;
    }

    &__window {
        position: relative;
        box-shadow: var(--shadow-dialog);
        border-radius: var(--border-radius);
        background-color: var(--background-color);
        padding: calc(var(--padding) * 2);
        max-height: 100%;
        display: flex;
        flex-direction: column;
        max-width: v-bind(maxWidth);
    }

    #{$self}__content {
        flex-shrink: 1;
        overflow-y: v-bind(overflowY);
    }
    #{$self}__footer {
        padding-top: 1rem;
    }

    &--fullscreen {
        padding: 0;
        #{$self}__window {
            width: 100vw;
            height: 100vh;
            max-width: none !important;
            border-radius: 0;
        }
        #{$self}__content {
            flex-grow: 1;
            overflow-y: auto;
        }
    }
}
</style>
