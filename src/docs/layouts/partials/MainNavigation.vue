<template>
    <lv-vertical-nav-group label="Getting Started">
        <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/install' }" custom>
            <lv-vertical-nav-item icon="rocket" label="Installation" :active="isActive" @click="navigate" />
        </router-link>
    </lv-vertical-nav-group>
    <lv-vertical-nav-group label="Concepts">
        <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/theming' }" custom>
            <lv-vertical-nav-item icon="palette" label="Theming" :active="isActive" @click="navigate" />
        </router-link>
        <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/spacing' }" custom>
            <lv-vertical-nav-item
                icon="align-vertical-space-around"
                label="Spacing"
                :active="isActive"
                @click="navigate"
            />
        </router-link>
        <lv-vertical-nav-item icon="accessibility" disabled>
            <lv-flex gap=".25rem">
                Accessibility
                <lv-badge text="Planned" size="tiny" color="solid-dimmed-primary" />
            </lv-flex>
        </lv-vertical-nav-item>
    </lv-vertical-nav-group>
    <lv-vertical-nav-group label="Components">
        <lv-vertical-nav-list icon="layout" label="Layout">
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-layout' }" custom>
                <lv-vertical-nav-item label="Layout" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-header' }" custom>
                <lv-vertical-nav-item label="Header" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-grid' }" custom>
                <lv-vertical-nav-item label="Grid" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-flex' }" custom>
                <lv-vertical-nav-item label="Flex" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-hero' }" custom>
                <lv-vertical-nav-item label="Hero" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-theme-toggle' }" custom>
                <lv-vertical-nav-item label="Theme Toggle" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-card' }" custom>
                <lv-vertical-nav-item label="Card" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-loading-dots' }" custom>
                <lv-vertical-nav-item label="Loading Dots" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-spinner' }" custom>
                <lv-vertical-nav-item label="Spinner" :active="isActive" @click="navigate" />
            </router-link>
        </lv-vertical-nav-list>
        <lv-vertical-nav-list icon="compass" label="Navigation">
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-button' }" custom>
                <lv-vertical-nav-item label="Button" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-button-group' }" custom>
                <lv-vertical-nav-item label="Button Group" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-tabs' }" custom>
                <lv-vertical-nav-item label="Tabs" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-link' }" custom>
                <lv-vertical-nav-item label="Link" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-fragment-link' }" custom>
                <lv-vertical-nav-item label="Fragment Link" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-horizontal-nav' }" custom>
                <lv-vertical-nav-item label="Horizontal Nav" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-vertical-nav' }" custom>
                <lv-vertical-nav-item label="Vertical Nav" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-pagination' }" custom>
                <lv-vertical-nav-item label="Pagination" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-breadcrumbs' }" custom>
                <lv-vertical-nav-item label="Breadcrumbs" :active="isActive" @click="navigate" />
            </router-link>
        </lv-vertical-nav-list>
        <lv-vertical-nav-list icon="bar-chart-2" label="Data Visualization">
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-table' }" custom>
                <lv-vertical-nav-item label="Table" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-description-list' }" custom>
                <lv-vertical-nav-item label="Description List" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-chart' }" custom>
                <lv-vertical-nav-item label="Chart" :active="isActive" @click="navigate" />
            </router-link>

            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-widget' }" custom>
                <lv-vertical-nav-item label="Widget" :active="isActive" @click="navigate" />
            </router-link>
            <lv-vertical-nav-item to="/docs/lv-file-tree" disabled>
                <lv-flex gap=".25rem">
                    File Tree
                    <lv-badge text="Planned" size="tiny" color="solid-dimmed-primary" />
                </lv-flex>
            </lv-vertical-nav-item>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-progress-bar' }" custom>
                <lv-vertical-nav-item label="Progress Bar" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-progress-steps' }" custom>
                <lv-vertical-nav-item label="Progress Steps" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-pill' }" custom>
                <lv-vertical-nav-item label="Pill" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-badge' }" custom>
                <lv-vertical-nav-item label="Badge" :active="isActive" @click="navigate" />
            </router-link>
        </lv-vertical-nav-list>
        <lv-vertical-nav-list icon="form-input" label="Form Elements">
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-fieldset' }" custom>
                <lv-vertical-nav-item label="Fieldset" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-input' }" custom>
                <lv-vertical-nav-item label="Input" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-checkbox' }" custom>
                <lv-vertical-nav-item label="Checkbox" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-radio' }" custom>
                <lv-vertical-nav-item label="Radio" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-date-picker' }" custom>
                <lv-vertical-nav-item label="Date Picker" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-file-input' }" custom>
                <lv-vertical-nav-item label="File Input" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-slider' }" custom>
                <lv-vertical-nav-item label="Slider" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-range-slider' }" custom>
                <lv-vertical-nav-item label="Range Slider" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-switch' }" custom>
                <lv-vertical-nav-item label="Switch" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-select' }" custom>
                <lv-vertical-nav-item label="Select" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-color-picker' }" custom>
                <lv-vertical-nav-item label="Color Picker" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-textarea' }" custom>
                <lv-vertical-nav-item label="Textarea" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-toggle' }" custom>
                <lv-vertical-nav-item label="Toggle" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-toggle-group' }" custom>
                <lv-vertical-nav-item label="Toggle Group" :active="isActive" @click="navigate" />
            </router-link>
        </lv-vertical-nav-list>
        <lv-vertical-nav-list icon="pencil" label="Writing">
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-heading' }" custom>
                <lv-vertical-nav-item label="Heading" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-paragraph' }" custom>
                <lv-vertical-nav-item label="Paragraph" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-blockquote' }" custom>
                <lv-vertical-nav-item label="Blockquote" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-keyboard' }" custom>
                <lv-vertical-nav-item label="Keyboard" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-separator' }" custom>
                <lv-vertical-nav-item label="Separator" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-code' }" custom>
                <lv-vertical-nav-item label="Code" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-notice' }" custom>
                <lv-vertical-nav-item label="Notice" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-accordion' }" custom>
                <lv-vertical-nav-item label="Accordion" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-text-editor' }" custom>
                <lv-vertical-nav-item label="Text Editor" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-window' }" custom>
                <lv-vertical-nav-item label="Window" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-skeleton' }" custom>
                <lv-vertical-nav-item label="Skeleton" :active="isActive" @click="navigate" />
            </router-link>
        </lv-vertical-nav-list>
        <lv-vertical-nav-list icon="image" label="Media">
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-icon' }" custom>
                <lv-vertical-nav-item label="Icon" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-avatar' }" custom>
                <lv-vertical-nav-item label="Avatar" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-image' }" custom>
                <lv-vertical-nav-item label="Image" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-image-carousel' }" custom>
                <lv-vertical-nav-item label="Image Carousel" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-color-swatch' }" custom>
                <lv-vertical-nav-item label="Color Swatch" :active="isActive" @click="navigate" />
            </router-link>
        </lv-vertical-nav-list>
        <lv-vertical-nav-list icon="layers" label="Overlay">
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-dialog' }" custom>
                <lv-vertical-nav-item label="Dialog" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-drawer' }" custom>
                <lv-vertical-nav-item label="Drawer" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-popover' }" custom>
                <lv-vertical-nav-item label="Popover" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-toast' }" custom>
                <lv-vertical-nav-item label="Toast" :active="isActive" @click="navigate" />
            </router-link>
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/lv-cookie-consent' }" custom>
                <lv-vertical-nav-item label="Cookie Consent" :active="isActive" @click="navigate" />
            </router-link>
        </lv-vertical-nav-list>
    </lv-vertical-nav-group>
    <lv-vertical-nav-group label="Utilities">
        <lv-vertical-nav-list icon="corner-down-right" label="Mixins">
            <router-link v-slot="{ isActive, navigate }" :to="{ path: '/docs/breakpoint-mixin' }" custom>
                <lv-vertical-nav-item label="Breakpoint Mixin" :active="isActive" @click="navigate" />
            </router-link>
        </lv-vertical-nav-list>
    </lv-vertical-nav-group>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style lang="scss"></style>
