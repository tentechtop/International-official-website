<template>
    <div class="root-container">
        <div class="header-banner-container">
            <div class="banner-container">
                <h1>{{ $t('foot.downloadCenter') }}</h1>
                <div class="router-path">
                    <h1>{{ $t('nav.home') }}/</h1>
                    <h1>{{ $t('nav.service') }}/</h1>
                    <h1 style="color: rgba(200,200,200);">{{ $t('foot.downloadCenter') }}</h1>
                </div>
            </div>
        </div>
        <div class="directory-menu-select-container">
            <div class="directory-select-item" @click="isSelectMenu = !isSelectMenu">
                <h3>{{ currentDirectoryMenu.title }} / {{ currentSubMenu.name }} </h3>
                <img src="https://file.kwunphi.com/kwunphi4/images/commons/right-arrow-white.svg">
            </div>
        </div>
        <div class="directory-table" :style="{ height: isSelectMenu ? 'auto' : '0px' }">
            <div v-for="(directoryItem, DIndex) in menuList" class="directory-item"
                :style="{ height: isSelectMenu ? (directoryItem.isExpand ? ((directoryItem.subMenu.length * 48) + 48 + 'px') : '48px') : '0px', opacity: isSelectMenu ? 1 : 0 }">
                <div class="directory-menu-button table" @click="gotoExpand(directoryItem)">
                    <h1>{{ directoryItem.title }}</h1>
                    <img src="https://file.kwunphi.com/kwunphi4/images/commons/right-arrow-white.svg">
                </div>
                <div class="sub-menu-space"
                    :style="{ height: directoryItem.isExpand ? (directoryItem.subMenu.length) * 48 + 'px' : '0px', opacity: directoryItem.isExpand ? '1' : '0' }">
                    <div v-for="(sub, subIndex) in directoryItem.subMenu" class="sub-menu table"
                        :style="{ height: directoryItem.isExpand ? '48px' : '0px', opacity: directoryItem.isExpand ? '1' : '0' }"
                        @click="changItemSelected(directoryItem, sub, DIndex, subIndex)">
                        <h1 :style="sub.isSelected ? 'color:#fff;font-weight: 700;' : ''">{{ sub.name }}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="download-container">
            <div class="download-container2">
                <div class="directory-container">
                    <div v-for="(item, index) in menuList" class="directory-menu" :class="{ 'expand-menu': item.isExpand }"
                        :style="{ height: item.isExpand ? (item.subMenu.length * 48) + 48 + 'px' : '48px' }">
                        <div class="directory-menu-button" @click="gotoExpand(item)">
                            <h1>{{ item.title }}</h1>
                            <img src="https://file.kwunphi.com/kwunphi4/images/commons/arrow-right.svg">
                        </div>
                        <div class="sub-menu-container"
                            :style="{ height: item.isExpand ? (item.subMenu.length) * 48 + 'px' : '0px', opacity: item.isExpand ? '1' : '0' }">
                            <div v-for="(sub, subIndex) in item.subMenu" class="sub-menu"
                                :style="{ opacity: item.isExpand ? '1' : '0' }"
                                @click="changItemSelected(item, sub, index, subIndex)">
                                <h1 :style="sub.isSelected ? 'color:rgba(0,0,0,1);font-weight: 700;' : ''">{{ sub.name }}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="download-item-container">
                    <div class="download-desc">
                        <img v-if="current.iconUrl !== ''" :src="current.iconUrl">
                        <div class="txt-space">
                            <h1>{{ current.name }}</h1>
                            <h2>{{ current.desc }}</h2>
                        </div>
                    </div>
                    <div class="split-line-divi" v-if="current.iconUrl !== ''"></div>
                    <div class="download-app-space">
                        <div v-for="(item, index) in current.downLoad" class="app-item">
                            <h1>{{ item.title }}</h1>
                            <img :src="item.imgUrl">
                          <a target="_blank" :href="item.downloadUrl"> <img :src="item.storeImgUrl"></a>
                            <h2>{{ item.version }}</h2>
                            <h3>{{ item.explain }}</h3>
                        </div>
                    </div>
                    <div class="split-line-divi"></div>
                    <div v-if="current.supportedModels.length > 0" class="explain">
                        <div v-for="(item, index) in current.supportedModels" class="explain-item">
                            <h1>{{ item.name }}</h1>
                            <h2>{{ item.value }}</h2>
                        </div>
                    </div>
                    <div v-if="current.resource.length > 0 && current.resource !== null" class="resource">
                        <div v-for="(item, index) in current.resource" class="resource-item"
                            :style="index % 2 !== 1 ? 'background-color:#f3f3f3' : ''">
                            <h1>{{ item.name }}</h1>
                            <h1>{{ item.date }}</h1>
                            <a :href="item.url" target="_blank" class="download-button">
                                <img src="https://file.kwunphi.com/kwunphi4/images/commons/downloadsvg.svg">
                                <a :href="item.url" target="_blank">PDF</a>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n()
useHead({
  title: t('nav.downloads'),
  meta: [
    {name: 'keywords', content: t('seo.pages.downloads.keywords') },
    {name: 'description', content: t('seo.pages.downloads.description') }
  ],
})
const currentDirectoryMenu = ref({})
const currentSubMenu = ref({})
const isSelectMenu = ref(false)
const scrollToTop = () => {
    const duration = 500; // 滚动持续时间（毫秒）
    const startPosition = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (timestamp) => {
        const currentTime = timestamp - startTime;
        const progress = Math.min(currentTime / duration, 1);
        const easeProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI);
        window.scrollTo(0, startPosition - easeProgress * startPosition);
        if (currentTime < duration) {
            requestAnimationFrame(animateScroll);
        }
    };
    requestAnimationFrame(animateScroll);
}
const current = ref({
    iconUrl: "https://file.kwunphi.com/kwunphi4/images/commons/logo1.png",
    name: "AI-Kwun",
    desc: "AI-Kwun是一款针对机器人——Kwun的物联网app；可以在APP查看用户绑定的设备列表，设置设备的管理员，管理设备，实时感知设备上线与下线，查看设备工作状态、工作日志，摇杆实时控制设备，查看操作说明书等。",
    downLoad: [
      {
        title: t('downloads.menuList[0].subMenu[0].content.downLoad[0].title'),
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/commons/ios-download-app.png",
        storeImgUrl: "https://file.kwunphi.com/kwunphi4/images/commons/app-store.png",
        version: "1.9.20230528",
        downloadUrl:"https://apps.apple.com/us/app/ai-kwun/id1616848453",
        explain: t('downloads.menuList[0].subMenu[0].content.downLoad[0].explain'),
      },
      {
        title: t('downloads.menuList[0].subMenu[0].content.downLoad[1].title'),
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/commons/android-download-app.png",
        storeImgUrl: "https://file.kwunphi.com/kwunphi4/images/commons/android.png",
        version: "1.9.20230526",
        downloadUrl:"https://file.kwunphi.com/app/aikwun/android/aikwun-release.1.9.20230528.apk",
        explain: t('downloads.menuList[0].subMenu[0].content.downLoad[1].explain'),
      },
    ],
    supportedModels: [
        // {name:"iOS V 1.10.6",value:"需要 iOS 11.0 或更高版本。兼容iPhone 14 Pro Max、iPhone 14 Pro、iPhone 14 Plus、iPhone 14、iPhone 13 Pro Max、iPhone 13 Pro、iPhone 13、iPhone 13 mini、iPhone 12 Pro Max、iPhone 12 Pro、iPhone 12、iPhone 12 mini、iPhone 11 Pro Max、iPhone 11 Pro、iPhone 11"},
        // {name:"Android V 1.10.6",value:"需要 Android 7.0 或更高版本。兼容Samsung Galaxy S21，Samsung Galaxy S20，Samsung Galaxy S10+，Samsung Galaxy S10，Samsung Galaxy Note20，Samsung Galaxy Note10+ ，Samsung Galaxy Note9，HUAWEI Mate40 Pro，HUAWEI Mate30 Pro，HUAWEI P40 Pro，HUAWEI P30 Pro，HUAWEI P30，Honor 50 Pro，Mi 11，Mi 10，Mi MIX 4，Redmi Note 10，OPPO Find X3，OPPO Reno 4，vivo NEX 3，OnePlus 9 Pro，OnePlus 9，Pixel 6，Pixel 4，Pixel 3 XL"}
    ],
    resource: [],
});

function gotoExpand(item) {
    item.isExpand = !item.isExpand
    /*  currentDirectoryMenu.value=item*/
}

function changItemSelected(item, sub, index, subIndex) {
    menuList.value.forEach((item) => {
        item.subMenu.forEach((sub) => {
            sub.isSelected = false;
        })
    })
    sub.isSelected = true;
    current.value = sub.content
    currentSubMenu.value = sub
    currentDirectoryMenu.value = item
    isSelectMenu.value = !isSelectMenu.value
    scrollToTop()
}

const menuList = ref(
    [{
        //App下载
        title: t('downloads.menuList[0].title'),
        isExpand: false,
        subMenu: [
            {
                name: "Kwun-App", isSelected: false, content: {
                    iconUrl: "https://file.kwunphi.com/kwunphi4/images/commons/logo1.png",
                    name: "AI-Kwun",
                    desc: t('downloads.menuList[0].subMenu[0].content.desc'),
                    downLoad: [
                      {
                        title: t('downloads.menuList[0].subMenu[0].content.downLoad[0].title'),
                        imgUrl: "https://file.kwunphi.com/kwunphi4/images/commons/ios-download-app.png",
                        storeImgUrl: "https://file.kwunphi.com/kwunphi4/images/commons/app-store.png",
                        version: "1.9.20230528",
                        downloadUrl:"https://apps.apple.com/us/app/ai-kwun/id1616848453",
                        explain: t('downloads.menuList[0].subMenu[0].content.downLoad[0].explain'),
                      },
                      {
                        title: t('downloads.menuList[0].subMenu[0].content.downLoad[1].title'),
                        imgUrl: "https://file.kwunphi.com/kwunphi4/images/commons/android-download-app.png",
                        storeImgUrl: "https://file.kwunphi.com/kwunphi4/images/commons/android.png",
                        version: "1.9.20230526",
                        downloadUrl:"https://file.kwunphi.com/app/aikwun/android/aikwun-release.1.9.20230528.apk",
                        explain: t('downloads.menuList[0].subMenu[0].content.downLoad[1].explain'),
                      },
                    ],
                    supportedModels: [
                        // {name:"iOS V 1.10.6",value:"需要 iOS 11.0 或更高版本。兼容iPhone 14 Pro Max、iPhone 14 Pro、iPhone 14 Plus、iPhone 14、iPhone 13 Pro Max、iPhone 13 Pro、iPhone 13、iPhone 13 mini、iPhone 12 Pro Max、iPhone 12 Pro、iPhone 12、iPhone 12 mini、iPhone 11 Pro Max、iPhone 11 Pro、iPhone 11"},
                        // {name:"Android V 1.10.6",value:"需要 Android 7.0 或更高版本。兼容Samsung Galaxy S21，Samsung Galaxy S20，Samsung Galaxy S10+，Samsung Galaxy S10，Samsung Galaxy Note20，Samsung Galaxy Note10+ ，Samsung Galaxy Note9，HUAWEI Mate40 Pro，HUAWEI Mate30 Pro，HUAWEI P40 Pro，HUAWEI P30 Pro，HUAWEI P30，Honor 50 Pro，Mi 11，Mi 10，Mi MIX 4，Redmi Note 10，OPPO Find X3，OPPO Reno 4，vivo NEX 3，OnePlus 9 Pro，OnePlus 9，Pixel 6，Pixel 4，Pixel 3 XL"}
                    ],
                    resource: [],
                }
            },
        ]
    },
    {
      //产品使用前注意事项
        title: t('downloads.menuList[1].title'),
        isExpand: false,
        subMenu: [
            {
                name: t('downloads.menuList[1].subMenu[0].name'), isSelected: false, content: {
                    iconUrl: "",
                    name: t('downloads.menuList[1].subMenu[0].content.name'),
                    desc: t('downloads.menuList[1].subMenu[0].content.desc'),
                    downLoad: [],
                    supportedModels: [],
                    resource: [
                        { name: t('downloads.menuList[1].subMenu[0].content.resource[0].name'), date: "2023-06-28"
                          , url: t('downloads.menuList[1].subMenu[0].content.resource[0].url') },
                    ],
                }
            },
        ]
    },
    {
      //产品规格说明书下载
        title: t('downloads.menuList[2].title'),
        isExpand: false,
        subMenu: [
            {
                name: t('downloads.menuList[2].subMenu[0].name'), isSelected: false, content: {
                    iconUrl: "",
                    name: t('downloads.menuList[2].subMenu[0].content.name'),
                    desc: t('downloads.menuList[2].subMenu[0].content.desc'),
                    downLoad: [],
                    supportedModels: [],
                    resource: [
                        { name: t('downloads.menuList[2].subMenu[0].content.resource[0].name'), date: "2023-06-28",
                          url: t('downloads.menuList[2].subMenu[0].content.resource[0].url')
                        },
                        {
                            name: t('downloads.menuList[2].subMenu[0].content.resource[1].name'), date: "2023-06-28",
                            url: t('downloads.menuList[2].subMenu[0].content.resource[1].url')
                        },
                        {
                            name: t('downloads.menuList[2].subMenu[0].content.resource[2].name'), date: "2023-06-28",
                            url: t('downloads.menuList[2].subMenu[0].content.resource[2].url')
                        },
                        {
                            name: t('downloads.menuList[2].subMenu[0].content.resource[3].name'), date: "2023-06-28",
                            url: t('downloads.menuList[2].subMenu[0].content.resource[3].url')
                        },
                        {
                            name: t('downloads.menuList[2].subMenu[0].content.resource[4].name'), date: "2023-06-28",
                            url:t('downloads.menuList[2].subMenu[0].content.resource[4].url')
                        },
                        {
                            name: t('downloads.menuList[2].subMenu[0].content.resource[5].name'), date: "2023-06-28",
                            url: t('downloads.menuList[2].subMenu[0].content.resource[5].url')
                        },
                    ],
                }
            },
        ]
    },
    {
      //产品使用快速指引
        title: t('downloads.menuList[3].title'),
        isExpand: false,
        subMenu: [
            {
                name: t('downloads.menuList[3].subMenu[0].name'), isSelected: false, content: {
                    iconUrl: "",
                    name: t('downloads.menuList[3].subMenu[0].content.name'),
                    desc: t('downloads.menuList[3].subMenu[0].content.desc'),
                    downLoad: [],
                    supportedModels: [],
                    resource: [
                        { name: t('downloads.menuList[3].subMenu[0].content.resource[0].name'), date: "2023-06-28",
                          url: t('downloads.menuList[3].subMenu[0].content.resource[0].url')
                        },
                        {
                            name: t('downloads.menuList[3].subMenu[0].content.resource[1].name'), date: "2023-06-28",
                            url: t('downloads.menuList[3].subMenu[0].content.resource[1].url')
                        },
                        {
                            name: t('downloads.menuList[3].subMenu[0].content.resource[2].name'), date: "2023-06-28",
                            url: t('downloads.menuList[3].subMenu[0].content.resource[2].url')
                        },
                        {
                            name: t('downloads.menuList[3].subMenu[0].content.resource[3].name'), date: "2023-06-28",
                            url: t('downloads.menuList[3].subMenu[0].content.resource[3].url')
                        },
                        {
                            name: t('downloads.menuList[3].subMenu[0].content.resource[4].name'), date: "2023-06-28",
                            url: t('downloads.menuList[3].subMenu[0].content.resource[4].url')
                        },
                        {
                            name: t('downloads.menuList[3].subMenu[0].content.resource[5].name'), date: "2023-06-28",
                            url: t('downloads.menuList[3].subMenu[0].content.resource[5].url')
                        },
                    ],
                }
            },
        ]
    },
    {
      //产品使用说明书
        title: t('downloads.menuList[4].title'),
        isExpand: false,
        subMenu: [
            {
              //产品使用说明书
                name: t('downloads.menuList[4].subMenu[0].name'), isSelected: false, content: {
                    iconUrl: "",
                    name: t('downloads.menuList[4].subMenu[0].content.name'),
                    desc: t('downloads.menuList[4].subMenu[0].content.desc'),
                    downLoad: [],
                    supportedModels: [],
                    resource: [
                        {
                            name: t('downloads.menuList[4].subMenu[0].content.resource[0].name'), date: "2023-06-28",
                            url: t('downloads.menuList[4].subMenu[0].content.resource[0].url')
                        },
                        {
                            name: t('downloads.menuList[4].subMenu[0].content.resource[1].name'), date: "2023-06-28",
                            url: t('downloads.menuList[4].subMenu[0].content.resource[1].url')
                        },
                        {
                            name: t('downloads.menuList[4].subMenu[0].content.resource[2].name'), date: "2023-06-28",
                            url: t('downloads.menuList[4].subMenu[0].content.resource[2].url')
                        },
                        {
                            name: t('downloads.menuList[4].subMenu[0].content.resource[3].name'), date: "2023-06-28",
                            url: t('downloads.menuList[4].subMenu[0].content.resource[3].url')
                        },
                        {
                            name: t('downloads.menuList[4].subMenu[0].content.resource[4].name'), date: "2023-06-28",
                            url: t('downloads.menuList[4].subMenu[0].content.resource[4].url')
                        },
                        {
                            name: t('downloads.menuList[4].subMenu[0].content.resource[5].name'), date: "2023-06-28",
                            url: t('downloads.menuList[4].subMenu[0].content.resource[5].url')
                        },
                    ],
                }
            },
            {
              //4G网络模块APN配置说明
                name: t('downloads.menuList[4].subMenu[1].name'), isSelected: false, content: {
                    iconUrl: "",
                    name: t('downloads.menuList[4].subMenu[1].content.name'),
                    desc: t('downloads.menuList[4].subMenu[1].content.desc'),
                    downLoad: [],
                    supportedModels: [],
                    resource: [
                        { name: t('downloads.menuList[4].subMenu[1].content.resource[0].name'), date: "2023-06-28",
                          url:  t('downloads.menuList[4].subMenu[1].content.resource[0].url'), },
                    ],
                }
            },

        ]
    },
    {
      //保养手册
        title: t('downloads.menuList[5].title'),
        isExpand: false,
        subMenu: [
            {
                name: t('downloads.menuList[5].subMenu[0].name'), isSelected: false, content: {
                    iconUrl: "",
                    name: t('downloads.menuList[5].subMenu[0].content.name'),
                    desc: t('downloads.menuList[5].subMenu[0].content.desc'),
                    downLoad: [],
                    supportedModels: [],
                    resource: [
                        { name: t('downloads.menuList[5].subMenu[0].content.resource[0].name'), date: "2023-06-28",
                          url: t('downloads.menuList[5].subMenu[0].content.resource[0].url') },
                    ],
                }
            },
        ]
    },]
)
current.value = menuList.value[0].subMenu[0].content
currentDirectoryMenu.value = menuList.value[0]
currentSubMenu.value = menuList.value[0].subMenu[0]
</script>

<style scoped>
.root-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header-banner-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.85);
}

.banner-container {
    width: 1200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.banner-container>h1 {
    color: rgba(250, 250, 250);
}

.router-path {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.router-path>h1 {
    font-size: 14px;
    color: rgba(140, 140, 140);
}

.download-container {
    transition: all 0.3s ease;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f3f3f3;
}

.download-container2 {
    margin-top: 48px;
    margin-bottom: 96px;
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.directory-container {
    width: calc(30% - 16px);
    background-color: white;
    transition: all 0.3s ease;
    padding: 16px;
    position: sticky;
    display: flex;
    flex-direction: column;
}

.download-item-container {
    padding-bottom: 32px;
    width: calc(70% - 16px);
    background-color: white;
}

.directory-menu {
    height: 48px;
    width: 100%;
    transition: height 0.3s ease;
    display: flex;
    flex-direction: column;

}

.directory-menu-button {
    z-index: 999;
    height: 48px;
    width: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: height 0.3s ease;
}

.directory-menu-button>h1 {
    margin-left: 10px;
    color: rgba(0, 0, 0, 0.95);
    font-size: 16px;
}

.directory-menu-button>img {
    transition: transform 0.2s ease;
    width: 20px;
    margin-right: 20px;
    transform: rotate(0deg);
}

.expand-menu>.directory-menu-button>h1 {
    font-weight: 700;
}

.expand-menu>.directory-menu-button>img {
    transform: rotate(90deg);
}

.sub-menu-container {
    overflow: hidden;
    width: 100%;
    transition: height 0.3s ease, opacity 0.6s ease;
}

.sub-menu-space {
    overflow: hidden;
    width: 100%;
    transition: height 0.3s ease, opacity 0.6s ease;
}

.sub-menu {
    cursor: pointer;
    padding-left: 32px;
    height: 48px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.sub-menu>h1 {
    opacity: 0.75;
    font-size: 16px;
}

.download-desc {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.download-app-space {
    display: flex;
    flex-direction: row;
}

.explain {
    display: flex;
    flex-direction: column;
}

.download-desc>img {
    margin-top: 10px;
    margin-left: 10px;
    width: 100px;
    height: 100px;
    object-fit: cover;
}

.txt-space {
    margin-left: 20px;
}

.txt-space>h1 {
    margin-top: 10px;
    line-height: 40px;
    font-weight: 600;
    font-size: 20px;
    max-width: 696px;
    color: #3b3e40;
}

.txt-space>h2 {
    color: #6c7073;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    max-width: 696px;
    overflow: hidden;
}

.app-item {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.app-item>h1 {
    color: rgba(0, 0, 0, 0.75);
    font-size: 26px;
}

.app-item>h2 {
    color: rgba(0, 0, 0, 0.75);
    font-size: 16px;
}

.app-item>h3 {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
}

.app-item>img {
  width: 240px;
}

.app-item>a>img {
    cursor: pointer;
    width: 200px;
}

.explain-item {
    padding: 20px;
}

.explain-item>h1 {
    color: rgba(0, 0, 0, 0.75);
    font-size: 16px;
}

.explain-item>h2 {
    margin-top: 20px;
    color: rgba(0, 0, 0, 0.75);
    font-size: 14px;
}

.resource {
    padding: 16px;
    width: 100%;
    overflow: hidden;
}

.resource-item {
    padding: 10px 16px;
    min-height: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
}

.resource-item>h1 {
    color: rgba(0, 0, 0, 0.75);
    font-size: 16px;
}

.directory-menu-select-container {
    display: none;
}

.table>h1 {
    color: white;
    font-size: 14px;
}

.table>img {
    width: 14px;
}

.directory-table {
    display: none;
}

.download-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.download-button>img {
    width: 24px;
}

.download-button>a {
    color: rgba(0, 0, 0, 0.75);
    font-size: 16px;
}

.split-line-divi {
    margin: 16px 0;
    width: 100%;
    height: 1px;
    background-color: #cccccc;
}

@media screen and (max-width: 1260px) {
    .banner-container {
        width: calc(100% - 32px);
    }

    .download-container2 {
        width: calc(100% - 32px);
    }
}

@media screen and (max-width: 768px) {
    .directory-container {
        display: none;
    }

    .header-banner-container {
        display: none;
    }

    .download-item-container {
        width: 100%;
    }

    .directory-menu-select-container {
        padding-left: 24px;
        z-index: 999;
        top: 0px;
        position: sticky;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        width: 100%;
        background-color: black;
    }

    .directory-select-item {
        cursor: pointer;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .directory-select-item>h3 {
        font-size: 16px;
        color: white;
    }

    .directory-select-item>img {
        margin-left: 8px;
        width: 14px;
    }

    .directory-table {
        transition: height 0.3s ease, opacity 0.3s ease;
        display: flex;
        flex-direction: column;
        z-index: 997;
        top: 50px;
        position: sticky;
        background-color: #3b3e40;
        height: 500px;
        width: 100%;
    }

    .directory-item {
        transition: height 0.3s ease;
        cursor: pointer;
        padding-left: 24px;
        border-bottom: 1px solid rgba(180, 180, 180);
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: column;
    }

    .directory-item>h3 {
        font-weight: 100;
        color: white;
    }


    .download-desc>img {
        width: 70px;
        height: 70px;
        object-fit: cover;
    }


    .download-app-space {
        display: flex;
        flex-direction: column;
    }


    .app-item {
        margin-left: 0px;
    }

    .resource-item {
        padding: 16px;
    }

    .resource-item>h1 {
        font-size: 14px;
    }

    .download-button>img {
        width: 18px;
    }

    .download-button>a {

        font-size: 14px;
    }
}
</style>
