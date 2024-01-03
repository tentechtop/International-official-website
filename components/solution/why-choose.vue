<template>
  <div class="container">
    <h1>{{ $t('solution.WhyChooseKwunPhi') }}</h1>
    <div class="choose-container">
      <div v-for="(item, index) in chooseList" class="choose-item">
        <img :src="item.img">
        <a>{{ $t(item.desc) }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  chooseList: {
    type: Array,
    required: true,
    default: () => []
  },
});
</script>

<style scoped>
.container{
  padding-bottom: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container>h1 {
  text-align: center;
  margin-bottom: 32px;
  margin-top: 96px;
  font-size: 42px;
  font-weight: 500;
  color: #222222;
}
.choose-container{
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.choose-item {
  width: calc(25% - 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.choose-item>img {
  width: 66px;
}

.choose-item>a {
  text-align: center;
  margin-top: 10px;
  font-weight: 500;
  font-size: 16px;
  color: #323232;
}

@media screen  and (max-width: 767px){
  .choose-container{
    padding: 0 16px;
    max-width: 100%;
  }
  .container>h1 {
    margin-bottom: 16px;
    margin-top: 32px;
    font-size: 28px;
  }
  .choose-item>img {
    width: 32px;
  }
  .choose-item>a {
    text-align: center;
    font-size: 12px;
  }



}
</style>
