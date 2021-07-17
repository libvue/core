import { createRouter, createWebHashHistory } from 'vue-router';
// Installation
import GettingStarted from '../views/installation/getting-started.vue';

// Components
import LvButton from '../views/components/lv-button.vue';
import LvInput from '../views/components/lv-input.vue';

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
  {
    path: '/lv-input',
    name: 'lv-input',
    component: LvInput,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
