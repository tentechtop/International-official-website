<template>
  <div class="aboutus-page">
    <!-- <div class="banner-container">
      <img src="https://file.kwunphi.com/kwunphi4/images/commons/about.png">
    </div> -->
    <kw-image class="banner-container" src="https://file.kwunphi.com/kwunphi4/images/commons/about.png"></kw-image>

    <div class="aboutus-container">
      <h1>{{ $t('aboutUs.aboutUs') }}</h1>


      <div class="nav-container">
        <ul>
          <li @click="scrollToAnchor"><a href="#company">{{ $t('aboutUs.introduction') }}</a></li>
          <li class="divider">|</li>
          <li @click="scrollToAnchor"><a href="#milestones">{{ $t('aboutUs.milestones') }}</a></li>
          <li class="divider">|</li>
          <li @click="scrollToAnchor"><a href="#values-vision">{{ $t('aboutUs.valuesVision') }}</a></li>
          <li class="divider">|</li>
          <li @click="scrollToAnchor"><a href="#global">{{ $t('aboutUs.GlobalPresence') }}</a></li>
        </ul>
      </div>

      <div id="company" class="company-container intro-card">
        <div class="intro-container">
          <div class="intro-title">
            <h2>{{ $t('aboutUs.introduction') }}</h2>
          </div>
          <div class="intro-wrapper">
            <p>{{ $t('aboutUs.desc.desc1') }}</p>
            <br>
            <p>{{ $t('aboutUs.desc.desc2') }}</p>
            <br>
            <p>{{ $t('aboutUs.desc.desc3') }}</p>
            <br>
            <p>{{ $t('aboutUs.desc.desc4') }}</p>
          </div>
        </div>
      </div>

      <div id="milestones" class="milestones intro-card">
        <div class="intro-container">
          <div class="intro-title">
            <h2>{{ $t('aboutUs.milestones') }}</h2>
          </div>
          <div class="intro-wrapper">
            <div class="milestone-list" :style="{ 'height': milestoneHeight==='0px'? '415px':milestoneHeight }">
              <div v-for="(milestone, index) in options" ref="milestoneItem" class="milestone-item">
                <!-- :class="{ 'milestone-item-hidden': !isExpand && index == 5 }"> -->
                <img src="https://file.kwunphi.com/kwunphi4/images/commons/badge.svg">
                <div>
                  <p>{{ $t(milestone.content) }}</p>
                  <p class="milestone-meta">{{ $t(milestone.label) }}</p>
                </div>
              </div>
            </div>
            <div class="btns-bar">
              <div class="btn-expand" @click="expandMoreMilestone">
                <h1>{{ isExpand ? $t('aboutUs.hide') : $t('aboutUs.Expand') }}</h1>
                <img :style="{ transform: isExpand ? 'rotate(-90deg)' : 'rotate(90deg)' }"
                     src="https://file.kwunphi.com/kwunphi4/images/commons/arrow-right.svg">
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="values-vision" class="values-vision intro-card">
        <div class="intro-container">
          <div class="intro-title">
            <h2>{{ $t('aboutUs.valuesVision') }}</h2>
          </div>

          <div class="intro-wrapper">
            <div class="values-vision-container">
              <div class="values-vision-item">
                <h2>{{ $t('aboutUs.values') }}</h2>
                <p>{{ $t('aboutUs.ReverenceForNature') }}</p>
                <p>Reverence for nature and veneration for Science，Keep wondering universal nature.</p>
              </div>
              <div class="values-vision-item">
                <h2>{{ $t('aboutUs.vision') }}</h2>
                <p>{{ $t('aboutUs.InnovativeTechnology') }}</p>
                <p>Embrace the bright future of the fourth space technology with innovative technology.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="global" class="global intro-card">
        <div class="intro-container">
          <div class="intro-title">
            <h2>{{ $t('aboutUs.GlobalPresence') }}</h2>
          </div>
          <div class="intro-wrapper">
            <kw-global-map class="global-map-container"></kw-global-map>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "aboutUsView",
  data() {
    return {
      list1: ['关于我们', '企业文化', '发展历程'],
      containerItems: [],
      selectedMenuItem: 1,
      isExpand: false,
      isBreathing: false,
      milestoneHeight: '415px',
      "options":
          [
            {
              "label": "aboutUs.milestoneList.milestoneItem17.label",
              "content": "aboutUs.milestoneList.milestoneItem17.content"
            },
            {
              "label": "aboutUs.milestoneList.milestoneItem16.label",
              "content": "aboutUs.milestoneList.milestoneItem16.content"
            },
            {
              "label": "aboutUs.milestoneList.milestoneItem15.label",
              "content": "aboutUs.milestoneList.milestoneItem15.content"
            },
            {
              "label": "aboutUs.milestoneList.milestoneItem14.label",
              "content": "aboutUs.milestoneList.milestoneItem14.content"
            },
            {
              "label": "aboutUs.milestoneList.milestoneItem13.label",
              "content": "aboutUs.milestoneList.milestoneItem13.content"
            },
            {
              "label": "aboutUs.milestoneList.milestoneItem12.label",
              "content": "aboutUs.milestoneList.milestoneItem12.content"
            },
            {
              "label": "aboutUs.milestoneList.milestoneItem11.label",
              "content": "aboutUs.milestoneList.milestoneItem11.content"
            },
            {
              "label": "aboutUs.milestoneList.milestoneItem10.label",
              "content": "aboutUs.milestoneList.milestoneItem10.content"
            },
            {
              "label": "aboutUs.milestoneList.milestoneItem9.label",
              "content": "aboutUs.milestoneList.milestoneItem9.content"
            },
            {
              "label": "aboutUs.milestoneList.milestoneItem8.label",
              "content": "aboutUs.milestoneList.milestoneItem8.content"
            },
            {
              "label": "aboutUs.milestoneList.milestoneItem7.label",
              "content": "aboutUs.milestoneList.milestoneItem7.content"
            },
            {
              "label": "aboutUs.milestoneList.milestoneItem6.label",
              "content": "aboutUs.milestoneList.milestoneItem6.content"
            },
            {
              "label": "aboutUs.milestoneList.milestoneItem5.label",
              "content": "aboutUs.milestoneList.milestoneItem5.content"
            },
            {
              "label": "aboutUs.milestoneList.milestoneItem4.label",
              "content": "aboutUs.milestoneList.milestoneItem4.content"
            },
            {
              "label": "aboutUs.milestoneList.milestoneItem3.label",
              "content": "aboutUs.milestoneList.milestoneItem3.content"
            },
            {
              "label": "aboutUs.milestoneList.milestoneItem2.label",
              "content": "aboutUs.milestoneList.milestoneItem2.content"
            },
            {
              "label": "aboutUs.milestoneList.milestoneItem1.label",
              "content": "aboutUs.milestoneList.milestoneItem1.content"
            }
          ]
    };
  },
  mounted() {
    this.expandMoreMilestone(false)
    window.addEventListener('resize', this.initMoreMilestone)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.initMoreMilestone)
  },
  head() {
    return {
      title: this.$t('foot.about'),
      meta: [
        { hid: 'keywords', name: 'keywords', content: this.$t('seo.pages.about.keywords') },
        { hid: 'description', name: 'description', content: this.$t('seo.pages.about.description') }
      ],
    }
  },
  methods: {
    scrollToAnchor(event) {
      event.preventDefault();
      const target = event.target.getAttribute('href');
      const element = document.querySelector(target);
      if (element) {
        let navOffsetHeight = document.documentElement.clientWidth < 768 ? 50 : 64
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - navOffsetHeight
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    },
    initMoreMilestone() {
      this.expandMoreMilestone(this.isExpand)
    },
    expandMoreMilestone(open) {
      if (typeof open === 'boolean') {
        this.isExpand = open
      } else {
        this.isExpand = !this.isExpand
      }

      let milestoneItemList = this.$refs['milestoneItem']
      if (milestoneItemList && milestoneItemList.length <= 5) {
        this.milestoneHeight = "415px"

        return
      }
      let pos = this.isExpand ? (milestoneItemList.length - 1) : 4
      let element = milestoneItemList[pos]
      let height = element.offsetTop + element.offsetHeight

      this.milestoneHeight = isNaN(height) ? '415px' : (height + 'px')
    }
  }
};

</script>

<style scoped>
.aboutus-page {
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
  overflow-x: hidden;
}

.banner-container {
  width: 100%;
  height: 560px;
  position: relative;
}

.aboutus-container {
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 96px;
  position: relative;
}

.aboutus-container>h1 {
  text-align: center;
  font-weight: 700;
}

.nav-container {
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
}

.nav-container>ul {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.nav-container>ul>li {
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
}

.nav-container>ul>li.divider {
  margin: 0 16px;
}

.nav-container>ul>li>a {
  color: black;
  display: inline-block;
  padding: 8px 0;
}

.nav-container>ul>li>a:hover {
  color: rgba(2, 125, 255);
}

.intro-card {
  width: 100%;
  padding: 48px 16px;
  display: flex;
  justify-content: center;
  transition: height 0.3s ease;
  position: relative;
  /* overflow: hidden; */
}

.anchor {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background-color: red;
}

.intro-container {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.intro-title {
  width: 220px;
  margin-right: 16px;
}

.intro-title>h2 {
  font-weight: 700;
}

.intro-wrapper {
  flex: 1;
  transition: height 0.3s ease;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
}

.intro-wrapper>p {
  max-width: 800px;
  color: #303233;

}

.milestones {
  background-color: #F4F7F8;
}

.milestone-list {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.milestone-item {
  max-width: 800px;
  width: 100%;
  min-height: 50px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.milestone-item:last-child {
  margin-bottom: 0;
}

.milestone-item>img {
  width: 48px;
  margin-right: 8px;
}

.milestone-item p {
  font-size: 16px;
  line-height: 1.5;
}

p.milestone-meta {
  margin-top: 3px;
  font-size: 14px;
  color: #999;
}

.btns-bar {
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.btn-expand {
  height: 44px;
  padding: 0 48px;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.btn-expand:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.btn-expand>h1 {
  color: rgba(0, 0, 0, 0.75);
  font-size: 20px;
  line-height: 1.5;
  margin-right: 5px;
}

.btn-expand>img {
  transition: all 0.2s ease;
  width: 30px;
}

.values-vision {
  background-image: url("https://file.kwunphi.com/kwunphi4/images/commons/prospect.png?x-oss-process=image/resize,m_mfit,w_512,h_512");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 144px 16px;
}

.values-vision-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}

.values-vision-item {
  flex: 1;
  margin-right: 16px;
}

.values-vision-item:last-child {
  margin-right: 0;
}

.values-vision-item>h2 {
  margin-bottom: 24px;
}

.values-vision-item>p {
  /* color: #5a5a5a; */
  margin-bottom: 8px;
  opacity: 0.85;
}

.values-vision-item>p:last-child {
  margin-bottom: 0;
}

.global .intro-container {
  flex-direction: column;
}

.global .intro-title {
  width: 100%;
  margin-bottom: 24px;
}

@media screen and (max-width: 1023px) {
  .banner-container {
    height: 32vw;
    min-height: 108px;
  }
}

@media screen and (max-width: 767px) {
  .aboutus-container {
    margin-top: 48px;
  }

  .nav-container {
    margin-top: 24px;
  }

  .nav-container>ul>li {
    font-size: 16px;
  }

  .nav-container>ul>li.divider {
    margin: 0 8px;
  }

  .intro-container {
    flex-direction: column;
  }

  .global .intro-title,
  .intro-title {
    width: 100%;
    margin: 0 0 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e9e9eb;
  }

  .btns-bar {
    justify-content: center;
  }

  .btn-expand {
    width: 100%;
  }

  .values-vision {
    padding: 48px 16px;
  }
}


@media screen and (max-width: 480px) {

  .nav-container {
    margin-top: 16px;
  }

  .nav-container>ul>li {
    font-size: 14px;
  }

  .nav-container>ul>li.divider {
    margin: 0 5px;
  }
}
</style>
