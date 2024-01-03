<template>
  <div class="container">
    <div v-if="isOpenDialog" class="pic-dialog">
      <div class="close-bg" @click="isOpenDialog=false"></div>

      <div class="preview-container">
        <img class="preview-img" src="https://file.kwunphi.com/kwunphi4/images/qrcode/service.jpg" >
      </div>

    </div>
    <div class="care">
      <div class="care-title">
        <img src="https://file.kwunphi.com/kwunphi4/images/icon/fast-replacement.svg">
        <h1>{{ $t('foot.kwunCarePolicyProcess') }}</h1>
      </div>
      <div class="care-container">
        <h1>{{ $t('foot.RapidReplacementPolicy') }}</h1>
        <div class="replacement-card">
          <div class="policyItem item1">
            <img src="https://file.kwunphi.com/kwunphi4/images/icon/after-sales.svg">
            <div class="text-container">
              <h1>{{$t('kwunCare.ReplacementPlan')}}：</h1>
              <p>1.{{ $t('kwunCare.MachinePurchaseNotYetOneYearOld') }}；</p>
              <p>2.{{$t('kwunCare.condition1')}}；</p>
              <p>3.{{$t('kwunCare.condition2')}}</p>
              <h1>{{$t('kwunCare.condition3')}}</h1>
              <div class="application-button" @click="getImg">{{$t('service.ApplyNow')}}</div>
            </div>
          </div>
          <div class="policyItem item1">
            <img src="https://file.kwunphi.com/kwunphi4/images/policy/icon06.png">
            <div class="text-container">
              <h1>{{$t('kwunCare.condition4')}}</h1>
              <div class="find-my-service-history">
                <img src="https://file.kwunphi.com/kwunphi4/images/policy/icon08.png">
                <p>{{$t('kwunCare.condition5')}}</p>
              </div>
              <div class="application-button">{{$t('kwunCare.condition6')}}</div>
            </div>
          </div>
          <div class="policyItem item1">
            <img src="https://file.kwunphi.com/kwunphi4/images/policy/icon07.png">
            <div class="text-container">
              <h1>{{$t('kwunCare.condition7')}} 4008786861</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="service-policy">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useI18n} from "vue-i18n";
const {t,locale,localePath} = useI18n()

const isOpenDialog = ref(false);
function getImg(){
  isOpenDialog.value=true
}


</script>

<style scoped>
.container{
  padding: 100px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.care{
  width: 100%;
  max-width: 1200px;
}
.care-title{
  padding: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(0,0,0,0.15);
}
.care-title>img{
  width: 44px;
  object-fit: cover;
  margin-right: 16px;
}
.care-title>h1{
  font-size: 30px;
  font-weight: 700;
}
.care-container{
  padding-top: 96px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.care-container>h1{
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}
.replacement-card{
  margin-top: 48px;
  width: 100%;
  padding: 80px 120px;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.policyItem{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 48px;
}
.text-container{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.item1{

}
.item1>img{
  width: 40px;
  margin-right: 16px;
}
.text-container>h1{
  font-weight: 300;
  margin-bottom: 16px;
  font-size: 20px;
}
.text-container>p{
  font-weight: 300;
  margin-bottom: 4px;
  text-indent: 2em;
  font-size: 20px;
}
.application-button{
  cursor: pointer;
  border-radius: 10px;
  font-size: 20px;
  padding: 12px 32px;
  background-color: #2100d0;
  color: #fff;
}
.application-button:hover{
  background-color: #16009b;
}
.find-my-service-history{
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.find-my-service-history>img{
  width: 18px;
  margin-right: 6px;
}
.find-my-service-history>p{
  font-size: 18px;
}
.pic-dialog{
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; /* 使用视窗宽度作为宽度 */
  height: 100vh; /* 使用视窗高度作为高度 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}

.close-bg{
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
}

.preview-container{
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  padding: 40px;
  overflow: hidden;
  z-index: 2;
  width: 25%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}

.preview-img{
  width: 80%;
  object-fit: cover;
}
@media screen and (max-width: 1232px){
  .care{
    padding: 0 16px;
  }
}

@media screen and (max-width: 1023px){
  .replacement-card{
    padding: 16px 32px;
  }
}

</style>
