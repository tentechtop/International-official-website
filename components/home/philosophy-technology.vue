<template>
  <div class="container">
    <!--   :centeredSlides="true"  元素居中 -->
    <swiper
        :slidesPerView="1"
        :spaceBetween="0"
        :loop="true"
        :centeredSlides="true"
        :pagination="{clickable: true}"
        :autoplay="{delay: delaySecond,disableOnInteraction: false}"
        :navigation="true" :modules="modules"
        class="mySwiper"
        ref="mySwiper"
        @mouseover="delaySecond=50000"
        @mouseleave="delaySecond=20000"
        @slideChange="handleSlideChange"
    >
      <swiper-slide v-for="(item, index) in philosophyTechnologyList">
        <div class="swiper-item">
          <div v-if="index %2 === 0" class="tech-container">
            <div class="intro-container" v-loadByAnimate>
              <h1 >{{item.title1}}</h1>
              <p>{{item.title2}}</p>
              <nuxt-link :to="localePath(item.buttonPath)" class="button-container">
                {{item.buttonTitle}}
              </nuxt-link>
            </div>
            <div class="video-container">
              <kw-video-controllers class="video-item" :img-url="item.imgUrl" :poster="item.videoPoster" :src="item.videoUrl"></kw-video-controllers>
            </div>
          </div>
          <div v-if="index %2 !== 0" class="tech-container">
            <div class="video-container">
              <kw-video-controllers class="video-item" :img-url="item.imgUrl" :poster="item.videoPoster" :src="item.videoUrl"></kw-video-controllers>
            </div>
            <div class="intro-container"  v-loadByAnimate style="padding-left: 40px">
              <h1 >{{item.title1}}</h1>
              <p>{{item.title2}}</p>
              <nuxt-link :to="localePath(item.buttonPath)" class="button-container">
                {{item.buttonTitle}}
              </nuxt-link>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { ref,defineProps} from "vue";
const route=useRoute()
const router = useRouter()
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const modules = [Autoplay, Pagination, Navigation, A11y];
const delaySecond = ref(20000)

const mySwiper = ref(null);



const triggerNextSlide = (index) => {

};


const handleSlideChange = (event) => {


};







const props = defineProps({
  philosophyTechnologyList: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>
.slideDown-button{
  bottom: calc(0% - 25px);
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.slideDown {
  padding: 25px 15px;
  position: absolute;
  left: 50%;
  margin-left: -10px;
  bottom: 50px;
  z-index: 30;
  -webkit-animation: bounce 2s ease-in-out infinite;
  animation: bounce 2s ease-in-out infinite;
  background: url(../public/png/icon-slideDown.png) no-repeat center;
}

@keyframes bounce {
  0% {
    bottom: 70px;
  }
  50% {
    bottom: 50px;
  }
  100% {
    bottom: 70px;
  }
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.container{
  width: 100%;
}

.mySwiper {
  width: 100%;
  height: 100%;
}
.swiper-item {
  position: relative;
  transition: all 0.3s ease;
  width: 100%;
  height: 500px;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f3f3;
}

.tech-container{
  width: 100%;
  max-width: 1500px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.intro-container{
  width: 46%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.intro-container>h1{
  font-weight: 700;
  font-size: 34px;
}
.intro-container>p{
  margin-top: 6px;
  font-weight: 400;
  font-size: 20px;
  text-align: left;
}
.video-container{
  width: 54%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.video-item{
  width: 100%;
  object-fit: cover;
}

.button-container{
  padding: 8px 16px 8px 0;
  color: #0067b8;
  cursor: pointer;
}
.button-container:hover{
  animation: goto 0.5s ease-in-out; /* 使用 goto 动画，持续时间为 0.5 秒，缓动函数为 ease-in-out */
}

@keyframes goto {
  0%{
    transform: translateX(0px);
  }
  50%{
    transform: translateX(8px);
  }
  100%{
    transform: translateX(0px);
  }
}

@media screen  and (max-width:  1520px){
  .swiper-item {
    width: 100%;
    max-height: 440px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .intro-container{
    display: none;
  }
  .video-container{
    width: 100%;
  }
  .video-item{
    width: 100%;
    object-fit: cover;
  }








}


/*导航按钮本体*/
:deep(.swiper-pagination-bullet) {
  width: 48px;
  height: 4px;
  background-color: #fff;
  border-radius: 0;
  display: none;
}

/*激活后导航按钮本体*/
:deep(.swiper-pagination) .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: rgb(255, 255, 255,0);

}

/*导航按钮间距*/
.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,
:deep(.swiper-pagination-horizontal.swiper-pagination-bullets) .swiper-pagination-bullet {
  margin: 0 4px;
}


/*分页*/
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  transform: scale(1.25);
  border-radius: 0;
  color: rgb(255, 255, 255,0);
}


:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
  color: rgb(2, 125, 255,0);
}


/*pc*/
@media screen and (min-width: 768px) {


}

/*phone*/
@media screen and (max-width: 768px) {
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    display: none;
  }
  .swiper-item {
    transition: all 0.3s ease;
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .solution-img{
    transition: all 0.3s ease;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

</style>
