import { createI18n } from "vue-i18n";
import es from "~/i18n/locales/es.json";
import en from "~/i18n/locales/en.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    fallbackLocale: "en",
    locale: "en",
    messages: {
      en,
      es,
    },
  });

  vueApp.use(i18n);
});
