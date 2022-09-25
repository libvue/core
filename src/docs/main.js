// For testing using the source file
import libvue from '../lib/main.js';

// /**
//  * Testing Live Mode
//  */
// import '../../dist/style.css';
// import libvue from '../../dist/libvue.es.js';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/sass/app.scss';

// Create app
const app = createApp(App);

//
app.config.unwrapInjectedRef = true;

// Use plugins
app.use(router);
app.use(libvue);

// Mount the app
app.mount('#app');
