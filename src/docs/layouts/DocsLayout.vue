<template>
    <lv-layout :layout="windowWidth > 1200 ? 'horizontal' : 'vertical'">
        <template #global-navigation>
            <lv-menu>
                <lv-menu-group label="Getting Started">
                    <lv-menu-item icon="rocket" to="install" label="Installation" />
                </lv-menu-group>
                <lv-menu-group label="Concepts">
                    <lv-menu-item icon="palette" to="theming" label="Theming" />
                    <lv-menu-item icon="align-vertical-space-around" to="spacing" label="Spacing" />
                    <lv-menu-item icon="grid" to="grids" label="Grids" />
                </lv-menu-group>
                <lv-menu-group label="Components">
                    <lv-menu-list icon="layout" label="Layout">
                        <lv-menu-item label="Layout" to="lv-layout" />
                        <lv-menu-item label="Menu" to="lv-menu" />
                        <lv-menu-item label="Card" to="lv-card" />
                        <lv-menu-item label="Group" to="lv-group" />
                    </lv-menu-list>
                    <lv-menu-list icon="compass" label="Navigation">
                        <lv-menu-item to="lv-button" label="Button" />
                        <lv-menu-item to="lv-tabs" label="Tabs" />
                        <lv-menu-item label="Link" to="lv-link" />
                        <lv-menu-item label="Breadcrumbs" to="lv-breadcrumbs" />
                    </lv-menu-list>
                    <lv-menu-list icon="bar-chart-2" label="Data Visualization">
                        <lv-menu-item to="lv-table" label="Table" />
                        <lv-menu-item to="lv-chart" label="Chart" />
                        <lv-menu-item label="Widget" to="lv-widget" />
                        <lv-menu-item label="Pill" to="lv-pill" />
                    </lv-menu-list>
                    <lv-menu-list icon="form-input" label="Form Elements">
                        <lv-menu-item to="lv-input" label="Input" />
                        <lv-menu-item to="lv-checkbox" label="Checkbox" />
                        <lv-menu-item label="Radio" to="lv-radio" />
                        <lv-menu-item label="Range Slider" to="lv-range-slider" />
                        <lv-menu-item label="Switch" to="lv-switch" />
                        <lv-menu-item label="Select" to="lv-select" />
                    </lv-menu-list>
                    <lv-menu-list icon="pencil" label="Writing">
                        <lv-menu-item to="lv-heading" label="Heading" />
                        <lv-menu-item label="Paragraph" to="lv-paragraph" />
                        <lv-menu-item label="Blockquote" to="lv-blockquote" />
                        <lv-menu-item label="Keyboard" to="lv-keyboard" />
                        <lv-menu-item label="Divider" to="lv-divider" />
                        <lv-menu-item to="lv-code" label="Code" />
                        <lv-menu-item to="lv-notice" label="Notice" />
                        <lv-menu-item label="Accordion" to="lv-accordion" />
                    </lv-menu-list>
                    <lv-menu-list icon="image" label="Media">
                        <lv-menu-item label="Icon" to="lv-icon" />
                        <lv-menu-item label="Avatar" to="lv-avatar" />
                    </lv-menu-list>
                    <lv-menu-list icon="layers" label="Overlay">
                        <lv-menu-item label="Dialog" to="lv-dialog" />
                        <lv-menu-item label="Drawer" to="lv-drawer" />
                        <lv-menu-item label="Popover" to="lv-popover" />
                        <lv-menu-item label="Toast" to="lv-toast" />
                    </lv-menu-list>
                </lv-menu-group>
                <lv-menu-group label="Utilities">
                    <lv-menu-list icon="corner-down-right" label="Mixins">
                        <lv-menu-item label="navigationMixin" to="navigation-mixin" />
                    </lv-menu-list>
                    <lv-menu-list icon="wand-2" label="Directives">
                        <lv-menu-item label="v-space-after" to="v-space-after" />
                        <lv-menu-item label="v-badge" to="v-badge" />
                    </lv-menu-list>
                </lv-menu-group>
            </lv-menu>
        </template>
        <template #content>
            <router-view v-slot="{ Component, route }">
                <transition name="fade" mode="out-in">
                    <div :key="route.path" class="wrapper">
                        <component :is="Component" />
                    </div>
                </transition>
            </router-view>
        </template>
    </lv-layout>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: window.innerWidth,
        };
    },
    mounted() {
        window.addEventListener('resize', this.getWindowWidth);
    },
    beforeUnmount() {
        window.addEventListener('resize', this.getWindowWidth);
    },
    methods: {
        getWindowWidth() {
            this.windowWidth = window.innerWidth;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'src/lib/scss/variables';
@import 'src/lib/scss/transitions/fade';

.logo {
    width: 80px;
    color: $color-primary;
}
</style>
