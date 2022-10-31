<template>
    <div class="lv-toast">
        <div class="lv-toast__left">
            <div class="lv-toast__title">
                {{ title }}
            </div>
            <div class="lv-toast__description">
                {{ description }}
            </div>
        </div>
        <div v-if="action" class="lv-toast__right">
            <lv-button label="Action" type="outline" color="primary" @click="action()" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        action: {
            type: Function,
            default: null,
        },
    },
};
</script>

<style lang="scss">
.lv-toast {
    display: flex;
    box-shadow: var(--shadow);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background: var(--background-color);
    padding: var(--padding);

    &__title {
        font-weight: bold;
        font-size: var(--font-size);
    }
    &__description {
        color: var(--text-color-dimmed);
        font-size: var(--font-size-small);
    }

    &__right {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
    }
}
</style>
