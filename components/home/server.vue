<template>
  <div class="app">
    <div class="container">

      <div class="server-item" v-for="(item,index) in serverList">

        <img :src="item.imgUrl">
        <h1>{{item.title1}}</h1>
        <nuxt-link :to="localePath(item.buttonPath)">{{item.buttonTitle }} ></nuxt-link>

      </div>





    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";




const props = defineProps({
  serverList: {
    type: Array,
    required: true,
    default: () => []
  }
});
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
  max-width: 1500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.server-item{
  width: 33.333%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.server-item>img{
  width: 48px;
  height: 48px;
}
.server-item>h1{
  font-weight: 700;
  font-size: 24px;
  margin: 16px 0;
}
</style>
