import Components from './components';
import { setAppInstance } from './plugin/instance';

export default {
  install: (app, opt = {}) => {
    // Write away the app instance
    setAppInstance(app);

    // Register all components
    for (const key in Components) {
      if ({}.hasOwnProperty.call(Components, key)) {
        const component = Components[key];
        if (component) {
          app.component(key, component);
        }
      }
    }
  },
};
