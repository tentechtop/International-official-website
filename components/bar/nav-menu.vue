<template>
  <div class="header_box"  :class="[headerState.headerClass,headerState.backgroundClass,isSelecting?'isSelectingMenu':'']">

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
                   :style="{height:menu.subMenuVisible? ((Math.ceil(menu.subMeuns.length / 4)   * 150 )+    100+'px'):(0+'px')}">



                <div class="sub-select-container">
                  <div  v-for="(sub,subIndex) in menu.subMeuns" class="sub-menu-item"
                        @click="gotoTargetPageBySub(sub)"
                        :style="{opacity:menu.subMenuVisible? (1):(0),display:menu.subMenuVisible?(''):('none')}">

                    <div class="select-img-box">
                      <img v-if="sub.imgUrl!==null && sub.imgUrl!==''" :src="sub.imgUrl" :alt="t(sub.name)">
                    </div>

                    <h1>{{t(sub.name)}}</h1>





                  </div>
                </div>











              </div>
            </div>
          </div>
        </div>
        <div class="right-menu">
          <div class="switch-menu-item">
            菜单
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
  </div>
</template>

<script setup lang="ts">
import logo from "../../assets/ts/logo";
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

  menuList.value.forEach((mItem)=>{
    mItem.isSelected=false
  })
  menu.isSelected=true

  router.push({ path: localePath(`${menu.path}`) })
}

function gotoTargetPageBySub(sub){

  if (sub.model && sub.model!==""){
    console.log("sub"+sub.path+sub.model)
    router.push({
      path: localePath(`${sub.path}`),
      query: { model: sub.model }
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
    isSelected:true,
    isExpand:false,
    subMeuns: []
  },
  { name:  'menu.products',
    path: '/products',
    subMenuVisible: false,
    isSelected:false,
    isExpand:false,
    subMeuns: [
      {
        name:"productNickname.Kwun-B37H",
        path:'/products',
        model:"Kwun-B37H",
        imgUrl:"https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png",
      },
      {

        name:"productNickname.Kwun-B37L",
        path:'/products',
        model:"Kwun-B37L",
        imgUrl:"https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/auvijxp35hi2earsilay.png",
      },
      {

        name:"productNickname.Kwun-B63G",
        path:'/products',
        model:"Kwun-B63G",
        imgUrl:"https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png",
      },
      {

        name:"productNickname.Kwun-B62G",
        path:'/products',
        model:"Kwun-B62G",
        imgUrl:"https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png",
      },
      {

        name:"productNickname.Kwun-B33F",
        path:'/products',
        model:"Kwun-B33F",
        imgUrl:"https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png",
      },
      {

        name:"productNickname.Kwun-B33H",
        path:'/products',
        model:"Kwun-B33H",
        imgUrl:"https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-HMC-RedBlue-CN.png",
      },
    ]
  },

  {
    name: 'menu.about',
    path: '/about',
    subMenuVisible: false,
    isSelected:true,
    isExpand:false,
    subMeuns: []
  },
  {
    name: 'menu.news',
    path: '/news',
    subMenuVisible: false,
    isSelected:true,
    isExpand:false,
    subMeuns: []
  },
  {
    name: 'menu.home',
    path: '/',
    subMenuVisible: false,
    isSelected:true,
    isExpand:false,
    subMeuns: []
  },


]);





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





// 顶部导航固定
const scroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop<100){
    headerState.backgroundClass = "transparentClass"
    theme.value='nav-top'
  }else {
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
