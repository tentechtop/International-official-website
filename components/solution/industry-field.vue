<template>
  <div class="container">
    <h1>{{$t('solution.allWalksOfLifeThousandsOfHouseholds')}}</h1>
    <div class="industry-container">
      <div v-for="(item, index) in list" class="industry-item">
        <div class="industry-item-intro">
          <h1>{{ $t(item.title) }}</h1>
          <p>{{ $t(item.desc) }}</p>
          <p>{{ $t(item.desc2) }}</p>
          <nuxt-link :to="localePath(item.router)">
          <div class="learn-more-button">
            <p>{{ $t('learnMore') }}</p>
          </div>
          </nuxt-link>
        </div>
        <kw-image class="industry-item-img"  scale="true" :src="item.img"></kw-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndustryField",
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>


<style scoped>
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container>h1 {
  text-align: center;
  font-weight: 500;
  font-size: 42px;
  color: #111111;
  margin-top: 96px;
  margin-bottom: 40px;
}
.industry-container{
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.industry-item{
  margin-bottom: 16px;
  width: calc(50% - 8px);
  overflow: hidden;
  position: relative;
}
.industry-item-img{
  z-index: 1;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}
.industry-item-intro{
  z-index: 2;
  position: absolute;
  margin-top: 65%;
  margin-left: 8%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.industry-item-intro>h1,p {
  color: #ffffff;
}
.industry-item-intro>h1 {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 500;
}
.industry-item-intro>p {
  font-size: 16px;
  font-weight: 300;
}
.learn-more-button{
  margin-top: 16px;
  padding: 7px 28px;
  background-color: transparent;
  border:1px solid #ffffff
}
.learn-more-button>p{
  font-weight: 300;
  font-size: 14px;
}
@media screen and (max-width: 1200px){
  .industry-container{
    max-width: calc(100% - 32px);
  }
}
@media screen and (max-width: 1024px){
  .industry-item-intro{
    margin-top: 50%;
    margin-left: 16px;
  }
}
@media screen and (max-width: 767px){
  .industry-item-intro{
    margin-top: 50%;
    margin-left: 16px;
  }
  .industry-item-intro>h1{
    font-size: 18px;
  }
  .industry-item-intro>p{
    font-size: 14px;
  }
  .learn-more-button{
    padding: 4px 16px;
  }
  .learn-more-button>p{
    font-size: 12px;
  }
  .industry-item{
    width: 100%;
  }
  .container>h1 {
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    color: #111111;
    margin-top: 40px;
    margin-bottom: 40px;
  }
}
</style>
