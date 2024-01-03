// @ts-ignore
const messages = import.meta.globEager('../../locales/*');


function getLocaleAll(): any {
    let message: any = {};
    for (const path in messages) {
        const locale = path.substr(path.lastIndexOf('/') + 1, 2);
        // @ts-ignore
        message[locale] = messages[path].default;
    }
    return message;
}


export default defineI18nConfig(() => {
    return {
        legacy: false,
        locale: 'cn',
        fallbackLocale: 'cn',
        messages:getLocaleAll()
    }
})
