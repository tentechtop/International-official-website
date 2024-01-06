<template>
  <div class="container">
    <nav-header :title="$t('foot.BIPV')"></nav-header>
    <div class="bipv-container">
      <div class="bipv-content-container">
        <div class="desc-container">
          <kw-image class="desc-img animate__animated"  fit="contain" :src="tableList[currentIndex].pictureUrl"></kw-image>
        </div>
        <div class="type-drawer-container">
          <div class="menu-container">
            <div v-for="(menu,MIndex) in tableList" class="menu-item" :class="{middleItem:MIndex===currentIndex,enMenu:locale.startsWith('cn')}"
                 @click="gotoSelectMenu(menu,MIndex)">
              <h1>{{menu.title}}</h1>
              <p>{{ menu.summary}}</p>
              <div class="menu-button">
                <p>{{ $t('design.principle') }}{{MIndex+1}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, onMounted, getCurrentInstance,onUnmounted } from "vue";
import {useI18n} from "vue-i18n";
const {t,locale} = useI18n()

const tableList = ref([
  {
    pictureUrl: 'https://file.kwunphi.com/kwunphi4/images/principle/principle-01.png',
    summary: t('design.principleList[0].summary'),
    title:t('design.principleList[0].title'),

    isSelected:false,
  }, {
    pictureUrl: 'https://file.kwunphi.com/kwunphi4/images/principle/principle-02.png',
    summary: t('design.principleList[1].summary'),
    title:t('design.principleList[1].title'),
    isSelected:false,
  }, {
    pictureUrl: 'https://file.kwunphi.com/kwunphi4/images/principle/principle-03.png',
    summary: t('design.principleList[2].summary'),
    title:t('design.principleList[2].title'),
    isSelected:false,
  }, {
    pictureUrl: 'https://file.kwunphi.com/kwunphi4/images/principle/principle-04.png',
    summary: t('design.principleList[3].summary'),
    title:t('design.principleList[3].title'),
    isSelected:false,
  }, {
    pictureUrl: 'https://file.kwunphi.com/kwunphi4/images/principle/principle-05.png',
    summary: t('design.principleList[4].summary'),
    title:t('design.principleList[4].title'),
    isSelected:false,
  }])
const currentIndex = ref(0)

function gotoSelectMenu(menu,MIndex){
  currentIndex.value=MIndex
}

onMounted(()=>{
  if(locale.value.startsWith('zh')){
    tableList.value=[
      {
        pictureUrl: 'https://file.kwunphi.com/kwunphi/images/design/baipv/zh/baipv-1.jpg',
        summary: t('design.principleList[0].summary'),
        title:t('design.principleList[0].title'),

        isSelected:false,
      }, {
        pictureUrl: 'https://file.kwunphi.com/kwunphi/images/design/baipv/zh/baipv-2.jpg',
        summary: t('design.principleList[1].summary'),
        title:t('design.principleList[1].title'),
        isSelected:false,
      }, {
        pictureUrl: 'https://file.kwunphi.com/kwunphi4/images/principle/principle03-zh.png',
        summary: t('design.principleList[2].summary'),
        title:t('design.principleList[2].title'),
        isSelected:false,
      }, {
        pictureUrl: 'https://file.kwunphi.com/kwunphi/images/design/baipv/zh/baipv-4.jpg',
        summary: t('design.principleList[3].summary'),
        title:t('design.principleList[3].title'),
        isSelected:false,
      }, {
        pictureUrl: 'https://file.kwunphi.com/kwunphi4/images/principle/principle05-zh.png',
        summary: t('design.principleList[4].summary'),
        title:t('design.principleList[4].title'),
        isSelected:false,
      }]
  }else {
    tableList.value=[
      {
        pictureUrl: 'https://file.kwunphi.com/kwunphi/images/design/baipv/en/baipv-1.jpg',
        summary: t('design.principleList[0].summary'),
        title:t('design.principleList[0].title'),

        isSelected:false,
      }, {
        pictureUrl: 'https://file.kwunphi.com/kwunphi/images/design/baipv/en/baipv-2.jpg',
        summary: t('design.principleList[1].summary'),
        title:t('design.principleList[1].title'),
        isSelected:false,
      }, {
        pictureUrl: 'https://file.kwunphi.com/kwunphi4/images/principle/principle03-en.png',
        summary: t('design.principleList[2].summary'),
        title:t('design.principleList[2].title'),
        isSelected:false,
      }, {
        pictureUrl: 'https://file.kwunphi.com/kwunphi/images/design/baipv/en/baipv-4.jpg',
        summary: t('design.principleList[3].summary'),
        title:t('design.principleList[3].title'),
        isSelected:false,
      }, {
        pictureUrl: 'https://file.kwunphi.com/kwunphi4/images/principle/principle05-en.png',
        summary: t('design.principleList[4].summary'),
        title:t('design.principleList[4].title'),
        isSelected:false,
      }]
  }
})

</script>

<style scoped>
.container{
  background-image: url("https://file.kwunphi.com/kwunphi4/images/principle/principle-bg.png");
  width: 100%;
}
.bipv-container{
  padding: 48px 0 96px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bipv-content-container{
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.desc-container{
  margin: 48px 0;
  padding: 0px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.desc-img{
  width: 100%;
  height: 0px;
  padding-bottom: 50%;
}

.menu-container{
  min-width: 1111px;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
}

.menu-item{
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 10px;
  height: 170px;
  width: calc(20% - 32px);
  background-color: #A5CAE4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  overflow: hidden;
}
.menu-item>h1{
  font-weight: 500;
  color: white;
  white-space: nowrap;
  font-size: 24px;
  text-align: center;
}
.enMenu>h1{
  white-space: normal;
}
.enMenu >h1{
  font-size: 16px;
}
.menu-item>p{
  max-width: 188px;
  font-weight: 100;
  color: white;
  text-align: center;
  font-size: 14px;
}
.enMenu >p{
  font-size: 12px;
}
.middleItem{
  height: 200px;
  width: calc(20%);
  background-color: #1469CC;
}
.menu-button{
  padding: 4px 26px;
  border-radius: 5px;
  border: 1px solid white;
}
.middleItem .menu-button{
  background-color: white;
}
.enMenu .menu-button{
  padding: 4px 20px;
}
.menu-button>p{
  color: #ffffff;
}


.middleItem .menu-button>p{
  color: #1469CC;
}
.enMenu .menu-button>p{
  font-size: 10px;
}

.type-drawer-container{
  width: 100%;
  display: flex;
  flex-direction: row;
}
@media screen and (max-width: 1232px){
  .bipv-content-container{
    padding: 0 16px;
  }
  .type-drawer-container{
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: auto;
  }
  .type-drawer-container::-webkit-scrollbar {
    width: 0; /* Width of the scrollbar */
    height: 0px;
  }
  .type-drawer-container::-webkit-scrollbar-thumb {
    background-color: transparent; /* Color of the thumb */
  }
  .type-drawer-container::-webkit-scrollbar-track {
    background-color:transparent; /* Color of the track */
  }
}

@media screen and (max-width: 767px){


}

@media screen and (max-width: 480px){


}
</style>
