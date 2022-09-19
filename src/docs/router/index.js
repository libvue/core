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
import LvCard from '../views/components/lv-card.vue';
import LvTable from '../views/components/lv-table.vue';
import LvChart from '../views/components/lv-chart.vue';
import LvNotice from '../views/components/lv-notice.vue';

const routes = [
    { path: '/', redirect: '/about' },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            hideMenu: true,
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
