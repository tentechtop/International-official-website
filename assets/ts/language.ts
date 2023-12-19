const regionList = [
    {
        title:"Asia Pacific",
        languageList: [
            {language:"cn", label:"中国大陆", langName:"简体中文",  desc:"简体中文", isHover:false,  isSelected:false},
        ]
    },
    {
        title:"Europe",
        languageList: [
            {language:"uk", label:"United Kingdom", langName:"English",   desc:"英语",    isHover:false,  isSelected:false},
        ]
    },
    {
        title:"North America",
        languageList: [
            {language:"en", label:"United States", langName:"English",   desc:"英语",    isHover:false,  isSelected:false},
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
