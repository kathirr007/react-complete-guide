import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      // '/api/': {
      //   target: 'http://127.0.0.1:9000',
      //   // target: 'https://brdev.fly.dev',
      //   changeOrigin: true,
      // },
    },
    port: 3000,
  },
})
