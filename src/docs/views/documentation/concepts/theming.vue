<template>
    <lv-heading v-space-after="0.5" :level="3">Theming</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Customize this crap!</lv-heading>

    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #global>
            <lv-paragraph v-space-after="1">
                You can overwrite global variables by adding them to the :root directly.
            </lv-paragraph>
            <code-preview v-space-after="1" :code="codeGlobalVariables" lang="css" />
        </template>
        <template #theme>
            <lv-paragraph v-space-after="1">
                When changing theme variables you must assign them to prefers-color-scheme media query for automatically setting the correct theme.
                <code-preview code='@media (prefers-color-scheme: dark|light)' lang="css" inline/> and use the HTML attribute <code-preview code='[data-theme="dark|light"]' lang="css" inline/> for overrides.
            </lv-paragraph>
            <code-preview v-space-after="1" :code="codeThemeVariables" lang="css" />
        </template>
    </lv-tabs>

</template>

<script>
const codeThemeVariables = `
// Create a mixin so you can reuse it
@mixin lightThemeOverrides {
    --background-color: #ffffff;
    --main-background-color: #fff;
    --sidebar-background-color: #fff;
    --header-background-color: rgba(255, 255, 255, 0.8);
    --color-default: #121315;
    --color-default-dimmed: #ebecee;
    --color-info: #3f8cff;
    --color-info-dimmed: #f2f7ff;
    --color-success: #13c083;
    --color-success-dimmed: #e0fcf2;
    --color-warning: #ff7a27;
    --color-warning-dimmed: #fff1e9;
    --color-danger: #ff2740;
    --color-danger-dimmed: #ffeef0;
    --color-ghost: #ffffff;
    --color-primary: #5937f3;
    --color-primary-dimmed: #f1eefe;
    --color-secondary: #9c6bfe;
    --color-secondary-dimmed: #f7f4ff;
    --color-white: #fff;
    --color-black: #000;
    --text-color: #0b0b0c;
    --text-color-dimmed: #a1a1a8;
    --text-color-inverted: #f4f4f3;
    --border-color: #e0e0e0;
    --border-color-light: #f4f4f4;
    --border-color-focus: #868690;
    --placeholder-color-primary: #d1c7fc;
    --placeholder-color-success: #1de9a1;
    --placeholder-color-info: #d8e8ff;
    --placeholder-color-warning: #ffd8c0;
    --placeholder-color-danger: #ffc0c7;
    --placeholder-color: #bbbbc1;
    --backdrop-color: rgba(0, 0, 0, 0.1);
    --backdrop-color-inverted: rgba(255, 255, 255, 0.5);
    --shadow: 0 12px 8px -8px rgba(0, 0, 0, 0.05);
    --shadow-dialog: 0 5px 8px 2px rgba(0, 0, 0, 0.15);
    --shadow-popover: 0 0 8px 2px rgba(0, 0, 0, 0.05);
    --shadow-focus-default: 0px 0px 0px 3px rgba(18, 19, 21, 0.06);
    --shadow-focus-primary: 0px 0px 0px 3px rgba(89, 55, 243, 0.12);
    --shadow-focus-success: 0px 0px 0px 3px rgba(19, 192, 131, 0.12);
    --shadow-focus-warning: 0px 0px 0px 3px rgba(255, 122, 39, 0.14);
    --shadow-focus-danger: 0px 0px 0px 3px rgba(255, 39, 64, 0.24);
    --shadow-focus-info: 0px 0px 0px 3px rgba(63, 140, 255, 0.23);
    --shadow-focus-ghost: 0px 0px 0px 3px rgba(112, 112, 112, 0.23);
    --code-background-color: #f9f9f9;
    --code-header-color: #ececec;
    --code-button-color: #dadada;
    --blockquote-background-color: #f9f9f9;
    --scrollbar-track-background-color: #eeeeee;
    --scrollbar-thumb-background-color: #c5c5c5;
    --scrollbar-thumb-border-radius: 0px;
    --skeleton-tint1: #eeeeee;
    --skeleton-tint2: #d9d9d9;
    --table-row-hover-background-color: #fdfdfd;
}

// Add it to the media query first
@media (prefers-color-scheme: light) {
    :root {
        @include('lightThemeOverrides');
    }
}

// Add it to the data-theme attribute second so it wins from the media query
// This data-attribute can be added to the html or body tag
[data-theme=light]  {
   @include('lightThemeOverrides');
}
`.trim();
const codeGlobalVariables = `
// Overwrite default global variables
:root {
    --z-index-base: 1;
    --z-index-dropdown: 200;
    --z-index-dialog: 300;
    --z-index-toast: 400;
    --font-family: Inter, sans-serif;
    --font-family-monospace: Roboto Mono, monospace;
    --font-size-tiny: 0.625rem;
    --font-size-small: 0.75rem;
    --font-size: 0.875rem;
    --font-size-large: 1.2rem;
    --font-size-huge: 1.7rem;
    --font-size-h1: 2rem;
    --font-size-h2: 1.6rem;
    --font-size-h3: 1.4rem;
    --font-size-h4: 1.2rem;
    --font-size-h5: 1rem;
    --font-size-h6: 0.875rem;
    --line-height-h1: 2.2rem;
    --line-height-h2: 1.8rem;
    --line-height-h3: 1.6rem;
    --line-height-h4: 1.5rem;
    --line-height-h5: 1.2rem;
    --line-height-h6: 1rem;
    --line-height-tiny: 0.75rem;
    --line-height-small: 0.875rem;
    --line-height: 1rem;
    --line-height-large: 1.2rem;
    --line-height-huge: 1.7rem;
    --border-radius: 6px;
    --padding: 12px;
    --max-width: 1200px;
    --transition-time: 0.1337s;
    --transition-easing: ease-in-out;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --breakpoint-xxl: 1400px;
}
`.trim();
export default {
    data() {
        return {
            codeThemeVariables,
            codeGlobalVariables,
            activeTab: 'global',
            tabs: [
                { id: 'global', title: 'Global Variables', icon: 'globe' },
                { id: 'theme', title: 'Dark/Light Theme Variables', icon: 'sun-moon' },
            ],
        };
    },
};
</script>
