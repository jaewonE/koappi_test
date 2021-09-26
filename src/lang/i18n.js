import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import langEn from 'lang/lang.en';
import langCn from 'lang/lang.cn';
 
const resources = {
    en: {
        translation: langEn
    },
    cn: {
        translation: langCn
    }
}
 
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
    });
 
export default i18n;