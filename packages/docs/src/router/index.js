import { createRouter, createWebHashHistory } from 'vue-router';
import LvButton from '../views/lv-button.vue';

const routes = [
  {
    path: '/',
    name: 'lv-button',
    component: LvButton,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
