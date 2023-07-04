import { App } from "vue/dist/vue.js";
import en from "./langs/en";
import zh_cn from "./langs/zh_cn";
import { createI18n } from "vue-i18n";

export const setupI18n = (app: App<Element>) => {
  const i18n = createI18n({
    // legacy: false, // you must set `false`, to use Composition API
    locale: 'en', // set default locale
    fallbackLocale: 'en',
    allowComposition: true,
    messages: {
      en,
      'zh-cn': zh_cn,
    }
  });
  app.use(i18n);
};