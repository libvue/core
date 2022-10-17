import eventBus from './utils/eventBus';

// Components
import LvAvatar from './components/LvAvatar/LvAvatar.vue';
import LvBlockquote from './components/LvBlockquote/LvBlockquote.vue';
import LvBreadcrumbs from './components/LvBreadcrumbs/LvBreadcrumbs.vue';
import LvButton from './components/LvButton/LvButton.vue';
import LvCard from './components/LvCard/LvCard.vue';
import LvChart from './components/LvChart/LvChart.vue';
import LvCheckbox from './components/LvCheckbox/LvCheckbox.vue';
import LvCode from './components/LvCode/LvCode.vue';
import LvDialog from './components/LvDialog/LvDialog.vue';
import LvDivider from './components/LvDivider/LvDivider.vue';
import LvDrawer from './components/LvDrawer/LvDrawer.vue';
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
import LvPopover from './components/LvPopover/LvPopover.vue';
import LvRadio from './components/LvRadio/LvRadio.vue';
import LvRangeSlider from './components/LvRangeSlider/LvRangeSlider.vue';
import LvSelect from './components/LvSelect/LvSelect.vue';
import LvSwitch from './components/LvSwitch/LvSwitch.vue';
import LvTable from './components/LvTable/LvTable.vue';
import LvTabs from './components/LvTabs/LvTabs.vue';
import LvToast from './components/LvToast/LvToast.vue';
import LvToasts from './components/LvToasts/LvToasts.vue';
import LvWidget from './components/LvWidget/LvWidget.vue';

import spaceAfter from './directives/spaceAfter';
import badge from './directives/badge';

export default {
    install: (app) => {
        // Register the spaceAfter directive
        app.directive('space-after', spaceAfter);
        app.directive('badge', badge);

        // Register all components
        app.component('LvAvatar', LvAvatar);
        app.component('LvBlockquote', LvBlockquote);
        app.component('LvBreadcrumbs', LvBreadcrumbs);
        app.component('LvButton', LvButton);
        app.component('LvCard', LvCard);
        app.component('LvChart', LvChart);
        app.component('LvCheckbox', LvCheckbox);
        app.component('LvCode', LvCode);
        app.component('LvDialog', LvDialog);
        app.component('LvDivider', LvDivider);
        app.component('LvDrawer', LvDrawer);
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
        app.component('LvPopover', LvPopover);
        app.component('LvRadio', LvRadio);
        app.component('LvRangeSlider', LvRangeSlider);
        app.component('LvSelect', LvSelect);
        app.component('LvSwitch', LvSwitch);
        app.component('LvTable', LvTable);
        app.component('LvTabs', LvTabs);
        app.component('LvToast', LvToast);
        app.component('LvToasts', LvToasts);
        app.component('LvWidget', LvWidget);

        // Register global properties namespaced for libvue
        app.config.globalProperties.libvue = {
            eventBus,
            addToast: (properties) => eventBus.$emit('toast', properties),
        };
    },
};

export {
    LvAvatar,
    LvBlockquote,
    LvBreadcrumbs,
    LvButton,
    LvCard,
    LvChart,
    LvCheckbox,
    LvCode,
    LvDialog,
    LvDivider,
    LvDrawer,
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
    LvPopover,
    LvRadio,
    LvRangeSlider,
    LvSelect,
    LvSwitch,
    LvTable,
    LvTabs,
    LvToast,
    LvToasts,
    LvWidget,
};
