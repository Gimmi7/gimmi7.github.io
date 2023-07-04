import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// on-demand-import [https://element-plus.org/en-US/guide/quickstart.html#on-demand-import]
import Autoimport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// on-demand css rules [https://github.com/antfu/unocss]
import Unocss from "unocss/vite";
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import path from 'path';

const pathSrc = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: { '@/': `${pathSrc}/` }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // element-plus custom namespace   [https://element-plus.org/en-US/guide/namespace.html#set-scss-css-vars]
        additionalData: `@use "@/styles/element/index.scss" as *;`
      }
    }
  },
  plugins: [
    vue(),
    Autoimport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver({ importStyle: 'sass' })] }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({ scale: 1.2, warn: true }),
      ],
      transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
      ]
    }),
  ],
});
