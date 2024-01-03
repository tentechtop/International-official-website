<template>
  <div class="help-page">
    <nav-header :title="$t('foot.helpCenter')"></nav-header>
    <!-- <custom-header-nav :custom-header-info="customHeaderInfo1"></custom-header-nav> -->
    <div class="help-container">
      <div class="search-bar">
        <kw-search-bar :btn="$t('help.Search')" v-model="inputQuestion" :placeholder="$t('help.PleaseEnterYourQuestion')" maxlength="64" @search="search"></kw-search-bar>
      </div>
      <div class="help-center-container">
        <div class="sidebar">
          <div v-for="(item, index) in menuList" class="sidebar-menu" :class="{ 'expand-menu': item.isExpand }"
            :style="{ height: item.isExpand ? (item.subMenu.length * 48) + 48 + 'px' : '48px' }">
            <div class="sidebar-menu-button" @click="goToExpand(item, index)">
              <h1>{{ item.title }}</h1>
              <img v-if="item.subMenu.length > 0" src="https://file.kwunphi.com/kwunphi4/images/commons/arrow-right.svg">
            </div>
            <div class="sub-menu-list"
              :style="{ height: item.isExpand ? (item.subMenu.length) * 48 + 'px' : '0px', opacity: item.isExpand ? '1' : '0' }">
              <div v-for="(sub, subIndex) in item.subMenu" class="sub-menu table"
                @click="changItemSelected(sub, index, subIndex)">
                <h1 :style="sub.isSelected ? 'color:#000;font-weight: 700;' : ''">{{ sub.name }}</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="help-list-container">
          <h6>{{ $t('help.numberOfResults',{num:filteredHelpList.length}) }} </h6>
          <div v-for="(item, index) in filteredHelpList" class="help-item-container" @click="goToDetail(item)">
            <h1>{{ index + 1 }}、{{ item.helpTitle }}</h1>
            <p>{{ item.text }}</p>
            <!-- <div class="like">
              <h2>{{ item.date }}</h2>
              <h2>点赞数量：{{item.likeNumber}}</h2>
            </div> -->
            <!-- <div class="split-line3"></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import helpList from "assets/js/help-list";
import { useI18n } from "vue-i18n";
const { t } = useI18n()
import comFunction from 'assets/ts/common-function'
const router = useRouter()
const route = useRoute()
const isExpand = ref(false)
const inputQuestion = ref("")
const currentPage = ref(1)
function goToDetail(item) {
  /*  router.push({path:"/help/Kwun-B33"})*/
}
watch(
  inputQuestion, (newVal) => {

  }
)
function goToExpand(item, index) {
  item.isExpand = !item.isExpand
  if (item.isExpand && index === 0) {
    inputQuestion.value = ""
  }
}
function changItemSelected(sub, index, subIndex) {
  const temp1 = menuList.value[index].subMenu[subIndex].isSelected
  const temp = sub.isSelected;
  menuList.value.forEach((item) => {
    item.subMenu.forEach((sub) => {
      sub.isSelected = false
    })
  })
  sub.isSelected = !temp;
  inputQuestion.value = sub.name
  if (sub.name !== "组件类型") {
    inputQuestion.value = sub.name
  } else {
    inputQuestion.value = "组件"
  }
  comFunction.scrollToTop()
}
const currentHelpList = ref([
  {
    "helpId": 1,
    "helpTitle": t('help.helpList[0].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[0].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 2,
    "helpTitle": t('help.helpList[1].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[1].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 3,
    "helpTitle": t('help.helpList[2].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[2].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 4,
    "helpTitle": t('help.helpList[3].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[3].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 5,
    "helpTitle": t('help.helpList[4].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[4].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 6,
    "helpTitle": t('help.helpList[5].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[5].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 7,
    "helpTitle": t('help.helpList[6].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[6].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 8,
    "helpTitle": t('help.helpList[7].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[7].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 9,
    "helpTitle": t('help.helpList[8].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[8].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 10,
    "helpTitle": t('help.helpList[9].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[9].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 11,
    "helpTitle": t('help.helpList[10].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[10].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 12,
    "helpTitle": t('help.helpList[11].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[11].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 13,
    "helpTitle": t('help.helpList[12].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[12].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 14,
    "helpTitle": t('help.helpList[13].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[13].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 15,
    "helpTitle": t('help.helpList[14].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[14].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 16,
    "helpTitle": t('help.helpList[15].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[15].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 17,
    "helpTitle": t('help.helpList[16].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[16].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 18,
    "helpTitle": t('help.helpList[17].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[17].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 19,
    "helpTitle": t('help.helpList[18].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[18].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 20,
    "helpTitle": t('help.helpList[19].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[19].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 21,
    "helpTitle": t('help.helpList[20].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[20].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 22,
    "helpTitle": t('help.helpList[21].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[21].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 23,
    "helpTitle": t('help.helpList[22].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[22].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 24,
    "helpTitle": t('help.helpList[23].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[23].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 25,
    "helpTitle": t('help.helpList[24].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[24].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 26,
    "helpTitle": t('help.helpList[25].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[25].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 27,
    "helpTitle": t('help.helpList[26].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[26].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 28,
    "helpTitle": t('help.helpList[27].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[27].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 29,
    "helpTitle": t('help.helpList[28].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[28].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 30,
    "helpTitle": t('help.helpList[29].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[29].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 31,
    "helpTitle": t('help.helpList[30].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[30].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 32,
    "helpTitle": t('help.helpList[31].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[31].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 33,
    "helpTitle": t('help.helpList[32].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[32].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 34,
    "helpTitle": t('help.helpList[33].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[33].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 35,
    "helpTitle": t('help.helpList[34].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[34].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 36,
    "helpTitle": t('help.helpList[35].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[35].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 37,
    "helpTitle": t('help.helpList[36].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[36].text'),
    "date": "2023-07-07",
    "likeNumber": 236
  },
  {
    "helpId": 38,
    "helpTitle": t('help.helpList[37].helpTitle'),
    "isSelected": false,
    "text": t('help.helpList[37].text'),
    "date": "2023-08-10",
    "likeNumber": 236
  }
])
const menuList  = ref([
  {
    title: t('help.menuList.menuItem0.title'),
    isExpand: false,
    subMenu: [],
  },
  {
    title: t('help.menuList.menuItem1.title'),
    isExpand: true,
    subMenu: [
      { name: t('help.menuList.menuItem1.subMenu.subMenuItem0.name'), isSelected: false, minorMenu: [] },
      { name: t('help.menuList.menuItem1.subMenu.subMenuItem3.name'), isSelected: false, minorMenu: [] },
    ],
  },
])
const filteredHelpList = computed(() => {
  return currentHelpList.value.filter((help) => {
    const keyword = inputQuestion.value.toLowerCase().trim();
    const titleContainsKeyword = help.helpTitle.toLowerCase().includes(keyword);
    const contentContainsKeyword = help.text.toLowerCase().includes(keyword);
    return titleContainsKeyword || contentContainsKeyword;
  });
});

function search(text: any) {
  inputQuestion.value = text
}

</script>


<style scoped>
.help-page {
  width: 100%;
}

.help-container {
  padding: 48px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.search-bar {
  border-bottom: 1px solid #b9b9b9;
  width: 100%;
  max-width: 1200px;
  padding: 48px 0;
  display: flex;
  justify-content: center;
}

.help-center-container {
  width: 100%;
  max-width: 1200px;
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.sidebar {
  background-color: #f0f0f0;
  width: 25%;
  min-width: 230px;
  height: calc(100vh - 64px);
  margin-right: 48px;
  padding: 16px;
  top: 64px;
  position: sticky;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.sidebar-menu {
  height: 48px;
  width: 100%;
  transition: height 0.3s ease;
  display: flex;
  flex-direction: column;
}

.sidebar-menu-button {
  z-index: 999;
  height: 48px;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: height 0.3s ease;
}

.sidebar-menu-button>h1 {
  color: #3a3a3a;
  font-size: 16px;
}

.sidebar-menu-button>img {
  transition: transform 0.2s ease;
  width: 20px;
  transform: rotate(0deg);
}

.expand-menu>.sidebar-menu-button>h1 {
  font-weight: 700;
}

.expand-menu>.sidebar-menu-button>img {
  transform: rotate(90deg);
}

.sub-menu-list {
  overflow: hidden;
  width: 100%;
  transition: height 0.3s ease, opacity 0.6s ease;
}

.sub-menu {
  cursor: pointer;
  padding-left: 32px;
  height: 48px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.sub-menu>h1 {
  font-size: 16px;
}

.help-list-container {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.help-list-container>h6 {
  color: #6a6a6a;
  margin-bottom: 8px;
  font-size: 12px;
}

.help-item-container {
  border-bottom: 1px solid #dcdcdc;
  padding: 16px 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  /* margin-bottom: 10px; */
  transition: background-color 0.1s ease;
}

.help-item-container:last-child {
  border-bottom: none;
}

.help-item-container>h1 {
  font-weight: 700;
  color: rgba(0, 0, 0, 0.95);
  font-size: 20px;
  margin-bottom: 8px;
}

.help-item-container>p {
  color: rgba(0, 0, 0, 0.75);
  font-size: 16px;
  word-break: break-all;
  margin-bottom: 8px;
}

.help-item-container>*:last-child {
  margin-bottom: 0;
}

.help-item-container>h2 {
  color: #6a6a6a;
  font-size: 15px;
  margin-bottom: 5px;
}

.like {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #909399;
}

.like>h2 {
  font-size: 16px;
}

.split-line3 {
  opacity: 0.3;
  width: 100%;
  height: 1px;
  background-color: #303233;
}

@media screen and (max-width: 767px) {
  .search-bar {
    padding-top: 0;
  }

  .sidebar {
    display: none;
  }

  /*   .help-list-container {
    width: 100%;
  } */
}
</style>























