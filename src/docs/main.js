// Highlightjs
import 'highlight.js/styles/stackoverflow-light.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import scss from 'highlight.js/lib/languages/scss';
import xml from  'highlight.js/lib/languages/xml';
import shell from  'highlight.js/lib/languages/shell';
import hljsVuePlugin from '@highlightjs/vue-plugin';

// For testing using the source file
import { createApp } from 'vue';
import { spaceAfter, components } from '../lib/main';

import App from './App.vue';
import router from './router';
import './assets/sass/app.scss';

import ComponentDetails from './components/ComponentDetails.vue';
import CodePreview from './components/CodePreview.vue';

// Create app
const app = createApp(App);

// Configure HLJS
hljs.configure({
    classPrefix: 'lv-code-'
});
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('shell', shell);

// Register custom components
app.component('ComponentDetails', ComponentDetails);
app.component('CodePreview', CodePreview);

// Use plugins
app.use(router);
app.use(hljsVuePlugin);

// Register v-space-after directive
app.directive('space-after', spaceAfter);

// Quick and dirty register all components
Object.entries(components).forEach(([key, value]) => {
    app.component(key, value);
});

// Mount the app
app.mount('#app');
