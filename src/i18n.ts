import {getRequestConfig} from 'next-intl/server';

const locales = ['ko', 'zh'];

export default getRequestConfig(async ({locale}) => {
  // Validate locale
  if (!locale || !locales.includes(locale)) {
    console.log('Invalid locale:', locale, 'defaulting to ko');
    locale = 'ko';
  }
  
  console.log('Loading messages for locale:', locale);
  
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});