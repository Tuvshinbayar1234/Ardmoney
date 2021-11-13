import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation_data from './translation.js';

i18n.use(initReactI18next).init({
    resources: translation_data,
    lng: 'mn',
    useSuspense: false,
    interpolation: {
        escapeValue: false,
    },
    supportedLngs: ['mn', 'en', 'ru'],
});

export default i18n;
