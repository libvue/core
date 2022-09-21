<template>
    <div class="lv-layout" :class="classObject">
        <div class="lv-layout__menu" v-if="!!$slots.menu">
            <div class="lv-layout__menu-logo" v-if="!!$slots.logo">
                <slot name="logo"></slot>
            </div>
            <slot name="menu"></slot>
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
import { computed } from 'vue';

export default {
    props: {
        layout: {
            type: String,
            default: 'horizontal',
            validator(val) {
                return ['horizontal', 'vertical'].includes(val)
            }
        },
    },
    provide() {
        return {
            layout: computed(() => this.layout)
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
$layout-menu-left-width: 250px;

.lv-layout {
    $self: &;

    display: flex;
    flex-direction: row;
    min-height: 100%;
    flex-grow: 1;
    width: 100%;

    &--layout-vertical {
        flex-direction: column;

        #{$self}__menu {
            display: flex;
            width: 100%;
            padding: 0 30px;
            box-sizing: border-box;
            border-bottom: 1px solid $layout-menu-border-color;
            overflow-y: inherit;
            &-logo {
                flex-direction: row;
                margin-bottom: 0;
                margin-right: 10px;
            }
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
        &-logo {
            padding: 15px;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            font-weight: bold;
        }
    }
}
</style>
