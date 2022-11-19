<template>
    <lv-layout debug>
        <template #header>
            <lv-header>
                <template #branding>
                    <svg
                        v-space-after="0.5"
                        viewBox="0 0 938 235"
                        xmlns="http://www.w3.org/2000/svg"
                        class="logo"
                        @click="$router.push('/')"
                    >
                        <path
                            d="M0 11C0 4.925 4.925 0 11 0h69c6.075 0 11 4.925 11 11v224H11c-6.075 0-11-4.925-11-11V11Z"
                            fill="#4637F3"
                        ></path>
                        <path
                            clip-rule="evenodd"
                            d="M11 0C4.925 0 0 4.925 0 11v213c0 6.075 4.925 11 11 11h80v-1.218L1.233 15.178C-1.74 7.94 3.583 0 11.408 0H11Z"
                            fill="#9C6BFE"
                            fill-rule="evenodd"
                        ></path>
                        <path
                            d="M183.227 6.896A11 11 0 0 1 193.433 0h69.159c7.825 0 13.148 7.94 10.175 15.178L182.5 235h-91L183.227 6.896Z"
                            fill="#07D2DD"
                            style="mix-blend-mode: darken"
                        ></path>
                        <path
                            d="M370.659 177V58.791h21.414V159.05h52.063V177h-73.477ZM461.798 177V88.343h20.894V177h-20.894Zm10.505-101.24c-3.31 0-6.157-1.096-8.543-3.29-2.385-2.231-3.578-4.906-3.578-8.022 0-3.156 1.193-5.83 3.578-8.023 2.386-2.232 5.233-3.348 8.543-3.348 3.347 0 6.195 1.116 8.542 3.348 2.386 2.193 3.579 4.867 3.579 8.023 0 3.117-1.193 5.79-3.579 8.023-2.347 2.193-5.195 3.29-8.542 3.29ZM505.102 177V58.791h20.894v44.213h.866c1.077-2.155 2.597-4.444 4.559-6.869 1.963-2.462 4.618-4.56 7.966-6.29 3.347-1.77 7.619-2.656 12.813-2.656 6.85 0 13.026 1.75 18.528 5.253 5.541 3.463 9.928 8.6 13.16 15.41 3.271 6.773 4.906 15.084 4.906 24.935 0 9.735-1.597 18.009-4.79 24.819-3.194 6.811-7.542 12.006-13.045 15.585-5.502 3.578-11.736 5.367-18.701 5.367-5.079 0-9.293-.846-12.64-2.539-3.348-1.693-6.042-3.733-8.081-6.118-2.001-2.425-3.559-4.714-4.675-6.869h-1.212V177h-20.548Zm20.49-44.328c0 5.733.808 10.755 2.424 15.064 1.655 4.31 4.021 7.677 7.1 10.101 3.116 2.386 6.887 3.579 11.312 3.579 4.618 0 8.485-1.232 11.602-3.694 3.117-2.501 5.464-5.907 7.042-10.216 1.616-4.349 2.424-9.293 2.424-14.834 0-5.503-.789-10.39-2.367-14.661-1.577-4.271-3.924-7.619-7.041-10.043-3.117-2.424-7.004-3.636-11.66-3.636-4.463 0-8.253 1.173-11.37 3.52-3.117 2.348-5.484 5.638-7.1 9.87-1.577 4.233-2.366 9.216-2.366 14.95ZM682.732 88.343 651.16 177h-23.088L596.5 88.343h22.279l20.375 65.858h.924l20.432-65.858h22.222ZM753.698 139.713v-51.37h20.894V177h-20.259v-15.757h-.924c-2.001 4.964-5.291 9.023-9.87 12.178-4.54 3.156-10.139 4.733-16.796 4.733-5.81 0-10.947-1.289-15.411-3.867-4.425-2.616-7.888-6.407-10.389-11.37-2.502-5.003-3.752-11.044-3.752-18.124v-56.45h20.894v53.217c0 5.618 1.539 10.082 4.618 13.391 3.078 3.31 7.118 4.964 12.121 4.964 3.078 0 6.06-.75 8.946-2.251s5.253-3.732 7.1-6.695c1.885-3.002 2.828-6.753 2.828-11.256ZM835.327 178.732c-8.889 0-16.565-1.847-23.03-5.541-6.426-3.733-11.37-9.005-14.834-15.816-3.463-6.849-5.194-14.91-5.194-24.184 0-9.119 1.731-17.123 5.194-24.011 3.502-6.926 8.389-12.313 14.661-16.161 6.272-3.887 13.641-5.83 22.106-5.83 5.465 0 10.621.885 15.469 2.655 4.887 1.732 9.197 4.425 12.929 8.08 3.771 3.656 6.734 8.312 8.889 13.969 2.155 5.618 3.232 12.313 3.232 20.086v6.407h-72.668v-14.084h52.64c-.039-4.001-.904-7.561-2.598-10.678-1.693-3.155-4.059-5.637-7.099-7.445-3.001-1.809-6.503-2.713-10.505-2.713-4.271 0-8.023 1.039-11.255 3.117-3.232 2.039-5.753 4.733-7.561 8.08-1.77 3.31-2.675 6.946-2.713 10.909v12.294c0 5.157.943 9.582 2.828 13.276 1.886 3.655 4.521 6.464 7.908 8.427 3.386 1.924 7.349 2.886 11.89 2.886 3.04 0 5.791-.424 8.254-1.27 2.462-.885 4.598-2.174 6.406-3.867 1.809-1.693 3.175-3.79 4.098-6.292l19.51 2.194c-1.232 5.156-3.579 9.658-7.042 13.506-3.425 3.809-7.812 6.772-13.16 8.889-5.349 2.078-11.467 3.117-18.355 3.117Z"
                            class="text"
                        ></path>
                    </svg>
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
                        to="https://github.com/harmendv/libvue"
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
                <lv-vertical-nav-item icon="accessibility" to="/docs/aria" disabled>
                    <lv-group gap=".25rem">
                        Accessibility <lv-badge text="Planned" size="tiny" color="solid-dimmed-primary" />
                    </lv-group>
                </lv-vertical-nav-item>
            </lv-vertical-nav-group>
            <lv-vertical-nav-group label="Components">
                <lv-vertical-nav-list icon="layout" label="Layout">
                    <lv-vertical-nav-item label="Layout" to="/docs/lv-layout" />
                    <lv-vertical-nav-item label="Header" to="/docs/lv-header" />
                    <lv-vertical-nav-item label="Grid" to="/docs/lv-grid" />
                    <lv-vertical-nav-item label="Group" to="/docs/lv-group" />
                    <lv-vertical-nav-item label="Theme Toggle" to="/docs/lv-theme-toggle" />
                    <lv-vertical-nav-item label="Card" to="/docs/lv-card" />
                    <lv-vertical-nav-item to="/docs/lv-advert-app" disabled>
                        <lv-group gap=".25rem">
                            Advert App <lv-badge text="Planned" size="tiny" color="solid-dimmed-primary" />
                        </lv-group>
                    </lv-vertical-nav-item>
                    <lv-vertical-nav-item to="/docs/lv-advert-pwa" disabled>
                        <lv-group gap=".25rem">
                            Advert PWA <lv-badge text="Planned" size="tiny" color="solid-dimmed-primary" />
                        </lv-group>
                    </lv-vertical-nav-item>
                    <lv-vertical-nav-item label="Loading Dots" to="/docs/lv-loading-dots" />
                    <lv-vertical-nav-item label="Spinner" to="/docs/lv-spinner" />
                </lv-vertical-nav-list>
                <lv-vertical-nav-list icon="compass" label="Navigation">
                    <lv-vertical-nav-item to="/docs/lv-button" label="Button" />
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
                        <lv-group gap=".25rem">
                            File Tree <lv-badge text="Planned" size="tiny" color="solid-dimmed-primary" />
                        </lv-group>
                    </lv-vertical-nav-item>
                    <lv-vertical-nav-item to="/docs/lv-progress" disabled>
                        <lv-group gap=".25rem">
                            Progress <lv-badge text="Planned" size="tiny" color="solid-dimmed-primary" />
                        </lv-group>
                    </lv-vertical-nav-item>
                    <lv-vertical-nav-item label="Pill" to="/docs/lv-pill" />
                    <lv-vertical-nav-item label="Badge" to="/docs/lv-badge" />
                </lv-vertical-nav-list>
                <lv-vertical-nav-list icon="form-input" label="Form Elements">
                    <lv-vertical-nav-item to="/docs/lv-fieldset" label="Fieldset" />
                    <lv-vertical-nav-item to="/docs/lv-input" label="Input" />
                    <lv-vertical-nav-item to="/docs/lv-checkbox" label="Checkbox" />
                    <lv-vertical-nav-item label="Radio" to="/docs/lv-radio" />
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
                    <lv-vertical-nav-item to="/docs/lv-image" disabled>
                        <lv-group gap=".25rem">
                            Image <lv-badge text="Planned" size="tiny" color="solid-dimmed-primary" />
                        </lv-group>
                    </lv-vertical-nav-item>
                    <lv-vertical-nav-item to="/docs/lv-image-carousel" disabled>
                        <lv-group gap=".25rem">
                            Image Carousel <lv-badge text="Planned" size="tiny" color="solid-dimmed-primary" />
                        </lv-group>
                    </lv-vertical-nav-item>
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
                    <lv-vertical-nav-item label="navigationMixin" to="/docs/navigation-mixin" />
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

export default {
    components: {},
    data() {
        return {
            theme: this.preferredColorScheme(),
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
    },
};
</script>

<style>
.logo {
    fill: black;
    width: 100px;
}
@media (prefers-color-scheme: dark) {
    .logo {
        fill: white;
    }
}
[data-theme='dark'] .logo {
    fill: white;
}
[data-theme='light'] .logo {
    fill: black;
}
</style>
