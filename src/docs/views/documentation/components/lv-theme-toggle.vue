<template>
    <lv-heading v-space-after="0.5" :level="3">Theme Toggle</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A component just for toggling your theme</lv-heading>
    <lv-card v-space-after="1">
        <lv-theme-toggle v-model="theme"/>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :active="activeFile" :files="files" @change-file="(v) => activeFile = v" />
    <component-details component="LvThemeToggle"></component-details>
</template>

<script>
const codeTemplate = `
 <lv-theme-toggle v-model="theme"/>
`.trim();
const codeScript = `
data() {
    return {
        // Initially set the color scheme from the prefers-color-scheme
        // This also is the v-model
        theme: this.preferredColorScheme(),
    };
},
mounted() {
    // After initialisation, check the localStorage, and use that setting;
    if (localStorage.getItem('theme')) {
        this.theme = localStorage.getItem('theme');
        document.body.setAttribute('data-theme', this.theme);
    }
},
watch: {
    // When the v-model changes, update the DOM and LocalStorage
    theme(val) {
        document.body.setAttribute('data-theme', val);
        localStorage.setItem('theme', val);
    },
},
methods: {
    preferredColorScheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    },
}
`.trim();
export default {
    data() {
        return {
            activeFile: 'template',
            files: [
                { id: 'template', filename: 'template', code: codeTemplate, lang: 'html' },
                { id: 'script', filename: 'script', code: codeScript, lang: 'javascript' },
            ],
            theme: this.preferredColorScheme(),
        };
    },
    mounted() {
        // After initialisation, check the localStorage, and use that setting;
        if (localStorage.getItem('theme')) {
            this.theme = localStorage.getItem('theme');
            document.body.setAttribute('data-theme', this.theme);
        }
    },
    watch: {
        // When the v-model changes, update the DOM and LocalStorage
        theme(val) {
            document.body.setAttribute('data-theme', val);
            localStorage.setItem('theme', val);
        },
    },
    methods: {
        preferredColorScheme() {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
            return 'light';
        },
    }
};
</script>
