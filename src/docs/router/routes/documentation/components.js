const LvDescriptionList = () => import('../../../views/documentation/components/lv-description-list.vue');
const LvDatePicker = () => import('../../../views/documentation/components/lv-date-picker.vue');
const LvButtonGroup = () => import('../../../views/documentation/components/lv-button-group.vue');
const LvFileInput = () => import('../../../views/documentation/components/lv-file-input.vue');
const LvTextEditor = () => import('../../../views/documentation/components/lv-text-editor.vue');
const LvFieldset = () => import('../../../views/documentation/components/lv-fieldset.vue');
const LvBadge = () => import('../../../views/documentation/components/lv-badge.vue');
const LvFileTree = () => import('../../../views/documentation/components/lv-file-tree.vue');
const LvProgressBar = () => import('../../../views/documentation/components/lv-progress-bar.vue');
const LvProgressSteps = () => import('../../../views/documentation/components/lv-progress-steps.vue');
const LvFragmentLink = () => import('../../../views/documentation/components/lv-fragment-link.vue');
const LvImageCarousel = () => import('../../../views/documentation/components/lv-image-carousel.vue');
const LvImage = () => import('../../../views/documentation/components/lv-image.vue');
const LvSkeleton = () => import('../../../views/documentation/components/lv-skeleton.vue');
const LvToggleGroup = () => import('../../../views/documentation/components/lv-toggle-group.vue');
const LvToggle = () => import('../../../views/documentation/components/lv-toggle.vue');
const LvCookieConsent = () => import('../../../views/documentation/components/lv-cookie-consent.vue');
const LvWindow = () => import('../../../views/documentation/components/lv-window.vue');
const LvSpinner = () => import('../../../views/documentation/components/lv-spinner.vue');
const LvLoadingDots = () => import('../../../views/documentation/components/lv-loading-dots.vue');
const LvTextarea = () => import('../../../views/documentation/components/lv-textarea.vue');
const LvButton = () => import('../../../views/documentation/components/lv-button.vue');
const LvInput = () => import('../../../views/documentation/components/lv-input.vue');
const LvRangeSlider = () => import('../../../views/documentation/components/lv-range-slider.vue');
const LvSlider = () => import('../../../views/documentation/components/lv-slider.vue');
const LvCheckbox = () => import('../../../views/documentation/components/lv-checkbox.vue');
const LvVerticalNav = () => import('../../../views/documentation/components/lv-vertical-nav.vue');
const LvHorizontalNav = () => import('../../../views/documentation/components/lv-horizontal-nav.vue');
const LvHeading = () => import('../../../views/documentation/components/lv-heading.vue');
const LvParagraph = () => import('../../../views/documentation/components/lv-paragraph.vue');
const LvBlockquote = () => import('../../../views/documentation/components/lv-blockquote.vue');
const LvCode = () => import('../../../views/documentation/components/lv-code.vue');
const LvThemeToggle = () => import('../../../views/documentation/components/lv-theme-toggle.vue');
const LvFlex = () => import('../../../views/documentation/components/lv-flex.vue');
const LvLayout = () => import('../../../views/documentation/components/lv-layout.vue');
const LvCard = () => import('../../../views/documentation/components/lv-card.vue');
const LvTable = () => import('../../../views/documentation/components/lv-table.vue');
const LvTabs = () => import('../../../views/documentation/components/lv-tabs.vue');
const LvChart = () => import('../../../views/documentation/components/lv-chart.vue');
const LvNotice = () => import('../../../views/documentation/components/lv-notice.vue');
const LvLink = () => import('../../../views/documentation/components/lv-link.vue');
const LvBreadcrumbs = () => import('../../../views/documentation/components/lv-breadcrumbs.vue');
const LvSelect = () => import('../../../views/documentation/components/lv-select.vue');
const LvRadio = () => import('../../../views/documentation/components/lv-radio.vue');
const LvSwitch = () => import('../../../views/documentation/components/lv-switch.vue');
const LvWidget = () => import('../../../views/documentation/components/lv-widget.vue');
const LvPill = () => import('../../../views/documentation/components/lv-pill.vue');
const LvKeyboard = () => import('../../../views/documentation/components/lv-keyboard.vue');
const LvSeparator = () => import('../../../views/documentation/components/lv-separator.vue');
const LvIcon = () => import('../../../views/documentation/components/lv-icon.vue');
const LvAvatar = () => import('../../../views/documentation/components/lv-avatar.vue');
const LvDialog = () => import('../../../views/documentation/components/lv-dialog.vue');
const LvDrawer = () => import('../../../views/documentation/components/lv-drawer.vue');
const LvToast = () => import('../../../views/documentation/components/lv-toast.vue');
const LvPopover = () => import('../../../views/documentation/components/lv-popover.vue');
const LvPagination = () => import('../../../views/documentation/components/lv-pagination.vue');
const LvAccordion = () => import('../../../views/documentation/components/lv-accordion.vue');
const LvHeader = () => import('../../../views/documentation/components/lv-header.vue');
const LvSubHeader = () => import('../../../views/documentation/components/lv-sub-header.vue');
const LvGrid = () => import('../../../views/documentation/components/lv-grid.vue');
const LvHero = () => import('../../../views/documentation/components/lv-hero.vue');
const LvColorPicker = () => import('../../../views/documentation/components/lv-color-picker.vue');
const LvColorSwatch = () => import('../../../views/documentation/components/lv-color-swatch.vue');
const LvQuickFilter = () => import('../../../views/documentation/components/lv-quick-filter.vue');

export default [
    {
        path: '/docs/lv-quick-filter',
        name: 'lv-quick-filter',
        component: LvQuickFilter,
    },
    {
        path: '/docs/lv-color-swatch',
        name: 'lv-color-swatch',
        component: LvColorSwatch,
    },
    {
        path: '/docs/lv-color-picker',
        name: 'lv-color-picker',
        component: LvColorPicker,
    },
    {
        path: '/docs/lv-description-list',
        name: 'lv-description-list',
        component: LvDescriptionList,
    },
    {
        path: '/docs/lv-hero',
        name: 'lv-hero',
        component: LvHero,
    },
    {
        path: '/docs/lv-date-picker',
        name: 'lv-date-picker',
        component: LvDatePicker,
    },
    {
        path: '/docs/lv-button-group',
        name: 'lv-button-group',
        component: LvButtonGroup,
    },
    {
        path: '/docs/lv-file-input',
        name: 'lv-file-input',
        component: LvFileInput,
    },
    {
        path: '/docs/lv-text-editor',
        name: 'lv-text-editor',
        component: LvTextEditor,
    },
    {
        path: '/docs/lv-fieldset',
        name: 'lv-fieldset',
        component: LvFieldset,
    },
    {
        path: '/docs/lv-grid',
        name: 'lv-grid',
        component: LvGrid,
    },
    {
        path: '/docs/lv-badge',
        name: 'lv-badge',
        component: LvBadge,
    },
    {
        path: '/docs/lv-file-tree',
        name: 'lv-file-tree',
        component: LvFileTree,
    },
    {
        path: '/docs/lv-progress-bar',
        name: 'lv-progress-bar',
        component: LvProgressBar,
    },
    {
        path: '/docs/lv-progress-steps',
        name: 'lv-progress-steps',
        component: LvProgressSteps,
    },
    {
        path: '/docs/lv-fragment-link',
        name: 'lv-fragment-link',
        component: LvFragmentLink,
    },
    {
        path: '/docs/lv-image-carousel',
        name: 'lv-image-carousel',
        component: LvImageCarousel,
    },
    {
        path: '/docs/lv-image',
        name: 'lv-image',
        component: LvImage,
    },
    {
        path: '/docs/lv-skeleton',
        name: 'lv-skeleton',
        component: LvSkeleton,
    },
    {
        path: '/docs/lv-toggle-group',
        name: 'lv-toggle-group',
        component: LvToggleGroup,
    },
    {
        path: '/docs/lv-toggle',
        name: 'lv-toggle',
        component: LvToggle,
    },
    {
        path: '/docs/lv-cookie-consent',
        name: 'lv-cookie-consent',
        component: LvCookieConsent,
    },
    {
        path: '/docs/lv-window',
        name: 'lv-window',
        component: LvWindow,
    },
    {
        path: '/docs/lv-spinner',
        name: 'lv-spinner',
        component: LvSpinner,
    },
    {
        path: '/docs/lv-loading-dots',
        name: 'lv-loading-dots',
        component: LvLoadingDots,
    },
    {
        path: '/docs/lv-textarea',
        name: 'lv-textarea',
        component: LvTextarea,
    },
    {
        path: '/docs/lv-header',
        name: 'lv-header',
        component: LvHeader,
    },
    {
        path: '/docs/lv-sub-header',
        name: 'lv-sub-header',
        component: LvSubHeader,
    },
    {
        path: '/docs/lv-theme-toggle',
        name: 'lv-theme-toggle',
        component: LvThemeToggle,
    },
    {
        path: '/docs/lv-pagination',
        name: 'lv-pagination',
        component: LvPagination,
    },
    {
        path: '/docs/lv-accordion',
        name: 'lv-accordion',
        component: LvAccordion,
    },
    {
        path: '/docs/lv-popover',
        name: 'lv-popover',
        component: LvPopover,
    },
    {
        path: '/docs/lv-toast',
        name: 'lv-toast',
        component: LvToast,
    },
    {
        path: '/docs/lv-drawer',
        name: 'lv-drawer',
        component: LvDrawer,
    },
    {
        path: '/docs/lv-dialog',
        name: 'lv-dialog',
        component: LvDialog,
    },
    {
        path: '/docs/lv-avatar',
        name: 'lv-avatar',
        component: LvAvatar,
    },
    {
        path: '/docs/lv-slider',
        name: 'lv-slider',
        component: LvSlider,
    },
    {
        path: '/docs/lv-range-slider',
        name: 'lv-range-slider',
        component: LvRangeSlider,
    },
    {
        path: '/docs/lv-icon',
        name: 'lv-icon',
        component: LvIcon,
    },
    {
        path: '/docs/lv-separator',
        name: 'lv-separator',
        component: LvSeparator,
    },
    {
        path: '/docs/lv-keyboard',
        name: 'lv-keyboard',
        component: LvKeyboard,
    },
    {
        path: '/docs/lv-pill',
        name: 'lv-pill',
        component: LvPill,
    },
    {
        path: '/docs/lv-widget',
        name: 'lv-widget',
        component: LvWidget,
    },
    {
        path: '/docs/lv-switch',
        name: 'lv-switch',
        component: LvSwitch,
    },
    {
        path: '/docs/lv-radio',
        name: 'lv-radio',
        component: LvRadio,
    },
    {
        path: '/docs/lv-select',
        name: 'lv-select',
        component: LvSelect,
    },
    {
        path: '/docs/lv-breadcrumbs',
        name: 'lv-breadcrumbs',
        component: LvBreadcrumbs,
    },
    {
        path: '/docs/lv-link',
        name: 'lv-link',
        component: LvLink,
    },
    {
        path: '/docs/lv-button',
        name: 'lv-button',
        component: LvButton,
    },
    {
        path: '/docs/lv-vertical-nav',
        name: 'lv-vertical-nav',
        component: LvVerticalNav,
    },
    {
        path: '/docs/lv-horizontal-nav',
        name: 'lv-horizontal-nav',
        component: LvHorizontalNav,
    },
    {
        path: '/docs/lv-input',
        name: 'lv-input',
        component: LvInput,
    },
    {
        path: '/docs/lv-checkbox',
        name: 'lv-checkbox',
        component: LvCheckbox,
    },
    {
        path: '/docs/lv-heading',
        name: 'lv-heading',
        component: LvHeading,
    },
    {
        path: '/docs/lv-paragraph',
        name: 'lv-paragraph',
        component: LvParagraph,
    },
    {
        path: '/docs/lv-blockquote',
        name: 'lv-blockquote',
        component: LvBlockquote,
    },
    {
        path: '/docs/lv-code',
        name: 'lv-code',
        component: LvCode,
    },
    {
        path: '/docs/lv-layout',
        name: 'lv-layout',
        component: LvLayout,
    },

    {
        path: '/docs/lv-flex',
        name: 'lv-flex',
        component: LvFlex,
    },
    {
        path: '/docs/lv-card',
        name: 'lv-card',
        component: LvCard,
    },
    {
        path: '/docs/lv-table',
        name: 'lv-table',
        component: LvTable,
    },
    {
        path: '/docs/lv-tabs',
        name: 'lv-tabs',
        component: LvTabs,
    },
    {
        path: '/docs/lv-chart',
        name: 'lv-chart',
        component: LvChart,
    },
    {
        path: '/docs/lv-notice',
        name: 'lv-notice',
        component: LvNotice,
    },
];
