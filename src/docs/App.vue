<template>
    <lv-layout :layout="windowWidth > 1200 ? 'horizontal' : 'vertical'">
        <template #logo>
            <img @click="$router.push('/')" class="logo" src="logo.svg" v-space-after="0.5" />
        </template>
        <template #menu v-if="!hideMenu">
            <lv-menu>
                <lv-menu-group label="Getting Started">
                    <lv-menu-item icon="rocket" to="install" label="Installation" />
                </lv-menu-group>
                <lv-menu-group label="Concepts">
                    <lv-menu-item icon="swatchbook" to="theming" label="Theming" />
                    <lv-menu-item icon="apps" to="spacing" label="Spacing" />
                    <lv-menu-item icon="web-grid    " to="grids" label="Grids" />
                </lv-menu-group>
                <lv-menu-group label="Components">
                    <lv-menu-list icon="grid" label="Layout">
                        <lv-menu-item label="Layout" />
                        <lv-menu-item to="lv-group" label="Group" />
                        <lv-menu-item to="lv-card" label="Card" />
                        <lv-menu-item label="Menu" />
                    </lv-menu-list>
                    <lv-menu-list icon="compass" label="Navigation">
                        <lv-menu-item to="lv-button" label="Button" />
                        <lv-menu-item label="Link" />
                        <lv-menu-item label="Breadcrumb" />
                        <lv-menu-item to="lv-tabs" label="Tabs" />
                    </lv-menu-list>
                    <lv-menu-list icon="clipboard-notes" label="Form Elements">
                        <lv-menu-item to="lv-input" label="Input" />
                        <lv-menu-item to="lv-checkbox" label="Checkbox" />
                        <lv-menu-item label="Select" />
                        <lv-menu-item label="Radio" />
                        <lv-menu-item label="Switch" />
                    </lv-menu-list>
                    <lv-menu-list icon="analytics" label="Data Visualization">
                        <lv-menu-item to="lv-table" label="Table" />
                        <lv-menu-item to="lv-chart" label="Chart" />
                        <lv-menu-item label="Widget" />
                        <lv-menu-item label="Tag" />
                        <lv-menu-item label="Badge" />
                    </lv-menu-list>
                    <lv-menu-list icon="pen" label="Writing">
                        <lv-menu-item to="lv-heading" label="Heading" />
                        <lv-menu-item label="Paragraph" />
                        <lv-menu-item label="Quote" />
                        <lv-menu-item label="Kbd" />
                        <lv-menu-item label="Divider" />
                        <lv-menu-item to="lv-code" label="Code" />
                        <lv-menu-item to="lv-notice" label="Notice" />
                    </lv-menu-list>
                    <lv-menu-list icon="image" label="Media">
                        <lv-menu-item label="Icon" />
                        <lv-menu-item label="Image" />
                        <lv-menu-item label="Avatar" />
                    </lv-menu-list>
                    <lv-menu-list icon="layers" label="Overlay">
                        <lv-menu-item label="Modal" />
                        <lv-menu-item label="Drawer" />
                        <lv-menu-item label="Confirm" />
                        <lv-menu-item label="Tooltip" />
                    </lv-menu-list>
                </lv-menu-group>
            </lv-menu>
        </template>
        <template #content>
            <router-view v-slot="{ Component, route }"></router-view>
        </template>
    </lv-layout>
</template>

<script>
export default {
    computed: {
        hideMenu() {
            return !!this.$route.meta.hideMenu;
        },
    },
    data() {
        return {
            windowWidth: window.innerWidth,
        }
    },
    mounted() {
        window.addEventListener('resize', this.getWindowWidth)
    },
    beforeUnmount() {
        window.addEventListener('resize', this.getWindowWidth)
    },
    methods: {
        getWindowWidth() {
            this.windowWidth = window.innerWidth;
        }
    }
};
</script>

<style lang="scss" scoped>
@import 'src/lib/scss/variables';

.logo {
    width: 80px;
    color: $color-primary;
}
</style>
