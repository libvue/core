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
            <lv-button label="Action" type="outline" color="primary" @click="action()"/>
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
        }
    }
};
</script>

<style lang="scss">

.lv-toast {
    border: 1px solid var(--border-color);
    padding: var(--padding);
    border-radius: var(--border-radius);
    background: var(--background-color);
    box-shadow: var(--shadow);
    display: flex;

    &__title {
        font-weight: bold;
        font-size: var(--font-size);
    }
    &__description {
        font-size: var(--font-size-small);
        color: var(--text-color-dimmed);
    }

    &__right {
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
