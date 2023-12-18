<template>
    <Teleport :to="teleportTarget">
        <component
            :is="focusTrap ? 'UseFocusTrap' : 'div'"
            v-if="computedShow && mounted"
            :options="focusTrap ? focusTrapOptions : null"
            class="lv-dialog"
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
                        <div v-if="!!$slots.title" class="lv-dialog__title"><slot name="title"></slot></div>
                        <div v-if="!!$slots.content" class="lv-dialog__content">
                            <slot name="content"></slot>
                        </div>
                        <div v-if="!!$slots.close" class="lv-dialog__close"><slot name="close"></slot></div>
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
    },
    watch: {
        show(val) {
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
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    z-index: var(--z-dialog);
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
        max-height: 100vh;
    }
}
</style>
