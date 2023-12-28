const language = [
    {language:"cn", enName:"Chinese Simplified", label:"简体中文", alias:"zh-cn", desc:"简体中文是中国大陆通用的汉字书写系统。",flag:"https://tentech.oss-cn-shenzhen.aliyuncs.com/flags/zh.svg", region: "中国大陆", isHover:false,isSelected:false},
];


//label对照
const LanguageComparison = new Map()

const LanguageMap = new Map()
language.forEach((lang)=>{
    LanguageComparison.set(lang.language,lang.label)
    LanguageMap.set(lang.language,lang)
})
export default {
    language,LanguageComparison,LanguageMap
}
