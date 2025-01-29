import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import fg from 'fast-glob';
import { minimatch } from 'minimatch';
import AutoImport from 'unplugin-auto-import/vite';

import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';

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
export default defineConfig({
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
