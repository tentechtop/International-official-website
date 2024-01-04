<template>
  <div class="header_box"
       :style="{'position':position}"
       :class="[headerState.headerClass,headerState.backgroundClass,isSelecting?'isSelectingMenu':'']">

    <div  class="pc-menu">
      <div class="nav-container">
          <nuxt-link :to="localePath('/')" class="logo-space">
            <img v-if="!isSelecting" :src="theme==='nav-top'? logo['nav-top']:logo['nav-bottom']">
            <img v-if="isSelecting" :src="logo['nav-bottom']">
          </nuxt-link>

        <div class="left-menu">
          <div class="menu-space" :style="{'min-width':menuList.length*60+'px',}">



            <div v-for="(menu,index) in menuList" class="menu-item"
                 :class="{'active-menu':menu.isSelected}"

                 @click="goToTargetPage(menu)"

                 @mouseenter="addUnderline(index);isSelecting=true"
                 @mouseleave="removeUnderline(index);menu.subMenuVisible=false;isSelecting=false"
                 @mouseover="menu.subMenuVisible=true;isSelecting=true"
            >
              <p>{{ $t(menu.name)}}</p>
              <div  class="underline"></div>
              <div v-if="menu.subMeuns.length>0 " class="sub-menu"
                   @mouseleave="menu.subMenuVisible=false"
                   @mouseover="menu.subMenuVisible=true"
                   :style="{height:menu.subMenuVisible? ((Math.ceil(menu.subMeuns.length / 4)   * menu.subHeight )+    80+'px'):(0+'px')}">

                <div class="sub-select-container" :style="{'justify-content':menu.justifyContent}">

                  <div  v-for="(sub,subIndex) in menu.subMeuns" :class="`${menu.subMenuClass}`"
                        @click="gotoTargetPageBySub(menu,sub)"
                        :style="{opacity:menu.subMenuVisible? (1):(0),display:menu.subMenuVisible?(''):('none')}">
                    <div v-if="sub.imgUrl" class="select-img-box">
                      <img  :src="sub.imgUrl" :alt="t(sub.name)">
                    </div>
                    <h1>{{t(sub.name)}}</h1>
                  </div>


                </div>











              </div>
            </div>








          </div>
        </div>
        <div class="right-menu">
          <div class="switch-menu-item" @click="open=!open">
            {{CurrentLanguage.label}}
<!--            <img style="width: 20px;opacity: 1;filter: brightness(10);" src="https://file.kwunphi.com/kwunphi4/images/commons/diqiu.svg">-->
          </div>
        </div>

      </div>
    </div>

    <div  class="mobile_menu flex_r_between">
      <div class="flex_items-center">
        <directory-button
            :theme="theme"
            :active-value="headerState.drawerShow"
            @click="headerState.drawerShow = true"
            style="margin-left: 20px"
        >

        </directory-button>
      </div>


      <div class="flex_r_between drawer-container">
        <el-drawer

            title="导航"
            class="drawer-mobile_menu"
            v-model="headerState.drawerShow"
            direction="ltr"
            :before-close="handleClose"
            :append-to-body="true"
            size="60%"
            :z-index="9999"
        >




        </el-drawer>




      </div>

    </div>

    <el-dialog
        class="selectLanguageDialog"
        :title="t('foot.SelectLanguage')" v-model="open"
        append-to-body>


      <div class="select-language-container">
        <nuxt-link v-for="(langItem, langIndex) in languageList"
                   :to="getTargetDomain(langItem.language)"

                   class="select-language-item" @click="CurrentLanguage = langItem;open=false">
          <p style="color: #3b3e40;float: left;">{{ langItem.label }}</p>
          <p style="float: right;color: #9fa3a6;">{{ langItem.enName }}</p>
        </nuxt-link>
      </div>




    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import logo from "../../assets/ts/logo";
import {onMounted, reactive, ref, watch, computed, onUnmounted, onUpdated} from "vue";
import { useI18n } from "vue-i18n";
const { t, locale, locales } = useI18n()
// @ts-ignore
const localePath = useLocalePath();
// @ts-ignore
const switchLocalePath = useSwitchLocalePath();
// @ts-ignore
import allLanguage from "~/assets/ts/language";
const CurrentLanguage = ref(allLanguage.LanguageMap.get(locale.value))

const languageList = ref(allLanguage.language)



const open = ref(false)

// @ts-ignore
function getTargetDomain(language) {
  let domain
  // @ts-ignore
  if (locales && locales.length) {
    let defaultDomain
    // @ts-ignore
    for (let index = 0; index < locales.length; index++) {
      // @ts-ignore
      let item = locales[index]
      if (item.code === language) {
        domain = item.domain
        if (domain) {
          break;
        }
      } else if (item.code === 'cn') {
        defaultDomain = item.code
      } else if (!defaultDomain && item.code.startsWith('cn')) {
        defaultDomain = item.code
      }
    }
    if (!domain && defaultDomain) {
      domain = defaultDomain
    }
    if (domain) {
      return domain
    }
  }
  return switchLocalePath(language)
}






//路由
import { useRoute, useRouter } from "vue-router";
const router = useRouter()
const route = useRoute()
// @ts-ignore
import TMenu from "~/components/bar/t-menu.vue";
// @ts-ignore
import DirectoryButton from "~/components/bar/directory-button.vue";

const isSelecting = ref(false)

// 切换抽屉
const handleClose = () => {
  headerState.drawerShow = false;
};
const getPath = computed(() => {
  return  localePath(route.path) ;
});

function goToTargetPage(menu){
  if (menu.subMeuns.length>0){
  }else {
    menuList.value.forEach((mItem)=>{
      mItem.isSelected=false
    })
    menu.isSelected=true
    router.push({ path: localePath(`${menu.path}`) })
  }
}



function gotoTargetPageBySub(menu,sub){
  menuList.value.forEach((mItem)=>{
    mItem.isSelected=false
  })
  menu.isSelected=true
  if (menu.subMeuns.length>0){
    if (sub.model){
      router.push({
            path: localePath(`${sub.path}`),
            query: { model: sub.model }
          }
      )
    }else {
      router.push({path: localePath(`${sub.path}`)})
    }
  }else {
    router.push({ path: localePath(`${menu.path}`) })
  }
}


const menuList = ref([
  {
    name: 'menu.home',
    path: '/',
    subMenuVisible: false,
    isSelected:true,
    isExpand:false,
    justifyContent:"flex-start",
    subHeight:173,
    subMenuClass:"sub-menu-item",
    subMeuns: []
  },
  { name:  'menu.products',
    path: '/products',
    subMenuVisible: false,
    isSelected:false,
    isExpand:false,
    justifyContent:"flex-start",
    subHeight:173,
    subMenuClass:"sub-menu-item",
    subMeuns: [
      {
        name:"productNickname.Kwun-B33H",
        path:'/products',
        model:"Kwun-B33H",
        imgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-colourless/01.png",
      },
      {
        name:"productNickname.Kwun-B32H",
        path:'/products',
        model:"Kwun-B32H",
        imgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-colourless/01.png",
      },
      {

        name:"productNickname.Kwun-B32L",
        path:'/products',
        model:"Kwun-B32L",
        imgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-colourless/01.png",
      },
      {

        name:"productNickname.Kwun-B22H",
        path:'/products',
        model:"Kwun-B22H",
        imgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/22/bg-colourless/02.png",
      },
      {
        name:"productNickname.Kwun-B22L",
        path:'/products',
        model:"Kwun-B22L",
        imgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/22/bg-colourless/02.png",
      },
      {

        name:"productNickname.Kwun-B11L",
        path:'/products',
        model:"Kwun-B11L",
        imgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-colourless/1.png",
      },
    ]
  },
  { name:  'nav.service',
    path: '/service',
    subMenuVisible: false,
    isSelected:false,
    isExpand:false,
    justifyContent:"center",
    subMenuClass:"sub-menu-item-other",
    subHeight:120,
    subMeuns: [
      {
        name:"nav.service",
        path:'/service',
        imgUrl:"https://file.kwunphi.com/kwunphi4/images/svg/10013-icon-service-Help-and-Support.svg"
      },
      {
        name:"foot.downloadCenter",
        path:'/downloads',
        imgUrl:"https://file.kwunphi.com/kwunphi4/images/svg/10150-icon-service-Data-Lake-Store-Gen1.svg"
      },
      {
        name:"foot.helpMeChoose",
        path:'/suitable-product',
        imgUrl:"https://file.kwunphi.com/kwunphi4/images/svg/10830-icon-service-Resource-Group-List.svg"
      },





    ]
  },
  { name:  'nav.solution',
    path: '/case',
    subMenuVisible: false,
    isSelected:false,
    isExpand:false,
    justifyContent:"flex-start",
    subMenuClass:"sub-menu-item",
    subHeight:173,
    subMeuns: []
  },
  { name:  'menu.news',
    path: '/news',
    subMenuVisible: false,
    isSelected:false,
    isExpand:false,
    justifyContent:"center",
    subMenuClass:"sub-menu-item-other",
    subHeight:120,
    subMeuns: [

    ]
  },
/*  {
    name: 'menu.about',
    path: '/about',
    subMenuVisible: false,
    isSelected:false,
    isExpand:false,
    justifyContent:"flex-start",
    subHeight:173,
    subMeuns: []
  },*/

  {
    name: 'menu.contact',
    path: '/contact',
    subMenuVisible: false,
    isSelected:false,
    isExpand:false,
    justifyContent:"center",
    subMenuClass:"sub-menu-item-other",
    subHeight:120,
    subMeuns: [
      {
        name:"menu.contact",
        path:'/contact',
        imgUrl:"https://file.kwunphi.com/kwunphi4/images/svg/10013-icon-service-Help-and-Support.svg"
      },
      {
        name:"customer.leaveMessage",
        path:'/leave-message',
        imgUrl:"https://com-img-space.oss-cn-shenzhen.aliyuncs.com/svg/%E9%82%AE%E4%BB%B6.svg"
      },
      {
        name:"foot.AfterServicePolicy",
        path:'/service/after-sales-policy',
        imgUrl:"https://file.kwunphi.com/kwunphi4/images/svg/10332-icon-service-Devices.svg"
      },
      {
        name:"foot.joinUs",
        path:'/recruitment',
        imgUrl:"https://file.kwunphi.com/kwunphi4/images/svg/10261-icon-service-Azure-DevOps.svg"
      },

    ]
  },
]);

watch(route,(newValue)=>{
  menuList.value.forEach((menu)=>{
    menu.isSelected = newValue.path===menu.path
  })
})





const headerState = reactive({
  drawerShow: false,
  startScrollTop: 0,
  headerClass: "",
  activeIndex: 0,
  backgroundClass:"transparentClass"
});




const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = async (val, type) => {
  console.log("val: "+val)

/*  if (type == "mobile") {
    headerState.drawerShow = false;
  }*/


};





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



const theme = ref('nav-top')



const position = ref("fixed")//sticky


// 顶部导航固定
const scroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;




  if (route.path===localePath('/')){
    position.value='fixed'
    if (scrollTop<100){
      headerState.backgroundClass = "transparentClass"
      theme.value='nav-top'
    }else {
      headerState.backgroundClass = ""
      theme.value='nav-bottom'
    }
  }else {
    position.value='sticky'
    headerState.backgroundClass = ""
    theme.value='nav-bottom'
  }




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


<style>
.drawer-mobile_menu{

}

.drawer-mobile_menu .el-drawer__header .el-drawer__title {
  font-size: 18px;
  color: #030303;
}


.drawer-mobile_menu .el-drawer__header .el-drawer__close-btn:hover .el-drawer__close >svg  {
  color: #6C7073;
}

.drawer-mobile_menu .el-drawer__header .el-drawer__close-btn .el-drawer__close {
  height: 28px;
  width: 28px;
}
.drawer-mobile_menu .el-drawer__header .el-drawer__close-btn .el-drawer__close >svg {
  height: 28px;
  width: 28px;
  transform: rotate(0deg);
  transition: all 0.3s ease;
}


.selectLanguageDialog{
  width: 780px;
}

@media screen and (max-width: 780px){
  .selectLanguageDialog{
    width: 98%;
  }
}

.selectLanguageDialog .el-dialog__body{
  border-top: 1px solid rgba(0,0,0,0.5);
}


.selectLanguageDialog .el-dialog__header .el-dialog__title  {
  text-align: center;
}

.selectLanguageDialog .el-dialog__header   {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.selectLanguageDialog .el-dialog__header .el-dialog__headerbtn  {
  color: #6C7073;
}

.selectLanguageDialog .el-dialog__header .el-dialog__headerbtn:hover .el-dialog__close >svg  {
  color: #6C7073;
}

.selectLanguageDialog .el-dialog__header .el-dialog__headerbtn .el-dialog__close {
  height: 28px;
  width: 28px;
}
.selectLanguageDialog .el-dialog__header .el-dialog__headerbtn .el-dialog__close >svg {
  height: 28px;
  width: 28px;
  transform: rotate(0deg);
  transition: all 0.3s ease;
}


/*.selectLanguageDialog .el-dialog__header .el-dialog__headerbtn .el-dialog__close >svg:hover {
  color: #6C7073;
  transform: rotate(180deg);
}*/

</style>

<style scoped>
@import '../../styles/menu.css';
.header_box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  box-shadow: 0px -1px 3px rgba(0,0,0,0.15);
  background-color: #fff;
}

.transparentClass{
  background: rgba(0,0,0,0.1);
}

.isSelectingMenu{
  background-color: #fff;
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
