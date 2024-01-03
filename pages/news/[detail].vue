<template>
  <div class="news-detail-page">
    <!-- <custom-header-nav :custom-header-info="customHeaderInfo1"></custom-header-nav> -->
    <nav-header :title="$t('news.KwunPhiNewsCenter')"></nav-header>


    <div class="news-container">
      <div class="news-wrapper">
        <div class="news-detail-container">
          <h1>{{ $t(newsDetail.title) }}</h1>
          <div class="news-tag">
            <h1 class="tag">{{ $t(newsDetail.tag) }}</h1>
            <h1>{{ newsDetail.date }}</h1>
          </div>
          <div class="split-line"></div>
          <!-- <h3
            style="text-align: center;font-size: 19px;font-weight:600;line-height: 24px;letter-spacing: -.02em;color: rgba(0,0,0,0.85);margin-top: 30px;margin-bottom: 30px">
            {{ newsDetail.subTitle }}</h3> -->
          <div class="news-content" v-for="(item, index) in newsDetail.detail">
            <h1 v-if="item.title" v-html="$t(item.title).replace('<p>')"></h1>
            <p v-if="item.content" v-html="$t(item.content).replace('<p>')"></p>
            <!-- <br v-if="item.imgUrl"/> -->
            <img v-if="item.imgUrl" :src="item.imgUrl" />
            <!-- <br> -->
          </div>
        </div>

        <div class="hot-news-container">
          <h1>{{ $t(recentNewsList.title) }}</h1>
          <nuxt-link v-for="(item, index) in recentNewsList.newsList" class="hot-news-item" :to="localePath(`/news/${item.newsId}`)">
            <kw-image class="hot-news-img-container" :src="item.imgUrl" scale="true"></kw-image>
            <h2>{{ $t(item.title) }}</h2>
            <div class="hot-news-tag">
              <h4>{{ $t(item.tag) }}</h4>
              <p>{{ item.date }}</p>
            </div>
          </nuxt-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t ,locale} = useI18n()
useHead({
  title: t('foot.newsCenter'),
  meta: [
    {name: 'keywords', content: t('seo.pages.news.keywords') },
    {name: 'description', content: t('seo.pages.news.description') }
  ],
})
import recentNews from "assets/js/news/recent-news-list";
import allNewsDetailList from "assets/js/news/all-news-detail-list";
const router = useRouter()
const route = useRoute()
const localePath = useLocalePath();

function goToNewsDetail(item, index) {
  router.push({ path: localePath(`/news/${item.newsId}`) })
}

const filterTag = ref(new Map().set(1, "新闻").set(2, "媒体报道"))
const newsId = ref(route.params.detail)
const recentNewsList = ref(allNewsDetailList.recentNewsList)
const newsDetail = ref({})


const newsList = ref(allNewsDetailList.allNewsDetailList)

newsDetail.value = allNewsDetailList.newsMap.get(parseInt(route.params.detail))

onUpdated(() => {


})
</script>

<style scoped>
.news-detail-page {
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}

.news-container {
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}

.news-wrapper {
  max-width: 1200px;
  margin: 48px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.news-detail-container {
  flex: 1;
  margin-right: 48px;
}

.news-detail-container>h1 {
  line-height: 1.5;
  font-size: 32px;
  font-weight: 500;
}

.news-tag {
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.news-tag>h1 {
  font-size: 18px;
  color: #545557;
  font-weight: 400;
  margin-right: 16px;
}

.split-line {
  margin: 16px 0 24px;
  width: 100%;
  height: 1px;
  opacity: 0.3;
  background-color: #303233;
}

.news-content>h1 {
  font-size: 18px;
  font-weight: 300;
  color: #303233;
}

.news-content>p {
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;
  color: #555557;
  text-indent: 2em;
  padding: 8px 0;
}

.news-content>img {
  display: block;
  width: 100%;
  margin: 11px 0;
}

.hot-news-container {
  width: 25%;
  min-width: 200px;
}

.hot-news-container>h1 {
  font-size: 24px;
  margin-bottom: 12px;
  font-weight: 400;
}

.hot-news-item {
  width: 100%;
}

.hot-news-item:last-child {
  margin-bottom: 0;
}

.hot-news-img-container {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}

.hot-news-item>h2 {
  font-size: 16px;
  margin-top: 8px;
  color: black;
  font-weight: 400;
}

.hot-news-tag {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2px;
  margin-bottom: 16px;
}

.hot-news-tag>p {
  color: #909399;
  font-size: 10px;
  font-weight: 300;
}

.hot-news-tag>h4 {
  color: #fff;
  background-color: #909399;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 300;
  padding: 1px 5px;
}

.hot-news-tag>* {
  margin-right: 16px;
}

.hot-news-tag>*:last-child {
  margin-right: 0;
}

@media screen and (max-width: 767px) {
  .hot-news-container {
    display: none;
  }

  .news-detail-container {
    /* width: calc(100%); */
    margin-right: 0;
    align-items: center;
  }

  .news-detail-container>h1 {
    text-align: center;
    font-size: 24px;
  }
}

@media screen and (max-width: 480px) {
  .news-detail-container>h1 {
    font-size: 20px;
  }
}
</style>
