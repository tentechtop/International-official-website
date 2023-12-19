const regionList = [
    {
        title:"Asia Pacific",
        languageList: [
            {language:"cn", label:"中国大陆", langName:"简体中文"},
        ]
    },
    {
        title:"Europe",
        languageList: [
            {language:"uk", label:"United Kingdom", langName:"English"},
        ]
    },
    {
        title:"North America",
        languageList: [
            {language:"en", label:"United States", langName:"English"},
        ]
    },

];


//label对照
const LanguageComparison = new Map()

const LanguageMap = new Map()
regionList.forEach((region)=>{
    region.languageList.forEach(langItem =>{
        LanguageComparison.set(langItem.language,langItem.label)
        LanguageMap.set(langItem.language,langItem)
    })
})
export default {
    regionList,LanguageComparison,LanguageMap
}
