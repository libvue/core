import Install from '../../../views/documentation/getting-started/install.vue';

export default [
    {
        path: '/documentation',
        name: 'documentation',
        redirect: '/docs/install',
    },
    {
        path: '/docs/install',
        name: 'install',
        component: Install,
    },
];
