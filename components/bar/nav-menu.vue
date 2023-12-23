<template>
  <div class="header_box"  :class="headerState.headerClass">

    <div  class="pc-menu">


      <div class="nav-container">



      <nuxt-link :to="localePath('/')" class="logo-space">
        <img src="https://tentech.oss-cn-shenzhen.aliyuncs.com/logo/tentech-logo.png">
      </nuxt-link>
      <div class="menu-container">


        <div class="left-menu">

          <div class="menu-space" :style="{'min-width':menuList.length*60+'px',}">
            <div v-for="(menu,index) in menuList" class="menu-item" :class="{'active-menu':menu.isSelected}"
                 @click="goToTargetPage(menu)"
                 @mouseenter="addUnderline(index)"
                 @mouseleave="removeUnderline(index);menu.subMenuVisible=false"
                 @mouseover="menu.subMenuVisible=true"
            >
              <p :style="{color:'rgba(0,0,0,0.85)'}">{{ $t(menu.name)}}</p>
              <div  class="underline" style="background-color: rgba(0,0,0)"></div>

              <div v-if="menu.subMeuns.length>0 "   class="sub-menu"
                   @mouseleave="menu.subMenuVisible=false"
                   @mouseover="menu.subMenuVisible=true"
                   :style="{height:menu.subMenuVisible? (menu.subMeuns.length*44+'px'):(0+'px')}"
              >
                <div  v-for="(sub,subIndex) in menu.subMeuns" class="sub-menu-item"
                      @click="gotoTargetPageBySub(sub)"
                      :style="{opacity:menu.subMenuVisible? (1):(0),display:menu.subMenuVisible?(''):('none')}"
                >
                  <p>{{ t(sub.name)}}</p>
                </div>
              </div>
            </div>
          </div>

        </div>



        <div class="right-menu">

          <div class="menu-item" >
            菜单
          </div>
        </div>
      </div>

      </div>

    </div>

    <div  class="mobile_menu">


    </div>

  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref, watch, computed, onUnmounted, onUpdated} from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n()
// @ts-ignore
const localePath = useLocalePath();
// @ts-ignore
const switchLocalePath = useSwitchLocalePath();
// @ts-ignore
import allLanguage from "~/assets/ts/language";
//路由
import { useRoute, useRouter } from "vue-router";
const router = useRouter()
const route = useRoute()
// @ts-ignore
import TMenu from "~/components/bar/t-menu.vue";

function goToTargetPage(menu){

  menuList.value.forEach((mItem)=>{
    mItem.isSelected=false
  })
  menu.isSelected=true

  router.push({ path: localePath(`${menu.path}`) })
}

function gotoTargetPageBySub(sub){
  if (sub.seriesId && sub.seriesId!==""){
    router.push({
      path: localePath(`${sub.path}`),
      query: { category: sub.seriesId }
    }
    )
  }else {
    router.push({path: localePath(`${sub.path}`)})
  }
}


const menuList = ref([
  {
    name: 'menu.home',
    path: '/',
    subMenuVisible: false,
    isSelected:false,
    isExpand:false,
    subMeuns: []
  },
  { name:  'menu.products',
    path: '/products',
    subMenuVisible: false,
    isSelected:false,
    isExpand:false,
    subMeuns: [
      {name:"menu.rentalLEDDisplay",path:'/products',seriesId:"rental-led-display"},
      {name:"menu.fixedInstallLEDDisplay",path:'/products',seriesId:"fixed-install-led-display"},
      {name:"menu.fineSmallPixelLEDDisplay",path:'/products',seriesId:"fines-mall-pixel-led-display"},
      {name:"menu.transparentLEDDisplay",path:'/products',seriesId:"transparent-led-display"},
      {name:"menu.iposterLEDDisplay",path:'/products',seriesId:"iposter"},
      {name:"menu.creativeDisplay",path:'/products',seriesId:"creative-display"},
      {name:"menu.ledModule",path:'/products',seriesId:"led-module"},
      {name:"menu.ledDisplayAccessories",path:'/products',seriesId:"led-display-accessories"},
    ] },

/*  { name:  'menu.products',
    path: '/products',
    subMenuVisible: false,
    isSelected:false,
    isExpand:false,
    subMeuns: [
      {name:"menu.rentalLEDDisplay",path:'/products/rental-led-display'},
      {name:"menu.fixedInstallLEDDisplay",path:'/products/fixed-install-led-display'},
      {name:"menu.fineSmallPixelLEDDisplay",path:'/products/fines-mall-pixel-led-display'},
      {name:"menu.transparentLEDDisplay",path:'/products/transparent-led-display'},
      {name:"menu.iposterLEDDisplay",path:'/products/iposter'},
      {name:"menu.creativeDisplay",path:'/products/creative-display'},
      {name:"menu.ledModule",path:'/products/led-module'},
      {name:"menu.ledDisplayAccessories",path:'/products/led-display-accessories'},
    ] },*/
/*  { name: 'menu.case',
    path: '/case',
    subMenuVisible: false,
    isExpand:false,
    subMeuns: [
      /!*      {name:"经典案例",path:'/series?seriesId=1',seriesId:""},
            {name:"行业应用",path:'/series?seriesId=1',seriesId:""},*!/
    ] },
  { name: 'menu.service',
    path: '/service',
    subMenuVisible: false,
    isExpand:false,
    subMeuns: [
      {name:"menu.serviceGuide",path:'/service',seriesId:"guide"},
      {name:"menu.download",path:'/service',seriesId:"download"},
      {name:"menu.faq",path:'/service',seriesId:"faq"},
    ] },
  { name: 'menu.news',
    path: '/news',
    subMenuVisible: false,
    isExpand:false,
    subMeuns: [
      {name:"menu.news",path:'/news',seriesId:""},
      {name:"menu.exhibitionEvents",path:'/news',seriesId:""},
    ] },
  { name: 'menu.about',
    path: '/aboutus',
    isExpand:false,
    subMenuVisible: false,
    subMeuns: [
      {name:"menu.companyIntroduction",path:'/aboutus',seriesId:"companyIntro"},
      {name:"menu.brandQualifications",path:'/aboutus',seriesId:"certificate"},
      {name:"menu.teamServices",path:'/aboutus',seriesId:"24hours-service"},
      {name:"menu.delivery",path:'/aboutus',seriesId:"delivery"},
      /!*      {name:"社会责任",path:'/aboutus',seriesId:"responsibility"},*!/
    ] },
  { name: 'menu.contact',
    path: '/contact',
    isExpand:false,
    subMenuVisible: false,
    subMeuns: []
  }*/
]);





const headerState = reactive({
  drawerShow: false,
  startScrollTop: 0,
  headerClass: "",
  activeIndex: 0,
});




const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  router.push({ path: localePath(`${key}`) });
}







// 添加响应式数据
const menuState = reactive({
  underlinedMenuIndex: null,
});

// 添加鼠标悬停时显示下划线的函数
function addUnderline(index) {
  menuState.underlinedMenuIndex = index;
}

// 添加鼠标离开时移除下划线的函数
function removeUnderline(index) {
  menuState.underlinedMenuIndex = null;
}

// 判断是否显示下划线的函数
function isMenuUnderlined(index) {
  return menuState.underlinedMenuIndex === index;
}



function gotoTargetPage(language) {


}




// 不需要渲染的名单
const whiteList = ref(["/login", "/reset-password","/sign-up"]); // 不需要渲染的名单








// 顶部导航固定
const scroll = () => {
  let scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  const { startScrollTop } = headerState;
  if (scrollTop <= 50) {
    headerState.headerClass = "fixed-header";
    headerState.startScrollTop = scrollTop;
    return;
  }
  if (startScrollTop > scrollTop) {
    headerState.headerClass = "fixed-header";
  } else if (startScrollTop <= scrollTop) {
    headerState.headerClass = "hide-header";
  }
  headerState.startScrollTop = scrollTop;
};

onMounted(() => {
  // 页面增加滚动事件
  window.addEventListener("scroll", scroll);
});
</script>

<style scoped>
@import '../../styles/menu.css';
.header_box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 64px;
  background-color: #fff;
/*  overflow: hidden;*/
  box-sizing: border-box;
  box-shadow: 0px -1px 3px rgba(0,0,0,0.15);
  background: rgb(255, 255, 255, 0.7);
/*  background-color: transparent;*/
}

.hide-header {
  animation-name: hideHeader;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
}

.fixed-header {
  animation-name: header;
  animation-duration: 0.8s;
}
@keyframes header {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes hideHeader {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-100%);
  }
}
</style>