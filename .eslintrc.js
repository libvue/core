module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  ignorePatterns: [
    '**/node_modules/**/*.{js, vue}',
    '**/dist/**/*.js',
  ],
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    'quote-props': [
      'error',
      'as-needed',
    ],
    semi: [
      'error',
      'always',
    ],
    'no-console': 'error',
    'no-debugger': 'error',
    'no-unused-vars': 'error',
    'no-unreachable': 'error',
    'no-restricted-syntax': 0,
    'no-new': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': ['error', {
      props: false,
    }],
    'class-methods-use-this': 0,
    'no-alert': 0,
    'vue/custom-event-name-casing': 0,
    'vue/no-mutating-props': 0,
  },
};
