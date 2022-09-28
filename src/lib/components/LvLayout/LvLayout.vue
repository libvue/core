<template>
    <div class="lv-layout" :class="classObject">
        <div class="lv-layout__menu" v-if="!!$slots.menu">
            <div class="lv-layout__menu-logo" v-if="!!$slots.logo">
                <slot name="logo"></slot>
            </div>
            <slot name="menu"></slot>
            <div class="lv-layout__menu-footer" v-if="!!$slots['menu-footer']">
                <slot name="menu-footer"></slot>
            </div>
        </div>
        <div class="lv-layout__content" v-if="!!$slots.content">
            <slot name="content" />
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { providedLayout } from "../../utils/provideKeys";

export default {
    props: {
        layout: {
            type: String,
            default: 'horizontal',
            validator(val) {
                return ['horizontal', 'vertical'].includes(val)
            }
        },
        horizontalMenuWidth: {
            type: String,
            default: '200px',
        },
        verticalMenuHeight: {
            type: String,
            default: '50px',
        }
    },
    provide() {
        return {
            [providedLayout]: computed(() => this.layout)
        }
    },
    computed: {
        classObject() {
            return {
                [`lv-layout--layout-${this.layout}`]: !!this.layout
            };
        }
    }
};
</script>

<style lang="scss">
@import '../../scss/variables';

$layout-menu-border-color: lighten($border-color, 8);

.lv-layout {
    $self: &;

    display: flex;
    flex-direction: row;
    min-height: 100%;
    flex-grow: 1;
    width: 100%;

    &--layout-vertical {
        flex-direction: column;

        > #{$self}__menu {
            $menu: &;
            display: flex;
            width: 100%;
            padding: 0 30px;
            box-sizing: border-box;
            border-bottom: 1px solid $layout-menu-border-color;
            overflow-y: inherit;
            flex-shrink: 0;
            height: v-bind(verticalMenuHeight);
            align-items: center;
            flex-direction: row;

            #{$self}__#{menu}-logo {
                margin-right: 10px;
                margin-bottom: 0;
            }

            #{$self}__#{menu}-footer {
                margin-top: 0;
                margin-left: auto;
            }
        }
    }

    &__menu,
    &__content {
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
        width: v-bind(horizontalMenuWidth);
        flex-shrink: 0;
        display: flex;
        flex-direction: column;

        &-logo {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            font-weight: bold;
        }
        &-footer {
            margin-top: auto;
        }
    }
}
</style>
