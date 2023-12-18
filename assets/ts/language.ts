const language = [
    {language:"zh-CN", enName:"Chinese Simplified", label:"简体中文", alias:"zh-cn", desc:"简体中文是中国大陆通用的汉字书写系统。",flag:"https://tentech.oss-cn-shenzhen.aliyuncs.com/flags/zh.svg", region: "中国大陆", isHover:false,isSelected:false},
    {language:"en-US", enName:"English", label:"English", alias:"en-us", desc:"英语是全球最为广泛使用的国际语言之一。",flag: "https://tentech.oss-cn-shenzhen.aliyuncs.com/flags/us.svg", region: "United States", isHover:false,isSelected:false},
    {language:"fr", enName:"French", label:"Français", alias:"fr-fr", desc:"Français是法语，是法国及多个非洲和加勒比海地区国家的官方语言之一。",flag: "https://tentech.oss-cn-shenzhen.aliyuncs.com/flags/fr.svg", region: "France", isHover:false,isSelected:false},
    {language:"ja", enName:"Japanese", label:"日本語", alias:"ja-jp", desc:"日本語是日本的官方语言，使用日本的独特汉字和假名书写系统。",flag: "https://tentech.oss-cn-shenzhen.aliyuncs.com/flags/ja.svg", region: "日本", isHover:false,isSelected:false},
    {language:"kr", enName:"Korean", label:"한국어", alias:"ko-kr", desc:"한국어是韩国的官方语言，使用韩文（朝鲜文）书写。",flag: "https://tentech.oss-cn-shenzhen.aliyuncs.com/flags/ko.svg", region: "대한민국", isHover:false,isSelected:false},
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
