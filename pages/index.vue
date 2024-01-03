<template>
  <div class="home-page">
    <div :style="{ width: '100%' }">
      <home-banner :banner-list="bannerData"></home-banner>
    </div>

    <div class="home-product-list" :style="{ width: '100%' }">
      <home-product :product-list="productData"></home-product>
    </div>


    <div class="home-case-list" :style="{ width: '100%' }">
      <home-case :case-list="caseData"></home-case>
    </div>

<!--    <div class="home-comprehensive" :style="{ width: '100%' }">
      <home-comprehensive :comprehensive-list="comprehensiveData"></home-comprehensive>
    </div>-->


    <div class="home-philosophy-technology" :style="{ width: '100%' }">
      <home-philosophy-technology :philosophy-technology-list="philosophyTechnologyList"></home-philosophy-technology>


    </div>





  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, onMounted, getCurrentInstance,onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale, locales } = useI18n()
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const bannerData = ref([
  {
    title1: "便携移动",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_03.jpg",
    videoPoster:"https://www.kibing-glass.com/uploadfiles/2022/10/Z20220415142617450002.jpg",
    videoUrl:"https://www.kibing-glass.com/uploadfiles/2022/04/20220414170623757.mp4",
    buttonTitle:"了解更多",
    buttonPath: "/philosophy-technology/portable",
    alt:"怪虫机器人"
  },
  {
    title1: "无人值守",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_03.jpg",
    videoPoster:"https://www.kibing-glass.com/uploadfiles/2022/10/Z20220415142617450002.jpg",
    videoUrl:"https://www.kibing-glass.com/uploadfiles/2022/04/20220414170623757.mp4",
    buttonTitle:"了解更多",
    buttonPath: "/unattended",
    alt:"怪虫机器人"
  },
])
const productData = ref([
  {
    title1: "怪虫使用语义视觉技术",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_03.jpg",//产品宣传图片
    videoPoster:"https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_03.jpg",//视频第一帧
    videoUrl:"https://1311561956.vod2.myqcloud.com/c8f1b1e8vodcq1311561956/97da5f31243791575541930272/6N8KVggvaQwA.mp4",//视频
    buttonTitle:"了解详情",
    buttonPath: "/philosophy-technology/slam",
    alt:"怪虫机器人"
  },
  {
    title1: "为什么家用扫地机器人技术不适合光伏清洁",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_03.jpg",
    videoPoster:"https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_03.jpg",
    videoUrl:"https://1311561956.vod2.myqcloud.com/c8f1b1e8vodcq1311561956/97da5f31243791575541930272/6N8KVggvaQwA.mp4",
    buttonTitle:"了解详情",
    buttonPath: "/philosophy-technology/why-not",
    alt:"怪虫机器人"
  },
  {
    title1: "为什么RTK技术不适合光伏清洁",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_03.jpg",
    videoPoster:"https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_03.jpg",
    videoUrl:"https://1311561956.vod2.myqcloud.com/c8f1b1e8vodcq1311561956/97da5f31243791575541930272/6N8KVggvaQwA.mp4",
    buttonTitle:"了解详情",
    buttonPath: "/philosophy-technology/why-not-rtk",
    alt:"怪虫机器人"
  },
  {
    title1: "不可能三角",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_03.jpg",
    videoPoster:"https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_03.jpg",
    videoUrl:"https://1311561956.vod2.myqcloud.com/c8f1b1e8vodcq1311561956/97da5f31243791575541930272/6N8KVggvaQwA.mp4",
    buttonTitle:"了解详情",
    buttonPath: "/philosophy-technology/impossible-triangle",
    alt:"怪虫机器人"
  },
/*  {
    title1: "可持续清洁",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_03.jpg",
    videoPoster:"https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_03.jpg",
    videoUrl:"https://1311561956.vod2.myqcloud.com/c8f1b1e8vodcq1311561956/97da5f31243791575541930272/6N8KVggvaQwA.mp4",
    buttonTitle:"了解详情",
    buttonPath: "/kwun/sustainable-cleaning",
    alt:"怪虫机器人"
  },*/
])
const caseData = ref([
  {
    title1: "重复定位精度",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://file.kwunphi.com/kwunphi4/videos/new/home-video-cover-04.jpg",
    videoPoster:"https://file.kwunphi.com/kwunphi4/videos/new/home-video-cover-04.jpg",
    videoUrl:"https://file.kwunphi.com/kwunphi4/videos/new/home-video-04.mp4",
    buttonTitle:"了解详情 >",
    buttonPath: "/philosophy-technology/precise-repeatable-positioning",
    alt:"怪虫机器人"
  },
  {
    title1: "毫秒纠偏",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://file.kwunphi.com/kwunphi4/videos/new/home-video-cover-02.jpg",
    videoPoster:"https://file.kwunphi.com/kwunphi4/videos/new/home-video-cover-02.jpg",
    videoUrl:"https://file.kwunphi.com/kwunphi4/videos/new/home-video-02.mp4",
    buttonTitle:"了解详情 >",
    buttonPath: "/philosophy-technology/millisecond-binding",
    alt:"怪虫机器人"
  },
  {
    title1: "为什么摄像头在车底",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://file.kwunphi.com/kwunphi4/videos/new/home-video-cover-01.jpg",
    videoPoster:"https://file.kwunphi.com/kwunphi4/videos/new/home-video-cover-01.jpg",
    videoUrl:"https://file.kwunphi.com/kwunphi4/videos/new/home-video-01.mp4",
    buttonTitle:"了解详情 >",
    buttonPath: "/philosophy-technology/camera-under-car",
    alt:"怪虫机器人"
  },
  {
    title1: "为什么使用0半径转弯",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://file.kwunphi.com/kwunphi4/videos/new/home-video-cover-03.jpg",
    videoPoster:"https://file.kwunphi.com/kwunphi4/videos/new/home-video-cover-03.jpg",
    videoUrl:"https://file.kwunphi.com/kwunphi4/videos/new/home-video-03.mp4",
    buttonTitle:"了解详情 >",
    buttonPath: "/philosophy-technology/turn-on-the-spot",
    alt:"怪虫机器人"
  },
  {
    title1: "为什么不掉下去",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://file.kwunphi.com/kwunphi4/videos/new/home-video-cover-06.jpg",
    videoPoster:"https://file.kwunphi.com/kwunphi4/videos/new/home-video-cover-06.jpg",
    videoUrl:"https://file.kwunphi.com/kwunphi4/videos/new/home-video-06.mp4",
    buttonTitle:"了解详情 >",
    buttonPath: "/philosophy-technology/precise-edge-detection",
    alt:"怪虫机器人"
  },
  {
    title1: "必维万次无隐裂",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://file.kwunphi.com/kwunphi4/videos/poster/home-video-03-cover.jpg",
    videoPoster:"https://file.kwunphi.com/kwunphi4/videos/poster/home-video-03-cover.jpg",
    videoUrl:"https://file.kwunphi.com/kwunphi4/videos/poster/home-video-03.mp4",
    buttonTitle:"了解详情 >",
    buttonPath: "/philosophy-technology/why-not-microcracks",
    alt:"怪虫机器人"
  },
  {
    title1: "可持续清洁",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://file.kwunphi.com/kwunphi4/videos/new/home-video-cover-05.jpg",
    videoPoster:"https://file.kwunphi.com/kwunphi4/videos/new/home-video-cover-05.jpg",
    videoUrl:"https://file.kwunphi.com/kwunphi4/videos/new/home-video-05.mp4",
    buttonTitle:"了解详情 >",
    buttonPath: "/kwun/sustainable-cleaning",
    alt:"怪虫机器人"
  },
])
const comprehensiveData = ref([
  {
    title1: "公司简介",
    title2: "Kwunphi 怪虫机器人",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://x-human.cn/uploads/20220510/4513d0dc869c5f3fa3f463526310a012.jpg",
    videoPoster:"https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_03.jpg",
    videoUrl:"https://1311561956.vod2.myqcloud.com/c8f1b1e8vodcq1311561956/97da5f31243791575541930272/6N8KVggvaQwA.mp4",
    buttonTitle:"了解更多 >>",
    buttonPath: "/about",
    alt:"怪虫机器人"
  },
  {
    title1: "成功案例",
    title2: "服务物业公司/清洁公司100+",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://x-human.cn/uploads/20220510/84c54c5f267b740d86f1db07a57af821.jpg",
    videoPoster:"https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_03.jpg",
    videoUrl:"https://1311561956.vod2.myqcloud.com/c8f1b1e8vodcq1311561956/97da5f31243791575541930272/6N8KVggvaQwA.mp4",
    buttonTitle:"了解更多 >>",
    buttonPath: "/case",
    alt:"怪虫机器人"
  },
  {
    title1: "新闻资讯",
    title2: "快速了解公司最新新闻和行业动态",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://x-human.cn/uploads/20220512/e97d461b79fb368c7e312e9c8b1748ef.png",
    videoPoster:"https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_03.jpg",
    videoUrl:"https://1311561956.vod2.myqcloud.com/c8f1b1e8vodcq1311561956/97da5f31243791575541930272/6N8KVggvaQwA.mp4",
    buttonTitle:"了解更多 >>",
    buttonPath: "/news",
    alt:"怪虫机器人"
  },
])
const philosophyTechnologyList = ref([
  {
    title1: "公司简介",
    title2: "Kwunphi 怪虫机器人",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    mediaType:"img",
    imgUrl: "https://x-human.cn/uploads/20220510/4513d0dc869c5f3fa3f463526310a012.jpg",
    videoPoster:"https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_03.jpg",
    videoUrl:"https://1311561956.vod2.myqcloud.com/c8f1b1e8vodcq1311561956/97da5f31243791575541930272/6N8KVggvaQwA.mp4",
    buttonTitle:"了解更多 >>",
    buttonPath: "/about",
    alt:"怪虫机器人"
  },



])







useHead({
  title: t('seo.pages.home.title'),
  meta: [
    {name: 'keywords', content: t('seo.pages.home.keywords') },
    {name: 'description', content: t('seo.pages.home.description') }
  ],
})
</script>

<style scoped>
.home-page{
  height: auto;
  margin-bottom:96px

}
.language-table-item{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}
.home-product-list{
  position: relative;
  margin-top: 72px;
}
.home-case-list{
  position: relative;
  margin-top: 72px;
}
.home-comprehensive{
  position: relative;
  margin-top: 72px;
}
/*pc*/
@media screen and (min-width: 768px){

}


/*phone*/
@media screen and (max-width: 768px){
  .home-product-list{
    margin-top: 24px;
  }
  .home-case-list{
    margin-top: 24px;
  }
  .home-comprehensive{
    margin-top: 24px;
  }
}

</style>
