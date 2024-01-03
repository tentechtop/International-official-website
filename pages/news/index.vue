<template>
  <div class="news-page">
    <nav-header :title="$t('news.KwunPhiNewsCenter')"></nav-header>
    <div class="news-container">
      <div class="news-wrapper">
        <div class="news-list-container">

          <nuxt-link v-for="(item, index) in newsList" class="news-item animate__animated"
                     :class="{ hot: index === 0 || index == 1 }"
                     :to="localePath(`${item.router}/${item.newsId}`)" v-loadByAnimate>
            <div   style="width: 100%">
              <kw-image class="news-image" :src="item.imgUrl" scale="true"></kw-image>
              <div class="news-description">
                <h1>{{ $t(item.title) }}</h1>
                <div class="news-tag">
                  <p>{{ item.date }}</p>
                  <h4>{{ $t(item.tag) }}</h4>
                </div>
              </div>
            </div>
          </nuxt-link>


        </div>
        <!--
        <div class="subscribe-container">
          <h1>订阅怪虫</h1>
          <p>第一时间获取我们的更新和新服务信息。</p>
          <div class="split-line"></div>

          <h2>社交媒体</h2>
          <div v-for="(item, index) in 5" class="media">
            <img src="https://file.kwunphi.com/kwunphi4/images/commons/facebook.svg">
            <p> Facebook</p>
          </div>
        </div>
         -->
      </div>

    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, onMounted, getCurrentInstance,onUnmounted } from "vue";
const { proxy } = getCurrentInstance();
import { useI18n } from "vue-i18n";
const { t ,locale} = useI18n()
useHead({
  title: t('foot.newsCenter'),
  meta: [
    {name: 'keywords', content: t('seo.pages.news.keywords') },
    {name: 'description', content: t('seo.pages.news.description') }
  ],
})
import allNewsDetailList from "assets/js/news/all-news-detail-list";
const router = useRouter()
const route = useRoute()
const localePath = useLocalePath();

function goToNewsDetail(item) {
  router.push({ path: localePath(`${item.router}/${item.newsId}`) })
}

// 使用ref来定义一个响应式的数组tagList //过滤条件
const tagList = ref<number[]>([1]);
const filterTag = ref(new Map().set(1, "新闻").set(2, "媒体报道"))
const newsList = ref(allNewsDetailList.allNewsDetailList);





</script>

<style scoped>
.news-page {
  width: 100%;
}

.news-container {
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.news-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 96px 0 48px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
}

.news-list-container {
  flex: 1;
  margin-left: -8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
}

.news-item {
  cursor: pointer;
  width: calc(50% - 16px);
  margin: 0 8px 32px;

  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;

  transition: all 0.3s ease;
  overflow: hidden;
}

.news-image {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%
}

.news-description {
  width: 100%;
  flex: 1;
}

.news-description>h1 {
  color: black;
  font-size: 16px;
  margin: 8px 0;
}


.news-tag {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.news-tag>p {
  color: #909399;
  font-size: 14px;
  font-weight: 100;
  margin-right: 24px;
}

.news-tag>h4 {
  background-color: #909399;
  border-radius: 3px;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  font-weight: 300;
  width: auto;
  height: 19px;
  padding: 3px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.hot {
  width: calc(100% - 16px);
  margin-right: 8px;
  margin-bottom: 48px;
}

.hot .news-description>h1 {
  font-size: 24px;
}

.hot .news-tag {
  justify-content: flex-start;
}

.split-line {
  background-color: #c7c9ce;
  width: 100%;
  height: 1px;
  margin: 24px 0;
}

.subscribe-container {
  width: 25%;
  min-width: 200px;
  margin-left: 48px;
}

.subscribe-container>h1 {
  color: #303233;
  font-weight: 700;
  margin-bottom: 16px;
}

.subscribe-container>h2 {
  margin-bottom: 16px;
  color: #303233;
}

.subscribe-container>p {
  color: #303233;
}

.media {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
}

.media>img {
  width: 24px;
  opacity: 0.85;
}

.media>p {
  margin-left: 8px;
  color: #3a3a3a;
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
@media screen and (max-width: 767px) {
  .news-wrapper {
    margin-top: 48px;
  }

  .news-list-container {
    margin-right: -8px;
  }

  .news-tag>p {
    font-size: 12px;
  }

  .news-tag>h4 {
    font-size: 12px;
  }

  .news-description>h1 {
    font-size: 16px;
  }

  .hot .news-description>h1 {
    font-size: 16px;
  }

  .subscribe-container {
    display: none;
  }

}

@media screen and (max-width: 480px) {
  .news-item {
    width: 100%;
    margin-bottom: 24px;
  }
}
</style>
