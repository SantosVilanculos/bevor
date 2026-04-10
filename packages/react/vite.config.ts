import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.tsx',
      formats: ['es'],
      fileName: 'index'
    },
    rolldownOptions: {
      external: [/^react($|\/)/, /^react-dom($|\/)/]
    },

 sourcemap: true,
  },
  plugins: [react()]
});
