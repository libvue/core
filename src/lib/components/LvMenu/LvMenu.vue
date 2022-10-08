<template>
    <div class="lv-menu" :class="classObject">
        <slot />
    </div>
</template>

<script>
import { computed } from 'vue';
import { providedLayout } from '../../utils/provideKeys';

export default {
    inject: {
        providedLayout: { from: providedLayout },
    },
    provide() {
        return {
            [providedLayout]: computed(() => this.layout || this.providedLayout),
        };
    },
    props: {
        layout: {
            type: String,
            default: null,
            validator(val) {
                return ['horizontal', 'vertical', null].includes(val);
            },
        },
    },
    computed: {
        providedOrPropLayout() {
            if (this.layout) {
                return this.layout;
            }
            return this.providedLayout;
        },
        classObject() {
            return {
                [`lv-menu--layout-${this.providedOrPropLayout}`]: !!this.providedOrPropLayout,
            };
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-menu {
    $self: &;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    background-color: $background-color;
    font-family: $font-family;

    &--layout-vertical {
        display: flex;
        flex-shrink: 1;
        flex-direction: row;
        align-items: center;
        width: 100%;
        overflow-y: inherit;
    }
}
</style>
