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
              <img :src="$t(video.previewImgUrl)">
            </div>
            <h1>{{$t(video.desc)}}</h1>
            <div class="tag-space">
              <img src="https://file.kwunphi.com/kwunphi4/images/commons/time-icon.svg">
              <h1>{{$t(video.date)}}</h1>
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


        <video  :src="$t(currentPlayVideo.videoUrl)"  autoplay :poster="$t(currentPlayVideo.previewImgUrl)"
                controls :autoplay="isPreviewImgShow" :loop="isPreviewImgShow"> </video>



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
    title:"instructionalVideos.videoList1.title",
    videoList:[
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList1.video1.imgUrl",
        videoUrl:"instructionalVideos.videoList1.video1.videoUrl",
        desc:"instructionalVideos.videoList1.video1.title",
        date:"instructionalVideos.videoList1.video1.date",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList1.video2.imgUrl",
        videoUrl:"instructionalVideos.videoList1.video2.videoUrl",
        desc:"instructionalVideos.videoList1.video2.title",
        date:"instructionalVideos.videoList1.video2.date",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList1.video3.imgUrl",
        videoUrl:"instructionalVideos.videoList1.video3.videoUrl",
        desc:"instructionalVideos.videoList1.video3.title",
        date:"instructionalVideos.videoList1.video3.date",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList1.video4.imgUrl",
        videoUrl:"instructionalVideos.videoList1.video4.videoUrl",
        desc:"instructionalVideos.videoList1.video4.title",
        date:"instructionalVideos.videoList1.video4.date",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList1.video5.imgUrl",
        videoUrl:"instructionalVideos.videoList1.video5.videoUrl",
        desc:"instructionalVideos.videoList1.video5.title",
        date:"instructionalVideos.videoList1.video5.date",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList1.video6.imgUrl",
        videoUrl:"instructionalVideos.videoList1.video6.videoUrl",
        desc:"instructionalVideos.videoList1.video6.title",
        date:"instructionalVideos.videoList1.video6.date",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList1.video7.imgUrl",
        videoUrl:"instructionalVideos.videoList1.video7.videoUrl",
        desc:"instructionalVideos.videoList1.video7.title",
        date:"instructionalVideos.videoList1.video7.date",
        isSelected:false,
        isMouseover:false,
      },
    ]
  },
  {
    title:"instructionalVideos.videoList2.title",
    videoList:[
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList2.video1.imgUrl",
        videoUrl:"instructionalVideos.videoList2.video1.videoUrl",
        desc:"instructionalVideos.videoList2.video1.title",
        date:"instructionalVideos.videoList2.video1.date",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList2.video2.imgUrl",
        videoUrl:"instructionalVideos.videoList2.video2.videoUrl",
        desc:"instructionalVideos.videoList2.video2.title",
        date:"instructionalVideos.videoList2.video2.date",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList2.video3.imgUrl",
        videoUrl:"instructionalVideos.videoList2.video3.videoUrl",
        desc:"instructionalVideos.videoList2.video3.title",
        date:"instructionalVideos.videoList2.video3.date",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList2.video4.imgUrl",
        videoUrl:"instructionalVideos.videoList2.video4.videoUrl",
        desc:"instructionalVideos.videoList2.video4.title",
        date:"instructionalVideos.videoList2.video4.date",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList2.video5.imgUrl",
        videoUrl:"instructionalVideos.videoList2.video5.videoUrl",
        desc:"instructionalVideos.videoList2.video5.title",
        date:"instructionalVideos.videoList2.video5.date",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList2.video6.imgUrl",
        videoUrl:"instructionalVideos.videoList2.video6.videoUrl",
        desc:"instructionalVideos.videoList2.video6.title",
        date:"instructionalVideos.videoList2.video6.date",
        isSelected:false,
        isMouseover:false,
      },
    ]
  },
  {
    title:"instructionalVideos.videoList3.title",
    videoList:[
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList3.video1.imgUrl",
        videoUrl:"instructionalVideos.videoList3.video1.videoUrl",
        desc:"instructionalVideos.videoList3.video1.title",
        date:"instructionalVideos.videoList3.video1.date",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList3.video2.imgUrl",
        videoUrl:"instructionalVideos.videoList3.video2.videoUrl",
        desc:"instructionalVideos.videoList3.video2.title",
        date:"instructionalVideos.videoList3.video2.date",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList3.video3.imgUrl",
        videoUrl:"instructionalVideos.videoList3.video3.videoUrl",
        desc:"instructionalVideos.videoList3.video3.title",
        date:"instructionalVideos.videoList3.video3.date",
        isSelected:false,
        isMouseover:false,
      },
    ]
  },
  {
    title:"instructionalVideos.videoList4.title",
    videoList:[
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList4.video1.imgUrl",
        videoUrl:"instructionalVideos.videoList4.video1.videoUrl",
        desc:"instructionalVideos.videoList4.video1.title",
        date:"instructionalVideos.videoList4.video1.date",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList4.video2.imgUrl",
        videoUrl:"instructionalVideos.videoList4.video2.videoUrl",
        desc:"instructionalVideos.videoList4.video2.title",
        date:"instructionalVideos.videoList4.video2.date",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList4.video3.imgUrl",
        videoUrl:"instructionalVideos.videoList4.video3.videoUrl",
        desc:"instructionalVideos.videoList4.video3.title",
        date:"instructionalVideos.videoList4.video3.date",
        isSelected:false,
        isMouseover:false,
      },
      {
        productId:1,
        previewImgUrl:"instructionalVideos.videoList4.video4.imgUrl",
        videoUrl:"instructionalVideos.videoList4.video4.videoUrl",
        desc:"instructionalVideos.videoList4.video4.title",
        date:"instructionalVideos.videoList4.video4.date",
        isSelected:false,
        isMouseover:false,
      },
    ]
  },

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
  max-height: 164px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.video-play-container>video{
  width: 100%;
  max-height: 70vh;
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
