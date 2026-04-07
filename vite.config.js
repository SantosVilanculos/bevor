import { resolve } from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  build: {
    rolldownOptions: {
      external: [
        'react-dom',
        'react',
        'react/jsx-runtime',
        '@inertiajs/core',
        '@inertiajs/react',
        '@tanstack/devtools'
      ],
      output: {
        globals: {
          'react-dom': 'reactDom',
          react: 'react',
          'react/jsx-runtime': 'reactJsxRuntime',
          '@inertiajs/core': 'inertiajsCore',
          '@inertiajs/react': 'inertiajsReact',
          '@tanstack/devtools': 'tanstackDevtools'
        }
      }
    },
    lib: {
      entry: resolve(import.meta.dirname, '/src/index.tsx'),
      name: 'Lorem',
      formats: ['es'],
      fileName: 'index'
    }
  },
  plugins: [react(), tailwindcss(), libInjectCss(), dts({ rollupTypes: true, copyDtsFiles: true })]
});
