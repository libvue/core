import { defineAsyncComponent } from 'vue';

const LvFileInput = defineAsyncComponent(() => import('./LvFileInput/LvFileInput.vue'));
const LvTextEditor = defineAsyncComponent(() => import('./LvTextEditor/LvTextEditor.vue'));
const LvFieldset = defineAsyncComponent(() => import('./LvFieldset/LvFieldset.vue'));
const LvBadge = defineAsyncComponent(() => import('./LvBadge/LvBadge.vue'));
const LvAdvertPwa = defineAsyncComponent(() => import('./LvAdvertPwa/LvAdvertPwa.vue'));
const LvAdvertApp = defineAsyncComponent(() => import('./LvAdvertApp/LvAdvertApp.vue'));
const LvFileTree = defineAsyncComponent(() => import('./LvFileTree/LvFileTree.vue'));
const LvProgress = defineAsyncComponent(() => import('./LvProgress/LvProgress.vue'));
const LvFragmentLink = defineAsyncComponent(() => import('./LvFragmentLink/LvFragmentLink.vue'));
const LvImageCarousel = defineAsyncComponent(() => import('./LvImageCarousel/LvImageCarousel.vue'));
const LvImage = defineAsyncComponent(() => import('./LvImage/LvImage.vue'));
const LvSkeleton = defineAsyncComponent(() => import('./LvSkeleton/LvSkeleton.vue'));
const LvToggleGroup = defineAsyncComponent(() => import('./LvToggleGroup/LvToggleGroup.vue'));
const LvToggle = defineAsyncComponent(() => import('./LvToggle/LvToggle.vue'));
const LvCookieConsent = defineAsyncComponent(() => import('./LvCookieConsent/LvCookieConsent.vue'));
const LvWindow = defineAsyncComponent(() => import('./LvWindow/LvWindow.vue'));
const LvSpinner = defineAsyncComponent(() => import('./LvSpinner/LvSpinner.vue'));
const LvLoadingDots = defineAsyncComponent(() => import('./LvLoadingDots/LvLoadingDots.vue'));
const LvTextarea = defineAsyncComponent(() => import('./LvTextarea/LvTextarea.vue'));
const LvThemeToggle = defineAsyncComponent(() => import('./LvThemeToggle/LvThemeToggle.vue'));
const LvGrid = defineAsyncComponent(() => import('./LvGrid/LvGrid.vue'));
const LvGridRow = defineAsyncComponent(() => import('./LvGrid/LvGridRow.vue'));
const LvGridColumn = defineAsyncComponent(() => import('./LvGrid/LvGridColumn.vue'));
const LvSlider = defineAsyncComponent(() => import('./LvSlider/LvSlider.vue'));
const LvPagination = defineAsyncComponent(() => import('./LvPagination/LvPagination.vue'));
const LvHero = defineAsyncComponent(() => import('./LvHero/LvHero.vue'));
const LvHorizontalNavItem = defineAsyncComponent(() => import('./LvHorizontalNav/LvHorizontalNavItem.vue'));
const LvHorizontalNavGroup = defineAsyncComponent(() => import('./LvHorizontalNav/LvHorizontalNavGroup.vue'));
const LvHeader = defineAsyncComponent(() => import('./LvHeader/LvHeader.vue'));
const LvAvatar = defineAsyncComponent(() => import('./LvAvatar/LvAvatar.vue'));
const LvAccordion = defineAsyncComponent(() => import('./LvAccordion/LvAccordion.vue'));
const LvAccordionItem = defineAsyncComponent(() => import('./LvAccordion/LvAccordionItem.vue'));
const LvBlockquote = defineAsyncComponent(() => import('./LvBlockquote/LvBlockquote.vue'));
const LvBreadcrumbs = defineAsyncComponent(() => import('./LvBreadcrumbs/LvBreadcrumbs.vue'));
const LvButton = defineAsyncComponent(() => import('./LvButton/LvButton.vue'));
const LvCard = defineAsyncComponent(() => import('./LvCard/LvCard.vue'));
const LvChart = defineAsyncComponent(() => import('./LvChart/LvChart.vue'));
const LvCheckbox = defineAsyncComponent(() => import('./LvCheckbox/LvCheckbox.vue'));
const LvCode = defineAsyncComponent(() => import('./LvCode/LvCode.vue'));
const LvDialog = defineAsyncComponent(() => import('./LvDialog/LvDialog.vue'));
const LvSeparator = defineAsyncComponent(() => import('./LvSeparator/LvSeparator.vue'));
const LvDrawer = defineAsyncComponent(() => import('./LvDrawer/LvDrawer.vue'));
const LvGroup = defineAsyncComponent(() => import('./LvGroup/LvGroup.vue'));
const LvHeading = defineAsyncComponent(() => import('./LvHeading/LvHeading.vue'));
const LvIcon = defineAsyncComponent(() => import('./LvIcon/LvIcon.vue'));
const LvInput = defineAsyncComponent(() => import('./LvInput/LvInput.vue'));
const LvKeyboard = defineAsyncComponent(() => import('./LvKeyboard/LvKeyboard.vue'));
const LvLayout = defineAsyncComponent(() => import('./LvLayout/LvLayout.vue'));
const LvLink = defineAsyncComponent(() => import('./LvLink/LvLink.vue'));
const LvVerticalNavGroup = defineAsyncComponent(() => import('./LvVerticalNav/LvVerticalNavGroup.vue'));
const LvVerticalNavItem = defineAsyncComponent(() => import('./LvVerticalNav/LvVerticalNavItem.vue'));
const LvVerticalNavList = defineAsyncComponent(() => import('./LvVerticalNav/LvVerticalNavList.vue'));
const LvNotice = defineAsyncComponent(() => import('./LvNotice/LvNotice.vue'));
const LvParagraph = defineAsyncComponent(() => import('./LvParagraph/LvParagraph.vue'));
const LvPill = defineAsyncComponent(() => import('./LvPill/LvPill.vue'));
const LvPopover = defineAsyncComponent(() => import('./LvPopover/LvPopover.vue'));
const LvRadio = defineAsyncComponent(() => import('./LvRadio/LvRadio.vue'));
const LvRangeSlider = defineAsyncComponent(() => import('./LvRangeSlider/LvRangeSlider.vue'));
const LvSelect = defineAsyncComponent(() => import('./LvSelect/LvSelect.vue'));
const LvSelectOption = defineAsyncComponent(() => import('./LvSelect/LvSelectOption.vue'));
const LvSelectOptionGroup = defineAsyncComponent(() => import('./LvSelect/LvSelectOptionGroup.vue'));
const LvSwitch = defineAsyncComponent(() => import('./LvSwitch/LvSwitch.vue'));
const LvTable = defineAsyncComponent(() => import('./LvTable/LvTable.vue'));
const LvTabs = defineAsyncComponent(() => import('./LvTabs/LvTabs.vue'));
const LvToast = defineAsyncComponent(() => import('./LvToast/LvToast.vue'));
const LvToasts = defineAsyncComponent(() => import('./LvToasts/LvToasts.vue'));
const LvWidget = defineAsyncComponent(() => import('./LvWidget/LvWidget.vue'));

export default {
    LvFileInput,
    LvTextEditor,
    LvFieldset,
    LvBadge,
    LvAdvertPwa,
    LvAdvertApp,
    LvFileTree,
    LvProgress,
    LvFragmentLink,
    LvImageCarousel,
    LvImage,
    LvSkeleton,
    LvToggleGroup,
    LvToggle,
    LvCookieConsent,
    LvWindow,
    LvSpinner,
    LvLoadingDots,
    LvTextarea,
    LvThemeToggle,
    LvGrid,
    LvGridRow,
    LvGridColumn,
    LvSlider,
    LvPagination,
    LvHero,
    LvHorizontalNavItem,
    LvHorizontalNavGroup,
    LvHeader,
    LvAccordion,
    LvAccordionItem,
    LvAvatar,
    LvBlockquote,
    LvBreadcrumbs,
    LvButton,
    LvCard,
    LvChart,
    LvCheckbox,
    LvCode,
    LvDialog,
    LvSeparator,
    LvDrawer,
    LvGroup,
    LvHeading,
    LvIcon,
    LvInput,
    LvKeyboard,
    LvLayout,
    LvLink,
    LvVerticalNavGroup,
    LvVerticalNavItem,
    LvVerticalNavList,
    LvNotice,
    LvParagraph,
    LvPill,
    LvPopover,
    LvRadio,
    LvRangeSlider,
    LvSelect,
    LvSelectOption,
    LvSelectOptionGroup,
    LvSwitch,
    LvTable,
    LvTabs,
    LvToast,
    LvToasts,
    LvWidget,
};
