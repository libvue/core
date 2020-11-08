import Components from './components';

const defaultOptions = {
  style: true,
};

export default {
  install: (app, opt = {}) => {
    // Merge the given options with the default options
    const options = { ...defaultOptions, ...opt };

    // Check if css is true, then require the css
    if (options.style) {
      require('./scss/libvue.scss');
    }

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
