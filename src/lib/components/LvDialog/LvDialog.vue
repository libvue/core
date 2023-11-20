<template>
    <Teleport :to="teleportTarget">
        <transition name="fade-slide-up">
            <component
                :is="focusTrap ? 'UseFocusTrap' : 'div'"
                v-if="show && mounted"
                ref="dialog"
                :options="focusTrap ? focusTrapOptions : null"
                class="lv-dialog"
                role="dialog"
                :aria-modal="modal"
                v-bind="$attrs"
            >
                <div class="lv-dialog__backdrop" @click="onClickBackdrop"></div>
                <div ref="content" class="lv-dialog__window">
                    <slot name="default">
                        <div v-if="!!$slots.title" class="lv-dialog__title"><slot name="title"></slot></div>
                        <div v-if="!!$slots.content" class="lv-dialog__content">
                            <slot name="content"></slot>
                        </div>
                        <div v-if="!!$slots.close" class="lv-dialog__close"><slot name="close"></slot></div>
                    </slot>
                </div>
            </component>
        </transition>
    </Teleport>
</template>

<script>
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component';
import { useScrollLock } from '@vueuse/core';

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
        teleportTarget: {
            type: String,
            default: 'body',
        },
        focusTrap: {
            type: Boolean,
            default: true,
        },
        scrollLock: {
            type: Boolean,
            default: true,
        },
    },
    emits: ['click-backdrop'],
    setup() {
        const { body } = document;
        const isLocked = useScrollLock(body);
        return {
            isLocked,
        };
    },
    data() {
        return {
            mounted: false,
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
    z-index: var(--z-index-dialog);
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
        overflow-y: auto;
    }
}
</style>
