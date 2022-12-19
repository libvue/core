import components from './components';
import eventBus from './utils/eventBus';

/**
 * expose components directly
 * @usage: import { LvTable } from '@libvue/core'
 */
export * from './components';

/**
 * expose directives directly
 * @usage: import { spaceAfter } from '@libvue/core'
 */
export * from './directives';

/**
 * expose components object
 * @usage import { components } from '@libvue/core'
 */
export { components, eventBus };
