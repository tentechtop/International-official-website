<template>
  <div class="app">
    <!--  slam  -->
    <div class="container">
      <div class="banner">
        <div class="intro-container">
          <h1>{{pageData.pageTitle}}</h1>
        </div>
        <kw-image style="filter: brightness(0.65)" class="banner-bg" src="https://file.kwunphi.com/kwunphi4/videos/philosophy-technology/video/%E6%B9%96%E5%8D%97%E8%A1%A1%E9%98%B3%E9%95%BF%E8%99%B9%E9%94%85%E7%82%89%E9%A1%B9%E7%9B%AE(2).MOV?x-oss-process=video/snapshot,t_1000,m_fast" fit="cover"  alt="怪虫机器人 轻便"></kw-image>
      </div>
      <div class="next-container">
        <div  class="item-container"  v-for="(item,index) in pageData.pageInfoList">
          <div v-if="index %2 === 0" class="next-item">
            <div class="introduce-container">
<!--            <h1>{{item.title1}}</h1>-->
              <div class="video-container">
                <kw-video-controllers class="video-item" :img-url="item.imgUrl" :poster="item.videoPoster" :src="item.videoUrl"></kw-video-controllers>
              </div>
              <div class="text-container" style="padding-left: 40px">
                <h1>{{item.title1}}</h1>
                <p>{{item.title2}}</p>
              </div>
            </div>
          </div>


          <div v-else class="next-item">
<!--            <h1>{{item.title1}}</h1>-->
            <div class="introduce-container">
              <div class="text-container" style="padding-right: 40px">
                <h1>{{item.title1}}</h1>
                <p>{{item.title2}}</p>
              </div>
              <div class="video-container">
                <kw-video-controllers class="video-item" :img-url="item.imgUrl" :poster="item.videoPoster" :src="item.videoUrl"></kw-video-controllers>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref, toRefs, onMounted, getCurrentInstance,onUnmounted,onUpdated } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale, locales } = useI18n()
import { useRoute, useRouter } from "vue-router";
const router = useRouter()
const route = useRoute()
import philosophyTechnology from "assets/js/philosophy-technology/philosophyTechnologyList";


const pageData = ref({})


pageData.value = philosophyTechnology.techMap.get( route.params.type) || {}







onUpdated(()=>{
  pageData.value = philosophyTechnology.techMap.get( route.params.type) || {}
})
</script>

<style scoped>
.app{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.banner{
  position: relative;
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.banner-bg{
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.intro-container{
  z-index: 2;
  position: absolute;
  top: 50%;
}
.intro-container>h1{
  text-align: center;
  font-weight: 700;
  font-size: 44px;
  color: white;
}
.intro-container>p{
  text-align: center;
  color: white;
  margin: 6px 0;
  font-weight: 300;
}
.next-container{
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px;
}
.item-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.next-item{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px 0;
}
.next-item>h1{
  font-weight: 700;
}
.introduce-container{
  margin-top: 36px;
  width: 100%;
  height: 440px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.text-container{
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.text-container>h1{
  margin-bottom: 10px;
  font-weight: 700;
}
.video-container{
  width: 50%;
  height: 100%;
}
.video-item{
  width: 100%;
  object-fit: cover;
}
</style>
