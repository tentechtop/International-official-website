<template>
  <div>
  <transition name="fade">
  <div v-if="!isShowFeedback && !isShowFeedBackWindow" class="app" @click="openFeedBackWindow">
    <div class="text-box">
      <img src="https://file.kwunphi.com/kwunphi4/images/svg/24gf-envelopeCheck.svg">
      <h1>反</h1>
      <h1>馈</h1>
      <h1>建</h1>
      <h1>议</h1>
    </div>






  </div>
  </transition>


    <div v-if="isShowFeedBackWindow" class="FeedBackWindow">
      <div class="close-bg"></div>
      <div class="FeedBack">
        <div class="close-button" @click="openFeedBackWindow">
          <img src="https://file.kwunphi.com/kwunphi4/images/svg/%E5%85%B3%E9%97%AD%E9%BB%91%E8%89%B2.svg">
        </div>


      </div>
    </div>





  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, onMounted, getCurrentInstance,onUnmounted ,onBeforeUnmount} from "vue";
const isShowFeedback = ref(false)

const isShowFeedBackWindow = ref(false)

const scroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  isShowFeedback.value = scrollTop<1024
};




function openFeedBackWindow(){
  isShowFeedBackWindow.value = !isShowFeedBackWindow.value
  if (isShowFeedBackWindow.value) {
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = getScrollbarWidth() + 'px';
  } else {
    document.body.style.overflowY = 'auto';
    document.body.style.paddingRight = '0';
  }
}


function getScrollbarWidth() {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.width = '100px';
  scrollDiv.style.height = '100px';
  scrollDiv.style.overflow = 'scroll';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}


onMounted(() => {
  window.addEventListener("scroll", scroll);
});
onBeforeUnmount(()=>{
  document.body.style.overflowY = 'auto';
  document.body.style.paddingRight = '0';
})
</script>

<style scoped>
.app{
  cursor: pointer;
  z-index: 9999;
  position: fixed;
  right: 0;
  top: 50%;
  min-height: 112px;
  transform: translateX(22px);
  width: 52px;
  background-color: #69A2E7;
  transition: all 0.3s ease;
  border-radius: 5px 0px 0px 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 6px;
}
.app:hover{
  transform: translateX(0px);
}
.text-box{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text-box>img{
  width: 18px;
}
.text-box>h1{
  color: #FFFFFF;
  font-size: 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.25s ,opacity 0.25s ;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.FeedBackWindow{
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
.FeedBack{
  z-index: 2;
  position: absolute;
  right: 14px;
  top: calc(50% - 150px);
  height: 300px;
  width: 400px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.25);
}
.close-button{
  padding: 3px;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  width: 23px;
  height: 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 300px;
}
.close-button:hover{
  background-color: #f3f3f3;
}
.close-button>img{
  width: 100%;
  opacity: 0.6;
}

</style>
