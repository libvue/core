import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import libvue from '../../libvue';
import './assets/sass/app.scss';

// Create app
const app = createApp(App);

// Use plugins
app.use(store);
app.use(router);
app.use(libvue);

// Mount the app
app.mount('#app');
