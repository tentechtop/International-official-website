import en from "../../locales/en.js";
import zh from "../../locales/zh.js";
import ja from "../../locales/ja.js";
import kr from "../../locales/kr.js";
import fr from "../../locales/fr.js";


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
            ja,
            kr,
            fr,
        }
    }
})
