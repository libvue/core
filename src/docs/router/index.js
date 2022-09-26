import { createRouter, createWebHashHistory } from 'vue-router';
// Getting Started
import About from '../views/getting-started/about.vue';
import Install from '../views/getting-started/install.vue';

// Concepts
import Grids from '../views/concepts/grids.vue';
import Spacing from '../views/concepts/spacing.vue';
import Theming from '../views/concepts/theming.vue';

// Components
import LvButton from '../views/components/lv-button.vue';
import LvInput from '../views/components/lv-input.vue';
import LvCheckbox from '../views/components/lv-checkbox.vue';
import LvMenu from '../views/components/lv-menu.vue';
import LvHeading from '../views/components/lv-heading.vue';
import LvParagraph from '../views/components/lv-paragraph.vue';
import LvQuote from '../views/components/lv-quote.vue';
import LvCode from '../views/components/lv-code.vue';
import LvGroup from '../views/components/lv-group.vue';
import LvLayout from '../views/components/lv-layout.vue';
import LvCard from '../views/components/lv-card.vue';
import LvTable from '../views/components/lv-table.vue';
import LvTabs from '../views/components/lv-tabs.vue';
import LvChart from '../views/components/lv-chart.vue';
import LvNotice from '../views/components/lv-notice.vue';

// Utilities
import NavigationMixin from '../views/utilities/navigation-mixin.vue';
import VSpaceAfter from '../views/utilities/v-space-after.vue';

const routes = [
    { path: '/', redirect: '/about' },
    {
        path: '/navigation-mixin',
        name: 'navigation-mixin',
        component: NavigationMixin,
    },
    {
        path: '/v-space-after',
        name: 'v-space-after',
        component: VSpaceAfter,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            layout: 'splash',
        },
    },
    {
        path: '/install',
        name: 'install',
        component: Install,
    },
    {
        path: '/spacing',
        name: 'spacing',
        component: Spacing,
    },
    {
        path: '/theming',
        name: 'theming',
        component: Theming,
    },
    {
        path: '/grids',
        name: 'grids',
        component: Grids,
    },
    {
        path: '/lv-button',
        name: 'lv-button',
        component: LvButton,
    },
    {
        path: '/lv-menu',
        name: 'lv-menu',
        component: LvMenu,
    },
    {
        path: '/lv-input',
        name: 'lv-input',
        component: LvInput,
    },
    {
        path: '/lv-checkbox',
        name: 'lv-checkbox',
        component: LvCheckbox,
    },
    {
        path: '/lv-heading',
        name: 'lv-heading',
        component: LvHeading,
    },
    {
        path: '/lv-paragraph',
        name: 'lv-paragraph',
        component: LvParagraph,
    },
    {
        path: '/lv-quote',
        name: 'lv-quote',
        component: LvQuote,
    },
    {
        path: '/lv-code',
        name: 'lv-code',
        component: LvCode,
    },
    {
        path: '/lv-layout',
        name: 'lv-layout',
        component: LvLayout,
    },

    {
        path: '/lv-group',
        name: 'lv-group',
        component: LvGroup,
    },
    {
        path: '/lv-card',
        name: 'lv-card',
        component: LvCard,
    },
    {
        path: '/lv-table',
        name: 'lv-table',
        component: LvTable,
    },
    {
        path: '/lv-tabs',
        name: 'lv-tabs',
        component: LvTabs,
    },
    {
        path: '/lv-chart',
        name: 'lv-chart',
        component: LvChart,
    },
    {
        path: '/lv-notice',
        name: 'lv-notice',
        component: LvNotice,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
