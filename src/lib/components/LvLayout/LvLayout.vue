<template>
    <div class="lv-layout" :class="classObject">
        <!-- Global navigation -->
        <header v-if="!!$slots['global-navigation']" role="banner" class="lv-layout__global-navigation">
            <slot name="global-navigation"></slot>
        </header>
        <!-- Local navigation -->
        <aside v-if="!!$slots['local-navigation']" class="lv-layout__local-navigation">
            <slot name="local-navigation"></slot>
        </aside>
        <!-- Content -->
        <main v-if="!!$slots['content']" role="contentinfo" class="lv-layout__content">
            <slot name="content"></slot>
        </main>
        <!-- Quick navigation -->
        <div v-if="!!$slots['quick-navigation']" class="lv-layout__quick-navigation">
            <slot name="quick-navigation"></slot>
        </div>

        <div v-if="!!$slots.menu" class="lv-layout__menu">
            <header v-if="!!$slots.logo" role="banner" class="lv-layout__menu-logo">
                <slot name="logo"></slot>
            </header>
            <slot name="menu"></slot>
            <div v-if="!!$slots['menu-footer']" class="lv-layout__menu-footer">
                <slot name="menu-footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { providedLayout } from '../../utils/provideKeys';

export default {
    provide() {
        return {
            [providedLayout]: computed(() => this.layout),
        };
    },
    props: {
        layout: {
            type: String,
            default: 'horizontal',
            validator(val) {
                return ['horizontal', 'vertical'].includes(val);
            },
        },
        horizontalMenuWidth: {
            type: String,
            default: '200px',
        },
        verticalMenuHeight: {
            type: String,
            default: '50px',
        },
    },
    computed: {
        classObject() {
            return {
                [`lv-layout--layout-${this.layout}`]: !!this.layout,
            };
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

$layout-menu-border-color: lighten($border-color, 8);

.lv-layout {
    $self: &;

    display: flex;
    flex-grow: 1;
    flex-direction: row;
    width: 100%;
    min-height: 100%;

    &--layout-vertical {
        flex-direction: column;

        > #{$self}__menu {
            $menu: &;
            display: flex;
            flex-shrink: 0;
            flex-direction: row;
            align-items: center;
            box-sizing: border-box;
            border-bottom: 1px solid $layout-menu-border-color;
            padding: 0 30px;
            width: 100%;
            height: v-bind(verticalMenuHeight);
            overflow-y: inherit;

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
        max-height: 100vh;
        overflow-y: auto;
    }
    &__menu {
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        border-right: 1px solid $layout-menu-border-color;
        width: v-bind(horizontalMenuWidth);
        max-height: 100vh;
        overflow-y: auto;

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
