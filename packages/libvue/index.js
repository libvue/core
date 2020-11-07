import { setVueInstance } from './utils/vueInstance';
import Components from './components';

const defaultOptions = {
  style: true,
};

export default function install(Vue, opt = {}) {
  // Store the vue instance
  setVueInstance(Vue);

  // Merge the given options with the default options
  const options = { ...defaultOptions, ...opt };

  // Check if css is true, then require the css
  if (options.style) {
    require('./scss/style.scss');
  }

  // Register all components
  for (const key in Components) {
    if ({}.hasOwnProperty.call(Components, key)) {
      const component = Components[key];
      if (component) {
        Vue.component(key, component);
      }
    }
  }
}