<template>
  <div class="product-support">
    <h1>{{ $t('kwun.productSupport') }}</h1>

    <div class="support-space">

      <div class="space">
        <img :src="locale.startsWith('zh')?'https://file.kwunphi.com/kwunphi4/images/commons/after-sales%20service.png':'https://file.kwunphi.com/kwunphi4/images/commons/after-sales%2520service2.png'" alt="" />
        <div class="space2">
          <h1>{{ $t('kwun.serviceAndSupport') }}</h1>
          <h4>{{ $t('kwun.aftersalesSupport') }}</h4>
          <nuxt-link :to="localePath('/service')">{{ $t('kwun.serviceAndSupport') }} ></nuxt-link>
        </div>
      </div>
      <div class="space">
        <img src="https://file.kwunphi.com/kwunphi4/images/commons/app-download.png" alt="" />
        <div class="space2">
          <h1>{{ $t('nav.downloads') }}</h1>
          <h4>{{ $t('kwun.downloadOfficialSoftwareAndManuals') }} </h4>
          <nuxt-link :to="localePath('/downloads')">{{ $t('nav.downloads') }} ></nuxt-link>
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
.product-support {
  background-color: #f3f3f3;
  width: 100%;
  padding: 48px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.product-support>h1 {
  font-weight: 500;
  padding: 48px 16px;
  font-size: 42px;
  line-height: 36px;
}

.support-space {
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
  justify-content: center;
  font-weight: 700;
  padding: 48px 16px;
}

.space2>h1 {
  text-align: center;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  font-size: 28px;
  line-height: 36px;
}

.space2>h4 {
  font-weight: 300;
  font-size: 16px;
  text-align: center;
  margin-top: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);
}

.space2>a {
  font-weight: 400;
  margin-top: 14px;
  color: rgba(2, 125, 255);
  font-size: 16px;
}

@media screen and (max-width: 767px) {
  .support-space {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .product-support {
    padding-top: 0;
    background-color: #f3f3f3;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }

  .space>img {
    width: 100%;
  }

  .space {
    width: 100%;
    margin-bottom: 16px;
  }

  .space2 {
    padding: 32px 16px;
  }

  .product-support>h1 {
    font-size: 28px;
  }

  .space2>h1 {
    font-size: 22px;

  }

  .space2>h4 {
    font-size: 14px;
  }


}</style>
