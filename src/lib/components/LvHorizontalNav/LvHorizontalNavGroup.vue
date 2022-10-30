<template>
    <div class="lv-horizontal-nav-group">
        <h1 class="lv-horizontal-nav-group__label">
            <lv-icon v-if="icon" class="lv-horizontal-nav-group__icon" :name="icon" /> {{ label }}
        </h1>
        <div class="lv-horizontal-nav-group__content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
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

.lv-horizontal-nav-group {
    $self: &;
    display: flex;
    position: relative;
    flex-grow: 1;
    flex-direction: column;
    cursor: pointer;
    width: 100%;
    font-size: var(--font-size);
    font-family: var(--font-family);

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
