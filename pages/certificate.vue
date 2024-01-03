<template>
  <div class="container">

    <div v-if="isOpenDialog" class="pic-dialog">
      <div class="close-bg" @click="isOpenDialog=false"></div>
      <div class="preview-container">
        <img class="preview-img" :src="currentImg" >
      </div>
    </div>


    <nav-header :title="$t('certificate.certificate')"></nav-header>
    <div class="certificate">
      <h1>{{$t('certificate.certificate')}}</h1>
      <div class="certificate-container">
        <div class="certificate-box">
          <div class="certificate-title">
            <span class="ce-tag" :class="{ 'ce-tag-current': !showCeId }" @click="showCertificate('all')">{{$t('certificate.all')}}</span>
            <span v-for="(item, index) in certificateList" :key="index" class="ce-tag" :class="{ 'ce-tag-current': showCeId === item.id }" @click="showCertificate(item.id)">
						{{ item.label }}
					</span>
          </div>
          <div class="certificate-wrapper" :class="{'item-center': showCeId}">
            <div v-for="(item, index) in certificateList" :key="index" class="ce-pic-wrapper" :class="{ 'hidden': showCeId && showCeId !== item.id }">
              <div class="ce-pic-title">- {{ item.label }} -</div>

              <a class="ce-pic" :title="item.label" @click="getImg(item)">
                <img :src="item.thumb" :alt="item.label" />
              </a>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n()
useHead({
  title: t('foot.qualifications'),
  meta: [
    {name: 'keywords', content: t('seo.pages.certificate.keywords') },
    {name: 'description', content: t('seo.pages.certificate.description') }
  ],
})

const isOpenDialog = ref(false);
const currentImg = ref("")

function getImg(img){

  currentImg.value = img.thumb
  isOpenDialog.value=true
}

const fileUrl = 'https://file.kwunphi.com/kwunphi/images/certificate/'
const thumbUrl = 'https://file.kwunphi.com/kwunphi/images/certificate/thumb/'

const showCeId = ref('')

const certificateList = ref([{
  id: 'ce-FCC',
  label: t('certificate.label.FCC'),
  thumb: thumbUrl + 'KWUN-FCC.jpg',
  pic: fileUrl + 'KWUN-FCC.png'
}, {
  // RED\LVD是安规认证，不适合放官网
  id: 'ce-RED',
  label: t('certificate.label.RED'),
  thumb: thumbUrl + 'Kwun_CE-RED_AT18220WC202603.jpg',
  pic: fileUrl + 'Kwun_CE-RED_AT18220WC202603.png'
}, {
  id: 'ce-LVD',
  label: t('certificate.label.LVD'),
  thumb: thumbUrl + 'Kwun_CE-LVD_AT18250SC200867.jpg',
  pic: fileUrl + 'Kwun_CE-LVD_AT18250SC200867.png'
}, {
  id: 'ce-RoHS',
  label: t('certificate.label.RoHS'),
  thumb: thumbUrl + 'KWUN-RoHS.jpg',
  pic: fileUrl + 'KWUN-RoHS.png'
}, {
  id: 'cd-Microcrack',
  label: t('certificate.label.Microcrack'),
  thumb: thumbUrl + 'microcrack.jpg',
  pic: fileUrl + 'microcrack.png'

}, {
  id: 'ce-IP65',
  label: t('certificate.label.IP65'),
  thumb: thumbUrl + 'B30-IP65.jpg',
  pic: fileUrl + 'B30-IP65.png'
}, {
  id: 'ce-HighTemp',
  label: t('certificate.label.HighTemp'),
  thumb: thumbUrl + 'B30-HighTemp.jpg',
  pic: fileUrl + 'B30-HighTemp.png'
}, {
  id: 'ce-LowTemp',
  label: t('certificate.label.LowTemp'),
  thumb: thumbUrl + 'B30-LowTemp.jpg',
  pic: fileUrl + 'B30-LowTemp.png'
}, {
  id: 'ce-TransportBySea',
  label: t('certificate.label.TransportBySea'),
  thumb: thumbUrl + 'battery-bysea.jpg',
  pic: fileUrl + 'battery-bysea.png'
}, {
  id: 'ce-Airtransport',
  label: t('certificate.label.AirTransport'),
  thumb: thumbUrl + 'battery-airtransport.jpg',
  pic: fileUrl + 'battery-airtransport.png'
}])

function showCertificate(ceId) {
  if (!ceId || ceId === 'all') {
    showCeId.value = ''
  } else {
    showCeId.value = ceId
  }
}


</script>

<style scoped>
.container{
  width: 100%;
}
.certificate{
  padding: 48px 0 96px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.certificate>h1{
  font-weight: 700;
}
.certificate-container{
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
.preview-img{
  width: 60%;
  object-fit: cover;
}

.preview-container{
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  padding: 40px;
  overflow: hidden;
  z-index: 2;
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}

@media screen and (max-width: 1232px){
  .certificate-container{
    padding: 0 16px;
  }

}


.certificate-box {
  width: 100%;
  /* max-width: 1300px; */
  margin: 66px auto 0;
}

.certificate-title {
  margin-bottom: 36px;
}

.ce-tag {
  display: inline-block;
  cursor: pointer;
  color: #193284;
  font-size: 16px;
  line-height: 28px;
  padding:0 14px;
}

.ce-tag-current {
  background-color:#2585E0;
  border-radius: 14px;
  color: #fff;
}

div.hidden {
  display: none;
}

.certificate-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 -9px;
}

.certificate-wrapper.item-center {
  justify-content: center;
}

.ce-pic-wrapper {
  width: calc(25% - 18px);
  height: 0;
  padding-bottom: calc((25% - 18px) * 1.41 + 22px);
  margin: 0 9px 18px;
  position: relative;
}

@media screen and (max-width: 719px) {
  .ce-pic-wrapper {
    width: calc(33% - 18px);
    height: 0;
    padding-bottom: calc((33% - 18px) * 1.41 + 22px);
  }
}

@media screen and (max-width: 500px) {
  .ce-pic-wrapper {
    width: calc(50% - 18px);
    height: 0;
    padding-bottom: calc((50% - 18px) * 1.41 + 22px);
  }
}

.ce-pic-title {
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  text-align: center;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 2;
}

@media screen and (max-width: 350px) {
  .ce-pic-title {
    font-size: 12px;
  }
}

.ce-pic {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100% - 22px);
  overflow: hidden;
  transition: all 0.5s;
  z-index: 1;
}

.ce-pic img {
  width: 100%;
}

.ce-pic-wrapper:hover .ce-pic {
  top: -18px;
}
</style>
