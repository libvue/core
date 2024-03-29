import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: '/core/',
    build: {
        outDir: 'docs',
        assetsDir: '',
    },
    rollupOptions: {
        input: './src/docs/main.js',
    },
});
