<template>
  <div class="container">
    <div class="service-container">
      <h1>{{ $t(currentService.serviceName) }}</h1>

      <div v-for="(serviceItem, SIndex) in currentService.serviceContent" class="service-content">
        <h1>{{ $t(serviceItem.title) }}</h1>
        <div v-for="(sd, sdIndex) in serviceItem.content" class="service-detail">
          <div class="desc-container">
            <h2 v-if="sd.title" :style="{width: sd.value?'180px':'auto'}">{{ $t(sd.title) }}</h2>
            <p v-if="sd.value" :class="{ indent: !sd.title }">{{ $t(sd.value) }}</p>
          </div>
          <div class="service-detail-img">
            <img v-if="sd.imgUrl" :src="sd.imgUrl" :style="{width: sd.imgWidth, maxWidth:!sd.imgWidth?'400px':'none'}">
          </div>
        </div>
      </div>



    </div>
  </div>
</template>

<script lang="ts" setup>
import serviceSupport from "assets/js/service/service-support";
const router = useRouter()
const route = useRoute()
const currentService = ref(serviceSupport.serviceMap.get(route.params.type))
</script>

<style scoped>
.container {
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-container {
  padding: 48px 0 96px;
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-container>h1 {
  border-bottom: 1px solid #dcdcdc;
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  width: 100%;
  margin-bottom: 48px;
  padding-bottom: 16px;
}

.service-content {
  margin-bottom: 48px;
  width: 100%;
  /*   display: flex;
  flex-direction: column;
  align-items: flex-start; */
}

.service-content:last-child {
  margin-bottom: 0;
}

.service-content>h1 {
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 24px;
  position: relative;
}

/* .service-content>h1::before {
  content: "";
  position: absolute;
  border-radius: 20px;
  width: 6px;
  height: 6px;
  background-color: #333;
  left: -12px;
  top: calc(50% - 3px);
} */

.service-detail {
  margin: 0 0 16px 16px;
}

.service-content .service-detail:last-child {
  margin-bottom: 0;
}

.service-detail-img {
  /* width: 100%; */
  margin-right: 16px;
  display: flex;
  justify-content: center;
}

.service-detail-img>img {
  width: 100%;
}

.desc-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.desc-container>h1 {
  font-size: 20px;
  font-weight: 400;
}

.desc-container>h2 {
  font-size: 18px;
  font-weight: 400;
}

.desc-container>p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  flex: 1;
}

.desc-container>p.indent {
  text-indent: 2em;
}


@media screen and (max-width: 767px) {
  .service-container {
    padding: 48px 0;
  }
  .service-container>h1 {
    font-size: 32px;
  }

  .service-content>h1 {
    font-size: 22px;
    line-height: 26px;
  }
  .desc-container {
    flex-wrap: wrap;
  }

  .desc-container>h2 {
    width: 100% !important;
    font-weight: 700;
  }
  .desc-container>p {
    font-size: 14px;
    text-indent: 2em;
    color: #6a6a6a;
  }
}
</style>
