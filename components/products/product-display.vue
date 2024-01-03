<template>
  <div class="container">
    <div class="product-display-container">
      <div v-for="(item, index) in productDisplayList" class="display-item">
        <div class="intro-container">
          <p>{{ $t(item.desc1) }}</p>
          <h1>{{ $t(item.productName) }}</h1>
          <h3>{{ $t(item.desc2) }}</h3>
          <nuxt-link  :to="localePath(`/purchase/${item.productModel}`)">{{ $t('purchaseNow') }} ></nuxt-link>
        </div>
        <kw-image class="display-item-img" :src="item.imgUrl"></kw-image>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const productDisplayList = ref([
  {
    productName: "Kwun-B32L",
    productModel:"Kwun-B32L",
    desc1: "kwun.excellentCleaningEffect",
    desc2: "kwun.highStandardCleaningQuality",
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/banner/b33-banner.png"
  },
  {
    productName: "Kwun-B22L",
    productModel:"Kwun-B22L",
    desc1: "kwun.excellentCleaningEffect",
    desc2: "kwun.highStandardCleaningQuality",
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/banner/b32-banner.png"
  },
  {
    productName: "Kwun-B33H",
    productModel:"Kwun-B33H",
    desc1: "kwun.excellentCleaningEffect",
    desc2: "kwun.highStandardCleaningQuality",
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/banner/b22-banner.png"
  },
  {
    productName: "Kwun-B11L",
    productModel:"Kwun-B11L",
    desc1: "kwun.excellentCleaningEffect",
    desc2: "kwun.highStandardCleaningQuality",
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/banner/b11-banner.png"
  }
])
</script>

<style scoped>
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product-display-container{
  padding: 0 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.display-item{
  margin-bottom: 16px;
  width: calc(50% - 8px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.display-item-img{
  z-index: 1;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}
.intro-container{
  margin-top: 120px;
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro-container>p{
  font-size: 16px;
  text-align: center;
  color: #000000;
  font-weight: 300;
}
.intro-container>h1{
  font-size: 28px;
  text-align: center;
  margin: 14px 0;
  color: #000000;
  font-weight: 500;
}
.intro-container>h3{
  font-size: 16px;
  text-align: center;
  margin-bottom: 14px;
  color: #000000;
  font-weight: 300;
}
.intro-container>a{
  font-size: 16px;
  text-align: center;
  color: rgba(2, 126, 255, 1);
  font-weight: 400;
}
.intro-container>a:hover{
  text-decoration: underline;
}

@media screen and (max-width: 1024px){
  .intro-container>p{
    font-size: 14px;
  }
  .intro-container>h1{
    font-size: 22px;
  }
  .intro-container>h3{
    font-size: 14px;
  }
  .intro-container>a{
    font-size: 14px;
  }
}


@media screen and (max-width: 767px){
  .display-item{
    margin-bottom: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .intro-container{
    width: calc(100% - 96px);
    margin-top: 40px;
  }
  .intro-container>p{
    font-size: 12px;
  }
  .intro-container>h1{
    font-weight: 700;
    font-size: 20px;
    margin: 5px 0;
  }
  .intro-container>h3{
    margin-bottom: 5px;
    font-size: 12px;
  }
  .intro-container>a{
    font-size: 12px;

  }
}
</style>
