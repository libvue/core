/* eslint-disable no-param-reassign */
import eventBus from './utils/eventBus';
import components from './components';
import spaceAfter from './directives/spaceAfter';

// Import styling here, otherwise it won't be included in the style.css
import './scss/core.scss';

// Default plugin options
const DEFAULT_OPTIONS = {
    directives: true,
    components: true,
};

export default {
    install: (app, options = DEFAULT_OPTIONS) => {
        // Merge potential missing options
        const mergedOptions = { ...DEFAULT_OPTIONS, ...options };

        // Register the spaceAfter directive
        if (mergedOptions.directives) {
            app.directive('space-after', spaceAfter);
        }

        // Register all components
        if (mergedOptions.components) {
            Object.entries(components).forEach(([key, value]) => {
                app.component(key, value);
            });
        }

        // Register global Properties
        app.config.globalProperties.libvue = {
            eventBus,
            addToast: (properties) => eventBus.$emit('toast', properties),
        };
    },
};

export { components };
