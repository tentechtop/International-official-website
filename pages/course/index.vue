<template>
  <div class="course-page">
    <div class="banner-container">
      <div class="course-banner">
        <!-- <div class="mask">
        </div> -->
        <div class="banner-text">
          <h1 class="animate__animated animate__delay-0.3s" v-loadByAnimate>{{ $t('course.GlobalCleanCumulative5GWatt') }}</h1>
          <h2 class="animate__animated animate__delay-0.6s" v-loadByAnimate>{{ $t('course.SurpassingAllInPowerGenerationEfficiency') }}</h2>
          <h3 class="animate__animated animate__delay-0.9s" v-loadByAnimate>{{ $t('course.PowerGenerationCodeOfTheFieldArmy') }}</h3>
        </div>
        <!-- <div class="banner-text" style="margin-top: -400px;margin-left: 1200px">
          <h3>2023</h3>
        </div> -->
        <!-- <img style="filter: brightness(0.7);" src="https://file.kwunphi.com/kwunphi4/images/commons/course-banner.png"> -->
      </div>
    </div>

    <div class="course-wrapper">

      <div class="course-header">
        <h1>{{ $t('course.PopularTutorials') }}</h1>
        <h2>{{ $t('course.MoreAndMoreYoungTalentsQuietlyLearning') }}</h2>
      </div>
      <div class="course-item-list">
        <nuxt-link v-for="(course, CIndex) in courseList" class="course-item animate__animated" v-loadByAnimate
          @click="gotoCourseDetail(course)">
          <div class="course-cover">
            <img :src="course.imgUrl">
            <div class="course-date">{{ course.date }}</div>
          </div>
          <div class="course-title">
            <h1>{{ $t(course.courseTitle) }}</h1>
            <p>{{ $t(course.desc) }}</p>
          </div>
          <div class="course-meta">
            <div class="course-stat">
              <p><i class="iconfont icon-play"></i>{{ course.playNum }}</p>
              <!-- <p><i class="iconfont icon-play_fill"></i>{{ course.playNum }}</p> -->
              <p><i class="iconfont icon-like"></i>{{ course.likesNum }}</p>
              <!-- <p><i class="iconfont icon-like-fill"></i>{{ course.likesNum }}</p> -->
            </div>
            <div class="course-date">
              <p>{{ course.date }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
      <!--      <div class="split-line"></div>-->

    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t ,locale} = useI18n()
useHead({
  title: t('foot.onlineClassroom'),
  meta: [
    {name: 'keywords', content: t('seo.pages.course.keywords') },
    {name: 'description', content:t('seo.pages.course.description')  }
  ],
})
import allAourseList from "assets/js/course-list";
const router = useRouter()
const route = useRoute()
const courseList = ref(allAourseList.courseList)
const localePath = useLocalePath()
function gotoCourseDetail(course){
  router.push({ path: localePath(`${course.router}`)})
}
</script>

<style scoped>
.course-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.banner-container {
  width: 100%;
  height: calc(50vw);
  max-height: 400px;
  min-height: 200px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.9);

  background-image: url('https://file.kwunphi.com/kwunphi4/images/commons/course-banner.png');
  background-color: rgba(0, 0, 0, 0.5);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
}

.course-banner {
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* .course-banner>img {
  z-index: 1;
  width: 100%;
  height: 500px;
  object-fit: cover;
} */

.banner-text {
  z-index: 3;
  text-align: center;
  /* margin-top: -30px; */
}

.banner-text {
  color: #fff;
}

.banner-text>h1 {
  font-size: 48px;
  line-height: 1;
  font-weight: 700;
}

.banner-text>h2 {
  font-size: 24px;
  line-height: 1;
  margin-top: 16px;
}

.banner-text>h3 {
  font-size: 16px;
  line-height: 1;
  margin-top: 48px;
}

.course-wrapper {
  margin-top: 96px;
  width: 100%;
  padding: 0 8px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
}

.course-header {
  /* width: 100%; */
  max-width: 1200px;
  width: 100%;
  padding: 0 8px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  flex-wrap: wrap;
}

.course-header>h1 {
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  margin-right: 24px;
}

.course-header>h2 {
  color: #6c7073;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  margin-top: 16px;
}

.course-item-list {
  margin-top: 16px;
  margin-bottom: 48px;
  width: 100%;
  max-width: 1216px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.course-item {
  cursor: pointer;
  border-radius: 5px;
  background-color: #f5f5f5;
  width: calc(25% - 16px);
  margin: 8px 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.course-cover {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  position: relative;
  overflow: hidden;
}

.course-cover>img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  object-fit: cover;
}

.course-cover .course-date {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: right;
  color: #fff;
  font-size: 12px;
  padding: 6px 12px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.5));
  display: none;
  z-index: 2;
}

.course-title {
  margin-top: 12px;
  width: 100%;
  padding: 0 16px;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
}

.course-title>h1 {
  font-size: 20px;
  color: #3a3a3a;
}

.course-title>p {
  margin-top: 8px;
  font-size: 16px;
  line-height: 1.5;
  color: #909399;
}


.course-meta {
  width: 100%;
  padding: 8px 12px 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  color: #6c7073;
  font-size: 14px;
}

.course-stat {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}

.course-stat>p {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  margin-right: 12px;
}

@media screen and (max-width: 1023px) {
  .course-item {
    width: calc(33% - 16px);
  }
}

@media screen and (max-width: 767px) {
  .banner-text>h1 {
    font-size: 24px;
  }

  .banner-text>h2 {
    font-size: 18px;
    line-height: 1;
    margin-top: 16px;
  }

  .banner-text>h3 {
    font-size: 14px;
    line-height: 1;
    margin-top: 32px;
  }

  .course-wrapper {
    margin-top: 48px;
  }

  .course-header>h1 {
    font-size: 28px;
    line-height: 36px;
  }

  .course-header>h2 {
    font-size: 14px;
    line-height: 22px;
    margin-top: 0;
    color: #909399;
  }

  .course-item {
    width: calc(50% - 8px);
    margin: 4px;
  }

  .course-title {
    padding: 0 12px;
  }

  .course-title>h1 {
    font-size: 14px;
  }

  .course-title>p {
    font-size: 12px;
    margin-top: 0;
  }

  .course-meta {
    font-size: 12px;
    padding: 4px 8px 8px;
  }

  .course-cover .course-date {
    display: block;
  }

  .course-meta .course-date {
    display: none;
  }

}
</style>
