<template>
    <lv-drawer
        :show="showDrawer && !$route.meta.hideSidebar && !breakpoints.greaterOrEqual.md"
        placement="left"
        aria-label="Navigation"
        @click-backdrop="showDrawer = false"
    >
        <main-navigation></main-navigation>
    </lv-drawer>
    <lv-layout :sticky-header="breakpoints.greaterOrEqual.md" :sticky-sub-header="!breakpoints.greaterOrEqual.md">
        <template #header>
            <lv-header>
                <template #branding>
                    <lv-link class="logo" title="logo" @click="$router.push({ path: '/' })" v-html="Logo"></lv-link>
                </template>
                <template #search> </template>
                <template #navigation v-if="breakpoints.greaterOrEqual.md">
                    <lv-flex v-space-after="1">
                        <router-link v-slot="{ isActive, navigate }" :to="{ path: '/documentation' }" custom>
                            <lv-horizontal-nav-item label="Documentation" :active="isActive" @click="navigate" />
                        </router-link>
                        <router-link v-slot="{ isActive, navigate }" :to="{ path: '/ecosystem' }" custom>
                            <lv-horizontal-nav-item label="Ecosystem" :active="isActive" @click="navigate" />
                        </router-link>
                    </lv-flex>
                    <lv-separator direction="vertical" />
                </template>
                <template #extra>
                    <lv-theme-toggle v-model="theme" type="button" v-space-after=".5" />
                    <lv-button icon="github" aria-label="Github" target="_blank" color="ghost-default" @click="onClickGithub" />
                </template>
            </lv-header>
        </template>

        <template v-if="!$route.meta.hideSidebar && !breakpoints.greaterOrEqual.md" #sub-header>
            <lv-sub-header>
                <lv-link @click="showDrawer = !showDrawer">
                    <lv-icon name="panel-left-open"/>
                    Show Navigation
                </lv-link>
            </lv-sub-header>
        </template>

        <template v-if="!$route.meta.hideSidebar && breakpoints.greaterOrEqual.md" #sidebar>
            <main-navigation></main-navigation>
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
import MainNavigation from './partials/MainNavigation.vue';
import { useBreakpoints } from "../../lib/composables/useBreakpoints";

export default {
    components: {
        MainNavigation,
    },
    setup() {
        const { breakpoints } = useBreakpoints();
        return {
            breakpoints,
        }
    },
    data() {
        return {
            showDrawer: false,
            theme: this.preferredColorScheme(),
            Logo,
        };
    },
    watch: {
        theme(val) {
            document.body.setAttribute('data-theme', val);
            LocalStorage.setItem('theme', val);
        },
        $route() {
            this.showDrawer = false;
        }
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
            window.open('https://github.com/libvue/core', '_blank');
        },
    },
};
</script>

<style lang="scss">
.logo svg {
    width: 100px;
}
</style>
