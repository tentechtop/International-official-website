<template>
  <div class="container">

    <div class="image-container-1">
      <div class="text-container">
        <p class="animate__animated animate__delay-0.5s" v-loadByAnimate>{{t('unattended.desc1')}}</p>
        <p class=" animate__animated animate__delay-0.055s"  v-loadByAnimate>{{t('automaticCharging.desc2')}}</p>
        <span class="animate__animated animate__delay-0.065s"  v-loadByAnimate>{{t('automaticCharging.desc3')}}</span>
      </div>
      <img  style="z-index: 1" class="animate__animated" v-loadByAnimate src="https://file.kwunphi.com/kwunphi4/images/charging/01.jpg" alt="自动充电，自主全智能，清洁机器人">
    </div>

    <div class="image-container-1 application-1" ref="container1">
      <div class="application-item animate__animated" v-loadByAnimate>
        <div class="application-text">
          <h1>{{t('automaticCharging.desc4')}}</h1>
          <p>{{t('automaticCharging.desc5')}}</p>
        </div>
        <img src="https://file.kwunphi.com/kwunphi4/images/charging/001.png" alt="优异的芯片温度控制">
      </div>

      <div class="application-item animate__animated" v-loadByAnimate>
        <div class="application-text">
          <h1>{{t('automaticCharging.desc6')}}</h1>
          <p>{{t('automaticCharging.desc7')}}</p>
        </div>
        <img src="https://file.kwunphi.com/kwunphi4/images/charging/002.png">
      </div>

      <div class="application-item animate__animated" v-loadByAnimate>
        <div class="application-text">
          <h1 style="color: black">{{t('automaticCharging.desc8')}}</h1>
          <p style="color: black">{{t('automaticCharging.desc9')}}</p>
        </div>
        <img src="https://file.kwunphi.com/kwunphi4/images/charging/003.png">
      </div>

      <div class="application-item animate__animated" v-loadByAnimate>
        <div class="application-text">
          <h1>{{t('automaticCharging.desc10')}}</h1>
          <p>{{t('automaticCharging.desc11')}}</p>
        </div>
        <img src="https://file.kwunphi.com/kwunphi4/images/charging/004.png">
      </div>
    </div>

    <div class="ip65-container">
      <div class="text-container-ip65" style="z-index: 2">
        <div class=" text-item1">
          <div class="text-item animate__animated" v-loadByAnimate="'animate__bounceInUp'">
          <h1>{{t('automaticCharging.desc12')}}</h1>
          <p>{{t('automaticCharging.desc13')}}</p>
          </div>
        </div>
        <div class="text-item animate__animated" v-loadByAnimate="'animate__bounceInUp'">
          <h1>{{t('automaticCharging.desc14')}}</h1>
          <p>{{t('automaticCharging.desc15')}}</p>
        </div>
      </div>
      <img style="z-index: 1" class="animate__animated" v-loadByAnimate="'animate__bounceInUp'"  src="https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_03.jpg" alt="ip65级别防水，防尘防水">
    </div>




    <div class="ip65-container">
      <div class="auto-running animate__animated" v-loadByAnimate>
        <h1>{{t('automaticCharging.desc16')}}</h1>
        <p>{{t('automaticCharging.desc17')}}</p>
      </div>
      <img  src="https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_04.jpg" alt="自主规划，无人值守">
    </div>


    <div class="ip65-container">
      <img class="animate__animated" v-loadByAnimate  src="https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_05.jpg" alt="自主规划，无人值守">
    </div>


    <div class="ip65-container animate__animated"  v-loadByAnimate>
      <img  src="https://file.kwunphi.com/kwunphi4/images/charging/%E5%88%87%E7%89%87_06.jpg" alt="自主规划，无人值守">
    </div>


    <div class="bottom-img animate__animated" v-loadByAnimate>
      <img  src="https://file.kwunphi.com/kwunphi4/images/charging/07.png" alt="自主规划，无人值守">
    </div>

    <div class="ip65-container">
      <div class="bottom-text">
        <p>{{t('automaticCharging.desc18')}}</p>
        <p>{{t('automaticCharging.desc19')}}</p>
        <p>{{t('automaticCharging.desc20')}}</p>
      </div>
    </div>


  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, onMounted, getCurrentInstance,onUnmounted } from "vue";
const { proxy } = getCurrentInstance();
import { useI18n } from "vue-i18n";
const { t } = useI18n()

</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #BDBDBD;
}

.image-container-1{
  padding: 96px 0;
  max-width: 1300px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-container-1 >img{
  width: 100%;
  object-fit: cover;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.text-container{
  z-index: 2;
  top:15%;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.text-container>p,h1{
  color: black;
}
.text-container>p{
  font-family: Maven Pro,sans-serif;
  font-weight: 700;
  font-size: 42px;
  margin-bottom: 22px;
}

.application-1{
  padding: 48px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.application-item{
  position: relative;
  cursor: pointer;
  width: calc(25% - 16px);
}
.application-item>img{
  width: 100%;
  min-height: 500px;
  object-fit: cover;
}

.application-text{
  bottom: 4%;
  left: 11%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.application-text>h1,p{
  color: white;
}

.application-text>h1{
  font-size: 32px;
}
.ip65-container{
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ip65-container>img{
  width: 100%;
  object-fit: cover;
}
.text-container-ip65{
  position: absolute;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.text-item1{
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

}
.text-item>h1,p{
  color: #ffffff;
}
.text-item>h1{
  font-size: 50px;
  font-weight: 700;
}
.auto-running{
  position: absolute;
  top:20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.auto-running>h1,p{
  color: white;
}

.auto-running>h1{
  font-size:44px;
  font-weight: 700;
}
.bottom-img{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.bottom-img>img{
  width: 100%;
  object-fit: cover;
}
.bottom-text{
  padding: 38px 0;
}
.bottom-text>p{
  color: #303133;
  text-align: center;
  line-height: 31px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}
.fade-enter-from,
.fade-leave-to {
  transform: translateY(35px);
  opacity: 0;
}
@media screen and (max-width: 1432px){
  .text-container-ip65{
    padding: 0 16px;

  }

}

@media screen and (max-width: 1332px){
  .container{
    padding: 0 16px;
  }
}
@media screen and (max-width: 1024px){
  .application-1{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .application-item{
    width: calc(33% - 14px);
    margin-bottom: 16px;
  }
  .text-item{
    display: none;

  }
  .auto-running{
    top:15%;
  }
}

@media screen and (max-width: 767px){
  .application-item{
    width: calc(50% - 14px);
    margin-bottom: 16px;
  }

  .auto-running{
    top:10%;
  }
  .auto-running>h1{
    font-size: 24px;
  }
  .auto-running>p{
    font-size: 14px;
  }
  .bottom-text>p{
    font-size: 16px;
  }
}

@media screen and (max-width: 560px){

  .bottom-text>p{
    font-size: 14px;
  }
}

@media screen and (max-width: 480px){
  .application-item{
    width: 100%;
    margin-bottom: 16px;
  }

}

</style>
