<template>
    <div
        class="lv-menu"
        :class="classObject"
    >
        <slot />
    </div>
</template>

<script>
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
    },
    inject: {
        providedLayout: { from: providedLayout },
    },
    computed: {
        providedOrPropLayout() {
            if(this.providedLayout) {
                return this.providedLayout;
            }
            return this.layout;
        },
        classObject() {
            return {
                [`lv-menu--layout-${this.providedOrPropLayout}`]: !!this.providedOrPropLayout
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
