import 'server-only';
import type { Locale } from '@/i18n.config';

const dictionaries = {
	en: () => import('@/dictionaries/en.json').then((module) => module.default),
	de: () => import('@/dictionaries/de.json').then((module) => module.default),
};

// export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export const getDictionary = async (locale: Locale) => {
	console.log('Loading dictionary for locale:', locale);
	return dictionaries[locale]();
};
