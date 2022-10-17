<template>
    <Teleport :to="teleportTarget">
        <transition name="fade">
            <UseFocusTrap v-if="show" :options="{ immediate: true }">
                <div v-if="show" class="lv-dialog" role="dialog" :aria-modal="modal" ref="dialog">
                    <div class="lv-dialog__overlay" @click="onClickOverlay"></div>
                    <div class="lv-dialog__content">
                        <slot name="default">
                            <div v-if="!!$slots.title" class="lv-dialog__title"><slot name="title"></slot></div>
                            <div v-if="!!$slots.description" class="lv-dialog__description"><slot name="description"></slot></div>
                            <div v-if="!!$slots.close" class="lv-dialog__close"><slot name="close"></slot></div>
                        </slot>
                    </div>
                </div>
            </UseFocusTrap>
        </transition>
    </Teleport>
</template>

<script>
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component'

export default {
    components: {
        UseFocusTrap,
    },
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
            default: 'body'
        }
    },
    data() {
        return {
            focusTrap: null,
        };
    },
    methods: {
        onClickOverlay() {
            this.$emit('click-overlay');
        }
    }
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-dialog {
    display: flex;
    position: fixed;
    z-index: $z-index-dialog;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    &__overlay {
        position: absolute;
        background-color: rgba(11, 11, 12, 0.27);
        width: 100%;
        height: 100%;
    }

    &__content {
        position: relative;
        box-shadow: $shadow-dialog;
        border-radius: $border-radius;
        background-color: #fff;
        padding: $padding * 2;
    }

}
</style>