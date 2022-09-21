<template>
    <div
        class="lv-menu"
        :class="classObject"
    >
        <slot />
    </div>
</template>

<script>
export default {
    inject: ['layout'],
    computed: {
        classObject() {
            return {
                [`lv-menu--layout-${this.layout.value}`]: !!this.layout.value
            };
        }
    }
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-menu {
    $self: &;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    font-family: $font-family;
    background-color: $background-color;

    &--layout-vertical {
        flex-direction: row;
        align-items: center;
        display: flex;
        overflow-y: inherit;
        width: 100%;
        flex-shrink: 1;
    }
}
</style>
