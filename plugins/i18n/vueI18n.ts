import en from "../../locales/en.js";
import zh from "../../locales/zh.js";





export default defineI18nConfig(() => {
    return {
        legacy: false,
        locale: 'en-US',
        fallbackLocale: 'en-US',
        messages: {
            en,
            zh,
            'en-US': en,
            'zh-CN': zh,
        }
    }
})
