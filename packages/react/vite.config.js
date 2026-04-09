import { resolve } from 'node:path';
import { readFileSync, writeFileSync } from 'node:fs';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

function scopeCssPlugin() {
  return {
    name: 'scope-css',
    apply: 'build',
    closeBundle() {
      const filePath = resolve(import.meta.dirname, 'dist/index.js');
      let code = readFileSync(filePath, 'utf8');
      
      code = code.replace(
        /([a-zA-Z0-9_$-]+)\.appendChild\(([a-zA-Z0-9_$-]+)\.createTextNode\(`([^`]+)`\)\)/g,
        (fullMatch, appendFn, createFn, cssContent) => {
          const decodedCss = cssContent
            .replace(/\\n/g, '\n')
            .replace(/\\t/g, '\t')
            .replace(/\\u0026/g, '&')
            .replace(/\\u0027/g, "'");
          
          const scopedCss = scopeAllRules(decodedCss, '.bevor');
          
          const escaped = scopedCss
            .replace(/\\/g, '\\\\')
            .replace(/`/g, '\\`')
            .replace(/\n/g, '\\n')
            .replace(/\t/g, '\\t');
          
          return `${appendFn}.appendChild(${createFn}.createTextNode(\`${escaped}\`)`;
        }
      );
      
      writeFileSync(filePath, code);
    }
  };
}

function scopeAllRules(css, selector) {
  const rules = [];
  let currentRule = '';
  let braceCount = 0;
  
  for (let i = 0; i < css.length; i++) {
    const char = css[i];
    currentRule += char;
    
    if (char === '{') braceCount++;
    else if (char === '}') {
      braceCount--;
      if (braceCount === 0) {
        rules.push(currentRule.trim());
        currentRule = '';
      }
    }
  }
  
  return rules.map(rule => {
    const lastBrace = rule.lastIndexOf('{');
    let selectorPart = rule.substring(0, lastBrace).trim();
    const bodyPart = rule.substring(lastBrace);
    
    if (selectorPart.startsWith('@') || selectorPart.startsWith(':root') || selectorPart.startsWith(':host')) {
      return rule;
    }
    
    const wrappedSelectors = selectorPart.split(',').map(s => {
      const sel = s.trim();
      if (sel.startsWith('@') || sel.startsWith(':')) return sel;
      return `${selector} ${sel}`;
    }).join(', ');
    
    return wrappedSelectors + bodyPart;
  }).join('\n');
}

export default defineConfig({
  build: {
    rollupOptions: {
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
      formats: ['es'],
      fileName: 'index'
    }
  },
  plugins: [
    react(),
    tailwindcss(),
    cssInjectedByJsPlugin(),
    scopeCssPlugin(),
    dts({ rollupTypes: true, copyDtsFiles: true })
  ]
});