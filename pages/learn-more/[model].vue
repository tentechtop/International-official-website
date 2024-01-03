<template>
  <div class="product-detail-page">



  </div>
</template>

<script lang="ts" setup>
import productMap from "assets/js/product/product-list"
const router = useRouter()
const route = useRoute()
const localePath = useLocalePath();



const productModel = ref(route.params.model)
const productInfo = ref(productMap.get(route.params.model))


</script>



<style scoped>

.product-detail-card {
  margin: 48px 0 48px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-detail-container {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.specs-container {
  /* width: calc(42% - 8px); */
  flex: 1;
  /* display: flex;
  flex-direction: column; */
  margin: 48px 0 48px 80px;
}

.product-files {
  width: calc(45%);
  /* display: flex;
  flex-direction: column;
  align-items: flex-end; */
  margin-bottom: 24px;
}

.specs-title-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.specs-title-container>h1 {
  font-weight: 700;
}

.specs-title-container>a {
  padding: 8px 32px;
  color: white;
  background-color: #1177FF;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.specs-title-container>a:hover {
  background-color: #1155FF;
}

.specs-item-container {
  margin-top: 36px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.specs-item {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.specs-item>h1 {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 32px;
}

.specs-item>p {
  margin-top: 16px;
  font-size: 16px;
  margin-bottom: 16px;
  font-weight: 300;
}

.product-image-container {
  width: 100%;
  max-width: 600px;
  height: 0;
  padding-bottom: 100%;
  /* height: 100%;
  max-height: 600px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.download-link-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.link-container {
  /* width: 100%; */
  /* max-width: 200px; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.link-item {
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  margin-bottom: 5px;
}

.icon-space {
  width: 32px;
  height: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon-space>img {
  object-fit: cover;
  width: 20px;
  height: 20px;
  object-fit: cover;
}

.link-item>a {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
}

.split-line {
  width: 100%;
  height: 1px;
  background-color: #bdb5b5;
}

.product-img {
  display: none;
}

/* @media screen and (max-width: 1260px){
  .product-detail-container{
    width: calc(100% - 32px)
  }
} */
@media screen and (max-width: 767px) {
  .product-detail-container {
    flex-direction: column;
    justify-content: center;
  }

  .specs-container {
    padding: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0px;
  }

  .product-files {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .product-detail-card {
    margin: 12px 0 48px;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 480px) {
  .product-img {
    display: block;
    width: 80%;
    height: 300px;
  }

  .product-image-container {
    display: none;
  }

  .specs-title-container>h1 {
    font-size: 24px;
  }

  .specs-title-container>a {
    padding: 6px 16px;
  }

}</style>
