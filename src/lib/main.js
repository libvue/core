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
import LvRadio from './components/LvRadio/LvRadio.vue';
import LvSwitch from './components/LvSwitch/LvSwitch.vue';
import LvTable from './components/LvTable/LvTable.vue';
import LvTabs from './components/LvTabs/LvTabs.vue';
import LvWidget from './components/LvWidget/LvWidget.vue';
import LvSelect from './components/LvSelect/LvSelect.vue';

import spaceAfter from './directives/spaceAfter';
import badge from './directives/badge';

export default {
    install: (app) => {
        // Register the spaceAfter directive
        app.directive('space-after', spaceAfter);
        app.directive('badge', badge);

        // Register all components
        app.component('LvBlockquote', LvBlockquote);
        app.component('LvBreadcrumbs', LvBreadcrumbs);
        app.component('LvButton', LvButton);
        app.component('LvCard', LvCard);
        app.component('LvChart', LvChart);
        app.component('LvCheckbox', LvCheckbox);
        app.component('LvCode', LvCode);
        app.component('LvDivider', LvDivider);
        app.component('LvGroup', LvGroup);
        app.component('LvHeading', LvHeading);
        app.component('LvIcon', LvIcon);
        app.component('LvInput', LvInput);
        app.component('LvKeyboard', LvKeyboard);
        app.component('LvLayout', LvLayout);
        app.component('LvLink', LvLink);
        app.component('LvMenu', LvMenu);
        app.component('LvMenuGroup', LvMenuGroup);
        app.component('LvMenuItem', LvMenuItem);
        app.component('LvMenuList', LvMenuList);
        app.component('LvNotice', LvNotice);
        app.component('LvParagraph', LvParagraph);
        app.component('LvPill', LvPill);
        app.component('LvTable', LvTable);
        app.component('LvTabs', LvTabs);
        app.component('LvWidget', LvWidget);
        app.component('LvRadio', LvRadio);
        app.component('LvSwitch', LvSwitch);
        app.component('LvSelect', LvSelect);
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
    LvSwitch,
    LvTable,
    LvTabs,
    LvRadio,
    LvWidget,
    LvSelect,
};
