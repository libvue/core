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

// opt-in to the new behavior now
app.config.unwrapInjectedRef = true;

// Register custom components
app.component('ComponentDetails', ComponentDetails);
app.component('CodePreview', CodePreview);

// Use plugins
app.use(router);

// Register v-space-after directive
app.directive('space-after', spaceAfter);

// Quick and dirty register all components
Object.entries(components).forEach(([key, value]) => {
    app.component(key, value);
});

// Mount the app
app.mount('#app');
