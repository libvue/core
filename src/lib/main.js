// Components
import LvButton from "./components/LvButton/LvButton.vue";
import LvCard from "./components/LvCard/LvCard.vue";
import LvCode from "./components/LvCode/LvCode.vue";
import LvGroup from "./components/LvGroup/LvGroup.vue";
import LvHeading from "./components/LvHeading/LvHeading.vue";
import LvIcon from "./components/LvIcon/LvIcon.vue";
import LvInput from "./components/LvInput/LvInput.vue";
import LvLayout from "./components/LvLayout/LvLayout.vue";
import LvMenu from "./components/LvMenu/LvMenu.vue";
import LvMenuGroup from "./components/LvMenu/LvMenuGroup.vue";
import LvMenuItem from "./components/LvMenu/LvMenuItem.vue";
import LvMenuList from "./components/LvMenu/LvMenuList.vue";
import LvTable from "./components/LvTable/LvTable.vue";

import { setAppInstance } from './plugin/instance';

export default {
  install: (app, opt = {}) => {
    // Write away the app instance
    setAppInstance(app);

    // Register all components
    app.component('lv-button', LvButton);
    app.component('lv-card', LvCard);
    app.component('lv-code', LvCode);
    app.component('lv-group', LvGroup);
    app.component('lv-heading', LvHeading);
    app.component('lv-icon', LvIcon);
    app.component('lv-input', LvInput);
    app.component('lv-layout', LvLayout);
    app.component('lv-menu', LvMenu);
    app.component('lv-menu-group', LvMenuGroup);
    app.component('lv-menu-item', LvMenuItem);
    app.component('lv-menu-list', LvMenuList);
    app.component('lv-table', LvTable);
  },
};

export {
  LvButton,
  LvCard,
  LvCode,
  LvGroup,
  LvHeading,
  LvIcon,
  LvInput,
  LvLayout,
  LvMenu,
  LvMenuGroup,
  LvMenuItem,
  LvMenuList,
  LvTable
}