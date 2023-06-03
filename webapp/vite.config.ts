// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import VueI18n from '@intlify/unplugin-vue-i18n/vite';
import { splitVendorChunkPlugin } from 'vite'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: { transformAssetUrls }
  }),
  // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
  vuetify({
    autoImport: true,
  }),
  VueI18n({
    include: [path.resolve(__dirname, './src/locale/*.json')],
    escapeHtml: true,
  }),
  splitVendorChunkPlugin()],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vuei18nmessages: ['@intlify/unplugin-vue-i18n/messages'],
        }
      }
    }
  },
  server: {
    port: 8080,
  },
})
