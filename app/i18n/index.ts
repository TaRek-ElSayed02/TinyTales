import en from '../locales/en.json';
import ar from '../locales/ar.json';

export type Locale = 'en' | 'ar';

export const locales = {
  en,
  ar,
} as const;

export type TranslationNamespace = keyof typeof en;
export type TranslationKey = `${TranslationNamespace}.${string}` | keyof typeof en.common | keyof typeof en.validation | keyof typeof en.errors;

export const t = (key: TranslationKey, locale: Locale = 'en'): string => {
  const translations = locales[locale];

  // Support namespaced keys like 'common.welcome'
  if (typeof key === 'string' && key.includes('.')) {
    const [ns, ...rest] = key.split('.');
    const prop = rest.join('.');
    const section = (translations as any)[ns];
    if (section && prop in section) {
      return section[prop as keyof typeof section];
    }
  }

  // Backwards-compatible: allow passing plain keys like 'welcome'
  if (key in translations.common) {
    return translations.common[key as keyof typeof translations.common];
  }

  if (key in translations.validation) {
    return translations.validation[key as keyof typeof translations.validation];
  }

  if (key in translations.errors) {
    return translations.errors[key as keyof typeof translations.errors];
  }

  return String(key);
};