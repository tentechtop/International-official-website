<template>
  <div v-if="!whiteList.includes(route.path)" class="footer-container">
    <div v-if="isOpenDrawerSelectLanguage" class="drawer-select-table-container" @click="openDrawerSelectLanguage()">
      <h2>{{ t('menu.selectLanguage') }}</h2>
      <div class="drawer-language-table-container">
        <div v-for="(languageItem, langIndex) in languageList" class="language-table-item"
             @click="CurrentLanguage = languageItem;locale=languageItem.language;openDrawerSelectLanguage()" >
          <p>{{ languageItem.label }}</p>/<p>{{ languageItem.enName }}</p>
        </div>
      </div>
    </div>


    <div  class="container">
      <div class="adaptive-container">
        <div class="contact-container">
          <div class="company-logo">
            <img src="https://file.kwunphi.com/kwunphi4/images/icon/logo1.png?x-oss-process=image/resize,m_mfit,w_300,h_50">
            <h1></h1>
          </div>

          <div class="hot-phone">
            <p>24小时服务热线</p>
            <h1>0755-27192472</h1>
          </div>
        </div>

        <div class="menu-container">
          <div class="body">
            <ul v-for="(item,index) in list" :key="index">
              <li><span>{{ t(item.title) }}</span></li>
              <li v-for="(sub,index) in item.list" :key="index">
                <nuxt-link   @click="getRouterLink(sub)">{{$t(sub.title)}}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div class="info-container">
        <div class="copy-right bottom-info">
          <p>Copyright © 2018-{{ formatDate(new Date()) }} Kwunphi 怪虫机器人 版权所有
            <a href="/">隐私政策</a>
            <a href="/">使用条款</a>
          </p>
          <p>
            <a class="icp" href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">粤ICP备2021034388号</a>
            <a class="beian" href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030702004694" target="_blank">
              <img src="https://com2024.oss-cn-shenzhen.aliyuncs.com/image/beian.png">粤公网安备 44030702004694号</a>
          </p>
        </div>
      </div>
    </div>

    <!--收纳式页脚  -->
    <div class="drawer-footer">
      <div class="goto-top">

        <div class="goto-top-button" @click="scrollToTop">
          <h1>返回顶部</h1>
          <img src="https://tentech.oss-cn-shenzhen.aliyuncs.com/svg/right-arrow-white.svg">
        </div>
        <div style="background-color: rgba(150,150,150);opacity: 0.5" class="divider"></div>
      </div>

      <div class="subscribe">




        <div class="policy-terms">
          <router-link to="/">
            <p>隐私政策</p>
          </router-link>
          <span class="terms-divider">|</span>
          <router-link to="/">
            <p>条款</p>
          </router-link>
        </div>


        <p class="website-info">Copyright © 2018-{{ formatDate(new Date()) }} Kwunphi 怪虫机器人 版权所有 </p>
        <p class="website-info"><a href="https://beian.miit.gov.cn/#/Integrated/index"
                                   target="_blank">粤ICP备2021034388号</a></p>
        <p class="website-info"><a class="beian"
                                   href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030702004694" target="_blank">
          <img src="https://tentech.oss-cn-shenzhen.aliyuncs.com/foot/beian.png">
          粤公网安备 44030702004694号</a>
        </p>
        <p class="website-info"></p>

      </div>




    </div>


  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t, locale, locales } = useI18n()
import {computed, onMounted, ref, watch} from "vue";
import { useRoute, useRouter } from "vue-router";
// @ts-ignore
const localePath = useLocalePath();
// @ts-ignore
const switchLocalePath = useSwitchLocalePath();

const router = useRouter()
const route = useRoute()
import language from "../../assets/ts/language";
const languageList = ref(language.language)
const isOpenDrawerSelectLanguage = ref(false)
const inputEmail = ref("")
const CurrentLanguage = ref(language.LanguageMap.get(locale.value))



const contactList = ref([
  { imgUrl: "https://tentech.oss-cn-shenzhen.aliyuncs.com/svg/wechat-icon-white.svg", popupImgUrl: "https://tentech.oss-cn-shenzhen.aliyuncs.com/svg/gongzhonghao.jpg"},
])

console.log("在map中获取的语言是"+CurrentLanguage.value.label)

function openDrawerSelectLanguage() {
  isOpenDrawerSelectLanguage.value = !isOpenDrawerSelectLanguage.value
  if (isOpenDrawerSelectLanguage.value) {
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = getScrollbarWidth() + 'px';
  } else {
    document.body.style.overflowY = 'auto';
    document.body.style.paddingRight = '0';
  }
}

function getScrollbarWidth() {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.width = '100px';
  scrollDiv.style.height = '100px';
  scrollDiv.style.overflow = 'scroll';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}


function goToExpandSubmenu(menu) {
  const temp = menu.isExpand
  /*  list.value.forEach((menu)=>{
      menu.isExpand=false
    })*/
  menu.isExpand = !temp
}


const scrollToTop = () => {
  const duration = 800; // 滚动持续时间（毫秒）
  const startPosition = window.scrollY;
  const startTime = performance.now();

  const animateScroll = (timestamp: number) => {
    const currentTime = timestamp - startTime;
    const progress = Math.min(currentTime / duration, 1);
    const easeProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI);
    window.scrollTo(0, startPosition - easeProgress * startPosition);

    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };
  requestAnimationFrame(animateScroll);
};
function  formatDate(date) {
  const year = date.getFullYear();
  return `${year}`;
}
const whiteList = ref(["/login", "/reset-password","/sign-up"]); // 不需要渲染的名单

const list = ref(
    [
      {
        title: "menu.hotProduct",
        isExpand:false,
        list: [
          {title:"menu.rentalLEDDisplay",path:"/products",id:1,seriesId:"rental-led-display"},
          {title:"menu.fixedInstallLEDDisplay",path:"/products",id:2,seriesId:"fixed-install-led-display"},
          {title:"menu.fineSmallPixelLEDDisplay",path:"/products",id:3,seriesId:"fines-mall-pixel-led-display"},
          {title:"menu.transparentLEDDisplay",path:"/products",id:4,seriesId:"transparent-led-display"},
          {title:"menu.iposterLEDDisplay",path:"/products",id:4,seriesId:"iposter"},
          {title:"menu.creativeDisplay",path:"/products",id:4,seriesId:"creative-display"},
        ]
      },
      {
        title: "menu.serviceAndSupport",
        isExpand:false,
        list: [
          {title:"menu.serviceGuide",path:"/service",seriesId:"guide"},
          {title:"menu.download",path:"/service",seriesId:"download"},
          {title:"menu.faq",path:"/service",seriesId:"faq"},
        ]
      },
      {
        title: "menu.newsCenter",
        isExpand:false,
        list: [
          {title:"menu.newsCenter",path:"/news",},
          {title:"menu.exhibitionEvents",path:"/news",},
        ]
      },
      {
        title: "menu.successCases",
        isExpand:false,
        list: [
          {title:"menu.successCases",path:"/case",},
          {title:"menu.classicCases",path:"/case",},
        ]
      },
      {
        title: "menu.contact",
        isExpand:false,
        list: [
          {title:"menu.contact",path:"/contact",},
          {title:"menu.feedbackAndSuggestions",path:"/",},
        ]
      },
      {
        title: "menu.about",
        isExpand:false,
        list: [
          {title:"menu.about",path:"/aboutus",},
        ]
      },
    ]
);

function getRouterLink(sub) {
  console.log("点击了")
  if (sub.seriesId && sub.seriesId!==""){
    router.push({
          path: localePath(`${sub.path}`),
          query: { model: sub.seriesId }
        }
    )
  }else {
    router.push({path: localePath(`${sub.path}`)})
  }
}

</script>

<style scoped>
@import '../../styles/foot.css';

</style>
