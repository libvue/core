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
import { computed } from "vue";

export default {
    props: {
        layout: {
            type: String,
            default: null,
            validator(val) {
                return ['horizontal', 'vertical', null].includes(val)
            }
        },
    },
    inject: {
        providedLayout: { from: providedLayout },
    },
    provide() {
        return {
            [providedLayout]: computed(() => this.layout || this.providedLayout)
        }
    },
    computed: {
        providedOrPropLayout() {
            if(this.layout) {
                return this.layout;
            }
            return this.providedLayout;
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
