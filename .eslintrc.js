module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    root: true,
    extends: [
        'airbnb-base', // Default code quality checks.
        'plugin:vue/recommended', // Vue stuff
        'prettier', // Make sure "prettier" is the last element in this list.
        // This is used to avoid conflicts with eslint-plugin-vue
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4],
        'vue/no-multiple-template-root': 0,
    },
    plugins: ['vue', 'prettier'],
};
