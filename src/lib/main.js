import eventBus from './utils/eventBus';
import components from './components';
import spaceAfter from './directives/spaceAfter';

// Import styling here, otherwise it won't be included in the style.css
// @todo; make stuff optional via the install options
import './scss/core.scss';

export default {
    install: (app) => {
        // Register the spaceAfter directive
        app.directive('space-after', spaceAfter);

        // Register all components
        Object.entries(components).forEach(([key, value]) => {
            app.component(key, value);
        });

        // Register global properties namespaced for libvue
        // eslint-disable-next-line no-param-reassign
        app.config.globalProperties.libvue = {
            eventBus,
            addToast: (properties) => eventBus.$emit('toast', properties),
        };
    },
};

export { components };
