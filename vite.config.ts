import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import postCssPxToRem from "postcss-pxtorem"
import autoprefixer from 'autoprefixer'
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5,
          propList: ['*'],
        }),
        autoprefixer({
          overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
        })
      ]
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  server: {
    proxy: {
      '/api-test': { // 代理demo
        target: 'https://wxmcard.xxx.cn/xcx/api-test',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api-test/, '/')
      },
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
