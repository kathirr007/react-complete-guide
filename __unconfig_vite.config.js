
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import path from 'node:path';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import Pages from 'vite-plugin-pages';
import Components from 'unplugin-react-components/vite';

import fg from 'fast-glob';
import { minimatch } from 'minimatch';

function pascalCaseWithCapitals(str) {
  return str
    .split('/')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function removeExtension(str) {
  return path.basename(str, path.extname(str));
}

function getComponentImports() {
  const directories = [
    {
      pattern: './src/components/**/*.{tsx,jsx}',
      omit: './src/components'
    },
    {
      pattern: './src/layouts/*.{tsx,jsx}',
      omit: './src/'
    }
  ];

  const entries = fg.sync(
    directories.map(x => x.pattern),
    {
      dot: true,
      objectMode: true
    }
  );

  return entries.map((entry) => {
    const dirOptions = directories.find(dir => minimatch(entry.path, dir.pattern));

    const componentName = entry.path
      .replace(new RegExp(dirOptions?.omit, 'gi'), '')
      .split('/')
      .filter(Boolean)
      .map(pascalCaseWithCapitals)
      .join('');

    const fromPath = entry.path
      .replace(/\.\/src/gi, '@');

    return {
      [fromPath]: [
        [removeExtension(entry.name), removeExtension(componentName)]
      ]
    };
  });
}

// https://vitejs.dev/config/
const __unconfig_default =  defineConfig({
  plugins: [
    AutoImport({
      dts: './auto-imports.d.ts',
      defaultExportByFilename: true,
      eslintrc: {
        enabled: true
      },
      include: [
        /\.[tj]sx?$/ // .ts, .tsx, .js, .jsx
      ],
      dirs: [
        './src/hooks'
      ],
      imports: [
        ...getComponentImports(),
        'react',
        'react-router'
      ]
    }),
    /* Components({
      dts: './components.d.ts',
      directoryAsNamespace: true,
      deep: true
    }), */
    Pages({
      extendRoute(route, parent) {
        if (route.path === '/') {
          // Index is unauthenticated.
          return route;
        }

        // Augment the route with meta that indicates that the route requires authentication.
        return {
          ...route,
          meta: { layout: 'home' }
        };
      }
    }),
    react()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      // '/api/': {
      //   target: 'http://127.0.0.1:9000',
      //   // target: 'https://brdev.fly.dev',
      //   changeOrigin: true,
      // },
    },
    port: 3000
  }
});

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;