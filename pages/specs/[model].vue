<template>
  <div class="container">

    <custom-header-nav :custom-header-info="customHeaderInfo" ></custom-header-nav>

    <div class="specs-container">
      <div class="specs-title">
        <h1>{{ $t('productSpecs.Specifications') }}</h1>
      </div>
      <div class="split-line"></div>
      <div v-for="(item,index) in  productSpecs.specs" class="specs-item container" >
        <div class="spacs-item-title">
          <h1>{{$t(item.title)}}</h1>
        </div>
        <div class="specs-content">
          <div v-for="(specs,index) in item.parameters" class="specs-item">
            <p v-if="specs.name&&!specs.value" >{{$t(specs.name)}}</p>
            <p v-if="!specs.name&&specs.value" >{{$t(specs.value)}}</p>
            <p v-if="specs.name&&specs.value" >{{$t(specs.name)}}:{{$t(specs.value)}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="interpretation">
      <p>*{{ $t('productSpecs.specsDataInterpretation.lifeAndEndurance') }}</p>
      <p>*{{ $t('productSpecs.specsDataInterpretation.shape') }}</p>
      <p>*{{ $t('productSpecs.specsDataInterpretation.standardParameters') }}</p>
      <p>{{ $t('productSpecs.specsDataInterpretation.FinalInterpretation') }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, onMounted, getCurrentInstance,onUnmounted,onBeforeMount,watch ,onUpdated,onBeforeUnmount} from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n()

import allProductSpecs from "assets/js/product/product-specs";
const route=useRoute()
const router = useRouter()


const picList = ref([
  {imgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-white/01.png"},
  {imgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-white/02.png"},
  {imgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-white/03.png"},
  {imgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-white/04.png"},
  {imgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-white/05.png"},
  {imgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-white/06.png"},

])

const productSpecs = ref(allProductSpecs.productSpecsMap.get(route.params.model));

const customHeaderInfo = ref({
  logoInfo:{
    logoStyle:{
      width:"175px",
    },
    logoRouter:"/",
    logoUrl:"",
  },
  titleInfo:{
    title:"Kwun-B33H",//如无填null
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
    height: 48,
    width:100,//默认100%宽度
    zindex:99,//层级
    backgroundColor:"rgba(0, 0, 0, 0.85)",
    opacity:1,
    top:0,//top和sticky可以实现副导航栏
    position:"sticky",//relative  absolute sticky跟随导航栏
    boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.0)",
  },
  headerContentStyle:{
    width:1180,//默认1180px宽度
  },
  menuInfo:{
    menuStyle:{
      color:"rgba(250,250,250,0.95)",
      fontWeight:"500",
      fontSize:"16px",
      marginLeft:"750px",//写px或者vw都可以 -200px是向左移动200px
      menuItemMarginLeft:"10px" //菜单之间的间距
    },
    menuList:[
      {title:"机型对比",router:"/comparison"},
      {title:"视频",router:"/video"},
      {title:"下载",router:"/downloads"},
    ],
  },
  buttonInfo:{
    buttonStyle:{
      marginRight:0,//10px的意思 按钮之间的间距
      shape:"rectangle",////rectangle 、round、square
      color:"rgba(250,255,255)"
    },
    buttonList:[
      {title:"立即购买",router:"/purchase/Kwun-B33H",id:1}
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
onBeforeMount(()=>{
  customHeaderInfo.value.titleInfo.title=t(productSpecs.value.model)
  customHeaderInfo.value.menuInfo.menuList[0].title=t('foot.productComparison')
  customHeaderInfo.value.menuInfo.menuList[1].title=t('common.video')
  customHeaderInfo.value.menuInfo.menuList[2].title=t('nav.downloads')
  customHeaderInfo.value.buttonInfo.buttonList[0].title=t('purchaseNow')
})
</script>

<style scoped>
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.specs-container{
  width: 1200px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
}
.specs-title >h1{
  margin-top: 48px;
  color: rgba(0,0,0,0.85);
  font-size: 22px;
  font-weight: 700;
}
.split-line{
  width: 100%;
  height: 1px;
  background-color: #A7A7A7;
}
.specs-item{
  padding: 8px 0;
  width: 100%;
  display: flex;
  flex-direction: row;

}
.container{
  border-bottom: 1px solid rgba(0,0,0,0.452);
}
.spacs-item-title{
  padding-top: 20px;
  padding-left: 10px;
  display: flex;
  width: calc(25%);
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.spacs-item-title >h1{
  font-size: 16px;
  font-weight: 700;
}
.specs-content{
  padding: 16px 0;
  width: calc(75%);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.specs-item{
  margin-bottom: 3px;
}
.specs-item >p{
  font-weight: 300;
  font-size: 16px;
}
.interpretation{
  width: 1200px;
  padding: 10px 0;
}
.interpretation >p{
  font-size: 14px;
  font-weight: 300;
}

@media screen and (max-width: 1260px){
  .specs-container{
    width: calc(100% - 64px);
  }
  .interpretation{
    width: calc(100% - 64px);
  }
}
@media screen and (max-width: 767px){
  .specs-container{
    width: calc(100% - 32px);
  }
  .interpretation{
    width: calc(100% - 32px);
  }
  .specs-title >h1{
    font-size: 36px;
  }
  .spacs-item-title >h1{
    font-size: 16px;
    font-weight: 700;
  }
  .specs-item >p{
    font-size: 14px;
  }
}
</style>
