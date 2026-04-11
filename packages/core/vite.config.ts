import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.tsx',
      formats: ['es'],
      fileName: 'index'
    },
    rolldownOptions: {
      external: [/^@inertiajs($|\/)/]
    }
  },
  plugins: [solid()]
});
