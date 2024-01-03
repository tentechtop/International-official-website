<template>
  <div class="container">
    <h1>{{ $t('solution.RecentlyUpdated') }}</h1>
    <div class="recently-container">
      <div v-for="(item, index) in newList" class="recently-item">
        <kw-image class="recently-item-img" scale="true" :src="item.img"  alt=""></kw-image>
        <div class="recently-item-intro">
          <h1>{{ $t(item.industry) }}</h1>
          <h4>{{ $t(item.desc) }}</h4>
          <nuxt-link :to="localePath(`/learn-more/${item.model}`)">{{ $t('learnMore') }} ></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  newList: {
    type: Array,
    required: true,
    default: () => []
  },
});
</script>

<style scoped>
.container{
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container>h1{
  font-weight: 500;
  padding: 40px;
  font-size: 42px;
}
.recently-container{
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.recently-item{
  margin-bottom: 16px;
  width: calc(50% - 8px);
  display: flex;
  flex-direction: column;
}
.recently-item-img{
  width: 100%;
  height: 0;
  padding-bottom: 50%;
}
.recently-item-intro{
  padding: 10px;
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  background-color: #F3f3f3;
}
.recently-item-intro>h4{
  font-weight: 300;
  font-size: 16px;
  color: #555555;
  margin-bottom: 10px
}
.recently-item-intro>h1{
  font-weight: 500;
  font-size: 22px;
  color: #333333;
  word-wrap: break-word;
  margin-bottom: 10px
}
.recently-item-intro>a {
  font-size: 16px;
  color: rgba(2, 125, 255, 1);
  font-weight: 300;
}

@media screen and (max-width: 767px){
  .recently-item{
    padding: 0 16px;
    width: 100%;
  }
  .recently-item-intro>h4{
    font-size: 14px;
    margin-bottom: 5px
  }
  .recently-item-intro>h1{
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 5px
  }
  .container>h1{
    padding: 25px;
    font-size: 28px;
  }
}
</style>
