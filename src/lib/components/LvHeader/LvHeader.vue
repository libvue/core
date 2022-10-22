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
@import '../../scss/variables';
.lv-header {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    box-sizing: border-box;
    background-color: rgba(255,255,255,0.8);
    backdrop-filter: blur(2px);
    border-bottom: 1px solid $border-color;
    &__branding {
        display: flex;
        align-items: center;
        cursor: pointer;
        > img {
            width: 80px;
            color: $color-primary;
            flex-shrink: 0;
        }
    }
    &__search {
        margin: 0 auto;
    }
    &__navigation {
    }
    &__extra {
    }
}
</style>
