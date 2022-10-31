<template>
    <div class="lv-window" :style="styleObject">
        <div class="lv-window__header">
            <div class="lv-window__dots">
                <div class="lv-window__dot"></div>
                <div class="lv-window__dot"></div>
                <div class="lv-window__dot"></div>
            </div>
            <div v-if="title" class="lv-window__title">
                {{ title }}
            </div>
        </div>
        <div class="lv-window__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '300px'
        },
        title: {
            type: String,
            default: null,
        },
    },
    computed: {
        styleObject() {
            return {
                'width': this.width,
                'height': this.height,
            }
        }
    }
};
</script>

<style lang="scss">
.lv-window {
    display: flex;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    flex-direction: column;

    &__header {
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid var(--border-color);
        position: relative;
        font-size: var(--font-size);
        line-height: var(--font-size);
        height: 2rem;
        flex-shrink: 0;
    }
    &__dots {
        display: flex;
        gap: 0.5rem;
        position: absolute;
        top: 1rem;
        left: 1rem;
        transform: translateY(-50%);
    }
    &__dot {
        width: 10px;
        height: 10px;
        background-color: #cacaca;
        border-radius: 100%;
        &:nth-of-type(1) {
            background-color: var(--color-danger);
        }
        &:nth-of-type(2) {
            background-color: var(--color-warning);
        }
        &:nth-of-type(3) {
            background-color: var(--color-success);
        }
    }
    &__title {
        color: var(--text-color);
    }
    &__content {
        padding: var(--padding);
        flex-grow: 1;
    }
}
</style>
