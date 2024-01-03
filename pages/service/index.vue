<template>
  <div class="container">

    <div class="service-search" >
      <div class="service-search-container">
        <h1>{{ $t('service.Service&Support') }}</h1>
        <p>{{ $t('service.WelcomeToUse') }}</p>
        <div class="search-bar">
          <kw-search-bar :btn="$t('service.Search')" :placeholder="$t('service.PleaseEnterQuestion')" height="38" maxlength="32" fontSize="14px" @search=""></kw-search-bar>
        </div>
      </div>
      <img  :src="locale.startsWith('cn')?'https://file.kwunphi.com/kwunphi4/images/commons/taolun.png':'https://file.kwunphi.com/kwunphi4/images/commons/taolun2.png'">
    </div>

    <div class="service-container">
      <h1>{{$t('service.HotService')}}</h1>
      <div class="service-item-container">
        <div class="service-item" v-for="(item,index) in hotService" :key="index">
          <h2>{{ $t(item.title) }}</h2>
          <p>{{ $t(item.desc) }}</p>
          <nuxt-link :to="localePath(item.router)">{{ $t(item.btn) }} ></nuxt-link>
        </div>
      </div>
    </div>

    <div class="service-container">
      <h1>{{ $t('service.downloadCenter') }}</h1>
      <div class="service-item-container download">
        <div class="download-item" v-for="(item,index) in downloadList" :key="index">
          <h2>{{ $t(item.title) }}</h2>
          <p>{{ $t(item.desc) }}</p>
        </div>
      </div>
      <nuxt-link :to="localePath('/downloads')">{{ $t('service.GoToDownloadCenter') }} ></nuxt-link>
    </div>

    <div class="service-container">
      <h1>{{ $t('service.ServiceInformationSupport') }}</h1>
      <div class="service-item-container">
        <div class="service-item support" v-for="(SItem,index) in serviceItemList" :key="index">
          <img :src="SItem.imgUrl">
          <h2>{{ $t(SItem.title) }}</h2>
          <p>{{ $t(SItem.desc) }}</p>
          <nuxt-link :to="localePath(SItem.router)">{{ $t(SItem.btn) }} ></nuxt-link>
        </div>
      </div>
    </div>

    <div class="service-container">
      <h1>{{$t('service.moreService')}}</h1>
      <div class="service-item-container">
        <div class="service-item more-service" v-for="(item,index) in moreService" :key="index">
          <h2>{{ $t(item.title) }}</h2>
          <p>{{ $t(item.desc) }}</p>
          <nuxt-link :to="localePath(item.router)">{{ $t(item.btn) }} ></nuxt-link>
        </div>
      </div>
    </div>

    <div class="service-container">
      <h1>{{ $t('service.Notices.EventsAnnouncements') }}</h1>
      <div class="service-item-container notices" :class="{noticeExpand:isExpand}"
      :style="{'height':isExpand? 'auto':'110px'}">
        <div v-for="(notice , NIndex) in service.AnnouncementsNotices" class="notice-item">
          <p>[{{$t(notice.tag)}}]{{$t(notice.txt)}}</p>
        </div>
      </div>
      <div class="notice-expand-button" @click="isExpand=!isExpand">
        <p>{{!isExpand? $t('service.Expand'):$t('service.hide')}}</p>
      </div>
    </div>

    <div class="service-contact">
      <h1>{{ $t('service.contact-us') }}</h1>
      <div class="service-hot-line-container">
        <div class="service-hot-line">
          <img style="width: 80px;margin-bottom: 16px;" src="https://file.kwunphi.com/kwunphi4/images/commons/kefu.png">
          <h2>{{ $t('service.OnlineCustomerService') }}</h2>
          <h3>{{ $t('service.ServicePeriod-01') }}</h3>
          <h3>{{ $t('service.ServicePeriod-02') }}</h3>
          <a href="tel:4008786861">{{ $t('service.ServicePhone') }}</a>
        </div>
        <div class="human-service">
          <img :src="locale.startsWith('cn')?'https://file.kwunphi.com/kwunphi4/images/commons/after-sales%20service.png':'https://file.kwunphi.com/kwunphi4/images/commons/after-sales%2520service2.png'">
        </div>
      </div>
      <div class="follow-us-container">
        <div class="follow-us Hotline">
          <h1>{{ $t('service.HotlineService') }}</h1>
          <div class="serviceMandarin"><h2>{{ $t('service.Mandarin') }}：</h2><a  href="tel:4008786861">{{ $t('service.ServicePhone') }}</a></div>
          <h2>{{ $t('service.ServicePeriod-01') }}</h2>
          <h2>{{ $t('service.ServicePeriod-02') }}</h2>
        </div>
        <div class="follow-us">
          <img  src="https://file.kwunphi.com/kwunphi4/images/qrcode/gongzhonghao.jpg">
          <h1>{{ $t('service.KwunPhiWeChatOfficialAccount') }}</h1>
          <p>{{ $t('service.OfficialAfterSalesService') }}</p>
        </div>
        <div class="follow-us">
          <img src="https://file.kwunphi.com/kwunphi4/images/qrcode/remote-experience-qr.png">
          <h1>{{ $t('service.OnlineCustomerService') }}</h1>
          <p>{{ $t('service.ServiceInformationQuery') }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t, locale, locales } = useI18n()
import service from "assets/js/service/service-support";

useHead({
  title: t('seo.pages.service.title'),
  meta: [
    {name: 'keywords', content: t('seo.pages.service.keywords') },
    {name: 'description', content: t('seo.pages.service.description') }
  ],
})



const hotService = ref(service.hotService);

const moreService = ref(service.moreService)

const serviceList1 = ref([
  {
    title: "service.RemoteRepair",
    desc: "service.ProfessionalEngineersProvideOnlineGuidance",
    router:"/",

  },
  {
    title: "service.SubstituteMachineApplication",
    desc: "service.ApplyOnlineConsignment",
    router:"/"
  },
  {
    title: "service.KwunCare",
    desc: "service.VarietyGuaranteeServices",
    router:"/"
  },
  {
    title: "service.OnlineVideoTutorials",
    desc: "service.LearnMoreAboutTheOperation",
    router:"/"
  }
]);
// 下载中心列表
const downloadList = ref([
  {
    title: "service.AI-KwunApp",
    desc: "service.DownloadApps"
  },
  {
    title: "service.SoftwareTools",
    desc: "service.DownloadOfficialSoftwareTools"
  },
  {
    title: "service.DocumentationManuals",
    desc: "service.GetManual"
  }
]);
// 产品支持列表
const productList = ref([
  {
    title: "Kwun-B33H",
    imgUrl: new URL("https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-white/01.png", import.meta.url).href,
    router:"series",
    productId:1,
    seriesId:1
  },
  {
    title: "Kwun-B32H",
    imgUrl: new URL("https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-white/01.png", import.meta.url).href,
    router:"series",
    productId:2,
    seriesId:1
  },
  {
    title: "Kwun-B32L",
    imgUrl: new URL("https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-white/01.png", import.meta.url).href,
    router:"series",
    productId:3,
    seriesId:2
  },
  {
    title: "Kwun-B22H",
    imgUrl: new URL("https://file.kwunphi.com/kwunphi4/images/kwun/22/bg-white/01.png", import.meta.url).href,
    router:"series",
    productId:4,
    seriesId:2
  },
  {
    title: "Kwun-B22L",
    imgUrl: new URL("https://file.kwunphi.com/kwunphi4/images/kwun/22/bg-white/01.png", import.meta.url).href,
    router:"series",
    productId:5,
    seriesId:3
  },
  {
    title: "Kwun-B11L",
    imgUrl: new URL("https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png", import.meta.url).href,
    router:"series",
    productId:6,
    seriesId:3
  },
]);
// 服务申请与信息支持列表

// 产品支持列表
const serviceItemList = ref(service.serviceList);

const inputSelected=ref(false);
const contentItems = ref([
  [
    {img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
      purchaseRouter:"/purchase/Kwun-B33H",
      productId:1,
      feature:'速览',
      name:'B33系列',
      weight:985,
      batteryLife:43,
      title: '菜单项 2 内容',
      description: '这是菜单项 2 的详细内容。'},
    {img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
      purchaseRouter:"/purchase/Kwun-B33H",
      productId:2,
      feature:'速览',
      name:'B22系列',
      weight:985,
      batteryLife:43,
      title: '菜单项 2 内容',
      description: '这是菜单项 2 的详细内容。'},
    {img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
      purchaseRouter:"/purchase/Kwun-B33H",
      productId:3,
      feature:'速览',
      name:'B11系列',
      weight:985,
      batteryLife:43,
      title: '菜单项 2 内容',
      description: '这是菜单项 2 的详细内容。'},

  ],
  [  {img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
    purchaseRouter:"/purchase/Kwun-B33H",
    productId:2,
    feature:'速览',
    name:'B11L',
    weight:985,
    batteryLife:43,
    title: '菜单项 2 内容',
    description: '这是菜单项 2 的详细内容。'}],
  [ {img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
    purchaseRouter:"/purchase/Kwun-B33H",
    productId:2,
    feature:'速览',
    name:'B11L',
    weight:985,
    batteryLife:43,
    title: '菜单项 2 内容',
    description: '这是菜单项 2 的详细内容。'},
    {img: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
      purchaseRouter:"/purchase/Kwun-B33H",
      productId:2,
      feature:'速览',
      name:'B11L',
      weight:985,
      batteryLife:43,
      title: '菜单项 2 内容',
      description: '这是菜单项 2 的详细内容。'}]
]);
const menuItems = ref(['机器系列', '机器配件', '机器应用']);

const isExpand = ref(false)
function  goToExpand(){
  isExpand.value=!isExpand.value
}

</script>

<style scoped>
.container{
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.service-search{
  transition: all 0.3s ease;
  width: 100%;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.service-search >img{
  min-height: 240px;
  filter: brightness(0.5);
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.service-search-container{
  margin:  0 auto;
  z-index: 2;
  position: absolute;
}
.service-search-container >h1{
  font-size: 42px;
  font-weight: 500;
}
.service-search-container >p{
  font-weight: 300;
  margin: 16px;
  font-size: 20px;
}
.search-bar {
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.search-input{
  margin-top: 16px;
  transition: all 0.3s ease;
  padding-left: 5px;
  border-radius: 5px;
  height: 36px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.search-input >input{
  padding: 0 5px 0 0;
  margin-left: 10px;
  width: calc(100% - 70px);
  height: 36px;
  font-size: 14px;
  color: rgba(0,0,0,0.75);
}
.search-input >input[type="text"] {
  border: none;
  outline: none;
}
.search-input >input[type="text"]:focus {
  /* 设置选中状态下的样式 */
  border: none;
  outline: none;
}
.search-button{
  padding: 0 10px;
  color: white;
  cursor: pointer;
  height: 36px;
  width: 60px;
  background-color: rgba(2,70,255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;
  font-size: 14px;
}
.service-container{
  width: 100%;
  max-width: 1200px;
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.service-container>h1{
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 32px;
}
.service-item-container{
  transform: translateX(8px);
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.service-item{
  margin-right: 16px;
  width: calc(25% - 16px);
  min-height: 160px;
  border-radius: 5px;
  padding: 36px;
  text-align: center;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.service-item >h2{
  font-weight: 400;
  font-size: 20px;
  color: rgba(0,0,0,0.95);
}
.service-item p {
  margin: 12px 0;
  font-size: 16px;
  font-weight: 300;
  color: #8c8888;
}
.service-item a {
  font-size: 16px;
  font-weight: 400;
  color: rgba(2,125,255);
}


.download-item{
  margin-right: 16px;
  width: calc(33.3333% - 16px);
  min-height: 160px;
  border-radius: 5px;
  padding: 36px;
  text-align: center;
  background-color: #f5f5f5;
}
.download-item >h2{
  font-weight: 500;
  font-size: 20px;
  color: rgba(0,0,0,0.95);
}
.download-item p {
  margin: 12px 0;
  font-size: 16px;
  font-weight: 100;
  color: #8c8888;
}

.service-container >a {
  font-weight: 400;
  color:rgba(2,125,255);
  font-size: 16px;
  margin-top: 16px;
}
.support{
  width: calc(25% - 16px);
  min-height: 200px;
  margin-bottom: 16px;
}
.more-service{
  width: calc(25% - 16px);
  margin-bottom: 16px;
}
.support >img{
  width: 40px;
  height: 40px;

}
.notices{
  transition: all 0.3s ease;
  margin-bottom: 16px;
  height: 100px;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
}

.noticeExpand{
 height: auto;
}
.notice-item{
  margin-bottom: 20px;
  width: calc(100% - 16px);
  background-color: white;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.notice-item>p{
  font-size: 16px;
  font-weight: 300;
}
.notice-item>h3{
  margin-right: 16px;
}
.notice-expand-button{
  cursor: pointer;
  padding: 7px 32px;
  border-radius: 50px;
}
.notice-expand-button>p{
  font-size: 20px;
  font-weight: 300;
}
.notice-expand-button:hover{
  background-color: #f3f3f3;
}
.service-contact{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 96px;
  margin-bottom: 96px;
}
.service-contact >h1{
  text-align: center;
  font-weight: 600;
  font-size: 36px;
}
.service-hot-line-container{
  margin-top: 48px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}
.service-hot-line{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 400px;
  background-color: #F5F5F5;
}
.service-hot-line>h2{
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 20px;
}
.service-hot-line >h3{
  margin-bottom: 10px;
  font-weight: 300;
  font-size: 16px;
}
.service-hot-line >a{
  font-weight: 300;
  font-size: 16px;
  color: rgba(2,125,255);
}
.human-service{
  width: 50%;
  height: 400px;
  background-color: #F5F5F5;
  overflow: hidden;
}
.human-service >img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.follow-us-container{
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between
}
.follow-us{
  margin-top: 10px;
  height: 380px;
  width: calc(33.3333% - 8px);
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.follow-us>h1{
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -.03em;
  margin: 0 auto 16px;
}
.follow-us>p{
  padding: 0 16px;
  font-weight: 300;
  font-size: 16px;
  text-align: center;
}
.follow-us>img{
  margin-bottom: 16px;
  width: 160px;
}
.Hotline>h1{
  font-size: 20px;
  font-weight: 500;
}
.Hotline>a{
  display: flex;
  flex-direction: row;
  font-size: 14px;
}
.Hotline>a>h2{
  font-size: 20px;
}
.Hotline>a>a{
  font-size: 19px;
  color:rgba(2,125,255);
}
.Hotline>h2{
  font-weight: 300;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.serviceMandarin{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.serviceMandarin>h2{
  font-size: 18px;
  color:rgba(0,0,0,0.95);
}
.serviceMandarin>a{
  font-size: 16px;
  font-weight: 300;
  color:rgba(2,120,255);
}
@media screen  and (max-width: 1232px){
  .service-item-container{
    width: calc(100% - 32px);
  }
}
@media screen  and (max-width: 1024px){
  .service-item{
    margin-bottom: 16px;
    width: calc(33.33% - 16px);
  }
  .service-hot-line-container{
    width: calc(100% - 32px);
    flex-wrap: wrap;
  }
  .service-hot-line{
    width: 100%;
  }
  .human-service{
    width: 100%;
  }
  .follow-us-container{
    width: calc(100% - 32px);
    flex-wrap: wrap;
  }
  .follow-us{
    width: 100%;
  }
  .notice-item{
    width: calc(100% - 32px);
    max-width: calc(100% - 32px);
  }
  .service-item{
    padding: 24px;
  }
  .download-item{
    padding: 24px;
  }
}

@media screen  and (max-width: 767px){
  .service-item{
    width: calc(50% - 16px);
  }
  .service-search-container >h1{
    font-size: 36px;

  }
  .service-search-container >p{
    font-size: 14px;
  }
  .hot-service-container{
    margin-top: 72px;
  }
  .hot-service-container>h1{
    font-size: 36px;
  }
  .download-item{
    margin-bottom: 16px;
    width: calc(50% - 16px);
  }
  .service-item{
    padding: 18px;
  }
  .download-item{
    padding: 18px;
  }
}

@media screen  and (max-width: 480px){
  .service-search >img{
    min-height: 200px;
  }
  .service-search-container >h1{
    font-size: 24px;

  }
  .service-search-container >p{
    font-size: 12px;
  }
  .search-input >input{
    font-size: 14px;
  }
  .hot-service-container{
    margin-top: 64px;
  }
  .hot-service-container>h1{
    font-size: 32px;
  }
  .service-container>h1{
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 24px;
  }
  .service-contact >h1{
    font-weight: 700;
    font-size: 22px;
  }
  .service-item >h2{
    font-size: 14px;
  }
  .service-item p {
    font-size: 12px;
  }
  .service-item a {
    font-size: 12px;
  }
  .download-item >h2{
    font-size: 14px;
  }
  .download-item p {
    font-size: 12px;
  }

  .service-container >a {
    font-size: 14px;
  }
  .notices>h3,p{
    font-size: 12px;
  }
  .service-item{
    padding: 16px;
  }
  .download-item{
    padding: 16px;
  }
}
</style>
