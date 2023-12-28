<template>
  <div class="component_container">
    <div class="container_inner">


      <div class="deuce-container"  :style="{ 'background-image': 'url(' + comprehensiveList[0].imgUrl + ')', 'background-size': 'cover'}">
        <div class="text-container">
          <h1>{{ comprehensiveList[0].title1 }}</h1>
          <h2>{{ comprehensiveList[0].title2 }}</h2>
          <nuxt-link :to="localePath(comprehensiveList[0].buttonPath)">{{comprehensiveList[0].buttonTitle }} </nuxt-link>
        </div>
      </div>

      <div class="split-container">
        <div class="split-container1" :style="{ 'background-image': 'url(' + comprehensiveList[1].imgUrl + ')', 'background-size': 'cover' }">

          <div class="text-container">
            <h1>{{ comprehensiveList[1].title1 }}</h1>
            <h2>{{ comprehensiveList[1].title2 }}</h2>
            <nuxt-link :to="localePath(comprehensiveList[1].buttonPath)">{{comprehensiveList[1].buttonTitle }} </nuxt-link>
          </div>

        </div>

        <div class="split-container1 news-container"
             :style="{ 'background-image': 'url(' + comprehensiveList[2].imgUrl + ')', 'background-size': 'cover' }">

          <div class="text-container">
            <h1>{{ comprehensiveList[2].title1 }}</h1>
            <h2>{{ comprehensiveList[2].title2 }}</h2>
            <nuxt-link :to="localePath(comprehensiveList[2].buttonPath)">{{comprehensiveList[2].buttonTitle }} </nuxt-link>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref,defineProps} from "vue";


const props = defineProps({
  comprehensiveList: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>
.component_container{
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container_inner{
  position: relative;
  width: 100%;
  max-width: 1500px;
  height: 830px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.deuce-container{
  position: relative;
  width: calc(50% - 16px);
  height: 100%;
}
.text-container{
  position: absolute;
  bottom: 8%;
  left: 8%;
}
.text-container >h1{
  color: #FFF;
  line-height: 1;
  font-weight: 700;
}

.text-container >h2{
  font-weight: 500;
  color: #FFF;
  margin: 8px 0 24px 0;
}

.text-container >a{
  color: #FFF;
  font-size: 16px;
  -webkit-transition: all .4s;
  -o-transition: all .4s;
  -moz-transition: all .4s;
  transition: all .4s;
  letter-spacing: 1px;
  font-weight: 300;
}


.split-container{
  position: relative;
  width: calc(50% - 16px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.split-container1{
  position: relative;
  height: calc(50% - 16px);
  width: 100%;
}

/*pc*/
@media screen and ( min-width: 768px){

}


/*phone*/
@media screen and (max-width: 768px) {
  .container_inner{
    width: 100%;
    max-width: 100%;
    height: fit-content;

  }
  .deuce-container{
    width: 100%;
    height: 400px
  }
  .split-container{
    margin-top: 24px;
    width: 100%;
    height: 100%;
  }
  .split-container1{
    min-height: 400px;
    width: 100%;
  }
  .news-container{
    margin-top: 24px;
  }

}


</style>
