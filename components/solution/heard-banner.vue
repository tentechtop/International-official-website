<template>
  <div class="container">
    <swiper
        :slidesPerView="1"
        :spaceBetween="0"
        :loop="true"
        :centeredSlides="true"
        :pagination="{clickable: true}"
        :autoplay="{delay: 5000,disableOnInteraction: false}"
        :navigation="true" :modules="modules"
        class="mySwiper">
      <swiper-slide v-for="(item, index) in picList">
        <div class="swiper-item " >
          <div class="intro-container animate__animated" v-loadByAnimate="'animate__fadeInUp'">
            <h1>{{ $t(item.title) }}</h1>
            <p>{{ $t(item.desc) }}</p>
            <p>{{ $t(item.desc2) }}</p>
            <div class="button-space">
              <nuxt-link class="goto-video-button" :to="localePath('/video')">
                <p>{{ $t('solution.watchTheVideo') }}</p>
                <img src="https://file.kwunphi.com/kwunphi4/images/commons/bofang.svg">
              </nuxt-link>
              <nuxt-link class="goto-video-button learn-more" :to="localePath(item.router)">
                <p>{{ $t('learnMore') }}</p>
              </nuxt-link>
            </div>
          </div>
          <kw-image class="solution-img" :src="item.imgUrl"></kw-image>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
const route=useRoute()
const router = useRouter()
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const onSwiper = swiper => {

};
const onSlideChange = e => {

};
const modules = [Autoplay, Pagination, Navigation, A11y];
// eslint-disable-next-line vue/no-setup-props-destructure
const props = defineProps({
  picList: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro-container{
  transition: all 0.3s ease;
  top: 40%;
  left: 20%;
  z-index: 2;
  position: absolute;
  text-align: left;
}
.intro-container>p {
  font-size: 18px;
  font-weight: 300;
  color: #ffffff;
}

.intro-container>h1 {
  font-weight: 500;
  color: #ffffff;
  font-size: 36px;
  margin-bottom: 10px;
}
.solution-img{
  transition: all 0.3s ease;
  z-index: 1;
  width: 100%;
  height: 800px;
}
.button-space{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 16px;
}

.goto-video-button{
  cursor: pointer;
  margin-right: 16px;
  border-radius: 50px;
  padding: 8px 22px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.goto-video-button>p{
  font-size: 16px;
}
.goto-video-button>p{
  color: black;
}
.goto-video-button:hover{
}
.goto-video-button>img{
  width: 17px;
}
.learn-more{
  background-color: transparent;
  border: 1px solid #ffffff;
}
.learn-more>p{
  color: white;
}

:deep(.swiper-pagination) .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: rgb(255, 255, 255);

}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background-color: #fff;
}

.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,
:deep(.swiper-pagination-horizontal.swiper-pagination-bullets) .swiper-pagination-bullet {
  margin: 0 8px;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: rgb(255, 255, 255,0);
}
@media screen and (max-width: 1243px) {
  .intro-container{
    top: 40%;
    left: 96px;
  }
  .solution-img{
    height: 600px;
  }
}

@media screen and (max-width: 1024px) {
  .intro-container{
    top: 40%;
    left: 72px;
  }
  .solution-img{
    height: 500px;
  }
}

@media screen and (max-width: 767px) {
  .intro-container{
    top: 40%;
    left: 36px;
  }
  .solution-img{
    height: 400px;
  }
  .intro-container>p {
    font-size: 20px;
  }

  .intro-container>h1 {
    font-size: 24px;
  }
  .goto-video-button{
    padding: 5px 16px;
  }
}

@media screen and (max-width: 480px) {
  .intro-container{
    top: 40%;
    left: 16px;
  }
  .solution-img{
    height: 300px;
  }
  .intro-container>p {
    font-size: 14px;
  }

  .intro-container>h1 {
    font-size: 16px;
  }
  .goto-video-button{
    padding: 4px 16px;
  }
  .goto-video-button>p{
    font-size: 12px;
  }
}
</style>
