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
            <nuxt-link :to="localePath('/policy')">{{ $t('foot.globalPrivacyPolicy') }}</nuxt-link>
            <nuxt-link :to="localePath('/terms')">{{ $t('foot.termsOfUse') }}</nuxt-link>
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


      <div class="subscribe">
        <div class="policy-terms">
          <nuxt-link :to="localePath('/policy')">
            <p>{{ $t('foot.globalPrivacyPolicy') }}</p>
          </nuxt-link>
          <span class="terms-divider">|</span>
          <nuxt-link :to="localePath('/terms')">
            <p>{{ $t('foot.termsOfUse') }}</p>
          </nuxt-link>
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
          {title:"productNickname.Kwun-B33H",path:"/products/Kwun-B33H"},
          {title:"productNickname.Kwun-B32H",path:"/products/Kwun-B32H"},
          {title:"productNickname.Kwun-B32L",path:"/products/Kwun-B32L"},
          {title:"productNickname.Kwun-B22H",path:"/products/Kwun-B22H"},
          {title:"productNickname.Kwun-B22L",path:"/products/Kwun-B22L"},
          {title:"productNickname.Kwun-B11L",path:"/products/Kwun-B11L"},
        ]
      },
      {
        title: "menu.serviceAndSupport",
        isExpand:false,
        list: [
          { title: "foot.downloadCenter", path: "/downloads", },
          { title: "foot.aiKwun", path: "/app", },
          { title: "menu.faq", path: "/help", },
          { title: "foot.BIPV", path: "/situation-design/BIPV", },
          { title: "maintenance.kwunMaintenance", path: "/maintenance", },
          { title: "foot.helpMeChoose", path: "/suitable-product", },
          { title: "foot.supportedModule", path: "/kwun/supported-module", },
          { title: "foot.kwunCare", path: "/service-support/kwun-care", },
          { title: "unattended.title", path: "/unattended", },
          { title: "foot.SustainableCleaning", path: "/kwun/sustainable-cleaning", },
          { title: "foot.advantage", path: "/kwun/advantage", },
          { title: "foot.comprehensive", path: "/kwun/kwun-comprehensive", },
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
          { title: "foot.productVideos", path: "/video", },
          { title: "instructionalVideos.title", path: "/video/instructional-videos", },
          { title: "foot.onlineClassroom", path: "/course", },
        ]
      },
      {
        title: "menu.contact",
        isExpand:false,
        list: [
          {title:"menu.contact",path:"/contact",},
          { title: "customer.leaveMessage", path: "/leave-message", },
          { title: "foot.AfterServicePolicy", path: "/service/after-sales-policy", },
          { title: "liveFirstAid.FirstAid", path: "/service-support/live-first-aid", },


        ]
      },
      {
        title: "menu.about",
        isExpand:false,
        list: [
          {title:"menu.about",path:"/about",},
          { title: "foot.certificate", path: "/certificate", },
          { title: "foot.joinUs", path: "/recruitment", },
        ]
      },

    ]
);

function getRouterLink(sub) {
  if (sub.seriesId && sub.seriesId!==""){
    router.push({
          path: localePath(`${sub.path}`),
          query: { model: sub.model }
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
