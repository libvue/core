<template>
    <lv-layout debug>
        <template #header>
            <lv-header>
                <template #branding>
                    <img v-space-after="0.5" class="logo" src="logo.svg" alt="" @click="$router.push('/')" />
                </template>
                <template #search>
                    <lv-input placeholder="Search docs" icon="search" />
                </template>
                <template #navigation>
                    <lv-horizontal-nav-item label="Documentation" v-space-after="1">
                        <lv-horizontal-nav-item label="Install" to="install" v-space-after=".5"/>
                        <lv-horizontal-nav-item label="Layout" to="lv-layout" />
                    </lv-horizontal-nav-item>
                    <lv-horizontal-nav-item label="Extensions" to="extensions" v-space-after="1"/>
                    <lv-divider direction="vertical"/>
                </template>
                <template #extra>
                    <lv-button icon="github" color="light-default" />
                </template>
            </lv-header>
        </template>

        <template v-if="$route.name != 'home'" #sidebar>
            <lv-vertical-nav-group label="Getting Started">
                <lv-vertical-nav-item icon="rocket" to="install" label="Installation" />
            </lv-vertical-nav-group>
            <lv-vertical-nav-group label="Concepts">
                <lv-vertical-nav-item icon="palette" to="theming" label="Theming" />
                <lv-vertical-nav-item icon="align-vertical-space-around" to="spacing" label="Spacing" />
                <lv-vertical-nav-item icon="grid" to="grids" label="Grids" />
            </lv-vertical-nav-group>
            <lv-vertical-nav-group label="Components">
                <lv-vertical-nav-list icon="layout" label="Layout">
                    <lv-vertical-nav-item label="Layout" to="lv-layout" />
                    <lv-vertical-nav-item label="Header" to="lv-header" />
                    <lv-vertical-nav-item label="Horizontal Nav" to="lv-horizontal-nav" />
                    <lv-vertical-nav-item label="Vertical Nav" to="lv-vertical-nav" />
                    <lv-vertical-nav-item label="Card" to="lv-card" />
                    <lv-vertical-nav-item label="Group" to="lv-group" />
                </lv-vertical-nav-list>
                <lv-vertical-nav-list icon="compass" label="Navigation">
                    <lv-vertical-nav-item to="lv-button" label="Button" />
                    <lv-vertical-nav-item to="lv-tabs" label="Tabs" />
                    <lv-vertical-nav-item label="Link" to="lv-link" />
                    <lv-vertical-nav-item label="Breadcrumbs" to="lv-breadcrumbs" />
                </lv-vertical-nav-list>
                <lv-vertical-nav-list icon="bar-chart-2" label="Data Visualization">
                    <lv-vertical-nav-item to="lv-table" label="Table" />
                    <lv-vertical-nav-item to="lv-chart" label="Chart" />
                    <lv-vertical-nav-item label="Widget" to="lv-widget" />
                    <lv-vertical-nav-item label="Pill" to="lv-pill" />
                </lv-vertical-nav-list>
                <lv-vertical-nav-list icon="form-input" label="Form Elements">
                    <lv-vertical-nav-item to="lv-input" label="Input" />
                    <lv-vertical-nav-item to="lv-checkbox" label="Checkbox" />
                    <lv-vertical-nav-item label="Radio" to="lv-radio" />
                    <lv-vertical-nav-item label="Range Slider" to="lv-range-slider" />
                    <lv-vertical-nav-item label="Switch" to="lv-switch" />
                    <lv-vertical-nav-item label="Select" to="lv-select" />
                </lv-vertical-nav-list>
                <lv-vertical-nav-list icon="pencil" label="Writing">
                    <lv-vertical-nav-item to="lv-heading" label="Heading" />
                    <lv-vertical-nav-item label="Paragraph" to="lv-paragraph" />
                    <lv-vertical-nav-item label="Blockquote" to="lv-blockquote" />
                    <lv-vertical-nav-item label="Keyboard" to="lv-keyboard" />
                    <lv-vertical-nav-item label="Divider" to="lv-divider" />
                    <lv-vertical-nav-item to="lv-code" label="Code" />
                    <lv-vertical-nav-item to="lv-notice" label="Notice" />
                    <lv-vertical-nav-item label="Accordion" to="lv-accordion" />
                </lv-vertical-nav-list>
                <lv-vertical-nav-list icon="image" label="Media">
                    <lv-vertical-nav-item label="Icon" to="lv-icon" />
                    <lv-vertical-nav-item label="Avatar" to="lv-avatar" />
                </lv-vertical-nav-list>
                <lv-vertical-nav-list icon="layers" label="Overlay">
                    <lv-vertical-nav-item label="Dialog" to="lv-dialog" />
                    <lv-vertical-nav-item label="Drawer" to="lv-drawer" />
                    <lv-vertical-nav-item label="Popover" to="lv-popover" />
                    <lv-vertical-nav-item label="Toast" to="lv-toast" />
                </lv-vertical-nav-list>
            </lv-vertical-nav-group>
            <lv-vertical-nav-group label="Utilities">
                <lv-vertical-nav-list icon="corner-down-right" label="Mixins">
                    <lv-vertical-nav-item label="navigationMixin" to="navigation-mixin" />
                </lv-vertical-nav-list>
                <lv-vertical-nav-list icon="wand-2" label="Directives">
                    <lv-vertical-nav-item label="v-space-after" to="v-space-after" />
                    <lv-vertical-nav-item label="v-badge" to="v-badge" />
                </lv-vertical-nav-list>
            </lv-vertical-nav-group>
        </template>

        <template #main>
            <router-view v-slot="{ Component, route }">
                <div :key="route.path" class="wrapper">
                    <component :is="Component" />
                </div>
            </router-view>
        </template>
    </lv-layout>
</template>

<script>
export default {
    components: {},

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
</style>
