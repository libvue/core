<template>
    <div class="lv-header">
        <div class="lv-header__branding">
            <slot name="branding"></slot>
        </div>
        <div class="lv-header__search">
            <slot name="search"></slot>
        </div>
        <div v-if="!!$slots.navigation" class="lv-header__navigation">
            <slot name="navigation"></slot>
        </div>
        <div v-if="!!$slots.extra" class="lv-header__extra">
            <slot name="extra"></slot>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.lv-header {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    box-sizing: border-box;
    backdrop-filter: blur(2px);

    &__branding {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-right: 2rem;
        > img {
            width: 80px;
            color: var(--color-primary);
            flex-shrink: 0;
        }
    }
    &__search {
        margin-right: auto;
    }
    &__navigation {
        display: flex;
        margin-left: auto;
    }
    &__extra {
        display: flex;
        align-items: center;
        margin-left: 1rem;
    }
}
</style>
