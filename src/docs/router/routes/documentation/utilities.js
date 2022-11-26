import NavigationMixin from '../../../views/documentation/utilities/navigation-mixin.vue';
import BreakpointMixin from "../../../views/documentation/utilities/breakpoint-mixin.vue";
import VSpaceAfter from '../../../views/documentation/utilities/v-space-after.vue';

export default [
    {
        path: '/docs/navigation-mixin',
        name: 'navigation-mixin',
        component: NavigationMixin,
    },
    {
        path: '/docs/breakpoint-mixin',
        name: 'breakpoint-mixin',
        component: BreakpointMixin,
    },
    {
        path: '/docs/v-space-after',
        name: 'v-space-after',
        component: VSpaceAfter,
    },
];
