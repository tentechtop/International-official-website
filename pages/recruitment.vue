<template>
  <div class="recruitment">
    <div class="header-video">
      <div class="content">
        <h1>{{ $t('recruitment.changeTheWorldTogetherWithGuaiChong') }}</h1>
      </div>
      <video autoplay loop src="https://file.kwunphi.com/kwunphi4/videos/recruitment.mp4"></video>
    </div>
    <div class="company_introduce_wrap">
      <h2>{{ $t('recruitment.weAreDedicatedTo') }}</h2>
      <h1>{{ $t('recruitment.makingTheEarthGreener') }}</h1>
      <h2>{{ $t('recruitment.blendingThePowerOfScienceAndBeautyIntoTheHumanSpirit') }}</h2>
      <div class="card-list">
        <div v-for="(item, index) in list" :key="index" class="card-content">
          <img :src="item.imageUrl">
          <h2>{{ $t(item.desc1) }}</h2>
          <h2>{{ $t(item.desc2) }}</h2>
          <kw-button color="'rgba(255,0,2,0)'" height="40px" width="140px" press="rgba(2,125,255)" over="#f3f3f3"
            style="margin-top: 10px;color: black">
            {{ $t('learnMore') }}</kw-button>
        </div>
      </div>
    </div>
    <div class="join-team-container">
      <div class="team-intro-container">
        <h1>{{ $t('recruitment.teamIntroduction') }}</h1>
        <h1>{{ $t('recruitment.findTheRightTeamForYou') }}</h1>
        <h2>{{ $t('recruitment.inTheRightPositionYourImaginationWillShineBrightly') }}</h2>
      </div>
      <div class="team-item-container">
        <div class="team-item-intro-container">
          <div class="item-intro-container">
            <div v-for="(item, index) in jobList1.slice(0, 3)" class="team-item" :class="{ 'item-selected': item.selected }"
              @click="changSelected(index)">
              <h3>{{ $t(item.jobName) }}</h3>
              <img :src="item.selected ? item.imgUrl2 : item.imgUrl1" alt="SVG Image">
            </div>
          </div>
          <div class="item-intro-container">
            <div v-for="(item, index) in jobList1.slice(3, 7)" class="team-item min-item"
              :class="{ 'item-selected': item.selected }" @click="changSelected(index + 3)">
              <h3>{{ $t(item.jobName) }}</h3>
              <img :src="item.selected ? item.imgUrl2 : item.imgUrl1" alt="SVG Image">
            </div>
          </div>
          <div class="item-intro-container">
            <div v-for="(item, index) in jobList1.slice(7, 11)" class="team-item min-item"
              :class="{ 'item-selected': item.selected }" @click="changSelected(index + 7)">
              <h3>{{ $t(item.jobName) }}</h3>
              <img :src="item.selected ? item.imgUrl2 : item.imgUrl1" alt="SVG Image">
            </div>
          </div>

        </div>
        <div class="team-item-intro-container desc">
          <h1>{{ $t(jobList1[jobIndex].jobName) }}</h1>
          <h2>{{ $t(jobList1[jobIndex].jobDescTitle) }}</h2>
          <p>{{ $t(jobList1[jobIndex].jobDesc1) }}</p>
          <p> {{ $t(jobList1[jobIndex].jobDesc2) }}</p>
          <div class="delivery-button">
            <h4><a href="mailto:hr@kwunphi.com">{{ $t('recruitment.applyNowHrKwunphiCom') }}hr@kwunphi.com</a></h4>
            <!--            <img src="https://file.kwunphi.com/kwunphi4/images/commons/youjianto.svg">-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const list = ref([
  {
    imageUrl: 'https://file.kwunphi.com/kwunphi4/images/commons/recruitment-01.png',
    desc1: 'recruitment.dignifiedWork',
    desc2: 'recruitment.improvedEfficiency'
  },
  {
    imageUrl: 'https://file.kwunphi.com/kwunphi4/images/commons/recruitment-02.png',
    desc1: 'recruitment.enhancedResourceValue',
    desc2: 'recruitment.birthOfNewIndustries'
  },
  {
    imageUrl: 'https://file.kwunphi.com/kwunphi4/images/commons/recruitment-03.png',
    desc1: 'recruitment.convergenceOfSocialInnovation',
    desc2: 'recruitment.innovateAndCreateAgain'
  },
]);
const jobList1 = ref([
  {
    jobId: 1,
    jobName: "recruitment.jobList[0].jobName",
    jobDescTitle: "recruitment.jobList[0].jobDescTitle",
    jobDesc1: "recruitment.jobList[0].jobDesc1",
    jobDesc2: "recruitment.jobList[0].jobDesc2",
    imgUrl1: 'https://file.kwunphi.com/kwunphi4/images/commons/job1-01.svg',
    imgUrl2: 'https://file.kwunphi.com/kwunphi4/images/commons/job1-02.svg',
    selected: true,
  },
  {
    jobId: 2,
    jobName: "recruitment.jobList[1].jobName",
    jobDescTitle: "recruitment.jobList[1].jobDescTitle",
    jobDesc1: "recruitment.jobList[1].jobDesc1",
    jobDesc2: "recruitment.jobList[1].jobDesc2",
    imgUrl1: 'https://file.kwunphi.com/kwunphi4/images/commons/job2-01.svg',
    imgUrl2: 'https://file.kwunphi.com/kwunphi4/images/commons/job2-02.svg',
    selected: false,
  },
  {
    jobId: 3,
    jobName: "recruitment.jobList[2].jobName",
    jobDescTitle: "recruitment.jobList[2].jobDescTitle",
    jobDesc1: "recruitment.jobList[2].jobDesc1",
    jobDesc2: "recruitment.jobList[2].jobDesc2",
    imgUrl1: 'https://file.kwunphi.com/kwunphi4/images/commons/job3-01.svg',
    imgUrl2: 'https://file.kwunphi.com/kwunphi4/images/commons/job3-02.svg',
    selected: false,
  },
  {
    jobId: 4,
    jobName: "recruitment.jobList[3].jobName",
    jobDescTitle: "recruitment.jobList[3].jobDescTitle",
    jobDesc1: "recruitment.jobList[3].jobDesc1",
    jobDesc2: "recruitment.jobList[3].jobDesc2",
    imgUrl1: 'https://file.kwunphi.com/kwunphi4/images/commons/job4-01.svg',
    imgUrl2: 'https://file.kwunphi.com/kwunphi4/images/commons/job4-02.svg',
    selected: false,
  },
  {
    jobId: 5,
    jobName: "recruitment.jobList[4].jobName",
    jobDescTitle: "recruitment.jobList[4].jobDescTitle",
    jobDesc1: "recruitment.jobList[4].jobDesc1",
    jobDesc2: "recruitment.jobList[4].jobDesc2",
    imgUrl1: 'https://file.kwunphi.com/kwunphi4/images/commons/job5-01.svg',
    imgUrl2: 'https://file.kwunphi.com/kwunphi4/images/commons/job5-02.svg',
    selected: false,
  },
  {
    jobId: 6,
    jobName: "recruitment.jobList[5].jobName",
    jobDescTitle: "recruitment.jobList[5].jobDescTitle",
    jobDesc1: "recruitment.jobList[5].jobDesc1",
    jobDesc2: "recruitment.jobList[5].jobDesc2",
    imgUrl1: 'https://file.kwunphi.com/kwunphi4/images/commons/job6-01.svg',
    imgUrl2: 'https://file.kwunphi.com/kwunphi4/images/commons/job6-02.svg',
    selected: false,
  },
  {
    jobId: 7,
    jobName: "recruitment.jobList[6].jobName",
    jobDescTitle: "recruitment.jobList[6].jobDescTitle",
    jobDesc1: "recruitment.jobList[6].jobDesc1",
    jobDesc2: "recruitment.jobList[6].jobDesc2",
    imgUrl1: 'https://file.kwunphi.com/kwunphi4/images/commons/job7-01.svg',
    imgUrl2: 'https://file.kwunphi.com/kwunphi4/images/commons/job7-02.svg',
    selected: false,
  },
  {
    jobId: 8,
    jobName: "recruitment.jobList[7].jobName",
    jobDescTitle: "recruitment.jobList[7].jobDescTitle",
    jobDesc1: "recruitment.jobList[7].jobDesc1",
    jobDesc2: "recruitment.jobList[7].jobDesc2",
    imgUrl1: 'https://file.kwunphi.com/kwunphi4/images/commons/job8-01.svg',
    imgUrl2: 'https://file.kwunphi.com/kwunphi4/images/commons/job8-02.svg',
    selected: false,
  },
  {
    jobId: 9,
    jobName: "recruitment.jobList[8].jobName",
    jobDescTitle: "recruitment.jobList[8].jobDescTitle",
    jobDesc1: "recruitment.jobList[8].jobDesc1",
    jobDesc2: "recruitment.jobList[8].jobDesc2",
    imgUrl1: 'https://file.kwunphi.com/kwunphi4/images/commons/job9-01.svg',
    imgUrl2: 'https://file.kwunphi.com/kwunphi4/images/commons/job9-02.svg',
    selected: false,
  },
  {
    jobId: 10,
    jobName: "recruitment.jobList[9].jobName",
    jobDescTitle: "recruitment.jobList[9].jobDescTitle",
    jobDesc1: "recruitment.jobList[9].jobDesc1",
    jobDesc2: "recruitment.jobList[9].jobDesc2",
    imgUrl1: 'https://file.kwunphi.com/kwunphi4/images/commons/job10-01.svg',
    imgUrl2: 'https://file.kwunphi.com/kwunphi4/images/commons/job10-02.svg',
    selected: false,
  },
  {
    jobId: 11,
    jobName: "recruitment.jobList[10].jobName",
    jobDescTitle: "recruitment.jobList[10].jobDescTitle",
    jobDesc1: "recruitment.jobList[10].jobDesc1",
    jobDesc2: "recruitment.jobList[10].jobDesc2",
    imgUrl1: 'https://file.kwunphi.com/kwunphi4/images/commons/job11-01.svg',
    imgUrl2: 'https://file.kwunphi.com/kwunphi4/images/commons/job11-02.svg',
    selected: false,
  },
]);
const jobIndex = ref(0)
function changSelected(index) {
  const temp = jobList1.value[index].selected
  // 设置当前选中项的样式
  jobList1.value.forEach(item => {
    item.selected = false;
  });
  jobList1.value[index].selected = !temp;
  jobIndex.value = index
}

</script>

<style scoped>
.recruitment {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  overflow: hidden;
}

heard {
  position: relative;
  z-index: 2;
}

.header-video {
  width: 100%;
  position: relative;

}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.content>h1 {
  color: white;
  font-weight: 700;
  font-size: 50px
}

.header-video>video {
  width: 100%;
}

.button-space>t-button {
  color: white;
}

.company_introduce_wrap {
  padding-top: 56px;
  width: 100%;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.company_introduce_wrap>h2 {
  text-align: center;
  font-weight: 700;
  color: #333333;
}

.company_introduce_wrap>h1 {
  text-align: center;
  margin: 5px 0;
  font-weight: 700;
  font-size: 42px
}

.card-list {
  padding: 0 16px;
  margin-top: 20px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
}

.card-content {
  padding: 0 16px 72px;
  margin: 8px;
  max-height: 400px;
  width: calc(33.33% - 8px);
  max-width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
}

.card-content>h2 {
  text-align: center;
  transition: all 0.3s ease;
}

.card-content>img {
  margin-top: 60px;
  width: 122px;
  height: 122px;
}

.join-team-container {
  transition: all 0.3s ease;
  padding: 48px 0;
  width: 100%;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-intro-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
}

.team-intro-container>h1 {
  font-weight: 700;
  color: black;
  font-size: 44px;
}

.team-intro-container>h2 {
  font-weight: 700;
  color: #222222;
  margin-bottom: 16px;
}

.team-item-container {
  margin-top: 16px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.team-item-intro-container {
  transition: all 0.3s ease;
  min-height: 720px;
  width: calc(50% - 20px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.item-intro-container {
  width: calc(33.33% - 8px);
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.team-item {
  overflow: hidden;
  cursor: pointer;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  height: calc(33.33% - 8px);
  background-color: #fff;
  position: relative;
}

.min-item {
  height: calc(25% - 8px);
}

.team-item>h3 {
  color: #222222;
}

.item-selected>h3 {
  color: #ffffff;
}

.item-selected {
  background-color: #222222;
}

.team-item>img {
  width: 40px;
  position: absolute;
  right: 10px;
  /* 调整右侧距离 */
  bottom: 10px;
  /* 调整底部距离 */
}

.desc {
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: #f7f9fa;
  border-radius: 10px;
  background-image: url('https://stormsend1.djicdn.com/stormsend/uploads/bce92862a3bd916fd003935f00bd3c78.jpg');
  background-size: cover;
  justify-content: flex-start;
}

.desc>h1 {
  font-weight: 700;
  font-size: 42px;
  margin-bottom: 32px;
}

.desc>h2 {
  font-weight: 700;
  color: #555555;
  margin-bottom: 24px;
}

.desc>p {
  color: #777777;
  line-height: 1.5;
  margin-bottom: 16px;
  text-indent: 2em;
}

.delivery-button {
  margin-top: 48px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.delivery-button>h4>a {
  color: rgba(0, 0, 0);
}

.delivery-button>img {
  width: 26px;
  color: rgba(2, 125, 255);
}

@media screen and (max-width: 1200px) {
  .join-team-container {
    padding: 48px 16px;
  }

}

@media screen and (max-width: 767px) {
  .content>h1 {
    font-size: 32px
  }

  .card-content>h2 {
    font-size: 16px;
  }

  .team-item-container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .team-item-intro-container {
    width: 100%;
    margin-bottom: 16px;
  }

  .team-intro-container>h1 {
    text-align: center;
    font-size: 28px;
  }

  .team-intro-container>h2 {
    font-size: 14px;
  }

  .company_introduce_wrap>h1 {
    font-size: 32px
  }


}

@media screen and (max-width: 480px) {


  .content>h1 {
    color: white;
    font-weight: 700;
    font-size: 18px
  }

  .card-content {
    margin: 8px 0;
    padding-bottom: 36px;
    width: calc(50% - 8px);
  }

  .card-list {
    flex-wrap: wrap;
    justify-content: space-between;

  }

  .company_introduce_wrap>h2 {
    font-size: 14px;
  }

  .company_introduce_wrap>h1 {
    font-size: 24px
  }

  .team-item {
    padding: 10px;
  }

  .team-item>h3 {
    font-size: 12px;
  }
}

@media screen and (max-width: 300px) {
  .team-intro-container>h1 {
    text-align: center;
    font-size: 20px;
  }
}</style>
