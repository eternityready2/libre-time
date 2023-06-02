import { createI18n } from 'vue-i18n';
import messages from '@intlify/unplugin-vue-i18n/messages';

export const allLocales: string[] = ['en_GB, en_US'];

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en_us',
  fallbackLocale: 'en_us',
  messages: messages
})
export default i18n;
