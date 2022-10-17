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
@import '../../scss/variables';

.lv-toast {
    border: 1px solid $border-color;
    padding: $padding;
    border-radius: $border-radius;
    background: $background-color;
    box-shadow: $shadow;
    display: flex;

    &__title {
        font-weight: bold;
        font-size: $font-size;
    }
    &__description {
        font-size: $font-size-small;
        color: $text-color-dimmed;
    }

    &__right {
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
