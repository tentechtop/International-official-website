<template>
  <div class="learning">
    <!--点击了解跟多跳转到这里-->
<!--    <custom-header-nav :custom-header-info="customHeaderInfo" ></custom-header-nav>-->


    <div class="sticky-header">
      <div class="header-content">
        <h1>{{ ProductList[productId - 1].productName }}</h1>
        <div class="button-space">
          <nuxt-link to="/#">配件</nuxt-link>
          <nuxt-link to="/specs/Kwun-B33H">产品规格参数</nuxt-link>
          <nuxt-link to="/#">视频</nuxt-link>
          <nuxt-link to="/#">下载</nuxt-link>
          <nuxt-link to="/#">常见问题</nuxt-link>
        </div>
      </div>
    </div>
    <div class="video-content">
      <div class="video-txt-space">
        <h1>{{ ProductList[productId - 1].productName }}</h1>
        <h2>{{ ProductList[productId - 1].productDesc }}</h2>
        <div class="video-button-space"
          style="display: flex;flex-direction: row;justify-content: space-between;margin-top: 10px">

        </div>
      </div>
      <video ref="videoPlayer" autoplay loop muted :style="videoStyle" :src="videoSrc"></video>
    </div>

    <div class="product-content">
      <div class="introduction1">
        <h1>{{ ProductList[productId - 1].intro.introTxt1 }}</h1>

        <div class="parameterElements">
          <div v-for="(item, index) in  ProductList[productId - 1].intro.introParameterList1" class="parameterElement">
            <img :src="item.imgUrl">
            <h2>{{ item.txt }}</h2>
            <h2>{{ item.specificValues }}</h2>
          </div>


        </div>

        <div class="parameterElements" style="margin-top: 2700px">
          <div v-for="(item, index) in ProductList[productId - 1].intro.introParameterList2" class="parameterElement">
            <img :src="item.imgUrl">
            <h2>{{ item.txt }}</h2>
            <h2>{{ item.specificValues }}</h2>
          </div>
        </div>
        <h3>{{ ProductList[productId - 1].intro.introTxt2 }}</h3>
      </div>
      <div class="product-pic">
        <img src="https://dji-official-fe.djicdn.com/dps/bad1e5a4d479357204ae68f6cca736a3.png">
      </div>
    </div>

    <div class="introduction2">
      <img style="z-index: 1" src="https://dji-official-fe.djicdn.com/dps/59aad1010104df47c8da14b0a139a96d.jpg">
      <div v-for="(item, index) in ProductList[productId - 1].intro.designerSpeechList" class="introduction2-card">
        <h1>{{ item.txt1 }}</h1>
        <h1>{{ item.txt2 }}</h1>
      </div>
    </div>

    <div class="introduction3">
      <h1 style="margin-bottom: 20px">{{ ProductList[productId - 1].intro.workingEnvironmentTitle }}</h1>
      <bar-menu-slide :content-items="ProductList[productId - 1].intro.contentItems"
        :menu-items="ProductList[productId - 1].intro.menuItems"></bar-menu-slide>
    </div>

    <div class="introduction4">
      <div style="height: 800px;width: 100%;">
        <product-pic-swiper :pic-list="ProductList[productId - 1].intro.picList"></product-pic-swiper>
      </div>
    </div>

    <div class="introduction5">
      <h1>{{ ProductList[productId - 1].intro.workingEnvironmentTitle1 }}</h1>
      <product-video-swiper :content-items="ProductList[productId - 1].intro.contentVideoItems"
        :menu-items="ProductList[productId - 1].intro.menuVideoItems"></product-video-swiper>
    </div>

    <div class="introduction6">
      <img :style="getDynamicStyle" :src="ProductList[productId - 1].intro.progressivePicUrl" alt="Image" />
      <h1>{{ ProductList[productId - 1].intro.progressiveTitle }}</h1>
    </div>

    <div class="introduction7">
      <h1>不知道哪款堒-最适合您？</h1>
      <product-kwun-select :content-items="ProductList[productId - 1].intro.KwuncontentItems"
        :menu-items="ProductList[productId - 1].intro.KwunmenuItems"></product-kwun-select>

      <div class="Kwun-Buy-button">
        <nuxt-link to="/">




        </nuxt-link>
        <nuxt-link to="/">

          </nuxt-link>
      </div>
    </div>

    <div class="introduction8">
      <h1>{{ ProductList[productId - 1].productName }}</h1>
      <h2>{{ ProductList[productId - 1].productDesc1 }}</h2>
      <img src="https://dji-official-fe.djicdn.com/cms/uploads/15e4079725f066822e37c6e7e2106fb2.png">

      <div class="tag-space" style="display:flex;flex-direction: row;justify-content: center;align-items: center">

        <div v-for="(item, index) in ProductList[productId - 1].intro.tagList1" class="tag">
          {{ item.tagname }}
        </div>
      </div>
      <div class="tag-space" style="display:flex;flex-direction: row;justify-content: center;align-items: center">
        <div v-for="(item, index) in ProductList[productId - 1].intro.tagList2" class="tag">
          {{ item.tagname }}
        </div>
      </div>
      <h1>¥{{ ProductList[productId - 1].intro.presaleprice }} 起</h1>
      <nuxt-link :to="{ path: '/purchase/Kwun-B33H', query: { productId: productId } }"></nuxt-link>
    </div>

    <div class="introduction9">
      <div class="split-line9"
        style="height: 1px;width: 80%;background-color: rgba(200,200,200,0.8);color: rgba(200,200,200,0.8);margin-top: -50px">
      </div>

      <div class="introduction9-content">
        <div v-for="(item, index) in ProductList[productId - 1].intro.serveList" class="introduction9-item"
          style="display: flex;flex-direction: column;justify-content: center;align-items: center;margin-right: 50px">
          <img :src="item.imgUrl">
          <h1 style="color: white;margin-top: 20px">{{ item.serveName }}</h1>
          <nuxt-link to="/" style="color: rgba(2,150,255);margin-top: 10px">{{ item.serveButton }}</nuxt-link>
        </div>
      </div>
    </div>

    <div class="introduction10">
      <div class="introduction10-content">
        <h1>{{ ProductList[productId - 1].intro.tips.tip1 }}</h1>
        <h1>{{ ProductList[productId - 1].intro.tips.tip2 }}</h1>
        <h1>{{ ProductList[productId - 1].intro.tips.tip3 }}</h1>
        <h1>{{ ProductList[productId - 1].intro.tips.tip4 }}</h1>
        <h1>{{ ProductList[productId - 1].intro.tips.tip5 }}</h1>
        <h1>{{ ProductList[productId - 1].intro.tips.tip6 }}</h1>
        <h1>{{ ProductList[productId - 1].intro.tips.tip7 }}</h1>
        <h1>{{ ProductList[productId - 1].intro.tips.tip8 }}</h1>
        <h1>{{ ProductList[productId - 1].intro.tips.tip9 }}</h1>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute()

const productId = ref(Number(route.query.productId) || 0)



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
/*      {title:"联系我们",router:"/contact"}*/
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



watch(
    () => router.currentRoute.value, // 监听路由对象的变化
    (to, from) => {
      // 在路由变化时执行的逻辑
      productId.value=1
    }
);


watch(
    () => router.currentRoute.value.path,
    (newValue) => {
      productId.value=1
    }
);



onMounted(() => {


});







const ProductList = ref([
  {
    productId: 1,
    productName: "Kwun-B33H",
    productDesc: "高效清洁",
    productDesc1: "清洁三板斧",
    intro: {
      introTxt1: "B33H实力再攀高峰，清洁能力和效率在同行业遥遥领先，B33H是一款创新的清洁设备，旨在提供卓越的清洁能力和高效率的工作表现。作为同行业的领先者，B33H以其卓越的功能和性能，让您的清洁工作变得轻松而高效。",
      introTxt2: "该产品采用先进的清洁技术，结合高效的清洁系统，能够彻底清洁各种表面，包括地板、墙壁、玻璃等。无论是家庭清洁还是商业清洁，B33H都能轻松胜任，确保您的环境清洁无比。",
      introParameterList1: [{
        imgUrl: "https://dji-official-fe.djicdn.com/dps/5b92869489fb1cb44cbe1194c61c7fca.svg",
        txt: "续航时间",
        specificValues: "90分钟"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/3d4efacf3382e67c297c6eca356f5943.svg",
        txt: "清洁效率",
        specificValues: "90/平方米"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/8ed2737afeb032d662137753f68d7a93.svg",
        txt: "充电时长",
        specificValues: "90/平方米"
      }],
      introParameterList2: [{
        imgUrl: "https://dji-official-fe.djicdn.com/dps/5b92869489fb1cb44cbe1194c61c7fca.svg",
        txt: "续航时间",
        specificValues: "90分钟"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/3d4efacf3382e67c297c6eca356f5943.svg",
        txt: "清洁效率",
        specificValues: "90/平方米"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/8ed2737afeb032d662137753f68d7a93.svg",
        txt: "充电时长",
        specificValues: "90/平方米"
      }],
      designerSpeechList: [
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        },
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        },
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        }],
      workingEnvironmentTitle: "堒-天下第一，大有可为",
      menuItems: ['商业屋顶', '高桩电站', '漂浮电站'],
      contentItems: [
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },

        ],
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },
        ],
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },
        ]
      ],
      picList: [
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", },
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", },
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", }],
      workingEnvironmentTitle1: "轻松应对各种环境",
      menuVideoItems: ['商业屋顶', '高桩电站', '漂浮电站'],
      contentVideoItems: [
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/74f6a3d48e862c79ea842f7372788b98.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/9286ea74-82a5-4d60-a247-98a9430a41f5.mp4",
          },
        ],
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/bbdd4a2cba0c4cb00128c89cb3187d59.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/0875fc2c-9c98-45eb-8cb4-9d2b9cc8ead7.mp4",
          },

        ],
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/bbdd4a2cba0c4cb00128c89cb3187d59.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/0875fc2c-9c98-45eb-8cb4-9d2b9cc8ead7.mp4",
          },
        ]
      ],
      progressiveTitle: "技术过硬，无所畏惧",
      progressivePicUrl: "https://dji-official-fe.djicdn.com/dps/978531960d43e80d6aff5e057c531098.jpg",
      KwunmenuItems: ['新款推荐', '性价比高', '高能高效'],
      KwuncontentItems:  [
        [
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-colourless/01.png",
            purchaseRouter: "/purchase/Kwun-B33H",
            productId: 1,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-colourless/01.png",
            purchaseRouter: "/purchase/Kwun-B32H",
            productId: 2,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-colourless/01.png",
            purchaseRouter: "/purchase/Kwun-B32L",
            productId: 3,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/22/bg-colourless/02.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 4,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          }
        ],
        [
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-colourless/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 2,
            name: 'B11L',
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          },
        ],
        [
            {
          img: "https://file.kwunphi.com/kwunphi4/images/kwun/22/bg-colourless/02.png",
          purchaseRouter: "/purchase/Kwun-B22H",
          productId: 2,
          name: 'B22H',
          specs:[
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
              title:"常规参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
              title:"续航参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
              title:"清洁参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"详细参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"核心技术",
              parameters:[
                {name:"光伏组件清洗角度",value:""},
                {name:"环境适应温度",value:""},
                {name:"设备防护等级",value:""},
                {name:"安全无隐裂",value:""},
              ]
            },
            {
              iocImgUrl:"",
              title:"寿命续航",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"清洁能力",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"外观",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"操控",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"安全",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
          ]
        },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-colourless/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 2,
            name: 'B11L',
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          }]
      ],
      videoList: [],
      tagList1: [{ tagname: "高效清洁" }, { tagname: "小霸王" }, { tagname: "无敌手" }, { tagname: "高级货" }],
      tagList2: [{ tagname: "高效清洁" }, { tagname: "小霸王" }, { tagname: "无敌手" }],
      presaleprice: 13888,
      serveList: [{
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/7989c8f82bca8b1cd42855f79c97c1fd.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"
      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/832ee7f136e81852be954c9af31973ab.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"

      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/5b72e9c265054b0b291d94fefed0c4b4.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"


      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/8fbd84b73d12b440e859ddf3c80c0ab0.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"


      }],
      tips: {
        tipTitlt: "温馨提示",
        tip1: "* 本页面所列出的各项参数数值，均为量产版 DJI Mavic 3 Pro 飞行器在受控测试环境下测得，在不同的外部环境、使用方式、固件版本下，结果或有不同程度的差异，请以实际体验为准。",
        tip2: "** 本页面所有视频和图片均在严格遵守当地相关法律法规的情况下拍摄，其中包含野生动物的样片均在安全距离内拍摄。样片仅供示意，请以实际拍摄效果为准。请了解当地相关法律法规并确保飞行器具备相关认证后再开始飞行。",
        tip3: "1. 仅 DJI Mavic 3 Pro Cine 支持。",
        tip4: "2. 该数据使用 Mavic 3 Pro 在无风环境下、于海平面以 32.4 公里/小时的速度匀速飞行至剩余 0% 电量测得，仅供参考，实际飞行时请留意 DJI Fly app 上的返航提示。",
        tip5: "3. 在室外空旷无干扰环境下测得，15 公里传输距离仅在 FCC 标准下实现；中国大陆地区采用 SRRC 标准，最远图传通信距离为 8 公里；以上数据为各标准下单程不返航飞行的最远通信距离，实际飞行时请留意 DJI Fly app 上的返航提示。",
        tip6: "4. 在拍摄分辨率高于 4K 或拍摄帧率高于 60fps 情况下，智能跟随功能无法使用。",
        tip7: "5. 实际可用储存空间会因系统配置占用等原因而减少，详情请见 Mavic 3 Pro 技术参数。",
        tip8: "6. 请勿在大风（风速 13.8 米/秒及以上）、下雪、下雨、雷电、有雾等恶劣天气飞行。请勿在海拔 6000 米以上地区飞行。请勿在 -10℃ 以下或 40℃ 以上环境中飞行。请勿在移动的物体表面起飞（例如行进中的汽车、船只）。请勿在水面或雪地等镜面反射区域飞行，以保证视觉定位系统正常工作。GNSS 信号弱时，请在光照良好的环境中飞行。环境光线暗可能导致视觉系统无法正常工作。请勿在电磁干扰源附近飞行。常见的电磁干扰源包括高压电线、高压输电站、雷达站、移动电话基站、广播信号塔、Wi-Fi 热点、路由器、蓝牙设备等。在沙漠、沙滩表面起飞需小心，避免沙尘进入飞行器内部。在远离人群的开阔区域飞行时，避免建筑物、山体、树林干扰 GNSS 信号及飞行器指南针。",
        tip9: "7. 需单独购买。",
        tip10: "8. 需单独购买。",
      },
      introParameter1: {
        CoreTechnology1: "基于TianyunOS操作系统",
        CoreTechnology2: "基于Glass vSLAM视觉导航技术",
        CoreTechnology3: "基于Goodzenn路径规划技术",
        CoreTechnology4: "基于Al-kwun操作平台",
        CoreTechnology5: "基于OTA-Kwun操作平台",
        CoreTechnology6: "基于Glass vSLAM视觉导航技术",
      },
      introParameter2: {
        CleaningAbility1: ">=85%",
        CleaningAbility2: "基于Glass vSLAM视觉导航技术",
        CleaningAbility3: "基于Goodzenn路径规划技术",
        CleaningAbility4: "基于Al-kwun操作平台",
        CleaningAbility5: "基于OTA-Kwun操作平台",
        CleaningAbility6: "基于Glass vSLAM视觉导航技术",
      },
    },



  }, {
    productId: 2,
    productName: "Kwun-B33L",
    productDesc: "高效清洁",
    productDesc1: "清洁三板斧",
    intro: {
      introTxt1: "B33H实力再攀高峰，清洁能力和效率在同行业遥遥领先，B33H是一款创新的清洁设备，旨在提供卓越的清洁能力和高效率的工作表现。作为同行业的领先者，B33H以其卓越的功能和性能，让您的清洁工作变得轻松而高效。",
      introTxt2: "该产品采用先进的清洁技术，结合高效的清洁系统，能够彻底清洁各种表面，包括地板、墙壁、玻璃等。无论是家庭清洁还是商业清洁，B33H都能轻松胜任，确保您的环境清洁无比。",
      introParameterList1: [{
        imgUrl: "https://dji-official-fe.djicdn.com/dps/5b92869489fb1cb44cbe1194c61c7fca.svg",
        txt: "续航时间",
        specificValues: "90分钟"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/3d4efacf3382e67c297c6eca356f5943.svg",
        txt: "清洁效率",
        specificValues: "90/平方米"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/8ed2737afeb032d662137753f68d7a93.svg",
        txt: "充电时长",
        specificValues: "90/平方米"
      }],
      introParameterList2: [{
        imgUrl: "https://dji-official-fe.djicdn.com/dps/5b92869489fb1cb44cbe1194c61c7fca.svg",
        txt: "续航时间",
        specificValues: "90分钟"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/3d4efacf3382e67c297c6eca356f5943.svg",
        txt: "清洁效率",
        specificValues: "90/平方米"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/8ed2737afeb032d662137753f68d7a93.svg",
        txt: "充电时长",
        specificValues: "90/平方米"
      }],
      designerSpeechList: [
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        },
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        },
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        }],
      workingEnvironmentTitle: "堒-天下第一，大有可为",
      menuItems: ['商业屋顶', '高桩电站', '漂浮电站'],
      contentItems: [
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },

        ],
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },
        ],
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },
        ]
      ],
      picList: [
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", },
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", },
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", }],
      workingEnvironmentTitle1: "轻松应对各种环境",
      menuVideoItems: ['商业屋顶', '高桩电站', '漂浮电站'],
      contentVideoItems: [
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/74f6a3d48e862c79ea842f7372788b98.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/9286ea74-82a5-4d60-a247-98a9430a41f5.mp4",
          },
        ],
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/bbdd4a2cba0c4cb00128c89cb3187d59.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/0875fc2c-9c98-45eb-8cb4-9d2b9cc8ead7.mp4",
          },

        ],
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/bbdd4a2cba0c4cb00128c89cb3187d59.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/0875fc2c-9c98-45eb-8cb4-9d2b9cc8ead7.mp4",
          },
        ]
      ],
      progressiveTitle: "技术过硬，无所畏惧",
      progressivePicUrl: "https://dji-official-fe.djicdn.com/dps/978531960d43e80d6aff5e057c531098.jpg",
      KwunmenuItems: ['新款推荐', '性价比高', '高能高效'],
      KwuncontentItems:  [
        [
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 1,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 2,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 3,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 4,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          }
        ],
        [
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 2,
            name: 'B11L',
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          },
        ],
        [{
          img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
          purchaseRouter: "/purchase/Kwun-B11L",
          productId: 2,
          name: 'B11L',
          specs:[
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
              title:"常规参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
              title:"续航参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
              title:"清洁参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"详细参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"核心技术",
              parameters:[
                {name:"光伏组件清洗角度",value:""},
                {name:"环境适应温度",value:""},
                {name:"设备防护等级",value:""},
                {name:"安全无隐裂",value:""},
              ]
            },
            {
              iocImgUrl:"",
              title:"寿命续航",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"清洁能力",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"外观",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"操控",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"安全",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
          ]
        },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 2,
            name: 'B11L',
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          }]
      ],
      videoList: [],
      tagList1: [{ tagname: "高效清洁" }, { tagname: "小霸王" }, { tagname: "无敌手" }, { tagname: "高级货" }],
      tagList2: [{ tagname: "高效清洁" }, { tagname: "小霸王" }, { tagname: "无敌手" }],
      presaleprice: 13888,
      serveList: [{
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/7989c8f82bca8b1cd42855f79c97c1fd.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"
      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/832ee7f136e81852be954c9af31973ab.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"

      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/5b72e9c265054b0b291d94fefed0c4b4.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"


      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/8fbd84b73d12b440e859ddf3c80c0ab0.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"


      }],
      tips: {
        tipTitlt: "温馨提示",
        tip1: "* 本页面所列出的各项参数数值，均为量产版 DJI Mavic 3 Pro 飞行器在受控测试环境下测得，在不同的外部环境、使用方式、固件版本下，结果或有不同程度的差异，请以实际体验为准。",
        tip2: "** 本页面所有视频和图片均在严格遵守当地相关法律法规的情况下拍摄，其中包含野生动物的样片均在安全距离内拍摄。样片仅供示意，请以实际拍摄效果为准。请了解当地相关法律法规并确保飞行器具备相关认证后再开始飞行。",
        tip3: "1. 仅 DJI Mavic 3 Pro Cine 支持。",
        tip4: "2. 该数据使用 Mavic 3 Pro 在无风环境下、于海平面以 32.4 公里/小时的速度匀速飞行至剩余 0% 电量测得，仅供参考，实际飞行时请留意 DJI Fly app 上的返航提示。",
        tip5: "3. 在室外空旷无干扰环境下测得，15 公里传输距离仅在 FCC 标准下实现；中国大陆地区采用 SRRC 标准，最远图传通信距离为 8 公里；以上数据为各标准下单程不返航飞行的最远通信距离，实际飞行时请留意 DJI Fly app 上的返航提示。",
        tip6: "4. 在拍摄分辨率高于 4K 或拍摄帧率高于 60fps 情况下，智能跟随功能无法使用。",
        tip7: "5. 实际可用储存空间会因系统配置占用等原因而减少，详情请见 Mavic 3 Pro 技术参数。",
        tip8: "6. 请勿在大风（风速 13.8 米/秒及以上）、下雪、下雨、雷电、有雾等恶劣天气飞行。请勿在海拔 6000 米以上地区飞行。请勿在 -10℃ 以下或 40℃ 以上环境中飞行。请勿在移动的物体表面起飞（例如行进中的汽车、船只）。请勿在水面或雪地等镜面反射区域飞行，以保证视觉定位系统正常工作。GNSS 信号弱时，请在光照良好的环境中飞行。环境光线暗可能导致视觉系统无法正常工作。请勿在电磁干扰源附近飞行。常见的电磁干扰源包括高压电线、高压输电站、雷达站、移动电话基站、广播信号塔、Wi-Fi 热点、路由器、蓝牙设备等。在沙漠、沙滩表面起飞需小心，避免沙尘进入飞行器内部。在远离人群的开阔区域飞行时，避免建筑物、山体、树林干扰 GNSS 信号及飞行器指南针。",
        tip9: "7. 需单独购买。",
        tip10: "8. 需单独购买。",
      },
      introParameter1: {
        CoreTechnology1: "基于TianyunOS操作系统",
        CoreTechnology2: "基于Glass vSLAM视觉导航技术",
        CoreTechnology3: "基于Goodzenn路径规划技术",
        CoreTechnology4: "基于Al-kwun操作平台",
        CoreTechnology5: "基于OTA-Kwun操作平台",
        CoreTechnology6: "基于Glass vSLAM视觉导航技术",
      },
      introParameter2: {
        CleaningAbility1: ">=85%",
        CleaningAbility2: "基于Glass vSLAM视觉导航技术",
        CleaningAbility3: "基于Goodzenn路径规划技术",
        CleaningAbility4: "基于Al-kwun操作平台",
        CleaningAbility5: "基于OTA-Kwun操作平台",
        CleaningAbility6: "基于Glass vSLAM视觉导航技术",
      },
    },



  },
  {
    productId: 3,
    productName: "Kwun-B22H",
    productDesc: "高效清洁",
    productDesc1: "清洁三板斧",
    intro: {
      introTxt1: "B33H实力再攀高峰，清洁能力和效率在同行业遥遥领先，B33H是一款创新的清洁设备，旨在提供卓越的清洁能力和高效率的工作表现。作为同行业的领先者，B33H以其卓越的功能和性能，让您的清洁工作变得轻松而高效。",
      introTxt2: "该产品采用先进的清洁技术，结合高效的清洁系统，能够彻底清洁各种表面，包括地板、墙壁、玻璃等。无论是家庭清洁还是商业清洁，B33H都能轻松胜任，确保您的环境清洁无比。",
      introParameterList1: [{
        imgUrl: "https://dji-official-fe.djicdn.com/dps/5b92869489fb1cb44cbe1194c61c7fca.svg",
        txt: "续航时间",
        specificValues: "90分钟"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/3d4efacf3382e67c297c6eca356f5943.svg",
        txt: "清洁效率",
        specificValues: "90/平方米"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/8ed2737afeb032d662137753f68d7a93.svg",
        txt: "充电时长",
        specificValues: "90/平方米"
      }],
      introParameterList2: [{
        imgUrl: "https://dji-official-fe.djicdn.com/dps/5b92869489fb1cb44cbe1194c61c7fca.svg",
        txt: "续航时间",
        specificValues: "90分钟"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/3d4efacf3382e67c297c6eca356f5943.svg",
        txt: "清洁效率",
        specificValues: "90/平方米"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/8ed2737afeb032d662137753f68d7a93.svg",
        txt: "充电时长",
        specificValues: "90/平方米"
      }],
      designerSpeechList: [
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        },
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        },
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        }],
      workingEnvironmentTitle: "堒-天下第一，大有可为",
      menuItems: ['商业屋顶', '高桩电站', '漂浮电站'],
      contentItems: [
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },

        ],
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },
        ],
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },
        ]
      ],
      picList: [
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", },
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", },
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", }],
      workingEnvironmentTitle1: "轻松应对各种环境",
      menuVideoItems: ['商业屋顶', '高桩电站', '漂浮电站'],
      contentVideoItems: [
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/74f6a3d48e862c79ea842f7372788b98.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/9286ea74-82a5-4d60-a247-98a9430a41f5.mp4",
          },
        ],
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/bbdd4a2cba0c4cb00128c89cb3187d59.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/0875fc2c-9c98-45eb-8cb4-9d2b9cc8ead7.mp4",
          },

        ],
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/bbdd4a2cba0c4cb00128c89cb3187d59.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/0875fc2c-9c98-45eb-8cb4-9d2b9cc8ead7.mp4",
          },
        ]
      ],
      progressiveTitle: "技术过硬，无所畏惧",
      progressivePicUrl: "https://dji-official-fe.djicdn.com/dps/978531960d43e80d6aff5e057c531098.jpg",
      KwunmenuItems: ['新款推荐', '性价比高', '高能高效'],
      KwuncontentItems: [
        [
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 1,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 2,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 3,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 4,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          }
        ],
        [
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 2,
            name: 'B11L',
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          },
        ],
        [{
          img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
          purchaseRouter: "/purchase/Kwun-B11L",
          productId: 2,
          name: 'B11L',
          specs:[
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
              title:"常规参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
              title:"续航参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
              title:"清洁参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"详细参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"核心技术",
              parameters:[
                {name:"光伏组件清洗角度",value:""},
                {name:"环境适应温度",value:""},
                {name:"设备防护等级",value:""},
                {name:"安全无隐裂",value:""},
              ]
            },
            {
              iocImgUrl:"",
              title:"寿命续航",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"清洁能力",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"外观",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"操控",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"安全",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
          ]
        },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 2,
            name: 'B11L',
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          }]
      ],
      videoList: [],
      tagList1: [{ tagname: "高效清洁" }, { tagname: "小霸王" }, { tagname: "无敌手" }, { tagname: "高级货" }],
      tagList2: [{ tagname: "高效清洁" }, { tagname: "小霸王" }, { tagname: "无敌手" }],
      presaleprice: 13888,
      serveList: [{
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/7989c8f82bca8b1cd42855f79c97c1fd.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"
      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/832ee7f136e81852be954c9af31973ab.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"

      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/5b72e9c265054b0b291d94fefed0c4b4.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"


      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/8fbd84b73d12b440e859ddf3c80c0ab0.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"


      }],
      tips: {
        tipTitlt: "温馨提示",
        tip1: "* 本页面所列出的各项参数数值，均为量产版 DJI Mavic 3 Pro 飞行器在受控测试环境下测得，在不同的外部环境、使用方式、固件版本下，结果或有不同程度的差异，请以实际体验为准。",
        tip2: "** 本页面所有视频和图片均在严格遵守当地相关法律法规的情况下拍摄，其中包含野生动物的样片均在安全距离内拍摄。样片仅供示意，请以实际拍摄效果为准。请了解当地相关法律法规并确保飞行器具备相关认证后再开始飞行。",
        tip3: "1. 仅 DJI Mavic 3 Pro Cine 支持。",
        tip4: "2. 该数据使用 Mavic 3 Pro 在无风环境下、于海平面以 32.4 公里/小时的速度匀速飞行至剩余 0% 电量测得，仅供参考，实际飞行时请留意 DJI Fly app 上的返航提示。",
        tip5: "3. 在室外空旷无干扰环境下测得，15 公里传输距离仅在 FCC 标准下实现；中国大陆地区采用 SRRC 标准，最远图传通信距离为 8 公里；以上数据为各标准下单程不返航飞行的最远通信距离，实际飞行时请留意 DJI Fly app 上的返航提示。",
        tip6: "4. 在拍摄分辨率高于 4K 或拍摄帧率高于 60fps 情况下，智能跟随功能无法使用。",
        tip7: "5. 实际可用储存空间会因系统配置占用等原因而减少，详情请见 Mavic 3 Pro 技术参数。",
        tip8: "6. 请勿在大风（风速 13.8 米/秒及以上）、下雪、下雨、雷电、有雾等恶劣天气飞行。请勿在海拔 6000 米以上地区飞行。请勿在 -10℃ 以下或 40℃ 以上环境中飞行。请勿在移动的物体表面起飞（例如行进中的汽车、船只）。请勿在水面或雪地等镜面反射区域飞行，以保证视觉定位系统正常工作。GNSS 信号弱时，请在光照良好的环境中飞行。环境光线暗可能导致视觉系统无法正常工作。请勿在电磁干扰源附近飞行。常见的电磁干扰源包括高压电线、高压输电站、雷达站、移动电话基站、广播信号塔、Wi-Fi 热点、路由器、蓝牙设备等。在沙漠、沙滩表面起飞需小心，避免沙尘进入飞行器内部。在远离人群的开阔区域飞行时，避免建筑物、山体、树林干扰 GNSS 信号及飞行器指南针。",
        tip9: "7. 需单独购买。",
        tip10: "8. 需单独购买。",
      },
      introParameter1: {
        CoreTechnology1: "基于TianyunOS操作系统",
        CoreTechnology2: "基于Glass vSLAM视觉导航技术",
        CoreTechnology3: "基于Goodzenn路径规划技术",
        CoreTechnology4: "基于Al-kwun操作平台",
        CoreTechnology5: "基于OTA-Kwun操作平台",
        CoreTechnology6: "基于Glass vSLAM视觉导航技术",
      },
      introParameter2: {
        CleaningAbility1: ">=85%",
        CleaningAbility2: "基于Glass vSLAM视觉导航技术",
        CleaningAbility3: "基于Goodzenn路径规划技术",
        CleaningAbility4: "基于Al-kwun操作平台",
        CleaningAbility5: "基于OTA-Kwun操作平台",
        CleaningAbility6: "基于Glass vSLAM视觉导航技术",
      },
    },



  },
  {
    productId: 4,
    productName: "Kwun-B22L",
    productDesc: "高效清洁",
    productDesc1: "清洁三板斧",
    intro: {
      introTxt1: "B33H实力再攀高峰，清洁能力和效率在同行业遥遥领先，B33H是一款创新的清洁设备，旨在提供卓越的清洁能力和高效率的工作表现。作为同行业的领先者，B33H以其卓越的功能和性能，让您的清洁工作变得轻松而高效。",
      introTxt2: "该产品采用先进的清洁技术，结合高效的清洁系统，能够彻底清洁各种表面，包括地板、墙壁、玻璃等。无论是家庭清洁还是商业清洁，B33H都能轻松胜任，确保您的环境清洁无比。",
      introParameterList1: [{
        imgUrl: "https://dji-official-fe.djicdn.com/dps/5b92869489fb1cb44cbe1194c61c7fca.svg",
        txt: "续航时间",
        specificValues: "90分钟"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/3d4efacf3382e67c297c6eca356f5943.svg",
        txt: "清洁效率",
        specificValues: "90/平方米"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/8ed2737afeb032d662137753f68d7a93.svg",
        txt: "充电时长",
        specificValues: "90/平方米"
      }],
      introParameterList2: [{
        imgUrl: "https://dji-official-fe.djicdn.com/dps/5b92869489fb1cb44cbe1194c61c7fca.svg",
        txt: "续航时间",
        specificValues: "90分钟"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/3d4efacf3382e67c297c6eca356f5943.svg",
        txt: "清洁效率",
        specificValues: "90/平方米"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/8ed2737afeb032d662137753f68d7a93.svg",
        txt: "充电时长",
        specificValues: "90/平方米"
      }],
      designerSpeechList: [
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        },
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        },
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        }],
      workingEnvironmentTitle: "堒-天下第一，大有可为",
      menuItems: ['商业屋顶', '高桩电站', '漂浮电站'],
      contentItems: [
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },

        ],
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },
        ],
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },
        ]
      ],
      picList: [
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", },
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", },
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", }],
      workingEnvironmentTitle1: "轻松应对各种环境",
      menuVideoItems: ['商业屋顶', '高桩电站', '漂浮电站'],
      contentVideoItems: [
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/74f6a3d48e862c79ea842f7372788b98.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/9286ea74-82a5-4d60-a247-98a9430a41f5.mp4",
          },
        ],
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/bbdd4a2cba0c4cb00128c89cb3187d59.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/0875fc2c-9c98-45eb-8cb4-9d2b9cc8ead7.mp4",
          },

        ],
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/bbdd4a2cba0c4cb00128c89cb3187d59.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/0875fc2c-9c98-45eb-8cb4-9d2b9cc8ead7.mp4",
          },
        ]
      ],
      progressiveTitle: "技术过硬，无所畏惧",
      progressivePicUrl: "https://dji-official-fe.djicdn.com/dps/978531960d43e80d6aff5e057c531098.jpg",
      KwunmenuItems: ['新款推荐', '性价比高', '高能高效'],
      KwuncontentItems: [
        [
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 1,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 2,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 3,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 4,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          }
        ],
        [
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 2,
            name: 'B11L',
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          },
        ],
        [{
          img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
          purchaseRouter: "/purchase/Kwun-B11L",
          productId: 2,
          name: 'B11L',
          specs:[
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
              title:"常规参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
              title:"续航参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
              title:"清洁参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"详细参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"核心技术",
              parameters:[
                {name:"光伏组件清洗角度",value:""},
                {name:"环境适应温度",value:""},
                {name:"设备防护等级",value:""},
                {name:"安全无隐裂",value:""},
              ]
            },
            {
              iocImgUrl:"",
              title:"寿命续航",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"清洁能力",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"外观",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"操控",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"安全",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
          ]
        },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 2,
            name: 'B11L',
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          }]
      ],
      videoList: [],
      tagList1: [{ tagname: "高效清洁" }, { tagname: "小霸王" }, { tagname: "无敌手" }, { tagname: "高级货" }],
      tagList2: [{ tagname: "高效清洁" }, { tagname: "小霸王" }, { tagname: "无敌手" }],
      presaleprice: 13888,
      serveList: [{
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/7989c8f82bca8b1cd42855f79c97c1fd.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"
      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/832ee7f136e81852be954c9af31973ab.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"

      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/5b72e9c265054b0b291d94fefed0c4b4.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"


      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/8fbd84b73d12b440e859ddf3c80c0ab0.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"


      }],
      tips: {
        tipTitlt: "温馨提示",
        tip1: "* 本页面所列出的各项参数数值，均为量产版 DJI Mavic 3 Pro 飞行器在受控测试环境下测得，在不同的外部环境、使用方式、固件版本下，结果或有不同程度的差异，请以实际体验为准。",
        tip2: "** 本页面所有视频和图片均在严格遵守当地相关法律法规的情况下拍摄，其中包含野生动物的样片均在安全距离内拍摄。样片仅供示意，请以实际拍摄效果为准。请了解当地相关法律法规并确保飞行器具备相关认证后再开始飞行。",
        tip3: "1. 仅 DJI Mavic 3 Pro Cine 支持。",
        tip4: "2. 该数据使用 Mavic 3 Pro 在无风环境下、于海平面以 32.4 公里/小时的速度匀速飞行至剩余 0% 电量测得，仅供参考，实际飞行时请留意 DJI Fly app 上的返航提示。",
        tip5: "3. 在室外空旷无干扰环境下测得，15 公里传输距离仅在 FCC 标准下实现；中国大陆地区采用 SRRC 标准，最远图传通信距离为 8 公里；以上数据为各标准下单程不返航飞行的最远通信距离，实际飞行时请留意 DJI Fly app 上的返航提示。",
        tip6: "4. 在拍摄分辨率高于 4K 或拍摄帧率高于 60fps 情况下，智能跟随功能无法使用。",
        tip7: "5. 实际可用储存空间会因系统配置占用等原因而减少，详情请见 Mavic 3 Pro 技术参数。",
        tip8: "6. 请勿在大风（风速 13.8 米/秒及以上）、下雪、下雨、雷电、有雾等恶劣天气飞行。请勿在海拔 6000 米以上地区飞行。请勿在 -10℃ 以下或 40℃ 以上环境中飞行。请勿在移动的物体表面起飞（例如行进中的汽车、船只）。请勿在水面或雪地等镜面反射区域飞行，以保证视觉定位系统正常工作。GNSS 信号弱时，请在光照良好的环境中飞行。环境光线暗可能导致视觉系统无法正常工作。请勿在电磁干扰源附近飞行。常见的电磁干扰源包括高压电线、高压输电站、雷达站、移动电话基站、广播信号塔、Wi-Fi 热点、路由器、蓝牙设备等。在沙漠、沙滩表面起飞需小心，避免沙尘进入飞行器内部。在远离人群的开阔区域飞行时，避免建筑物、山体、树林干扰 GNSS 信号及飞行器指南针。",
        tip9: "7. 需单独购买。",
        tip10: "8. 需单独购买。",
      },
      introParameter1: {
        CoreTechnology1: "基于TianyunOS操作系统",
        CoreTechnology2: "基于Glass vSLAM视觉导航技术",
        CoreTechnology3: "基于Goodzenn路径规划技术",
        CoreTechnology4: "基于Al-kwun操作平台",
        CoreTechnology5: "基于OTA-Kwun操作平台",
        CoreTechnology6: "基于Glass vSLAM视觉导航技术",
      },
      introParameter2: {
        CleaningAbility1: ">=85%",
        CleaningAbility2: "基于Glass vSLAM视觉导航技术",
        CleaningAbility3: "基于Goodzenn路径规划技术",
        CleaningAbility4: "基于Al-kwun操作平台",
        CleaningAbility5: "基于OTA-Kwun操作平台",
        CleaningAbility6: "基于Glass vSLAM视觉导航技术",
      },
    },



  },
  {
    productId: 5,
    productName: "Kwun-B11H",
    productDesc: "高效清洁",
    productDesc1: "清洁三板斧",
    intro: {
      introTxt1: "B33H实力再攀高峰，清洁能力和效率在同行业遥遥领先，B33H是一款创新的清洁设备，旨在提供卓越的清洁能力和高效率的工作表现。作为同行业的领先者，B33H以其卓越的功能和性能，让您的清洁工作变得轻松而高效。",
      introTxt2: "该产品采用先进的清洁技术，结合高效的清洁系统，能够彻底清洁各种表面，包括地板、墙壁、玻璃等。无论是家庭清洁还是商业清洁，B33H都能轻松胜任，确保您的环境清洁无比。",
      introParameterList1: [{
        imgUrl: "https://dji-official-fe.djicdn.com/dps/5b92869489fb1cb44cbe1194c61c7fca.svg",
        txt: "续航时间",
        specificValues: "90分钟"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/3d4efacf3382e67c297c6eca356f5943.svg",
        txt: "清洁效率",
        specificValues: "90/平方米"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/8ed2737afeb032d662137753f68d7a93.svg",
        txt: "充电时长",
        specificValues: "90/平方米"
      }],
      introParameterList2: [{
        imgUrl: "https://dji-official-fe.djicdn.com/dps/5b92869489fb1cb44cbe1194c61c7fca.svg",
        txt: "续航时间",
        specificValues: "90分钟"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/3d4efacf3382e67c297c6eca356f5943.svg",
        txt: "清洁效率",
        specificValues: "90/平方米"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/8ed2737afeb032d662137753f68d7a93.svg",
        txt: "充电时长",
        specificValues: "90/平方米"
      }],
      designerSpeechList: [
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        },
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        },
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        }],
      workingEnvironmentTitle: "堒-天下第一，大有可为",
      menuItems: ['商业屋顶', '高桩电站', '漂浮电站'],
      contentItems: [
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },

        ],
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },
        ],
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },
        ]
      ],
      picList: [
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", },
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", },
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", }],
      workingEnvironmentTitle1: "轻松应对各种环境",
      menuVideoItems: ['商业屋顶', '高桩电站', '漂浮电站'],
      contentVideoItems: [
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/74f6a3d48e862c79ea842f7372788b98.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/9286ea74-82a5-4d60-a247-98a9430a41f5.mp4",
          },
        ],
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/bbdd4a2cba0c4cb00128c89cb3187d59.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/0875fc2c-9c98-45eb-8cb4-9d2b9cc8ead7.mp4",
          },

        ],
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/bbdd4a2cba0c4cb00128c89cb3187d59.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/0875fc2c-9c98-45eb-8cb4-9d2b9cc8ead7.mp4",
          },
        ]
      ],
      progressiveTitle: "技术过硬，无所畏惧",
      progressivePicUrl: "https://dji-official-fe.djicdn.com/dps/978531960d43e80d6aff5e057c531098.jpg",
      KwunmenuItems: ['新款推荐', '性价比高', '高能高效'],
      KwuncontentItems: [
        [
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 1,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 2,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 3,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 4,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          }
        ],
        [
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 2,
            name: 'B11L',
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          },
        ],
        [{
          img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
          purchaseRouter: "/purchase/Kwun-B11L",
          productId: 2,
          name: 'B11L',
          specs:[
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
              title:"常规参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
              title:"续航参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
              title:"清洁参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"详细参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"核心技术",
              parameters:[
                {name:"光伏组件清洗角度",value:""},
                {name:"环境适应温度",value:""},
                {name:"设备防护等级",value:""},
                {name:"安全无隐裂",value:""},
              ]
            },
            {
              iocImgUrl:"",
              title:"寿命续航",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"清洁能力",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"外观",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"操控",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"安全",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
          ]
        },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 2,
            name: 'B11L',
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          }]
      ],
      videoList: [],
      tagList1: [{ tagname: "高效清洁" }, { tagname: "小霸王" }, { tagname: "无敌手" }, { tagname: "高级货" }],
      tagList2: [{ tagname: "高效清洁" }, { tagname: "小霸王" }, { tagname: "无敌手" }],
      presaleprice: 13888,
      serveList: [{
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/7989c8f82bca8b1cd42855f79c97c1fd.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"
      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/832ee7f136e81852be954c9af31973ab.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"

      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/5b72e9c265054b0b291d94fefed0c4b4.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"


      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/8fbd84b73d12b440e859ddf3c80c0ab0.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"


      }],
      tips: {
        tipTitlt: "温馨提示",
        tip1: "* 本页面所列出的各项参数数值，均为量产版 DJI Mavic 3 Pro 飞行器在受控测试环境下测得，在不同的外部环境、使用方式、固件版本下，结果或有不同程度的差异，请以实际体验为准。",
        tip2: "** 本页面所有视频和图片均在严格遵守当地相关法律法规的情况下拍摄，其中包含野生动物的样片均在安全距离内拍摄。样片仅供示意，请以实际拍摄效果为准。请了解当地相关法律法规并确保飞行器具备相关认证后再开始飞行。",
        tip3: "1. 仅 DJI Mavic 3 Pro Cine 支持。",
        tip4: "2. 该数据使用 Mavic 3 Pro 在无风环境下、于海平面以 32.4 公里/小时的速度匀速飞行至剩余 0% 电量测得，仅供参考，实际飞行时请留意 DJI Fly app 上的返航提示。",
        tip5: "3. 在室外空旷无干扰环境下测得，15 公里传输距离仅在 FCC 标准下实现；中国大陆地区采用 SRRC 标准，最远图传通信距离为 8 公里；以上数据为各标准下单程不返航飞行的最远通信距离，实际飞行时请留意 DJI Fly app 上的返航提示。",
        tip6: "4. 在拍摄分辨率高于 4K 或拍摄帧率高于 60fps 情况下，智能跟随功能无法使用。",
        tip7: "5. 实际可用储存空间会因系统配置占用等原因而减少，详情请见 Mavic 3 Pro 技术参数。",
        tip8: "6. 请勿在大风（风速 13.8 米/秒及以上）、下雪、下雨、雷电、有雾等恶劣天气飞行。请勿在海拔 6000 米以上地区飞行。请勿在 -10℃ 以下或 40℃ 以上环境中飞行。请勿在移动的物体表面起飞（例如行进中的汽车、船只）。请勿在水面或雪地等镜面反射区域飞行，以保证视觉定位系统正常工作。GNSS 信号弱时，请在光照良好的环境中飞行。环境光线暗可能导致视觉系统无法正常工作。请勿在电磁干扰源附近飞行。常见的电磁干扰源包括高压电线、高压输电站、雷达站、移动电话基站、广播信号塔、Wi-Fi 热点、路由器、蓝牙设备等。在沙漠、沙滩表面起飞需小心，避免沙尘进入飞行器内部。在远离人群的开阔区域飞行时，避免建筑物、山体、树林干扰 GNSS 信号及飞行器指南针。",
        tip9: "7. 需单独购买。",
        tip10: "8. 需单独购买。",
      },
      introParameter1: {
        CoreTechnology1: "基于TianyunOS操作系统",
        CoreTechnology2: "基于Glass vSLAM视觉导航技术",
        CoreTechnology3: "基于Goodzenn路径规划技术",
        CoreTechnology4: "基于Al-kwun操作平台",
        CoreTechnology5: "基于OTA-Kwun操作平台",
        CoreTechnology6: "基于Glass vSLAM视觉导航技术",
      },
      introParameter2: {
        CleaningAbility1: ">=85%",
        CleaningAbility2: "基于Glass vSLAM视觉导航技术",
        CleaningAbility3: "基于Goodzenn路径规划技术",
        CleaningAbility4: "基于Al-kwun操作平台",
        CleaningAbility5: "基于OTA-Kwun操作平台",
        CleaningAbility6: "基于Glass vSLAM视觉导航技术",
      },
    },



  },
  {
    productId: 6,
    productName: "Kwun-B11L",
    productDesc: "高效清洁",
    productDesc1: "清洁三板斧",
    intro: {
      introTxt1: "B33H实力再攀高峰，清洁能力和效率在同行业遥遥领先，B33H是一款创新的清洁设备，旨在提供卓越的清洁能力和高效率的工作表现。作为同行业的领先者，B33H以其卓越的功能和性能，让您的清洁工作变得轻松而高效。",
      introTxt2: "该产品采用先进的清洁技术，结合高效的清洁系统，能够彻底清洁各种表面，包括地板、墙壁、玻璃等。无论是家庭清洁还是商业清洁，B33H都能轻松胜任，确保您的环境清洁无比。",
      introParameterList1: [{
        imgUrl: "https://dji-official-fe.djicdn.com/dps/5b92869489fb1cb44cbe1194c61c7fca.svg",
        txt: "续航时间",
        specificValues: "90分钟"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/3d4efacf3382e67c297c6eca356f5943.svg",
        txt: "清洁效率",
        specificValues: "90/平方米"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/8ed2737afeb032d662137753f68d7a93.svg",
        txt: "充电时长",
        specificValues: "90/平方米"
      }],
      introParameterList2: [{
        imgUrl: "https://dji-official-fe.djicdn.com/dps/5b92869489fb1cb44cbe1194c61c7fca.svg",
        txt: "续航时间",
        specificValues: "90分钟"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/3d4efacf3382e67c297c6eca356f5943.svg",
        txt: "清洁效率",
        specificValues: "90/平方米"
      },
      {
        imgUrl: "https://dji-official-fe.djicdn.com/dps/8ed2737afeb032d662137753f68d7a93.svg",
        txt: "充电时长",
        specificValues: "90/平方米"
      }],
      designerSpeechList: [
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        },
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        },
        {
          imgUrl: "",
          txt1: "怪虫机器人天下无敌",
          txt2: "怪虫机器人是我们的清洁好帮手"
        }],
      workingEnvironmentTitle: "堒-天下第一，大有可为",
      menuItems: ['商业屋顶', '高桩电站', '漂浮电站'],
      contentItems: [
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },

        ],
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },
        ],
        [
          {
            imgUrl1: "https://dji-official-fe.djicdn.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            imgUrl2: "https://dji-official-fe.djicdn.com/dps/9285ca8cf7de7cb60383233385e68bb1.jpg",
            imgUrl3: "https://dji-official-fe.djicdn.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",

          },
        ]
      ],
      picList: [
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", },
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", },
        { imgUrl: "https://dji-official-fe.djicdn.com/dps/06f932b9fcdf612c2eddddbde8683efc.jpg", }],
      workingEnvironmentTitle1: "轻松应对各种环境",
      menuVideoItems: ['商业屋顶', '高桩电站', '漂浮电站'],
      contentVideoItems: [
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/74f6a3d48e862c79ea842f7372788b98.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/9286ea74-82a5-4d60-a247-98a9430a41f5.mp4",
          },
        ],
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/bbdd4a2cba0c4cb00128c89cb3187d59.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/0875fc2c-9c98-45eb-8cb4-9d2b9cc8ead7.mp4",
          },

        ],
        [
          {
            imgUrl: "https://dji-official-fe.djicdn.com/dps/bbdd4a2cba0c4cb00128c89cb3187d59.jpg",
            videoUrl: "https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/0875fc2c-9c98-45eb-8cb4-9d2b9cc8ead7.mp4",
          },
        ]
      ],
      progressiveTitle: "技术过硬，无所畏惧",
      progressivePicUrl: "https://dji-official-fe.djicdn.com/dps/978531960d43e80d6aff5e057c531098.jpg",
      KwunmenuItems: ['新款推荐', '性价比高', '高能高效'],
      KwuncontentItems: [
        [
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 1,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 2,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 3,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 4,
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]

          }
        ],
        [
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 2,
            name: 'B11L',
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          },
        ],
        [{
          img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
          purchaseRouter: "/purchase/Kwun-B11L",
          productId: 2,
          name: 'B11L',
          specs:[
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
              title:"常规参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
              title:"续航参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
              title:"清洁参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"详细参数",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"核心技术",
              parameters:[
                {name:"光伏组件清洗角度",value:""},
                {name:"环境适应温度",value:""},
                {name:"设备防护等级",value:""},
                {name:"安全无隐裂",value:""},
              ]
            },
            {
              iocImgUrl:"",
              title:"寿命续航",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"清洁能力",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"外观",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"操控",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
            {
              iocImgUrl:"",
              title:"安全",
              parameters:[
                {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                {name:"环境适应温度",value:"-20～50°C"},
                {name:"设备防护等级",value:"IP65"},
                {name:"安全无隐裂",value:"必维万次无隐裂认证"},
              ]
            },
          ]
        },
          {
            img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
            purchaseRouter: "/purchase/Kwun-B11L",
            productId: 2,
            name: 'B11L',
            specs:[
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
                title:"常规参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
                title:"续航参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
                title:"清洁参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"详细参数",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"核心技术",
                parameters:[
                  {name:"光伏组件清洗角度",value:""},
                  {name:"环境适应温度",value:""},
                  {name:"设备防护等级",value:""},
                  {name:"安全无隐裂",value:""},
                ]
              },
              {
                iocImgUrl:"",
                title:"寿命续航",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"清洁能力",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"外观",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"操控",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
              {
                iocImgUrl:"",
                title:"安全",
                parameters:[
                  {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
                  {name:"环境适应温度",value:"-20～50°C"},
                  {name:"设备防护等级",value:"IP65"},
                  {name:"安全无隐裂",value:"必维万次无隐裂认证"},
                ]
              },
            ]
          }]
      ],
      videoList: [],
      tagList1: [{ tagname: "高效清洁" }, { tagname: "小霸王" }, { tagname: "无敌手" }, { tagname: "高级货" }],
      tagList2: [{ tagname: "高效清洁" }, { tagname: "小霸王" }, { tagname: "无敌手" }],
      presaleprice: 13888,
      serveList: [{
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/7989c8f82bca8b1cd42855f79c97c1fd.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"
      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/832ee7f136e81852be954c9af31973ab.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"

      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/5b72e9c265054b0b291d94fefed0c4b4.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"


      }, {
        imgUrl: "https://dji-official-fe.djicdn.com/cms/uploads/8fbd84b73d12b440e859ddf3c80c0ab0.svg",
        serveName: "消费级无人机对比",
        serveButton: "开始对比 >"


      }],
      tips: {
        tipTitlt: "温馨提示",
        tip1: "* 本页面所列出的各项参数数值，均为量产版 DJI Mavic 3 Pro 飞行器在受控测试环境下测得，在不同的外部环境、使用方式、固件版本下，结果或有不同程度的差异，请以实际体验为准。",
        tip2: "** 本页面所有视频和图片均在严格遵守当地相关法律法规的情况下拍摄，其中包含野生动物的样片均在安全距离内拍摄。样片仅供示意，请以实际拍摄效果为准。请了解当地相关法律法规并确保飞行器具备相关认证后再开始飞行。",
        tip3: "1. 仅 DJI Mavic 3 Pro Cine 支持。",
        tip4: "2. 该数据使用 Mavic 3 Pro 在无风环境下、于海平面以 32.4 公里/小时的速度匀速飞行至剩余 0% 电量测得，仅供参考，实际飞行时请留意 DJI Fly app 上的返航提示。",
        tip5: "3. 在室外空旷无干扰环境下测得，15 公里传输距离仅在 FCC 标准下实现；中国大陆地区采用 SRRC 标准，最远图传通信距离为 8 公里；以上数据为各标准下单程不返航飞行的最远通信距离，实际飞行时请留意 DJI Fly app 上的返航提示。",
        tip6: "4. 在拍摄分辨率高于 4K 或拍摄帧率高于 60fps 情况下，智能跟随功能无法使用。",
        tip7: "5. 实际可用储存空间会因系统配置占用等原因而减少，详情请见 Mavic 3 Pro 技术参数。",
        tip8: "6. 请勿在大风（风速 13.8 米/秒及以上）、下雪、下雨、雷电、有雾等恶劣天气飞行。请勿在海拔 6000 米以上地区飞行。请勿在 -10℃ 以下或 40℃ 以上环境中飞行。请勿在移动的物体表面起飞（例如行进中的汽车、船只）。请勿在水面或雪地等镜面反射区域飞行，以保证视觉定位系统正常工作。GNSS 信号弱时，请在光照良好的环境中飞行。环境光线暗可能导致视觉系统无法正常工作。请勿在电磁干扰源附近飞行。常见的电磁干扰源包括高压电线、高压输电站、雷达站、移动电话基站、广播信号塔、Wi-Fi 热点、路由器、蓝牙设备等。在沙漠、沙滩表面起飞需小心，避免沙尘进入飞行器内部。在远离人群的开阔区域飞行时，避免建筑物、山体、树林干扰 GNSS 信号及飞行器指南针。",
        tip9: "7. 需单独购买。",
        tip10: "8. 需单独购买。",
      },
      introParameter1: {
        CoreTechnology1: "基于TianyunOS操作系统",
        CoreTechnology2: "基于Glass vSLAM视觉导航技术",
        CoreTechnology3: "基于Goodzenn路径规划技术",
        CoreTechnology4: "基于Al-kwun操作平台",
        CoreTechnology5: "基于OTA-Kwun操作平台",
        CoreTechnology6: "基于Glass vSLAM视觉导航技术",
      },
      introParameter2: {
        CleaningAbility1: ">=85%",
        CleaningAbility2: "基于Glass vSLAM视觉导航技术",
        CleaningAbility3: "基于Goodzenn路径规划技术",
        CleaningAbility4: "基于Al-kwun操作平台",
        CleaningAbility5: "基于OTA-Kwun操作平台",
        CleaningAbility6: "基于Glass vSLAM视觉导航技术",
      },
    },



  },


]);




const screenHeight2 = ref(7500);
const scrollY = ref(0);
const screenHeight = ref(0);




onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 初始加载时获取一次位置
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;
  const screenCenter = scrollY + windowHeight / 2;
  screenHeight.value = screenCenter;
  // console.log('当前屏幕高度:', screenCenter);
}

const getDynamicStyle = computed(() => {
  const initialHeight = 600;
  const finalHeight = 1065;
  const initialOpacity = 0.1;
  const finalOpacity = 1;

  const currentScroll = screenHeight.value - 7600;
  // console.log("当前滚动高度", currentScroll)

  const maxScroll = 8200;

  const scrollPercentage = currentScroll / 600;


  const height = initialHeight + (finalHeight - initialHeight) * scrollPercentage;

  const opacity = initialOpacity + (finalOpacity - initialOpacity) * scrollPercentage;

  if (currentScroll > 600) {
    return {
      height: `1065px`,
      opacity: opacity.toString(),
    };
  }

  return {
    height: `${height}px`,
    opacity: opacity.toString(),
  };
});


// const productId = ref(typeof ref<number>(Number(route.query.productId)).value || 0)




let videoPlayer = ref(getCurrentInstance().ctx.$refs.videoPlayer)
const videoSrc = ref('/videos/f1740f92-52ad-4fb2-8a07-bddf8f2ca26e.mp4');
const videoStyle = {
  width: '100%',

};

const KwunmenuItems = ref(['新款推荐', '性价比高', '高能高效']);

const KwuncontentItems = ref(  [
  [
    {
      img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
      purchaseRouter: "/purchase/Kwun-B11L",
      productId: 1,
      specs:[
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
          title:"常规参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
          title:"续航参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
          title:"清洁参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"详细参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"核心技术",
          parameters:[
            {name:"光伏组件清洗角度",value:""},
            {name:"环境适应温度",value:""},
            {name:"设备防护等级",value:""},
            {name:"安全无隐裂",value:""},
          ]
        },
        {
          iocImgUrl:"",
          title:"寿命续航",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"清洁能力",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"外观",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"操控",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"安全",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
      ]
    },
    {
      img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
      purchaseRouter: "/purchase/Kwun-B11L",
      productId: 2,
      specs:[
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
          title:"常规参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
          title:"续航参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
          title:"清洁参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"详细参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"核心技术",
          parameters:[
            {name:"光伏组件清洗角度",value:""},
            {name:"环境适应温度",value:""},
            {name:"设备防护等级",value:""},
            {name:"安全无隐裂",value:""},
          ]
        },
        {
          iocImgUrl:"",
          title:"寿命续航",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"清洁能力",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"外观",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"操控",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"安全",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
      ]

    },
    {
      img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
      purchaseRouter: "/purchase/Kwun-B11L",
      productId: 3,
      specs:[
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
          title:"常规参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
          title:"续航参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
          title:"清洁参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"详细参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"核心技术",
          parameters:[
            {name:"光伏组件清洗角度",value:""},
            {name:"环境适应温度",value:""},
            {name:"设备防护等级",value:""},
            {name:"安全无隐裂",value:""},
          ]
        },
        {
          iocImgUrl:"",
          title:"寿命续航",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"清洁能力",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"外观",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"操控",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"安全",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
      ]

    },
    {
      img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
      purchaseRouter: "/purchase/Kwun-B11L",
      productId: 4,
      specs:[
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
          title:"常规参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
          title:"续航参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
          title:"清洁参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"详细参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"核心技术",
          parameters:[
            {name:"光伏组件清洗角度",value:""},
            {name:"环境适应温度",value:""},
            {name:"设备防护等级",value:""},
            {name:"安全无隐裂",value:""},
          ]
        },
        {
          iocImgUrl:"",
          title:"寿命续航",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"清洁能力",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"外观",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"操控",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"安全",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
      ]

    }
  ],
  [
    {
      img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
      purchaseRouter: "/purchase/Kwun-B11L",
      productId: 2,
      name: 'B11L',
      specs:[
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
          title:"常规参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
          title:"续航参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
          title:"清洁参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"详细参数",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"核心技术",
          parameters:[
            {name:"光伏组件清洗角度",value:""},
            {name:"环境适应温度",value:""},
            {name:"设备防护等级",value:""},
            {name:"安全无隐裂",value:""},
          ]
        },
        {
          iocImgUrl:"",
          title:"寿命续航",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"清洁能力",
          parameters:[
            {name:"光伏组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"外观",
          parameters:[
            {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"操控",
          parameters:[
            {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"安全",
          parameters:[
            {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
      ]
    },
  ],
  [{
    img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
    purchaseRouter: "/purchase/Kwun-B11L",
    productId: 2,
    name: 'B11L',
    specs:[
      {
        iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
        title:"常规参数",
        parameters:[
          {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
          {name:"环境适应温度",value:"-20～50°C"},
          {name:"设备防护等级",value:"IP65"},
          {name:"安全无隐裂",value:"必维万次无隐裂认证"},
        ]
      },
      {
        iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
        title:"续航参数",
        parameters:[
          {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
          {name:"环境适应温度",value:"-20～50°C"},
          {name:"设备防护等级",value:"IP65"},
          {name:"安全无隐裂",value:"必维万次无隐裂认证"},
        ]
      },
      {
        iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
        title:"清洁参数",
        parameters:[
          {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
          {name:"环境适应温度",value:"-20～50°C"},
          {name:"设备防护等级",value:"IP65"},
          {name:"安全无隐裂",value:"必维万次无隐裂认证"},
        ]
      },
      {
        iocImgUrl:"",
        title:"详细参数",
        parameters:[
          {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
          {name:"环境适应温度",value:"-20～50°C"},
          {name:"设备防护等级",value:"IP65"},
          {name:"安全无隐裂",value:"必维万次无隐裂认证"},
        ]
      },
      {
        iocImgUrl:"",
        title:"核心技术",
        parameters:[
          {name:"组件清洗角度",value:""},
          {name:"环境适应温度",value:""},
          {name:"设备防护等级",value:""},
          {name:"安全无隐裂",value:""},
        ]
      },
      {
        iocImgUrl:"",
        title:"寿命续航",
        parameters:[
          {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
          {name:"环境适应温度",value:"-20～50°C"},
          {name:"设备防护等级",value:"IP65"},
          {name:"安全无隐裂",value:"必维万次无隐裂认证"},
        ]
      },
      {
        iocImgUrl:"",
        title:"清洁能力",
        parameters:[
          {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
          {name:"环境适应温度",value:"-20～50°C"},
          {name:"设备防护等级",value:"IP65"},
          {name:"安全无隐裂",value:"必维万次无隐裂认证"},
        ]
      },
      {
        iocImgUrl:"",
        title:"外观",
        parameters:[
          {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
          {name:"环境适应温度",value:"-20～50°C"},
          {name:"设备防护等级",value:"IP65"},
          {name:"安全无隐裂",value:"必维万次无隐裂认证"},
        ]
      },
      {
        iocImgUrl:"",
        title:"操控",
        parameters:[
          {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
          {name:"环境适应温度",value:"-20～50°C"},
          {name:"设备防护等级",value:"IP65"},
          {name:"安全无隐裂",value:"必维万次无隐裂认证"},
        ]
      },
      {
        iocImgUrl:"",
        title:"安全",
        parameters:[
          {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
          {name:"环境适应温度",value:"-20～50°C"},
          {name:"设备防护等级",value:"IP65"},
          {name:"安全无隐裂",value:"必维万次无隐裂认证"},
        ]
      },
    ]
  },
    {
      img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
      purchaseRouter: "/purchase/Kwun-B11L",
      productId: 2,
      name: 'B11L',
      specs:[
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-01.png",
          title:"常规参数",
          parameters:[
            {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-icon-09.png",
          title:"续航参数",
          parameters:[
            {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"https://file.kwunphi.com/kwunphi4/images/commons/specs-3.png",
          title:"清洁参数",
          parameters:[
            {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"详细参数",
          parameters:[
            {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"核心技术",
          parameters:[
            {name:"组件清洗角度",value:""},
            {name:"环境适应温度",value:""},
            {name:"设备防护等级",value:""},
            {name:"安全无隐裂",value:""},
          ]
        },
        {
          iocImgUrl:"",
          title:"寿命续航",
          parameters:[
            {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"清洁能力",
          parameters:[
            {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"外观",
          parameters:[
            {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"操控",
          parameters:[
            {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
        {
          iocImgUrl:"",
          title:"安全",
          parameters:[
            {name:"组件清洗角度",value:"水洗0-5°/干刷0-10°"},
            {name:"环境适应温度",value:"-20～50°C"},
            {name:"设备防护等级",value:"IP65"},
            {name:"安全无隐裂",value:"必维万次无隐裂认证"},
          ]
        },
      ]
    }]
]);



onMounted(() => {
  if (videoPlayer && videoPlayer.value) {
    videoPlayer.value.play();
  }
});

const menuItems = ref(['商业屋顶', '高桩电站', '漂浮电站'])

const menuVideoItems = ref(['商业屋顶', '高桩电站', '漂浮电站'])


const contentVideoItems = ref([
  [
    {
      img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
      purchaseRouter: "/purchase/Kwun-B11L",
      productId: 1,
      feature: '速览',
      name: 'B11L',
      weight: 985,
      batteryLife: 43,
      title: '菜单项 2 内容',
      description: '这是菜单项 2 的详细内容。'
    },
  ],
  [{
    img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
    purchaseRouter: "/purchase/Kwun-B11L",
    productId: 2,
    feature: '速览',
    name: 'B11L',
    weight: 985,
    batteryLife: 43,
    title: '菜单项 2 内容',
    description: '这是菜单项 2 的详细内容。'
  }],
  [{
    img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
    purchaseRouter: "/purchase/Kwun-B11L",
    productId: 2,
    feature: '速览',
    name: 'B11L',
    weight: 985,
    batteryLife: 43,
    title: '菜单项 2 内容',
    description: '这是菜单项 2 的详细内容。'
  }]
]);



const contentItems = ref([
  [
    {
      img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
      purchaseRouter: "/purchase/Kwun-B11L",
      productId: 1,
      feature: '速览',
      name: 'B11L',
      weight: 985,
      batteryLife: 43,
      title: '菜单项 2 内容',
      description: '这是菜单项 2 的详细内容。'
    },

  ],
  [{
    img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
    purchaseRouter: "/purchase/Kwun-B11L",
    productId: 2,
    feature: '速览',
    name: 'B11L',
    weight: 985,
    batteryLife: 43,
    title: '菜单项 2 内容',
    description: '这是菜单项 2 的详细内容。'
  }],
  [{
    img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
    purchaseRouter: "/purchase/Kwun-B11L",
    productId: 2,
    feature: '速览',
    name: 'B11L',
    weight: 985,
    batteryLife: 43,
    title: '菜单项 2 内容',
    description: '这是菜单项 2 的详细内容。'
  },
  ]
]);


</script>

<style scoped>
.learning {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
}

.sticky-header {
  z-index: 998;
  position: sticky;
  top: -1px;
  width: 100%;
  height: 48px;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header-content {
  width: 1180px;
  min-width: 0;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.header-content>h1 {
  font-size: 16px;
  color: rgba(200, 200, 200, 0.9);
}

.button-space {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.button-space>a {
  font-size: 13px;
  color: rgba(200, 200, 200, 0.9);
  margin-right: 20px;
}

.button-space>a:hover {
  color: rgba(200, 200, 200, 0.9);
}


.video-content {
  margin-top: -64px;
  width: 100%;
  background-color: rgba(200, 200, 200, 0.9);
}

.video-txt-space {
  position: absolute;
  margin-top: 300px;
  z-index: 997;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.video-txt-space>h1 {
  font-size: 50px;
  color: rgba(200, 200, 200, 0.9);
}

.video-txt-space>h2 {
  font-size: 30px;
  color: rgba(200, 200, 200, 0.9);
}

.product-content {
  margin-top: -10px;
  width: 100%;
  height: 3400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;

}

.product-pic {
  margin-top: 360px;
  top: 550px;
  z-index: 996;
  position: sticky;
  width: 80%;
  height: 800px;
  background-color: rgba(0,0,0,0.2);
  overflow: hidden;
  object-fit: cover;
}

.product-pic>img {
  width: 100%;
  overflow: hidden;
}

.introduction1 {
  z-index: 994;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
}

.introduction1>h1 {
  width: 60%;
  position: absolute;
  margin-top: 832px;
  color: rgba(200, 200, 200, 0.7);
}

.introduction1>h3 {
  width: 60%;
  margin-top: 3632px;
  position: absolute;
  color: rgba(200, 200, 200, 0.7);
}

.parameterElements {
  margin-top: 1600px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20vw;
  position: absolute;

}

.parameterElement {
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.parameterElement>img {
  width: 100px;
}

.parameterElement>h2 {
  color: rgba(200, 200, 200, 0.7);
}

.introduction2 {
  z-index: 1;
  margin-top: 0px;
  width: 100%;
  height: 600px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;


}

.introduction2>img {
  object-fit: cover;
  position: absolute;
  width: 100%;
}

.introduction2-card {
  margin-top: 100px;
  z-index: 9;
  width: 380px;
  height: 420px;
  opacity: 0.3;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.introduction2-card>h1 {
  color: rgba(200, 200, 200, 0.9);
}

.introduction3 {
  z-index: 997;
  margin-top: -200px;
  width: 60%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
}

.introduction3>h1 {
  font-size: 50px;
  font-weight: 700;
  color: rgba(200, 200, 200, 0.9);
}

.introduction3>img {
  width: 1025px;
  border-radius: 10px;
}

.pic-space1 {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.pic-space1>img {
  width: 500px;
  border-radius: 10px;
  margin: 10px;
}

.introduction4 {
  z-index: 997;
  width: 60%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
}

.introduction5 {
  object-fit: cover;
  overflow: hidden;
  z-index: 997;
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
}

.introduction5>h1 {
  font-size: 50px;
  font-weight: 700;
  color: rgba(200, 200, 200, 0.9);
}

.introduction6 {
  z-index: 997;
  width: 100%;
  height: 2500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  max-width: 100%;
}

.introduction6>img {
  position: sticky;
  top: 0;
  max-width: 100%;

}

.introduction6>h1 {
  margin-top: 100px;
  z-index: 997;
  font-size: 50px;
  font-weight: 700;
  color: rgba(200, 200, 200, 0.9);
}

.introduction7 {
  z-index: 997;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
}

.introduction7>h1 {
  margin-top: 120px;
  font-size: 40px;
  font-weight: 700;
  color: rgba(200, 200, 200, 0.9);
}

.Kwun-Buy-button {
  display: flex;
  flex-direction: row;
}

.introduction8 {
  z-index: 997;
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #272727;
}

.introduction8>h1 {
  margin-top: 50px;
  color: rgba(200, 200, 200, 0.9);
}

.introduction8>h2 {
  color: rgba(200, 200, 200, 0.9);
}

.introduction8>img {
  width: 600px;
}

.tag {
  margin: 10px;
  border-radius: 5px;
  border: 1px solid rgba(200, 200, 200, 0.9);
  background-color: #272727;
  color: rgba(200, 200, 200, 0.9);
  font-size: 14px;
  width: 122px;
  height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.introduction9 {
  z-index: 997;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #272727;
}

.introduction9-content {
  z-index: 997;
  width: 80%;
  height: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #272727;
}

.introduction9-content>h1 {
  margin-top: 20px;
}

.introduction10 {
  z-index: 997;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #272727;
}

.introduction10-content {
  z-index: 997;
  width: 60%;
  height: 300px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  background-color: #272727;
}

.introduction10-content>h1 {
  font-size: 10px;
  color: rgba(200, 200, 200, 0.9);
  margin-top: 5px;
}

.introduction10-content>h2 {
  color: rgba(200, 200, 200, 0.9);
  font-size: 10px;
  margin-top: 5px;
}
</style>
