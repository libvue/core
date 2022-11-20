// For testing using the source file
import { createApp } from 'vue';

import libvue from '../lib/main';
import App from './App.vue';
import router from './router';
import './assets/sass/app.scss';

import ComponentDetails from './components/ComponentDetails.vue';

// Create app
const app = createApp(App);

// opt-in to the new behavior now
app.config.unwrapInjectedRef = true;

// Register custom components
app.component('ComponentDetails', ComponentDetails);

// Use plugins
app.use(router);
app.use(libvue);

// Mount the app
app.mount('#app');
