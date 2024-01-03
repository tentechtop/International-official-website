<template>
  <div class="container">
    <h1>{{ $t('solution.ExploreMore') }}</h1>
    <div class="explore-container">
      <div v-for="(item, index) in otherList" class="explore-item">
        <kw-image class="explore-item-img" scale="true" :src="item.img"></kw-image>
        <div class="intro-container">
          <h3>{{ $t(item.title) }}</h3>
          <h4>{{ $t(item.desc) }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  otherList: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>
.container {
  background-color: #f3f3f3;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container>h1 {
  margin: 48px 0;
  font-weight: 500;
  font-size: 42px;
  color: rgba(0, 0, 0, 0.75);
}
.explore-container{
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.explore-item{
  background-color: #ffffff;
  margin-bottom: 16px;
  width: calc(50% - 8px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.explore-item-img{
  width: 50%;
  height: 0;
  padding-bottom: 40%;
}
.intro-container{
  padding: 16px;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.intro-container>h3 {
  font-size: 18px;
  font-weight: 500;
  color: #222222;
}

.intro-container>h4 {
  margin-top: 10px;
  font-weight: 300;
  font-size: 16px;
  color: #333333;
}

@media screen  and (max-width: 1260px){
  .explore-container{
    padding: 0 16px;
    max-width: 100%;
  }
  .intro-container>h3 {
    font-size: 16px;
  }
  .intro-container>h4 {
    font-size: 13px;
  }
}

@media screen  and (max-width: 767px){
  .explore-item{
    width: 100%;
  }
  .container>h1 {
    margin: 24px 0;
    font-size: 36px;
  }

  .container>h1 {
    font-size: 28px;
  }

}

</style>
