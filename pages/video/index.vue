<template>
  <div class="container">
    <div class="video-container">
      <div v-for="(item,index) in videoList" class="video-item-container">
        <h1>{{$t(item.title)}}</h1>
        <div class="video-item-list">
          <div v-for="(video ,index) in item.videoList" class="video-item"
               @mouseover="video.isMouseover=true"
               @mouseleave="video.isMouseover=false"
               @click="goToPlayVideo(video)">
            <div class="img-space">
              <img :src="video.previewImgUrl">
            </div>
            <h1>{{$t(video.desc)}}</h1>
            <div class="tag-space">
              <img src="https://file.kwunphi.com/kwunphi4/images/commons/time-icon.svg">
              <h1>{{video.date}}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isPalyingVideo" class="play-video-page" >

      <div class="close-bg" @click="isPalyingVideo=false"></div>




      <div class="video-play-container" @click="isPreviewImgShow=!isPreviewImgShow">
        <div class="close-button" @click="isPalyingVideo=false">
          <img src="https://file.kwunphi.com/kwunphi4/images/svg/%E5%85%B3%E9%97%AD.svg" :alt="$t('close')">
        </div>

        <video  :src="currentPlayVideo.videoUrl"  :poster="currentPlayVideo.previewImgUrl"  controls :autoplay="true" :loop="isPreviewImgShow"> </video>

      </div>




    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t, locale, locales } = useI18n()
const currentPlayVideo = ref({})
const isPlayingVideo = ref(false)
useHead({
  title: t('seo.pages.videos.title'),
  meta: [
    {name: 'keywords', content: t('seo.pages.videos.keywords') },
    {name: 'description', content: t('seo.pages.videos.description') }
  ],
})

const videoList = ref([
  {
    title:"video.videoList[4].title",
    videoList:[
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/b30zd0a545af044a4ceeabb448491cb005d5.jpg",
        videoUrl:locale.value.startsWith('cn')? "https://file.kwunphi.com/kwunphi4/videos/video-center/%E4%B8%AD%E6%96%87/1%E6%80%8E%E4%B9%88%E6%89%8D%E8%83%BD%E6%8A%8A%E5%85%89%E4%BC%8F%E7%94%B5%E7%AB%99%E6%B8%85%E6%B4%81%E5%BE%97%E5%B9%B2%E5%87%80_batch.mp4":"https://file.kwunphi.com/kwunphi4/videos/video-center/%E8%8B%B1%E6%96%87/1%20How%20to%20clean%20the%20solar%20panels_batch.mp4",
        desc:"video.videoList[4].videoList[0].desc",
        date:"2023-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/2d98e755c45b4ef38a7883dce976952d.jpg",
        videoUrl:locale.value.startsWith('cn')? "https://file.kwunphi.com/kwunphi4/videos/video-center/%E4%B8%AD%E6%96%87/2%E5%A6%82%E4%BD%95%E6%B8%85%E6%B4%81%E6%B0%B4%E9%9D%A2%E7%94%B5%E7%AB%99_batch.mp4":"https://file.kwunphi.com/kwunphi4/videos/video-center/%E8%8B%B1%E6%96%87/2%20How%20to%20clean%20water%20photovotaic%20plant_batch.mp4",
        desc:"video.videoList[4].videoList[1].desc",
        date:"2023-11-15",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/9b02ec1dbb5342da96f4fcd42a808025.jpg",
        videoUrl:locale.value.startsWith('cn')? "https://file.kwunphi.com/kwunphi4/videos/video-center/%E4%B8%AD%E6%96%87/3%E5%A6%82%E4%BD%95%E6%B8%85%E6%B4%81%E9%AB%98%E6%A1%A9%E7%94%B5%E7%AB%99_batch.mp4":"https://file.kwunphi.com/kwunphi4/videos/video-center/%E8%8B%B1%E6%96%87/3%20How%20to%20Clean%20High%20PilePhotovotaic%20Plant_batch.mp4",
        desc:"video.videoList[4].videoList[2].desc",
        date:"2023-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/183e64b10c49466ca7d1505ac2ee4ac3.jpg",
        videoUrl:locale.value.startsWith('cn')? "https://file.kwunphi.com/kwunphi4/videos/video-center/%E4%B8%AD%E6%96%87/4%E5%A6%82%E4%BD%95%E7%9E%AC%E9%97%B4%E5%80%8D%E5%A2%9E%E6%B8%85%E6%B4%81%E6%95%88%E7%8E%87_batch.mp4":"https://file.kwunphi.com/kwunphi4/videos/video-center/%E8%8B%B1%E6%96%87/4%20-%20How%20to%20Increase%20Cleaning%20Efficiency%20in%20an%20Ins_batch.mp4",
        desc:"video.videoList[4].videoList[3].desc",
        date:"2023-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/b20z101fd99bbb464235a64f1719ebaa4105.jpg",
        videoUrl:locale.value.startsWith('cn')? "https://file.kwunphi.com/kwunphi4/videos/video-center/%E4%B8%AD%E6%96%87/5%E5%A6%82%E4%BD%95%E5%A4%9C%E9%97%B4%E6%B8%85%E6%B4%81%E5%85%89%E4%BC%8F%E7%94%B5%E7%AB%99_batch.mp4":"https://file.kwunphi.com/kwunphi4/videos/video-center/%E8%8B%B1%E6%96%87/5%20-%20How%20to%20Clean%20Photovoltaic%20Plants%20at%20Night_batch.mp4",
        desc:"video.videoList[4].videoList[4].desc",
        date:"2023-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/b20z6a27807dfce542b4ba24c5995d92285c.jpg",
        videoUrl:locale.value.startsWith('cn')? "https://file.kwunphi.com/kwunphi4/videos/video-center/%E4%B8%AD%E6%96%87/6%E6%80%8E%E4%B9%88%E4%BF%9D%E8%AF%81%E5%A0%92%E8%B5%B0%E5%BE%97%E7%9B%B4_batch.mp4":"https://file.kwunphi.com/kwunphi4/videos/video-center/%E8%8B%B1%E6%96%87/6%20-%20How%20to%20Make%20Sure%20PhiCleaner%20Walk%20Straight_batch.mp4",
        desc:"video.videoList[4].videoList[5].desc",
        date:"2023-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/b20z965506aad580490594778903b3e4db01.jpg",
        videoUrl:locale.value.startsWith('cn')? "https://file.kwunphi.com/kwunphi4/videos/video-center/%E4%B8%AD%E6%96%87/7%E6%80%8E%E4%B9%88%E5%9C%A8%E9%9B%A8%E5%A4%A9%E6%B8%85%E6%B4%81_batch.mp4":"https://file.kwunphi.com/kwunphi4/videos/video-center/%E8%8B%B1%E6%96%87/7%20-%20%20How%20to%20Clean%20in%20Rainy%20Days_batch.mp4",
        desc:"video.videoList[4].videoList[6].desc",
        date:"2023-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/b20z70201e298f9741b5a6829a77aace643c.jpg",
        videoUrl:locale.value.startsWith('cn')? "https://file.kwunphi.com/kwunphi4/videos/video-center/%E4%B8%AD%E6%96%87/8%E5%A6%82%E4%BD%95%E6%B8%85%E6%B4%81%E8%BE%B9%E6%A1%86%E7%A7%AF%E5%B0%98_batch.mp4":"https://file.kwunphi.com/kwunphi4/videos/video-center/%E8%8B%B1%E6%96%87/8%20-%20How%20to%20Clean%20the%20Border%20Dust_batch.mp4",
        desc:"video.videoList[4].videoList[7].desc",
        date:"2023-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/b30z036d47030c394507a036b5e0da490ad7.jpg",
        videoUrl:locale.value.startsWith('cn')? "https://file.kwunphi.com/kwunphi4/videos/video-center/%E4%B8%AD%E6%96%87/9%E4%B8%BA%E4%BB%80%E4%B9%88%E8%83%BD%E4%B8%8D%E4%BC%A4%E7%BB%84%E4%BB%B6_batch.mp4":"https://file.kwunphi.com/kwunphi4/videos/video-center/%E8%8B%B1%E6%96%87/9%20-%20%20Why%20PhiCleaner%20Will%20Not%20Damage%20the%20Cells_batch.mp4",
        desc:"video.videoList[4].videoList[8].desc",
        date:"2023-11-02",
        isSelected:false,
        isMouseover:false,
      },
    ]
  },
/*  {
    title:"video.videoList[1].title",
    videoList:[
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/b20z101fd99bbb464235a64f1719ebaa4105.jpg",
        videoUrl:"https://file.kwunphi.com/kwunphi/video/zh/b20z101fd99bbb464235a64f1719ebaa4105.mp4",
        desc:"video.videoList[1].videoList[0].desc",
        date:"2022-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/b20z6a27807dfce542b4ba24c5995d92285c.jpg",
        videoUrl:"https://file.kwunphi.com/kwunphi/video/zh/b20z6a27807dfce542b4ba24c5995d92285c.mp4",
        desc:"video.videoList[1].videoList[1].desc",
        date:"2022-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/b20z965506aad580490594778903b3e4db01.jpg",
        videoUrl:"https://file.kwunphi.com/kwunphi/video/zh/b20z965506aad580490594778903b3e4db01.mp4",
        desc:"video.videoList[1].videoList[2].desc",
        date:"2022-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/b20z70201e298f9741b5a6829a77aace643c.jpg",
        videoUrl:"https://file.kwunphi.com/kwunphi/video/zh/b20z70201e298f9741b5a6829a77aace643c.mp4",
        desc:"video.videoList[1].videoList[3].desc",
        date:"2022-11-02",
        isSelected:false,
        isMouseover:false,
      },
    ]
  },
  {
    title:"video.videoList[2].title",
    videoList:[
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/b10z7f575ed52a7b4caa80aa2d5f0bd876a9.jpg",
        videoUrl:"https://file.kwunphi.com/kwunphi/video/zh/b10z7f575ed52a7b4caa80aa2d5f0bd876a9.mp4",
        desc:"video.videoList[2].videoList[0].desc",
        date:"2022-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/b10z692f787324a942aaaf65550d65f44c04.png",
        videoUrl:"https://file.kwunphi.com/kwunphi/video/zh/b10z692f787324a942aaaf65550d65f44c04.mp4",
        desc:"video.videoList[2].videoList[1].desc",
        date:"2022-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi4/videos/ip65-grade.jpg",
        videoUrl:"https://file.kwunphi.com/kwunphi4/videos/ip65-grade.mp4",
        desc:"video.videoList[2].videoList[2].desc",
        date:"2022-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/b10z3df6b235f48342dba5a52c63008f6b0e.jpg",
        videoUrl:"https://file.kwunphi.com/kwunphi/video/zh/b10z3df6b235f48342dba5a52c63008f6b0e.mp4",
        desc:"video.videoList[2].videoList[3].desc",
        date:"2022-11-02",
        isSelected:false,
        isMouseover:false,
      },
    ]
  },
  {
    title:"video.videoList[3].title",
    videoList:[
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/b30z036d47030c394507a036b5e0da490ad7.jpg",
        videoUrl:"https://file.kwunphi.com/kwunphi/video/zh/b30z036d47030c394507a036b5e0da490ad7.mp4",
        desc:"video.videoList[3].videoList[0].desc",
        date:"2022-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/b30z21d0342270be4c8cb461f540de5aa9a9.jpg",
        videoUrl:"https://file.kwunphi.com/kwunphi/video/zh/b30z21d0342270be4c8cb461f540de5aa9a9.mp4",
        desc:"video.videoList[3].videoList[1].desc",
        date:"2022-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/tb10xz5214e0a2ea2644b0966fd875bda3b516.jpg",
        videoUrl:"https://file.kwunphi.com/kwunphi/video/zh/tb10xz5214e0a2ea2644b0966fd875bda3b516.mp4",
        desc:"video.videoList[3].videoList[2].desc",
        date:"2022-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/tb30xz187edb1738ac4e1e82f45525b28de12d.jpg",
        videoUrl:"https://file.kwunphi.com/kwunphi/video/zh/tb30xz187edb1738ac4e1e82f45525b28de12d.mp4",
        desc:"video.videoList[3].videoList[3].desc",
        date:"2022-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        // previewImgUrl:"https://file.kwunphi.com/kwunphi4/videos/large-angle.jpg",
        // videoUrl:"https://file.kwunphi.com/kwunphi4/videos/large-angle.mp4",
        previewImgUrl:"https://file.kwunphi.com/kwunphi4/videos/poster/a08be484720999327c9c1bcdda5ac498.jpg",
        videoUrl:"https://file.kwunphi.com/kwunphi4/videos/tech/a08be484720999327c9c1bcdda5ac498.mp4",
        desc:"video.videoList[3].videoList[4].desc",
        date:"2022-11-02",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        // previewImgUrl:"https://file.kwunphi.com/kwunphi/poster/zh/tb30xz4161da5073174dbe9c9e460f0f93947f.jpg",
        // videoUrl:"https://file.kwunphi.com/kwunphi/video/zh/tb30xz4161da5073174dbe9c9e460f0f93947f.mp4",
        previewImgUrl:"https://file.kwunphi.com/kwunphi4/videos/poster/20230809213349.jpg",
        videoUrl:"https://file.kwunphi.com/kwunphi4/videos/tech/20230809213349.mp4",
        desc:"video.videoList[3].videoList[5].desc",
        date:"2022-11-02",
        isSelected:false,
        isMouseover:false,
      },

    ]
  },*/
])
const isPalyingVideo = ref(false);

const isPreviewImgShow = ref(true)

function goToPlayVideo(video){
  video.isSelected=!video.isSelected
  currentPlayVideo.value=video
  isPalyingVideo.value=true
}
watch(isPalyingVideo,(newVal)=>{
  openOrCloseDialog(newVal)
})


function openOrCloseDialog(newVal) {
  if (newVal){
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = getScrollbarWidth() + 'px';
  }else {
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


onBeforeUnmount(()=>{
  document.body.style.overflowY = 'auto';
  document.body.style.paddingRight = '0';
})
</script>

<style scoped>
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.video-container{
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;
}
.video-item-container {
  transform: translateX(16px);
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}

.video-item-container >h1{
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 22px;
  font-size: 22px;
  color: rgba(0,0,0,0.75);
  font-weight: 700;
  border-left: 4px solid rgba(2,10,255);
}
.video-item-list{
  margin-top: 16px;
  width: 100%;
  min-height: 220px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.video-item{
  margin-right: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  width: calc(25% - 16px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.10);
}
.video-item >h1{
  margin-left: 5px;
  font-size: 14px;
  font-weight: 500;
}
.img-space{
  width: 100%;
  overflow: hidden;
}
.img-space >img{
  width: 100%;
  object-fit: cover;
}
.tag-space{
  margin-left: 5px;
  margin-top: 3px;
  display: flex;
  flex-direction: row;
  margin-bottom: 6px;
}
.tag-space>img{
  width: 17px;
}
.tag-space>h1{
  font-size: 14px;
  font-weight: 300;
}
.play-video-page{
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; /* 使用视窗宽度作为宽度 */
  height: 100vh; /* 使用视窗高度作为高度 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.35);
}
.close-bg{
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.35);
}
.close-button{
  position: absolute;
  top: 0px;
  right: -60px;
  cursor: pointer;
  z-index: 9999;
}
.close-button>img{
  height: 40px;
  width: 40px;
  transition: all 0.5s ease;
  transform: rotate(0deg);
}
.close-button:hover >img{
  transform: rotate(180deg);
}


.video-play-container{
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  min-height: 100px;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.video-preview-img{
  width: 100%;
  height: 0;
  padding-bottom: 55%;
}
.video-play-container>video{
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
}
@media screen and (max-width: 1260px){
  .video-play-container{
    width: 100%;
    padding: 0 16px;
  }

  .close-button{
    position: absolute;
    top: -50px;
    right: 20px;
    cursor: pointer;
    z-index: 9999;
  }
}


@media screen and (max-width: 1024px){
  .video-item{
    width: calc(33.33% - 16px);
  }
}

@media screen and (max-width: 767px){
  .video-item-container {
    transform: translateX(8px);
  }
  .video-item{
    margin-right: 8px;
    width: calc(50% - 8px);
  }
  .video-item >h1{
    font-size: 12px;
  }
  .tag-space>img{
    width: 12px;
  }
  .tag-space>h1{
    font-size: 12px;
  }
  .video-item-container {
    margin-top: 24px;
  }
  .video-item-container:first-child{
    margin-top: 0px;
  }
}


</style>
