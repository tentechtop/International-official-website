<template>
  <div class="root-container">



    <div class="hot-product-container">
      <div class="product-wrapper">
        <div class="product-card">
          <div class="card">
            <h5>{{ $t('kwun.excellentCleaningEffect') }}</h5>
            <h1 v-if="model">{{$t(model)}}</h1>
            <h4>{{ $t('kwun.highStandardCleaningQuality') }}</h4>
            <div class="links-container">
              <nuxt-link v-if="model" :to="localePath(`/products/${model}`)">{{ $t('learnMore') }} </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-img-card">
          <img src="https://file.kwunphi.com/kwunphi4/images/banner/b11l-frontal-view.png" alt=""
               style="filter: brightness(99%) contrast(93%);">
        </div>
      </div>
    </div>







  </div>
</template>

<script lang="ts"  setup>
import {onBeforeMount, onMounted, onUpdated, ref, watch,getCurrentInstance,computed} from 'vue'
import { useRoute, useRouter } from "vue-router";
const router = useRouter()
const route = useRoute()
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n()
// @ts-ignore
const localePath = useLocalePath();
// @ts-ignore
const switchLocalePath = useSwitchLocalePath();
useHead({
  title: t('seo.pages.product.title'),
  meta: [
    {name: 'keywords', content: t('seo.pages.product.keywords') },
    {name: 'description', content: t('seo.pages.product.description') }
  ],
})








const model = ref(route.query.model)






watch(route,(newValue)=>{
  if (route.path===localePath('/products') && newValue.query.model){
    model.value = newValue.query.model
  }
})

</script>

<style scoped>
.root-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* 外部容器，隐藏滚动条 */
.select-navbar-outer-container {
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: center;
}

/* 内部容器，可左右滑动内容 */
.select-navbar-container {
  width: auto;
  display: flex;
  flex-direction: row;
}

/* 内部元素内容样式 */
.select-navbar {
  display: flex;
  align-items: center;
}

/* 单个元素的样式 */
.select-navbar-item {
  transition: all 0.3s ease;
  height: 85px;
  margin: 10px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}

.select-navbar-item>img {
  object-fit: cover;
  width: auto;
  height: 54px;
}
.select-navbar-item>a{
  font-size: 14px;
  color: rgba(2,125,255);
}
.hot-product-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-title {
  width: 100%;
  padding: 48px 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.product-title>h1{
  font-size: 26px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 14px
}
.product-title>h4{
  font-size: 16px;
  color: rgba(0,0,0,0.7);
  text-align: center;
}
.product-wrapper {
  width: 100%;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.product-wrapper > .product-img-card {
  flex: 1;
  display: flex;
  justify-content: center;
}

.product-img-card img {
  width: 100%;
  max-width: 800px;
}
.product-card {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 16px;
}

.card>h5 {
  text-align: center;
  font-size: 18px;
  line-height: 18px;
  color: rgb(190, 78, 4);
}

.card>h1 {
  text-align: center;
  margin-top: 16px;
  padding: 6px 0;
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
}

.card>h4 {
  text-align: center;
  margin-top: 16px;
  font-size: 18px;
  line-height: 20px;
  color: #6a6a6a;
}

.links-container {
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.links-container a {
  display: inline-block;
  color: rgba(2, 126, 255, 1);
  margin-right: 24px;
  font-size: 18px;
  line-height: 14px;
}

.links-container a:last-child {
  margin-right: 0;
}

.suitable-product-container {
  width: 100%;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.suitable-product {
  background-color: #f3f3f3;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
}

.suitable-product-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

}

.suitable-product-title>h1 {
  font-size: 28px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
}

.suitable-product-title>h4 {
  padding: 0 16px;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.7);
}

.suitable-product-title>a {
  border-radius: 50px;
  color: white;
  margin-top: 32px;
  width: 100%;
  height: 50px;
  max-width: 200px;
  display: block;
}

.suitable-product-title>a button {
  border-radius: 50px;
  color: white;
  width: 100%;
}

.suitable-product-image {
  height: 480px;
  width: 50%;
}

.product-specifications {
  margin-top: 120px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product-specifications>h1{
  text-align: center;
  font-weight: 700;
  font-size: 38px;
  margin-left: 20px;
  margin-bottom: 20px
}
.fold {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1150px;
  transition: height 0.9s ease;
}

.button-space {
  z-index: 1;
  height: 80px;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
}
.expand-button{
  cursor: pointer;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid #1155FF;
  border-radius: 50px;
}
.expand-button>p{
  font-size: 16px;
  font-weight: 300;
}
.expand-button:hover{
  background-color: #888c91;
  border: 1px solid #888c91;
}
.expand-button>p{
  color: black;
}
.test-button{
  padding: 8px 5px;
  border: 1px solid #1144FF;
  background-color: #1144FF;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.test-button>p{
  font-size: 16px;
  font-weight: 300;
  color: white;
}
@media screen and (max-width: 1024px) {
  .suitable-product-image {
    height: 300px;
  }

}



@media screen and (max-width: 767px) {

  .select-navbar-item {
    margin: 4px;
  }
  .select-navbar-item>img {
    height: 56px;
  }
  .product-wrapper{
    width: calc(100% - 16px);
    flex-direction: column;
  }

  .product-img-card img {
    width: 80%;
    max-width: 800px;
  }
  .card {
    padding: 48px 0 0 0;
  }
  .product-title>h1{
    font-size: 22px;
  }
  .product-title>h4{
    font-size: 15px;
  }

  .suitable-product {
    width: calc(100% - 16px);
    flex-direction: column;
    justify-content: space-between;
  }
  .suitable-product-image {
    height: 280px;
    width: 100%;
  }
  .suitable-product-title {
    min-height: 280px;

  }

  .suitable-product-title>h1 {
    font-size: 18px;
    margin-top: 20px;
    text-align: center;
  }
  .suitable-product-title>a {
    margin-top: 20px;
    text-align: center;
  }
  .suitable-product-title>h4 {
    padding: 0 16px;
    font-size: 13px;
    text-align: center;
  }



  .suitable-product-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
  }
  .product-specifications {
    margin-top: 48px;
  }
  .product-specifications>h1{
    font-size: 32px;
    margin-left: 20px;
    margin-bottom: 20px
  }
  .select-navbar-outer-container {
    max-width: 767px;
    padding: 0 16px;
    overflow: auto;
  }

  .select-navbar-outer-container::-webkit-scrollbar {
    width: 0; /* Width of the scrollbar */
    height: 0px;
  }

  .select-navbar-outer-container::-webkit-scrollbar-thumb {
    background-color: transparent; /* Color of the thumb */
  }

  .select-navbar-outer-container::-webkit-scrollbar-track {
    background-color:transparent; /* Color of the track */
  }

  .product-specifications>h1{
    font-weight: 700;
    font-size: 22px;
  }

}


.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}
.fade-enter-from,
.fade-leave-to {
  transform: translateY(35px);
  opacity: 0;
}

@media screen and (max-width: 580px) {
  .select-navbar-container {
    padding: 8px 0;
  }
  /* 单个元素的样式 */
  .select-navbar-item {
    height: 60px;
    margin: 0px 5px;
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
  }
  .select-navbar-item>img {
    height: 36px;
  }
  .select-navbar-item>a{
    font-size: 12px;
    white-space: nowrap; /* Prevent text from wrapping */
  }
}

@media screen and (max-width: 540px){

}

@media screen and (max-width: 450px) {
  .select-navbar-container {
    padding: 8px 0;
  }
  /* 单个元素的样式 */
  .select-navbar-item {
    width: 80px;
  }
  .select-navbar-item>img {
    height: 34px;
  }
  .select-navbar-item>a{
    font-size: 12px;
  }
  .select-navbar-item:first-child{


  }
}

@media screen and (max-width: 415px) {
  .select-navbar-container {
    padding: 8px 0;
  }
  /* 单个元素的样式 */
  .select-navbar-item {
    width: 80px;
  }
  .select-navbar-item:first-child{
    margin-left: 12%;

  }
}

@media screen and (max-width: 375px) {

  .select-navbar-item:first-child{
    margin-left: 15%;
  }
}
@media screen and (max-width: 338px) {

  .select-navbar-item:first-child{
    margin-left: 17%;
  }
}
@media screen and (max-width: 319px) {

  .select-navbar-item:first-child{
    margin-left: 20%;
  }
}
</style>
