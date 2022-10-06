// Components
import LvBlockquote from './components/LvBlockquote/LvBlockquote.vue';
import LvBreadcrumbs from './components/LvBreadcrumbs/LvBreadcrumbs.vue';
import LvButton from './components/LvButton/LvButton.vue';
import LvCard from './components/LvCard/LvCard.vue';
import LvChart from './components/LvChart/LvChart.vue';
import LvCheckbox from './components/LvCheckbox/LvCheckbox.vue';
import LvCode from './components/LvCode/LvCode.vue';
import LvDivider from './components/LvDivider/LvDivider.vue';
import LvGroup from './components/LvGroup/LvGroup.vue';
import LvHeading from './components/LvHeading/LvHeading.vue';
import LvIcon from './components/LvIcon/LvIcon.vue';
import LvInput from './components/LvInput/LvInput.vue';
import LvKeyboard from './components/LvKeyboard/LvKeyboard.vue';
import LvLayout from './components/LvLayout/LvLayout.vue';
import LvLink from './components/LvLink/LvLink.vue';
import LvMenu from './components/LvMenu/LvMenu.vue';
import LvMenuGroup from './components/LvMenu/LvMenuGroup.vue';
import LvMenuItem from './components/LvMenu/LvMenuItem.vue';
import LvMenuList from './components/LvMenu/LvMenuList.vue';
import LvNotice from './components/LvNotice/LvNotice.vue';
import LvParagraph from './components/LvParagraph/LvParagraph.vue';
import LvPill from './components/LvPill/LvPill.vue';
import LvTable from './components/LvTable/LvTable.vue';
import LvTabs from './components/LvTabs/LvTabs.vue';
import LvWidget from './components/LvWidget/LvWidget.vue';

import spaceAfter from './directives/spaceAfter';
import badge from './directives/badge';

import { setAppInstance } from './plugin/instance';

export default {
    install: (app, opt = {}) => {
        // Write away the app instance
        setAppInstance(app);

        // Register the spaceAfter directive
        app.directive('space-after', spaceAfter);
        app.directive('badge', badge);

        // Register all components
        app.component('lv-blockquote', LvBlockquote);
        app.component('lv-breadcrumbs', LvBreadcrumbs);
        app.component('lv-button', LvButton);
        app.component('lv-card', LvCard);
        app.component('lv-chart', LvChart);
        app.component('lv-checkbox', LvCheckbox);
        app.component('lv-code', LvCode);
        app.component('lv-divider', LvDivider);
        app.component('lv-group', LvGroup);
        app.component('lv-heading', LvHeading);
        app.component('lv-icon', LvIcon);
        app.component('lv-input', LvInput);
        app.component('lv-keyboard', LvKeyboard);
        app.component('lv-layout', LvLayout);
        app.component('lv-link', LvLink);
        app.component('lv-menu', LvMenu);
        app.component('lv-menu-group', LvMenuGroup);
        app.component('lv-menu-item', LvMenuItem);
        app.component('lv-menu-list', LvMenuList);
        app.component('lv-notice', LvNotice);
        app.component('lv-paragraph', LvParagraph);
        app.component('lv-pill', LvPill);
        app.component('lv-table', LvTable);
        app.component('lv-tabs', LvTabs);
        app.component('lv-widget', LvWidget);
    },
};

export {
    LvBlockquote,
    LvBreadcrumbs,
    LvButton,
    LvCard,
    LvChart,
    LvCheckbox,
    LvCode,
    LvDivider,
    LvGroup,
    LvHeading,
    LvIcon,
    LvInput,
    LvKeyboard,
    LvLayout,
    LvLink,
    LvMenu,
    LvMenuGroup,
    LvMenuItem,
    LvMenuList,
    LvNotice,
    LvPill,
    LvTable,
    LvTabs,
    LvWidget,
};
