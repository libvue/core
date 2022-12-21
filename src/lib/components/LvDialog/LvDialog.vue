<template>
    <Teleport :to="teleportTarget">
        <UseFocusTrap v-if="show && mounted" :options="focusTrapOptions">
            <div v-if="show" ref="dialog" class="lv-dialog" role="dialog" :aria-modal="modal" v-bind="$attrs">
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
            </div>
        </UseFocusTrap>
    </Teleport>
</template>

<script>
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component';

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
    },
    emits: ['click-backdrop'],
    data() {
        return {
            mounted: false,
        }
    },
    computed: {
        focusTrapOptions() {
            return {
                immediate: true,
                escapeDeactivates: false,
                fallbackFocus: document.body,
            }
        },
    },
    mounted() {
        this.mounted = true;
    },
    methods: {
        onClickBackdrop() {
            this.$emit('click-backdrop');
        },
    },
};
</script>

<style lang="scss">
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
    }
}
</style>
