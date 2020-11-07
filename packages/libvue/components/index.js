const components = {
  LvInput: () => import(/* webpackChunkName: "LvInput" */'./Input/Input.vue'),
}

// Named exports (using module.exports because export { ...object } is not supported
module.exports = components;
// Export default
module.exports.default = components;
