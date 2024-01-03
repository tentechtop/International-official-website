<template>
  <div class="stickyHeader" :style="getHeaderStyle">
    <div class="header-content">


      <nuxt-link v-if="customHeaderInfo.logoInfo.logoUrl!==null && customHeaderInfo.logoInfo.logoUrl.length!==0" :to="{path:customHeaderInfo.logoInfo.logoRouter}">
        <img :style="{'width':customHeaderInfo.logoInfo.logoStyle.width}" class="header-logo" :src="customHeaderInfo.logoInfo.logoUrl" alt="" />
      </nuxt-link>


      <div v-if="customHeaderInfo.titleInfo.title!==null" class="title-space">
       <nuxt-link :to="customHeaderInfo.titleInfo.router" :style="getTitleStyle">{{customHeaderInfo.titleInfo.title}}</nuxt-link>
      </div>

      <div class="menu-container">
      <div class="menu-space">
        <ul>
          <li v-for="(item,index) in customHeaderInfo.menuInfo.menuList" :style="{'margin-left':customHeaderInfo.menuInfo.menuStyle.menuItemMarginLeft}">
            <nuxt-link :to="{path:item.router}" :style="{
            'color':customHeaderInfo.menuInfo.menuStyle.color,
            'font-weight': customHeaderInfo.menuInfo.menuStyle.fontWeight,
            }">{{item.title}}</nuxt-link>
          </li>
        </ul>
      </div>




      <div v-if="customHeaderInfo.search.enableSearch"  class="search" :style="getSearchStyle">
        <img src="https://file.kwunphi.com/kwunphi4/images/commons/loupe.svg">
        <div class="input-content">
          <input type="text" style="border: none;" placeholder="" v-model="inputQuestion">
        </div>
      </div>
      </div>


    </div>
  </div>
</template>


<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n()
const localePath = useLocalePath();
const inputQuestion = ref("")

const props = defineProps({
  customHeaderInfo: {
    required: true
  }
});

function getRouter(item){
  if (item.id!==null){
    const temp = {path:localePath(item.router),query:{productId:item.id}}
    return temp
  }else {
    return {path:localePath(item.router)}
  }
}

const getSearchStyle = computed(() => {

  const searchStyle = props.customHeaderInfo.search;
  const marginRight = searchStyle.marginRight;
  const marginLeft = searchStyle.marginLeft;
  const  color = searchStyle.color;
  return {
    height: `${searchStyle.height}px`,
    width: `${searchStyle.width}px`,
    'margin-right': marginRight,
    'margin-left': marginLeft,
     color:color,
    'font-size':searchStyle.fontSize,
    'font-weight':searchStyle.fontWeight,
    'border-color':searchStyle.borderColor,
    border:searchStyle.border,
    'border-radius':`${searchStyle.borderRadius}px`,

  };
});

const getTitleStyle = computed(() => {
  const titleStyle = props.customHeaderInfo.titleInfo.titleStyle;
  const marginRight = titleStyle.marginRight;
  const marginLeft = titleStyle.marginLeft;
  const  color = titleStyle.color;
  return {
    'margin-right': marginRight,
    'margin-left': marginLeft,
    color:color,
  };
});

const getButtonStyle = computed(() => {

  const buttonStyle = props.customHeaderInfo.buttonInfo.buttonStyle;
  const marginRight = buttonStyle.marginRight;
  const  color = buttonStyle.color;
  return {
     color:color,
    'margin-right': `${marginRight}px`,
  };

});

const getHeaderContentStyle = computed(() => {
  const headerContentStyle = props.customHeaderInfo.headerContentStyle;
  const width = props.customHeaderInfo.headerContentStyle.width
  return {
    width: `${width}px`,
  };

});

const getHeaderStyle = computed(() => {
  const headerStyle = props.customHeaderInfo.headerStyle;
  const height = headerStyle.height;
  const width = headerStyle.width;
  const zindex= headerStyle.zindex;
  const backgroundColor = headerStyle.backgroundColor; //rgba()
  const opacity = headerStyle.opacity;
  const top = headerStyle.top;
  const position = headerStyle.position;
  const boxShadow = headerStyle.boxShadow;
  return {
    height: `${height}px`,
    width: `${width}%`,
    top:`${top}px`,
    'z-index': zindex.toString(),
    'background-color' : `${backgroundColor}`,
    opacity: opacity.toString(),
    position: position,
    'box-shadow': boxShadow
  };
});

//使用该光伏组件时 可以复制该元素到页面
/*
const customHeaderInfo = ref({
  logoInfo:{
    logoStyle:{
      width:"175px",
    },
    logoRouter:"/",
    logoUrl:"https://file.kwunphi.com/kwunphi4/images/icon/logo2.png",
  },
  titleInfo:{
    title:"",//如无填null
    router:"/",
    titleStyle:{
      fontWeight:"bold",
      fontSize:"19px",
      color:"rgba(255,255,255)",
      marginLeft:"0px",//写px或者vw都可以 -200px是向左移动200px
      marginRight:"0px",//写px或者vw都可以 -200px是向左移动200px
    }
  },
  headerStyle:{
    height: 66,
    width:100,//默认100%宽度
    zindex:99,//层级
    backgroundColor:"rgba(255, 255, 255, 1)",
    opacity:1,
    top:0,//top和sticky可以实现副导航栏
    position:"relative",//relative  absolute sticky跟随导航栏
    boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.3)",
  },
  headerContentStyle:{
    width:1180,//默认1180px宽度
  },
  menuInfo:{
    menuStyle:{
      color:"rgba(0,0,0,0.95)",
      fontWeight:"bold",
      fontSize:"16px",
      marginLeft:"-550px",//写px或者vw都可以 -200px是向左移动200px
      menuItemMarginLeft:"10px" //菜单之间的间距
    },
    menuList:[
      {title:"推荐",router:"/recruitment"},
      {title:"产品系列",router:"/recruitment"},
      {title:"技术支持",router:"/recruitment"},
    ],
  },
  buttonInfo:{
    buttonStyle:{
      marginRight:10,//10px的意思 按钮之间的间距
      shape:"rectangle",////rectangle 、round、square
      color:"rgba(250,255,255)"
    },
    buttonList:[
      {title:"联系我们",router:"/contact"}
    ]
  },
  search: {
    enableSearch:false,  //开启搜索
    placeholder:"搜索课程",
    borderColor:"rgba(255,255,255)",
    border:"1px solid rgba(255,255,255)",
    color:"rgba(255,255,255)",
    borderRadius:50,
    height: 30,
    width:230,
    fontSize:"16px",
    fontWeight:"bold",
    marginLeft:"0px",//写px或者vw都可以 -200px是向左移动200px
    marginRight:"0px",//写px或者vw都可以 -200px是向左移动200px
  }
});

*/



</script>

<style scoped>
.stickyHeader{
  transition: all 0.3s ease;
  width: 100%;
  top: 0;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* 添加阴影样式 */
}
.header-content {
  transition: all 0.3s ease;
  width: 1200px;
  min-width: 0;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.header-logo{
  width: 140px;
}
.menu-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.menu-space {
  transition: all 0.3s ease;
}
.menu-space >ul{
  display: flex;
  flex-direction: row;
}

.menu-space >ul >li{
  transition: all 0.3s ease;
  margin-right: 20px;
  margin-left: 20px;
}
.menu-space >ul >li >a{
  color: rgba(0,0,0,0.9);
}
.button-space{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.menu-button{
  padding: 3px 8px;
  background-color: #1144FF;
}
.menu-button>p{
  color: white;
}
.title-space{
  cursor: pointer;
}
.title-space>a{
  font-size: 18px;
  font-weight: 700;
}
.search{
  cursor: pointer;
  width: 130px;
  height: 30px;
  border: 1px solid white;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.search>img{
  width: 22px;
  opacity: 1;
  margin-left: 5px;
}
.input-content{
  height: 45px;
  width: 185px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.input-content >p{
  font-size: 18px;
  color: rgba(0,0,0,0.45);
}
.input-content >input{
  outline: none;
  height: 28px;
  font-size: 16px;
  color: rgba(255,255,255,1);
  background-color: rgba(0,0,0,0.75);
}
@media screen and (max-width: 1200px) {
  .header-content {
    width: calc(100% - 32px);
  }
}
@media screen and (max-width: 767px){
  .menu-space >ul >li{
    margin-right: 10px;
    margin-left: 10px;
  }
}
@media screen and (max-width: 480px){
  .menu-space >ul >li{
    margin-right: 2px;
    margin-left: 2px;
  }
  .menu-button>p{
    font-size: 13px;
  }
  .menu-space >ul >li >a{
    font-size: 13px;
  }
  .title-space>a{
    font-size: 16px;
  }

}
</style>
