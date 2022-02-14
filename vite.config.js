import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/main.js'),
      name: 'libvue',
      fileName: (format) => `libvue.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'highlight.js'],
      output: {
        exports: "named",
        globals: {
          vue: 'Vue',
          'highlight.js': 'hljs',
        }
      }
    }
  }
})
