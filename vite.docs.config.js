import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: '/libvue/',
    build: {
        outDir: 'docs',
        assetsDir: '',
    },
    rollupOptions: {
        input: './src/docs/main.js',
    },
});
