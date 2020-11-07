module.exports = {
  extends: [
    'stylelint-config-standard', // Load the standard stylelint configuration
    'stylelint-config-rational-order',
  ],
  plugins: [
    'stylelint-declaration-block-no-ignored-properties', // This plugin checks for ignored properties and throws error if so
  ],
  rules: {
    'no-empty-source': null, // If not set an error will be shown for single file components without css
    'string-quotes': 'single', // Use single quotes for all strings
    'at-rule-no-vendor-prefix': true, // No vendor prefix (let autoprefixer handle this)
    'media-feature-name-no-vendor-prefix': true, // No vendor prefix (let autoprefixer handle this)
    'property-no-vendor-prefix': true, // No vendor prefix (let autoprefixer handle this)
    'selector-no-vendor-prefix': true, // No vendor prefix (let autoprefixer handle this)
    'value-no-vendor-prefix': true, // No vendor prefix (let autoprefixer handle this)
    'color-no-invalid-hex': true, // No invalid (shorthand) hex allowed
    'no-descending-specificity': null, // Disabled because of SCSS conflicts
    'at-rule-no-unknown': null, // Disabled because of SCSS conflicts (@while, @for)
    'media-feature-name-no-unknown': true, // Only known media features can be used
    'plugin/declaration-block-no-ignored-properties': true, // Disallow property values that are ignored due to another property value in the same rule
  },
};
