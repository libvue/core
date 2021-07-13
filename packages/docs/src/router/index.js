import { createRouter, createWebHashHistory } from 'vue-router';
// Installation
import GettingStarted from '../views/installation/getting-started.vue';

// Components
import LvButton from '../views/components/lv-button.vue';

const routes = [
  { path: '/', redirect: '/getting-started' },
  {
    path: '/getting-started',
    name: 'getting-started',
    component: GettingStarted,
  },
  {
    path: '/lv-button',
    name: 'lv-button',
    component: LvButton,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
