import Vue from 'vue';
import App from './App.vue';
import router from './router';
import libvue from '../../libvue';

Vue.config.productionTip = false;

Vue.use(libvue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
