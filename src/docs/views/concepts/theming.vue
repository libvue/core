<template>
    <lv-heading v-space-after="0.5" :level="3">Theming</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Customize this crap!</lv-heading>
    <lv-paragraph v-space-after="1">
        All these variables below can be overridden in your own .scss files.
    </lv-paragraph>

    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #global>
            <lv-paragraph v-space-after="1">
                Global variables can be added to the :root directly.
            </lv-paragraph>
            <lv-code v-space-after="1" :code="codeGlobalVariables" lang="scss" />
        </template>
        <template #theme>
            <lv-paragraph v-space-after="1">
                When changing theme variables you must assign them to prefers-color-scheme media query for automatically setting the correct theme.
                <lv-code code='@media (prefers-color-scheme: dark|light)' lang="css" inline/> and use the HTML attribute <lv-code code='[data-theme="dark|light"]' lang="css" inline/> for overrides.
            </lv-paragraph>
            <lv-code v-space-after="1" :code="codeThemeVariables" lang="scss" />
        </template>
    </lv-tabs>

</template>

<script>
const codeThemeVariables = `
// Create a mixin so you can reuse it
@mixin lightThemeOverrides {
    --background-color: #0e0e0e;
    --header-color: rgba(14, 14, 15, 0.75);
    --color-default: #8f8f8f;
    --color-default-dimmed: black;
    --color-info: #3f8cff;
    --color-info-dimmed: #00388c;
    --color-success: #13c083;
    --color-success-dimmed: #042b1e;
    --color-warning: #ff7a27;
    --color-warning-dimmed: #642700;
    --color-danger: #ff2740;
    --color-danger-dimmed: #74000d;
    --color-ghost: #0e0e0e;
    --color-primary: #7a5cff;
    --color-primary-dimmed: #180085;
    --color-secondary: #9c6bfe;
    --color-secondary-dimmed: #310192;
    --color-white: #fff;
    --color-black: #000;
    --text-color: #d3d3d3;
    --text-color-dimmed: #868686;
    --text-color-inverted: #2c2c2c;
    --border-color: #383838;
    --border-color-light: #f4f4f4;
    --border-color-focus: white;
    --placeholder-color-primary: #f7f5ff;
    --placeholder-color-success: #1de9a1;
    --placeholder-color-info: #d8e8ff;
    --placeholder-color-warning: #ffd8c0;
    --placeholder-color-danger: #ffc0c7;
    --placeholder-color: white;
    --shadow: 0 12px 8px -8px rgba(0, 0, 0, 0.4);
    --shadow-dialog: 0 5px 8px 2px rgba(0, 0, 0, 0.15);
    --shadow-popover: 0 0 8px 2px rgba(0, 0, 0, 0.05);
    --shadow-focus-default: 0px 0px 0px 3px rgba(143, 143, 143, 0.06);
    --shadow-focus-primary: 0px 0px 0px 3px rgba(122, 92, 255, 0.12);
    --shadow-focus-success: 0px 0px 0px 3px rgba(19, 192, 131, 0.12);
    --shadow-focus-warning: 0px 0px 0px 3px rgba(255, 122, 39, 0.14);
    --shadow-focus-danger: 0px 0px 0px 3px rgba(255, 39, 64, 0.24);
    --shadow-focus-info: 0px 0px 0px 3px rgba(63, 140, 255, 0.23);
    --shadow-focus-ghost: 0px 0px 0px 3px rgba(0, 0, 0, 0.23);
    --code-background-color: #060606;
    --blockquote-background-color: #f9f9f9;
    --scrollbar-track-background-color: #141414;
    --scrollbar-thumb-background-color: #303030;
    --scrollbar-thumb-border-radius: 0px;
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
:root {
    --z-index-base: 1;
    --z-index-dropdown: 200;
    --z-index-dialog: 300;
    --z-index-toast: 400;
    --font-family: Inter, sans-serif;
    --font-family-monospace: Roboto Mono, monospace;
    --font-size-small: 0.75rem;
    --font-size: 0.875rem;
    --font-size-large: 1.2rem;
    --font-size-h1: 2rem;
    --font-size-h2: 1.6rem;
    --font-size-h3: 1.4rem;
    --font-size-h4: 1.2rem;
    --font-size-h5: 1rem;
    --font-size-h6: 0.875rem;
    --border-radius: 6px;
    --padding: 12px;
    --max-width: 1200px;
    --transition-time: 0.1337s;
    --transition-easing: ease-in-out;
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
