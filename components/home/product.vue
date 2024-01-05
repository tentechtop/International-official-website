<template>
  <div class="container">
    <swiper
        :slidesPerView="1"
        :spaceBetween="16"
        :loop="true"
        :pagination="{clickable: true}"
        :breakpoints="{
          '767':{
            slidesPerView: 1,
            spaceBetween: 16,
          },
          '768':{
            slidesPerView: 2,
            spaceBetween: 16,
          },
        }"
        :autoplay="{delay: delaySecond,disableOnInteraction: false}"
        :navigation="true" :modules="modules"
        class="mySwiper"
        @mouseover="delaySecond=50000"
        @mouseleave="delaySecond=5000"
    >
      <swiper-slide v-for="(item, index) in productList">
        <div class="swiper-item">
          <div class="intro-container">



            <div class="product-name animate__animated animate__fadeInUpByCustom animate__delay-0.035s">
              <h1>{{ item.title1 }}</h1>
            </div>

            <nuxt-link :to="localePath(item.buttonPath)">{{item.buttonTitle }} ></nuxt-link>


          </div>
          <kw-video-hover class="solution-img" :img-url="item.imgUrl" :poster="item.videoPoster" :src="item.videoUrl"></kw-video-hover>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script  setup lang="ts">
import { ref,defineProps} from "vue";
const route=useRoute()
const router = useRouter()
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const modules = [Autoplay, Pagination, Navigation, A11y];
const delaySecond = ref(5000)






const props = defineProps({
  productList: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>
.videoPlay {
  position: absolute;
  /* z-index: 20; */
  background: rgba(255,255,255,0.3) url(../../public/png/icon-play.png) no-repeat center;
  padding: 37px;
  left: 50%;
  top: 50%;
  border: 2px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  margin-left: -37px;
}
.videoPlay:after {
  content: "";
  left: -4px;
  top: -4px;
  bottom: -4px;
  right: -4px;
  position: absolute;
  border: 4px solid transparent;
  border-left: 4px solid #fff;
  border-radius: 50%;
  -webkit-animation: round 6s linear infinite;
  animation: round 6s linear infinite;
}

@keyframes round {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

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
  background: url(../../public/png/icon-slideDown.png) no-repeat center;
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
  height: auto;
}
.swiper-item {
  transition: all 0.3s ease;
  width: 100%;
  height: 720px;
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

.intro-container{
  top: 75%;
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro-container>P {
  font-size: 20px;
  font-weight: 300;
  color: #3a3a3a;
  margin-bottom: 8px;
}
.intro-container>h1 {
  color: #3a3a3a;
  font-size: 28px;
}
.intro-container>h2 {
  color: #3a3a3a;
  margin-top: 8px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 300;
}
.product-name {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
}

.product-name>h1 {
  font-weight: 700;
  margin: 12px 0;
  font-size: 30px;
  line-height: 1;
  color: #fff;
}
.intro-container>a{
  font-size: 16px;
  margin-top: 16px;
  color: #FFFFFF;
}
.intro-container>a:hover {
  text-decoration: underline;
}

/*导航按钮本体*/
:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background-color: #fff;
  opacity: 0;
}
/*激活的导航按钮本体*/
:deep(.swiper-pagination) .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: rgb(255, 255, 255,0);
}

/*导航按钮间距*/
.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,
:deep(.swiper-pagination-horizontal.swiper-pagination-bullets) .swiper-pagination-bullet {
  margin: 0 24px;
}




:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  padding: 0 32px;
  color: rgb(0, 0, 0,0.8);
  transform: scale(0.75);
}


:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
  color: rgb(2, 125, 255,0.8);
}


/*pc*/
@media screen and (min-width: 768px) {


}

/*phone*/
@media screen and (max-width: 768px) {

  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    padding: 0 32px;
    color: rgb(0, 0, 0,0.8);
    transform: scale(0.75);
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
