<template>
  <div class="container">
    <div class="header-banner">
      <div class="app-desc-container">
        <div class="app-intro-container">
          <div class="intro-container">
            <img src="https://file.kwunphi.com/kwunphi4/images/commons/logo1.png">
            <h1>{{ $t('appIntro.downloadApp') }}</h1>
            <p>{{ $t('appIntro.downloadAppDesc01') }}</p>
            <div class="app-download-container">
              <a target="_blank" href="https://apps.apple.com/us/app/ai-kwun/id1616848453">   <img  src="https://file.kwunphi.com/kwunphi4/images/commons/app-store.png"></a>
              <a target="_blank" href="https://file.kwunphi.com/app/aikwun/android/aikwun-release.1.9.20230528.apk">  <img  src="https://file.kwunphi.com/kwunphi4/images/commons/android.png"></a>
            </div>
            <p class="app-desc">{{ $t('appIntro.downloadAppDesc02') }}</p>
          </div>
        </div>
      </div>
      <kw-image fit="cover" src="https://file.kwunphi.com/kwunphi4/images/commons/kwun-app-banner-01.png" class="banner-img"></kw-image>
    </div>


    <div class="ai-kwun-intro-container">
      <div class="kwun-intro-container">
        <div class="desc">
          <h1>{{ $t('appIntro.downloadAppDesc03') }}</h1>
          <p>{{ $t('appIntro.downloadAppDesc04') }}</p>
          <p>{{ $t('appIntro.downloadAppDesc05') }}</p>
          <p>{{ $t('appIntro.downloadAppDesc06') }}</p>
        </div>
        <img  src="https://file.kwunphi.com/kwunphi4/images/commons/kwun-app-banner-02.png">
      </div>
    </div>


    <div class="ai-kwun-intro-container container2">
      <div class="kwun-intro-container container2">
        <img  src="https://file.kwunphi.com/kwunphi4/images/commons/kwun-app-banner-03.png">
        <div class="desc desc2" >
          <h1>{{ $t('appIntro.downloadAppDesc07') }}</h1>
          <p>{{ $t('appIntro.downloadAppDesc08') }}</p>
          <p>{{ $t('appIntro.downloadAppDesc09') }}</p>
          <p>{{ $t('appIntro.downloadAppDesc10') }}</p>
        </div>

      </div>
    </div>




  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.container{
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header-banner{
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.banner-img{
  z-index: 1;
  width: 100%;
  height: 0;
  padding-bottom: 45%;
  max-height: 800px;
  min-height: 250px;
}
.app-desc-container{
  overflow: hidden;
  position: absolute;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.app-intro-container{
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.intro-container{
  margin-top: 120px;
  max-width: 40%;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro-container>img{
  width: 80px;
}
.intro-container >h1{
  text-align: center;
  font-weight: 700;
  color: #323232;
}
.intro-container >p{
  text-align: center;
  color: rgba(0,0,0,0.55);
}
.app-download-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.app-download-container>a>img{
  cursor: pointer;
  margin: 8px;
  height: 40px;
}
.ai-kwun-intro-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.kwun-intro-container{
  padding: 48px 0;
  width: 100%;
  max-width: 1200px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.desc{
  width: 50%;
}
.desc2{
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.desc >h1{
  font-weight: 700;
}

.desc >p{
  margin-top: 36px;
  opacity: 0.75;
}
.kwun-intro-container>img{
  width: 25%;
}
.container2{
  background-color: #f3f3f3;
}
@media screen and (max-width: 1232px){
  .app-intro-container{
    padding: 0 16px;
  }
  .kwun-intro-container{
    padding: 48px 16px;
  }
}
@media screen and (max-width: 1024px){
  .intro-container{
    margin-top: 80px;
    max-width: 45%;
  }
  .intro-container>img{
    width: 60px;
  }
  .app-intro-container{
    padding: 0 16px;
  }
  .intro-container >h1{
    font-size: 24px;
  }
  .intro-container >p{
    font-size: 14px;
  }
  .app-download-container>img{
    margin: 8px;
    height: 32px;
  }
  .desc >h1{
    font-size: 16px;
  }

  .desc >p{
    font-size: 12px;
    margin-top: 12px;
  }
  .intro-container >h1{
    font-size: 24px;
  }
}
@media screen and (max-width: 767px){
  .intro-container{
    margin-top: 40px;
    max-width: 45%;
  }
  .intro-container>img{
    width: 40px;
  }
  .intro-container >h1{
    font-size: 22px;
  }
  .intro-container >p{
    font-size: 13px;
  }
  .app-download-container>img{
    margin: 8px;
    height: 28px;
  }
  .desc >h1{
    font-size: 14px;
  }
  .desc2{
    align-items: flex-end;
  }

  .desc >p{
    font-size: 12px;
    margin-top: 8px;
  }
  .intro-container >h1{
    font-size: 16px;
  }
}

@media screen and (max-width: 648px){
  .intro-container{
    margin-top: 24px;
    max-width: 50%;
  }
  .intro-container>img{
    width: 32px;
  }
  .intro-container >h1{
    font-size: 20px;
  }
  .intro-container >p{
    font-size: 12px;
  }
  .app-download-container>img{
    margin: 8px;
    height: 22px;
  }
}
@media screen and (max-width: 550px){
  .intro-container{
    margin-top: 16px;
    max-width: 60%;
  }
  .intro-container>img{
    width: 30px;
  }
  .intro-container >h1{
    font-size: 18px;
  }
  .intro-container >p{
    font-size: 12px;
  }
  .app-download-container>img{
    margin: 8px;
    height: 20px;
  }
}
@media screen and (max-width: 500px){
  .intro-container{
    margin-top: 16px;
    max-width: 70%;
  }
  .intro-container >h1{
    font-size: 16px;
  }
  .intro-container >p{
    font-size: 10px;
  }
}
@media screen and (max-width: 450px){
  .app-desc{
    display: none;
  }
}
@media screen and (max-width: 400px){
  .intro-container{
    margin-top: 16px;
    max-width: 80%;
  }
}
@media screen and (max-width: 350px){
  .intro-container{
    max-width: 100%;
  }

}
</style>
