<template>
  <div class="explore-more">
    <h1>{{ $t('kwun.exploreMore') }}</h1>
    <div class="explore-space">


      <div class="space">
        <img src="https://file.kwunphi.com/kwunphi4/images/commons/aftermarket-accessories.png" alt="" />
        <div class="space2">
          <h1>{{ $t('kwun.accessories') }}</h1>
          <h4>{{ $t('kwun.remoteControlCubeBatteryAndMoreAccessories') }}</h4>
          <!--          <nuxt-link to="accessories" style="color: rgba(2,125,255,0.95)">立即选购 ></nuxt-link>-->
        </div>
      </div>


      <div class="space">
        <img :src="locale.startsWith('zh')?'https://file.kwunphi.com/kwunphi4/images/commons/after-sales-service-personnel.png':'https://file.kwunphi.com/kwunphi4/images/commons/after-sales-service-personnel2.png'" alt="" />
        <div class="space2">
          <h1>{{ $t('kwun.customizableOptions') }}</h1>
          <h4>{{ $t('kwun.remoteControlCubeBatteryAndMoreAccessories') }}</h4>
          <!--          <nuxt-link to="accessories" style="color: rgba(2,125,255,0.95)">立即选购 ></nuxt-link>-->
        </div>
      </div>



    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t, locale, locales } = useI18n()

</script>

<style scoped>
.explore-more {
  margin-top: 48px;
  padding: 0 16px;
  background-color: #f3f3f3;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.explore-more>h1 {
  margin-top: 48px;
  font-weight: 500;
  padding: 50px;
  font-size: 42px;
  line-height: 36px;
}

.explore-space {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  max-width: 1200px;
}

.space {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  flex: 1;
}

.space>img {
  width: 100%;
}

.space2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-weight: 700;
  padding: 48px 16px;
}

.space2>h1 {
  text-align: center;
  font-size: 28px;
  line-height: 36px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
}

.space2>h4 {
  font-weight: 300;
  text-align: center;
  margin-top: 16px;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.9);
}

.space2>a {
  margin-top: 16px;
  color: rgba(2, 125, 255);
}

@media screen and (max-width: 767px) {
  .explore-space {
    flex-direction: column;
  }
  .space>img {
    width: 100%;
  }
  .space {
    margin-bottom: 16px;
  }
  .space2 {
    padding: 32px 16px;
  }

  .explore-more>h1 {
    margin-top: 0px;
    font-weight: 700;
    padding: 50px;
    font-size: 24px;
    line-height: 36px;
  }

  .space2>h1 {
    font-size: 22px;
  }

  .space2>h4 {
    font-size: 14px;
  }
}
</style>
