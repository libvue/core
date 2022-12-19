<template>
    <div class="lv-vertical-nav-group">
        <h1 class="lv-vertical-nav-group__label">
            <lv-icon v-if="icon" class="lv-vertical-nav-group__icon" :name="icon" /> {{ label }}
        </h1>
        <div class="lv-vertical-nav-group__content">
            <slot />
        </div>
    </div>
</template>

<script>
import LvIcon from "../LvIcon/LvIcon.vue";

export default {
    components: { LvIcon },
    props: {
        label: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss">
.lv-vertical-nav-group {
    $self: &;
    display: flex;
    position: relative;
    flex-grow: 1;
    flex-direction: column;
    margin-bottom: 15px;
    width: 100%;
    font-size: var(--font-size);
    font-family: var(--font-family);

    &:last-of-type {
        margin-bottom: 0;
    }

    &__label {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 0;
        padding: 5px 0;
        color: var(--text-color);
        font-size: var(--font-size-small);
        line-height: 0.75;
    }

    &__icon {
        margin-right: 5px;
    }
}
</style>
