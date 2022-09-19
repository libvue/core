<template>
    <div
        class="lv-layout"
        :class="{
            'lv-layout--menu-top': menuPosition === 'top',
        }"
    >
        <div class="lv-layout__menu" v-if="!!$slots.menu">
            <lv-menu :direction="menuPosition === 'top' ? 'row' : 'column'" @click-header="$router.push('/')">
                <template #header>
                    <slot name="menu-header"></slot>
                </template>
                <template #default>
                    <slot name="menu"></slot>
                </template>
                <template #footer>
                    <slot name="menu-footer"></slot>
                </template>
            </lv-menu>
        </div>
        <div class="lv-layout__content" v-if="!!$slots.content">
            <slot name="content" />
        </div>
        <div class="lv-layout__footer" v-if="!!$slots.footer">
            <slot name="footer" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        menuPosition: {
            type: String,
            default: 'left',
            validator: (value) => ['left', 'top'].includes(value),
        },
        responsiveMenu: {
            type: Boolean,
            default: true,
        },
        footerPosition: {
            type: String,
            default: 'content-relative',
            validator: (value) => ['content-relative', 'content-fixed', 'menu-relative', 'menu-fixed'].includes(value),
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

$layout-menu-border-color: lighten($border-color, 8);
$layout-menu-left-width: 300px;

.lv-layout {
    $self: &;

    display: flex;
    flex-direction: row;
    min-height: 100%;
    flex-grow: 1;
    width: 100%;

    &--menu-top {
        flex-direction: column;
        #{$self}__menu {
            display: flex;
            width: 100%;
            overflow-y: inherit;
            padding: 10px 30px;
        }
    }

    &__menu,
    &__content,
    &__footer {
        padding: 30px;
    }
    &__content {
        flex-grow: 1;
        overflow-y: auto;
        max-height: 100vh;
    }
    &__menu {
        border-right: 1px solid $layout-menu-border-color;
        overflow-y: auto;
        max-height: 100vh;
        width: $layout-menu-left-width;
        flex-shrink: 0;
    }
}
</style>
