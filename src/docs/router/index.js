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
import LvBlockquote from '../views/components/lv-blockquote.vue';
import LvCode from '../views/components/lv-code.vue';
import LvGroup from '../views/components/lv-group.vue';
import LvLayout from '../views/components/lv-layout.vue';
import LvCard from '../views/components/lv-card.vue';
import LvTable from '../views/components/lv-table.vue';
import LvTabs from '../views/components/lv-tabs.vue';
import LvChart from '../views/components/lv-chart.vue';
import LvNotice from '../views/components/lv-notice.vue';
import LvLink from '../views/components/lv-link.vue';
import LvBreadcrumbs from '../views/components/lv-breadcrumbs.vue';
import LvSelect from '../views/components/lv-select.vue';
import LvRadio from '../views/components/lv-radio.vue';
import LvSwitch from '../views/components/lv-switch.vue';
import LvWidget from '../views/components/lv-widget.vue';
import LvPill from '../views/components/lv-pill.vue';
import LvKbd from '../views/components/lv-kbd.vue';
import LvDivider from '../views/components/lv-divider.vue';
import LvIcon from '../views/components/lv-icon.vue';
import LvImage from '../views/components/lv-image.vue';
import LvAvatar from '../views/components/lv-avatar.vue';
import LvModal from '../views/components/lv-modal.vue';
import LvDrawer from '../views/components/lv-drawer.vue';
import LvConfirm from '../views/components/lv-confirm.vue';
import LvTooltip from '../views/components/lv-tooltip.vue';

// Utilities
import NavigationMixin from '../views/utilities/navigation-mixin.vue';
import VSpaceAfter from '../views/utilities/v-space-after.vue';
import VBadge from '../views/utilities/v-badge.vue';

const routes = [
    { path: '/', redirect: '/about' },
    {
        path: '/navigation-mixin',
        name: 'navigation-mixin',
        component: NavigationMixin,
    },
    {
        path: '/lv-tooltip',
        name: 'lv-tooltip',
        component: LvTooltip,
    },
    {
        path: '/lv-confirm',
        name: 'lv-confirm',
        component: LvConfirm,
    },
    {
        path: '/lv-drawer',
        name: 'lv-drawer',
        component: LvDrawer,
    },
    {
        path: '/lv-modal',
        name: 'lv-modal',
        component: LvModal,
    },
    {
        path: '/lv-avatar',
        name: 'lv-avatar',
        component: LvAvatar,
    },
    {
        path: '/lv-image',
        name: 'lv-image',
        component: LvImage,
    },
    {
        path: '/lv-icon',
        name: 'lv-icon',
        component: LvIcon,
    },
    {
        path: '/lv-divider',
        name: 'lv-divider',
        component: LvDivider,
    },
    {
        path: '/lv-kbd',
        name: 'lv-kbd',
        component: LvKbd,
    },
    {
        path: '/lv-pill',
        name: 'lv-pill',
        component: LvPill,
    },
    {
        path: '/lv-widget',
        name: 'lv-widget',
        component: LvWidget,
    },
    {
        path: '/lv-switch',
        name: 'lv-switch',
        component: LvSwitch,
    },
    {
        path: '/lv-radio',
        name: 'lv-radio',
        component: LvRadio,
    },
    {
        path: '/lv-select',
        name: 'lv-select',
        component: LvSelect,
    },
    {
        path: '/lv-breadcrumbs',
        name: 'lv-breadcrumbs',
        component: LvBreadcrumbs,
    },
    {
        path: '/lv-link',
        name: 'lv-link',
        component: LvLink,
    },
    {
        path: '/v-space-after',
        name: 'v-space-after',
        component: VSpaceAfter,
    },
    {
        path: '/v-badge',
        name: 'v-badge',
        component: VBadge,
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
        path: '/lv-blockquote',
        name: 'lv-blockquote',
        component: LvBlockquote,
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
