<template>
  <div class="container">
    <div class="split-line"></div>
    <div class="product-detail-container">
      <div class="view-container">
        <div class="img-swiper-container">
          <swiper2 v-if="isPlayPic" v-model:product-img-list="productImgList"></swiper2>
          <purchase-video v-if="isPlayVideo" :video-info="productInfo.videoInfo"></purchase-video>
        </div>
        <div class="switch-button-container">
          <div class="display-button" :class="{ 'active-button': isPlayPic }" @click="isPlayVideo = false, isPlayPic = true">
            <img :src="isPlayPic ? '/images/picture1.svg' : '/images/picture.svg'">
            <p>{{ $t('common.picture') }}</p>
          </div>
          <div class="display-button" :class="{ 'active-button': isPlayVideo }" @click="isPlayVideo = true, isPlayPic = false">
            <img style="width: 17px;" :src="isPlayVideo ? '/images/videoplayerjianto1.svg' : '/images/videoplayerjianto.svg'">
            <p>{{ $t('common.video') }}</p>
          </div>
        </div>
      </div>
      <div class="specs-detail-container">
        <h1>{{ $t(productInfo.productSpecifications.productTitle) }}</h1>
        <h3>{{ $t('productSpecs.ProductSpecifications') }}</h3>
        <ul>
          <li v-for="(item, index) in productInfo?.productSpecifications.Specifications"> {{ $t(item.name) }}: {{ $t(item.value) }}</li>
        </ul>
        <nuxt-link :to="localePath(`/specs/${productInfo.productModel}`)">{{ $t('productSpecs.ProductSpecifications') }} ></nuxt-link>
        <h2 v-if="productInfo.productSpecifications.accessories.length > 0">{{ $t('productSpecs.ChooseYouNeed') }}</h2>
        <nuxt-link v-if="productInfo.productSpecifications.accessories.length > 0"
          :to="{ path: '#', query: { productId: 1 } }">{{ $t('productSpecs.PackingListComparison') }}</nuxt-link>
        <div v-for="(item, index) in productInfo.productSpecifications.equipmentPackage"
          :class="item.isSelected ? 'parameter-card-Selected' : 'parameter-card'"
          @click="changSelected(index); changBannerImg(item)">
          <h1>{{ item.PackageTitle }}</h1>
          <h2>￥{{ item.price }}</h2>
          <div class="split-line1"></div>
          <h2>￥{{ item.content }}</h2>
        </div>
        <h1 v-if="productInfo.productSpecifications.accessories.length > 0">{{ $t('productSpecs.HotSellingAccessories') }}</h1>
        <div v-for="(item, index) in productInfo.productSpecifications.accessories"
          :class="item.isSelected ? 'parameter-card-Selected' : 'parameter-card'" @click="changSelected1(index)">
          <div class="accessories-container">
            <div class="accessories-img-container">
              <img :src="item.imgUrl">
            </div>
            <div class="accessories-info-card">
              <h1>{{ item.accessoriesName }}</h1>
              <h2>￥{{ item.price }}</h2>
              <div class="split-line1"></div>
              <h3>{{ item.desc }}</h3>
              <div class="split-line2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="split-line3"></div> -->
    <!-- <packing-list :list="list2"></packing-list> -->
    <!-- <tips></tips> -->
<!--    <total-calculation :price="totalPurchasePrice"></total-calculation>-->
  </div>
</template>

<script setup lang="ts">
import allProduct from "assets/js/product/product-info";
const router = useRouter()
const route = useRoute()

function quantityNumberChang() {
}

const isPlayPic = ref(true);
const isPlayVideo = ref(false);


const productId = ref(Number(route.query.productId) || 0);

const totalPrice = ref(0);
const totalPrice1 = ref(0);


const productImgList = ref(null);

const imgInfo = ref({});

function changBannerImg(item) {
  const newImgList = [...productImgList.value];
  imgInfo.value = { swiperImg: item.imgUrl, dotImg: item.dotImgUrl }
  newImgList[1] = imgInfo.value;
  productImgList.value = newImgList;
}

watch(
  () => router.currentRoute.value, // 监听路由对象的变化
  (to, from) => {
    productId.value = 1
  }
);

watch(
  () => router.currentRoute.value.path,
  (newValue) => {
    productId.value = 1
  }
);
watch([totalPrice, totalPrice1], () => {
  const tempPrice1 = productInfo.value.price;
  totalPurchasePrice.value = totalPrice.value + totalPrice1.value + tempPrice1;
});

const totalPurchasePrice = ref(0)

function getTotalPrice() {
  const packagePrice1 = productInfo.value?.productSpecifications.equipmentPackage
  totalPrice.value = 0;
  if(packagePrice1){
    packagePrice1.forEach((item) => {
      if (item.isSelected) {
        totalPrice.value += item.quantity * item.price;
      }

    })
  }
}

function getTotalPrice1() {
  const accessoriesPrice1 = productInfo.value.productSpecifications.accessories
  totalPrice1.value = 0;
  accessoriesPrice1.forEach((item) => {
    totalPrice1.value += item.quantity * item.price;
  })
}


const productInfo = ref(allProduct.productMap.get(route.params.model));


function changSelected(index) {
  const temp = productInfo.value.productSpecifications.equipmentPackage[index].isSelected

  productInfo.value.productSpecifications.equipmentPackage.forEach(item => {
    item.isSelected = false;
    item.quantity = 0;//清空选购数量
  });
  // 设置当前选中项的样式
  productInfo.value.productSpecifications.equipmentPackage[index].isSelected = !temp;
  productInfo.value.productSpecifications.equipmentPackage[index].quantity = 1;
  getTotalPrice();
}


function changSelected1(index) {
  if (productInfo.value.productSpecifications.accessories[index].quantity === 0 && !productInfo.value.productSpecifications.accessories[index].isSelected) {
    productInfo.value.productSpecifications.accessories[index].isSelected = true;
    productInfo.value.productSpecifications.accessories[index].quantity = productInfo.value.productSpecifications.accessories[index].quantity + 1;
  }
  productInfo.value.productSpecifications.accessories[index].isSelected = !productInfo.value.productSpecifications.accessories[index].isSelected;
  // 设置当前选中项的样式
  if (productInfo.value.productSpecifications.accessories[index].quantity > 0) {
    productInfo.value.productSpecifications.accessories[index].isSelected = true;
  } else {
    productInfo.value.productSpecifications.accessories[index].isSelected = false;
  }
  getTotalPrice1();
}

onBeforeMount(() => {
  const productModel = route.params.model
  let price = productInfo.value?.price
  totalPurchasePrice.value = (!price || price === '520178' || price === 520178) ? '预售中' : price
  productImgList.value = productInfo.value?.productImgList
  getTotalPrice();
});
</script>

<style scoped>
.container {
  transition: 0.3s ease;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.split-line {
  width: 100%;
  height: 1px;
  background-color: #b9bfc4;
}

.split-line3 {
  margin-top: 32px;
  width: calc(100% - 16px);
  max-width: 1200px;
  height: 1px;
  background-color: #b9bfc4;
}

.product-detail-container {
  transition: 0.3s ease;
  margin-top: 32px;
  width: 1200px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 48px;
}

.view-container {
  transition: 0.3s ease;
  top: 70px;
  /* 确保固定在顶部 */
  position: sticky;
  width: calc(50% - 8px);
  display: flex;
  flex-direction: column;
}

.img-swiper-container {
  overflow: hidden;
  transition: 0.3s ease;
  width: 100%;
  height: 666px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
}

.switch-button-container {
  transition: 0.3s ease;
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.display-button {
  border-radius: 50px;
  cursor: pointer;
  margin: 0 16px;
  padding: 0 32px;
  height: 48px;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.display-button>img {
  width: 20px;
  margin-top: 3px;
  margin-right: 5px;
}

.display-button>p {
  color: black;
}

.active-button {
  background-color: black;
}

.active-button>p {
  color: white;
}

.specs-detail-container {
  margin-top: 72px;
  transition: 0.3s ease;
  width: calc(50% - 8px);
  display: flex;
  flex-direction: column;
}

.specs-detail-container>h1 {
  font-size: 24px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.7);
}

.specs-detail-container>h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.6);
}

.specs-detail-container>ul {
  list-style-type: disc;
  /* 移除默认的列表样式 */
  padding-left: 0;
  /* 移除默认的列表缩进 */
  color: rgba(128, 128, 128, 0.8);
  margin-left: 20px;
}

.specs-detail-container>ul>li {
  margin-top: 10px;
  font-size: 15px;
}

.specs-detail-container>a {
  color: rgba(2, 126, 255);
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
}

.specs-detail-container>h2 {
  margin-top: 32px;
  font-size: 20px;
  font-weight: 700;
  color: #3b3e40;
}

.parameter-card {
  cursor: pointer;
  padding: 20px;
  margin-top: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  /* 设置边框粗细为1px，边框颜色为黑色半透明 */
  display: flex;
  /* 使用 Flexbox 布局 */
  flex-direction: column;
  border-radius: 10px;
  transition: border 0.3s;
  /* 添加过渡效果 */
}

.parameter-card-Selected {
  cursor: pointer;
  padding: 20px;
  margin-top: 20px;
  border: 2px solid rgba(2, 126, 255, 0.99);
  /* 设置边框粗细为1px，边框颜色为黑色半透明 */
  display: flex;
  /* 使用 Flexbox 布局 */
  flex-direction: column;
  border-radius: 10px;
  transition: border 0.3s;
  /* 添加过渡效果 */
}

.parameter-card:hover {
  border: 1px solid rgba(2, 125, 255, 0.3);
  /* 设置边框粗细为1px，边框颜色为黑色半透明 */
}

.parameter-card>h1 {
  font-weight: 700;
  font-size: 15px;
  color: rgb(0, 0, 0, 0.7);
}

.parameter-card-Selected>h1 {
  font-weight: 700;
  font-size: 15px;
  color: rgb(0, 0, 0, 0.7);
}

.parameter-card>h2 {
  margin-top: 5px;
  font-size: 14px;
  color: rgb(0, 0, 0, 0.7);
}

.parameter-card-Selected>h2 {
  margin-top: 5px;
  font-size: 14px;
  color: rgb(0, 0, 0, 0.7);
}

.split-line1 {
  margin: 6px 0;
  width: 100%;
  height: 1px;
  background-color: #e1dada;
}

.split-line2 {
  margin: 6px 0;
  width: 100%;
  height: 1px;
  background-color: #7a7a7a;
}

.accessories-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.accessories-img-container>img {
  width: 90px;
}

.accessories-info-card {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.accessories-info-card>h1 {
  font-size: 15px;
  font-weight: 700;
}

.accessories-info-card>h2 {
  font-size: 14px
}

.accessories-info-card>h3 {
  font-size: 14px;
  margin-top: 5px;
}

@media screen and (max-width: 1260px) {
  .product-detail-container {
    width: calc(100% - 64px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .view-container {
    top: 0px;
    position: relative;
    width: 50%;
    min-width: 600px;
  }

  .img-swiper-container {
    width: 100%;
    height: 600px;
  }

  .specs-detail-container {
    margin-top: 16px;
    width: 50%;
    min-width: 600px;
  }

  .display-button {
    margin: 0 8px;
    padding: 0 16px;
    height: 32px;
  }
}

@media screen and (max-width: 767px) {
  .view-container {
    width: 100%;
    min-width: 100%;
  }

  .img-swiper-container {
    height: 480px;
  }

  .specs-detail-container {
    min-width: 480px;
  }

}

@media screen and (max-width: 500px) {
  .product-detail-container {
    padding: 0 16px;
    width: 100%;
  }

  .view-container {
    min-width: calc(100% - 32px);
  }

  .img-swiper-container {
    min-width: 100%;
    height: calc(82vw);
    /* 将高度设置为视口宽度的100% */
  }

  .specs-detail-container {
    min-width: calc(100% - 16px);
  }

  .display-button {
    margin: 0 6px;
    padding: 0 12px;
    height: 32px;
  }

}</style>
