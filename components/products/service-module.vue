<template>
  <div class="container">
    <div class="service-container">
      <div v-for="(item, index) in serviceList" class="service-item">
       <kw-image class="service-item-img" :src="item.imgUrl"></kw-image>
        <h1>{{ $t(item.title) }}</h1>
        <nuxt-link  :to="localePath(item.router)">{{ $t('learnMore') }} ></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute()
const localePath = useLocalePath();
function goToTargetPage(item) {
  router.push({ path: localePath(item.router) })
}
const serviceList = ref([
  {
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/commons/buy-icon.png",
    title: "home.product.purchaseChannels",
    router: "/purchase"
  },
  {
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/commons/kefu.png",
    title: "home.product.serviceAndSupport",
    router: "/service"
  },
  {
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/commons/baodian.png",
    title: "home.product.kwunClassroom",
    router: "/course"
  },
])
</script>

<style scoped>
.container{
  padding: 96px 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.service-container{
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.service-item{
  width: 33.333%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.service-item-img{
  width: 64px;
  height: 64px;
}
.service-item>h1{
  text-align: center;
  font-size: 24px;
  color: #3a3a3a;
  margin: 16px 0;
  font-weight: 400;
}
.service-item>a{
  color: #2585E0;
  font-size: 16px;
  font-weight: 400;
}
.service-item>a:hover{
  color: #0d7ae1;
}

@media screen and (max-width: 767px){
  .container{
    padding: 48px 16px;
  }
  .service-item-img{
    width: 48px;
    height: 48px;
  }
/*   .service-container{
    padding: 0 32px;
    max-width: 100%;
  } */
  .service-item>h1{
    font-size: 18px;
    margin: 8px 0;
  }
  .service-item>a{
    font-size: 14px;
  }
}

@media screen and (max-width: 480px){
  .container{
    padding: 48px 16px;
  }
  .service-item-img{
    width: 36px;
    height: 36px;
  }
  .service-item>h1{
    font-size: 14px;
    margin: 4px 0;
  }
  .service-item>a{
    font-size: 12px;
  }
}

@media screen and (max-width: 440px){
  .service-item>h1{
    font-size: 12px;
    margin: 4px 0;
  }
}
</style>






















