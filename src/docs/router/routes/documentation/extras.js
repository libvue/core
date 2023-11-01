import useBreakpoints from '../../../views/documentation/extras/use-breakpoints.vue';
import VSpaceAfter from '../../../views/documentation/extras/v-space-after.vue';
import EventBus from '../../../views/documentation/extras/event-bus.vue';

export default [
    {
        path: '/docs/use-breakpoints',
        name: 'use-breakpoints',
        component: useBreakpoints,
    },
    {
        path: '/docs/v-space-after',
        name: 'v-space-after',
        component: VSpaceAfter,
    },
    {
        path: '/docs/event-bus',
        name: 'event-bus',
        component: EventBus,
    },
];
