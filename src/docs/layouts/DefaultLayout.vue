<template>
    <lv-layout>
        <template #header>
            <lv-header>
                <template #branding>
                    <lv-link class="logo" to="/" v-html="Logo"></lv-link>
                </template>
                <template #search> </template>
                <template #navigation>
                    <lv-horizontal-nav-item v-space-after="1" label="Documentation" to="/documentation" />
                    <lv-horizontal-nav-item v-space-after="1" label="Playground" to="/playground" />
                    <lv-separator direction="vertical" />
                </template>
                <template #extra>
                    <lv-theme-toggle v-model="theme" v-space-after="1" />
                    <lv-button
                        icon="github"
                        target="_blank"
                        @click="onClickGithub"
                        color="ghost-default"
                    />
                </template>
            </lv-header>
        </template>

        <template v-if="!$route.meta.hideSidebar" #sidebar>
            <lv-vertical-nav-group label="Getting Started">
                <lv-vertical-nav-item icon="rocket" to="/docs/install" label="Installation" />
            </lv-vertical-nav-group>
            <lv-vertical-nav-group label="Concepts">
                <lv-vertical-nav-item icon="palette" to="/docs/theming" label="Theming" />
                <lv-vertical-nav-item icon="align-vertical-space-around" to="/docs/spacing" label="Spacing" />
                <lv-vertical-nav-item icon="accessibility" disabled>
                    <lv-flex gap=".25rem">
                        Accessibility <lv-badge text="Planned" size="tiny" color="solid-dimmed-primary" />
                    </lv-flex>
                </lv-vertical-nav-item>
            </lv-vertical-nav-group>
            <lv-vertical-nav-group label="Components">
                <lv-vertical-nav-list icon="layout" label="Layout">
                    <lv-vertical-nav-item label="Layout" to="/docs/lv-layout" />
                    <lv-vertical-nav-item label="Header" to="/docs/lv-header" />
                    <lv-vertical-nav-item label="Grid" to="/docs/lv-grid" />
                    <lv-vertical-nav-item label="Flex" to="/docs/lv-flex" />
                    <lv-vertical-nav-item label="Theme Toggle" to="/docs/lv-theme-toggle" />
                    <lv-vertical-nav-item label="Card" to="/docs/lv-card" />
                    <lv-vertical-nav-item label="Loading Dots" to="/docs/lv-loading-dots" />
                    <lv-vertical-nav-item label="Spinner" to="/docs/lv-spinner" />
                </lv-vertical-nav-list>
                <lv-vertical-nav-list icon="compass" label="Navigation">
                    <lv-vertical-nav-item to="/docs/lv-button" label="Button" />
                    <lv-vertical-nav-item to="/docs/lv-button-group" label="Button Group" />
                    <lv-vertical-nav-item to="/docs/lv-tabs" label="Tabs" />
                    <lv-vertical-nav-item label="Link" to="/docs/lv-link" />
                    <lv-vertical-nav-item label="Fragment Link" to="/docs/lv-fragment-link" />
                    <lv-vertical-nav-item label="Horizontal Nav" to="/docs/lv-horizontal-nav" />
                    <lv-vertical-nav-item label="Vertical Nav" to="/docs/lv-vertical-nav" />
                    <lv-vertical-nav-item label="Pagination" to="/docs/lv-pagination" />
                    <lv-vertical-nav-item label="Breadcrumbs" to="/docs/lv-breadcrumbs" />
                </lv-vertical-nav-list>
                <lv-vertical-nav-list icon="bar-chart-2" label="Data Visualization">
                    <lv-vertical-nav-item to="/docs/lv-table" label="Table" />
                    <lv-vertical-nav-item to="/docs/lv-chart" label="Chart" />
                    <lv-vertical-nav-item label="Widget" to="/docs/lv-widget" />
                    <lv-vertical-nav-item to="/docs/lv-file-tree" disabled>
                        <lv-flex gap=".25rem">
                            File Tree <lv-badge text="Planned" size="tiny" color="solid-dimmed-primary" />
                        </lv-flex>
                    </lv-vertical-nav-item>
                    <lv-vertical-nav-item to="/docs/lv-progress" disabled>
                        <lv-flex gap=".25rem">
                            Progress <lv-badge text="Planned" size="tiny" color="solid-dimmed-primary" />
                        </lv-flex>
                    </lv-vertical-nav-item>
                    <lv-vertical-nav-item label="Pill" to="/docs/lv-pill" />
                    <lv-vertical-nav-item label="Badge" to="/docs/lv-badge" />
                </lv-vertical-nav-list>
                <lv-vertical-nav-list icon="form-input" label="Form Elements">
                    <lv-vertical-nav-item to="/docs/lv-fieldset" label="Fieldset" />
                    <lv-vertical-nav-item to="/docs/lv-input" label="Input" />
                    <lv-vertical-nav-item to="/docs/lv-checkbox" label="Checkbox" />
                    <lv-vertical-nav-item label="Radio" to="/docs/lv-radio" />
                    <lv-vertical-nav-item label="Date Picker" to="/docs/lv-date-picker" />
                    <lv-vertical-nav-item label="File Input" to="/docs/lv-file-input" />
                    <lv-vertical-nav-item label="Slider" to="/docs/lv-slider" />
                    <lv-vertical-nav-item label="Range Slider" to="/docs/lv-range-slider" />
                    <lv-vertical-nav-item label="Switch" to="/docs/lv-switch" />
                    <lv-vertical-nav-item label="Select" to="/docs/lv-select" />
                    <lv-vertical-nav-item label="Textarea" to="/docs/lv-textarea" />
                    <lv-vertical-nav-item label="Toggle" to="/docs/lv-toggle" />
                    <lv-vertical-nav-item label="Toggle Group" to="/docs/lv-toggle-group" />
                </lv-vertical-nav-list>
                <lv-vertical-nav-list icon="pencil" label="Writing">
                    <lv-vertical-nav-item to="/docs/lv-heading" label="Heading" />
                    <lv-vertical-nav-item label="Paragraph" to="/docs/lv-paragraph" />
                    <lv-vertical-nav-item label="Blockquote" to="/docs/lv-blockquote" />
                    <lv-vertical-nav-item label="Keyboard" to="/docs/lv-keyboard" />
                    <lv-vertical-nav-item label="Separator" to="/docs/lv-separator" />
                    <lv-vertical-nav-item to="/docs/lv-code" label="Code" />
                    <lv-vertical-nav-item to="/docs/lv-notice" label="Notice" />
                    <lv-vertical-nav-item label="Accordion" to="/docs/lv-accordion" />
                    <lv-vertical-nav-item label="Text Editor" to="/docs/lv-text-editor" />
                    <lv-vertical-nav-item label="Window" to="/docs/lv-window" />
                    <lv-vertical-nav-item label="Skeleton" to="/docs/lv-skeleton" />
                </lv-vertical-nav-list>
                <lv-vertical-nav-list icon="image" label="Media">
                    <lv-vertical-nav-item label="Icon" to="/docs/lv-icon" />
                    <lv-vertical-nav-item label="Avatar" to="/docs/lv-avatar" />
                    <lv-vertical-nav-item label="Image" to="/docs/lv-image" />
                    <lv-vertical-nav-item label="Image Carousel" to="/docs/lv-image-carousel" />
                </lv-vertical-nav-list>
                <lv-vertical-nav-list icon="layers" label="Overlay">
                    <lv-vertical-nav-item label="Dialog" to="/docs/lv-dialog" />
                    <lv-vertical-nav-item label="Drawer" to="/docs/lv-drawer" />
                    <lv-vertical-nav-item label="Popover" to="/docs/lv-popover" />
                    <lv-vertical-nav-item label="Toast" to="/docs/lv-toast" />
                    <lv-vertical-nav-item label="Cookie Consent" to="/docs/lv-cookie-consent" />
                </lv-vertical-nav-list>
            </lv-vertical-nav-group>
            <lv-vertical-nav-group label="Utilities">
                <lv-vertical-nav-list icon="corner-down-right" label="Mixins">
                    <lv-vertical-nav-item label="Navigation Mixin" to="/docs/navigation-mixin" />
                    <lv-vertical-nav-item label="Breakpoint Mixin" to="/docs/breakpoint-mixin" />
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
import LocalStorage from '../utils/localStorage';
// eslint-disable-next-line import/no-unresolved
import Logo from '../assets/images/logo-header.svg?raw';

export default {
    components: {},
    data() {
        return {
            theme: this.preferredColorScheme(),
            Logo,
        };
    },
    watch: {
        theme(val) {
            document.body.setAttribute('data-theme', val);
            LocalStorage.setItem('theme', val);
        },
    },
    mounted() {
        if (LocalStorage.getItem('theme')) {
            this.theme = LocalStorage.getItem('theme');
            document.body.setAttribute('data-theme', this.theme);
        }
    },
    methods: {
        preferredColorScheme() {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
            return 'light';
        },
        onClickGithub() {
            window.open('https://github.com/harmendv/libvue', '_blank');
        }
    },
};
</script>

<style lang="scss">
.logo svg {
    width: 100px;
}

</style>
