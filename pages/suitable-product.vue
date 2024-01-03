<template>
  <div class="help-choose">
    <!-- 测试适合的产品 -->
    <!-- <custom-header-nav :custom-header-info="customHeaderInfo"></custom-header-nav> -->
    <nav-header :title="$t('foot.helpMeChoose')" :menus="headerMenus"></nav-header>
    <div class="help-choose-wrapper">
      <div v-if="showTip" class="notification">
        <p>{{ $t('helpMeChoose.PleaseSelectAtLeastOneOption') }}</p>
      </div>
      <div class="question-wrapper">
        <progress-bar :max="quList.length" :value="quIndex + 1"></progress-bar>
        <h1>{{ $t(quList[quIndex].quContent) }}</h1>
        <h2>{{ $t(filterQuType[quList[quIndex].quType - 1].desc) }}</h2>
        <div class="option-container">
          <div v-if="quList[quIndex].isImageQu" class="question-option-list">
            <div v-for="(item, index) in quList[quIndex].quAnswer" class="question-option"
              :class="{ 'option-checked': item.isSelected }"
              @click="quList[quIndex].quType === 1 ? changSelected(index) : changSelected1(index)">
              <kw-image class="option-image" :src="item.imgUrl" scale="true"></kw-image>
              <div class="option-text">
                <h2>{{ $t(item.content) }}</h2>
                <div class="option-radio" :class="{ 'multi': quList[quIndex].quType === 2 }"></div>
              </div>
            </div>
          </div>
          <div v-else class="question-option-list2">
            <div v-for="(item, index) in quList[quIndex].quAnswer" class="question-option"
              :class="{ 'option-checked': item.isSelected }"
              @click="quList[quIndex].quType === 1 ? changSelected(index) : changSelected1(index)">
              <div class="option-radio" :class="{ 'multi': quList[quIndex].quType === 2 }"></div>
              <h2>{{ $t(item.content) }}</h2>
            </div>
          </div>
        </div>
        <div class="button-space">
          <div v-if="showPrevious" class="select-button previous" @click="handPrevious()">
            <p>{{ $t('helpMeChoose.Previous') }}</p>
          </div>
          <div v-if="showNext" class="select-button next" @click="handNext()">
            <p>{{ $t('helpMeChoose.Next') }}</p>
          </div>
          <div v-if="complete" class="select-button next result" @click="getResult()">
            <p>{{ $t('helpMeChoose.ViewResults') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n()
const localePath = useLocalePath();
const scrollToTop = () => {
  const duration = 500; // 滚动持续时间（毫秒）
  const startPosition = window.scrollY;
  const startTime = performance.now();

  const animateScroll = (timestamp) => {
    const currentTime = timestamp - startTime;
    const progress = Math.min(currentTime / duration, 1);
    const easeProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI);
    window.scrollTo(0, startPosition - easeProgress * startPosition);
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };
  requestAnimationFrame(animateScroll);
};


// 定义局部过滤器函数
const filterQuType = ref([{
  desc: "helpMeChoose.SelectOne",
}, {
  desc: "helpMeChoose.SelectMultiple",
}, {
  desc: "helpMeChoose.SelectOne",
}
]);
const quIndex = ref(0);
const router = useRouter()
watch(quIndex, (newValue, oldValue) => {
  myArray.value = []
  if (newValue > 0) {
    showPrevious.value = true;
  } else {
    showPrevious.value = false;
  }
  if (newValue === quList.value.length - 1) {
    showPrevious.value = true;
    showNext.value = false
    complete.value = true
  } else {
    showNext.value = true
    complete.value = false
  }
});
const quAnswerMap = ref(new Map());

const showTip = ref(false);

const showPrevious = ref(false);

const complete = ref(false);

const showNext = ref(true);

// 计算宽度的计算属性
function calculatedWidth(len) {
  const width = 100 / len
  return `${width}%`
}

let nextTipTimer

function clearNextTipTimer() {
  if (nextTipTimer) {
    try {
      window.clearTimeout(nextTipTimer)
      nextTipTimer = null
    } catch (e) {
    }
  }
}

function getResult() {
  const question = quList.value[quIndex.value]
  if (question.quType === 2) {
    const chooseArray = [];
    question.quAnswer.forEach(item => {
      if (item.isSelected) {
        chooseArray.push(item.quAnswerId)
      }
    });
    if (chooseArray.length === 0) {
      question.isAnswered = false
    } else {
      question.isAnswered = true
    }
  }
  const quId = question.quId
  const isCompleteQuestion = question.isAnswered
  clearNextTipTimer()
  if (isCompleteQuestion) {
    const resultList = [];
    for (let i = 1; i <= quAnswerMap.value.size; i++) {
      resultList.push(quAnswerMap.value.get(i))
    }
    window.sessionStorage.setItem("chooseResult", resultList)
    router.push({ path: localePath('suitable-result') });
  } else {
    showTip.value = true
    nextTipTimer = setTimeout(() => {
      // 一段时间后关闭提示框
      showTip.value = false
    }, 1000);
  }

}


function handNext() {
  const question = quList.value[quIndex.value]
  if (question.quType === 2) {
    const chooseArray = [];
    question.quAnswer.forEach(item => {
      if (item.isSelected) {
        chooseArray.push(item.quAnswerId)
      }
    });
    question.isAnswered = chooseArray.length !== 0
  }
  const quId = question.quId
  clearNextTipTimer()
  if (question.isAnswered) {
    quIndex.value = quIndex.value + 1;
    showPrevious.value = true
  } else {
    showTip.value = true
    nextTipTimer = setTimeout(() => {
      // 一段时间后关闭提示框
      showTip.value = false
    }, 1000);
  }
  scrollToTop()
}

function handPrevious() {
  let i = quIndex.value - 1
  if (i < 0) {
    i = 0
  }
  quIndex.value = i
  scrollToTop()
}

function changSelected(index) {
  // console.error(quList.value, quIndex.value, index)
  const question = quList.value[quIndex.value]
  const answer = question.quAnswer[index]
  const quId = question.quId
  const quAnswerId = answer.quAnswerId
  const temp = answer.isSelected
  question.quAnswer.forEach(item => {
    item.isSelected = false;
  });
  // 设置当前选中项的样式
  answer.isSelected = !temp;
  if (answer.isSelected) {
    question.isAnswered = true;
    if (question.quType === 1) {
      quAnswerMap.value.set(quId, [quAnswerId]);
    }
  } else {
    question.isAnswered = false;
    quAnswerMap.value.set(quId, []);
  }
}
const myArray = ref([]);
function changSelected1(index) {
  const question = quList.value[quIndex.value]
  const answer = question.quAnswer[index]

  const quId = question.quId
  const quAnswerId = answer.quAnswerId
  // 设置当前选中项的样式
  answer.isSelected = !answer.isSelected;

  if (answer.isSelected) {
    myArray.value.splice(index, 0, quAnswerId); // 在第三个位置插入元素
    quAnswerMap.value.set(quId, myArray)
  } else {
    myArray.value.splice(index, 1); // 删除指定位置的元素
  }

  question.isAnswered = myArray.value.length !== 0;
}

const headerMenus = [
  { text: `${t('foot.helpMeChoose')}` }
]


const quList = ref([
  {
    quId: 1,
    // 1为单选，2为多选
    quType: 1,
    quContent: "helpMeChoose.qu.ImportantScenes",
    isImageQu: true,//全部带图片的意思，因为排版不一样
    isAnswered: false,
    quAnswer: [
      {
        quId: 1,
        quAnswerId: 1,
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/scene/01.jpg?x-oss-process=image/resize,m_mfit,w_800,h_400",
        content: "helpMeChoose.qu.ImportantScenesAnswer.commercialAndIndustrialRoofing",
        isSelected: false,
      },
      {
        quId: 1,
        quAnswerId: 2,
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/scene/02.jpg?x-oss-process=image/resize,m_mfit,w_800,h_400",
        content: "helpMeChoose.qu.ImportantScenesAnswer.houseRoof",
        isSelected: false,
      },
      {
        quId: 1,
        quAnswerId: 3,
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/scene/03.jpg?x-oss-process=image/resize,m_mfit,w_800,h_400",
        content: "helpMeChoose.qu.ImportantScenesAnswer.farmland",
        isSelected: false,
      },
      {
        quId: 1,
        quAnswerId: 4,
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/scene/04.jpg?x-oss-process=image/resize,m_mfit,w_800,h_400",
        content: "helpMeChoose.qu.ImportantScenesAnswer.pool",
        isSelected: false,
      },
      {
        quId: 1,
        quAnswerId: 5,
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/scene/05.jpg?x-oss-process=image/resize,m_mfit,w_800,h_400",
        content: "helpMeChoose.qu.ImportantScenesAnswer.mountain",
        isSelected: false,
      },
      {
        quId: 1,
        quAnswerId: 6,
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/scene/06.jpg?x-oss-process=image/resize,m_mfit,w_800,h_400",
        content: "helpMeChoose.qu.ImportantScenesAnswer.floating",
        isSelected: false,
      },
      {
        quId: 1,
        quAnswerId: 7,
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/scene/07.png?x-oss-process=image/resize,m_mfit,w_800,h_400",
        content: "helpMeChoose.qu.ImportantScenesAnswer.shingled",
        isSelected: false,
      },
      {
        quId: 1,
        quAnswerId: 8,
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/scene/08.jpg?x-oss-process=image/resize,m_mfit,w_800,h_400",
        content: "helpMeChoose.qu.ImportantScenesAnswer.solarTracker",
        isSelected: false,
      },
      {
        quId: 1,
        quAnswerId: 9,
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/scene/5.png?x-oss-process=image/resize,m_mfit,w_800,h_400",
        content: "helpMeChoose.qu.ImportantScenesAnswer.ground",
        isSelected: false,
      },

    ]
  },
  {
    quId: 2,
    quType: 1,
    isImageQu: true,
    quContent: "helpMeChoose.qu.PVModulesInclinationAngle",
    isAnswered: false,
    quAnswer: [
      {
        quAnswerId: 10,
        quId: 2,
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/commons/angle10.png?x-oss-process=image/resize,m_mfit,w_800,h_400",
        content: "helpMeChoose.qu.PVModulesInclinationAngleAnswer.LessThanTenDegrees",
        isSelected: false,
      },
      {
        quAnswerId: 11,
        quId: 2,
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/commons/angle15.png?x-oss-process=image/resize,m_mfit,w_800,h_400",
        content: "helpMeChoose.qu.PVModulesInclinationAngleAnswer.LessThanFifteenDegrees",
        isSelected: false,
      },
      {
        quAnswerId: 12,
        quId: 2,
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/commons/angle35.png?x-oss-process=image/resize,m_mfit,w_800,h_400",
        content: "helpMeChoose.qu.PVModulesInclinationAngleAnswer.LessThanThirtyFiveDegrees",
        isSelected: false,
      },
    ]
  },
  {
    quId: 3,
    quType: 1,
    isImageQu: true,
    quContent: "helpMeChoose.qu.EfficientOrConvenient",
    isAnswered: false,
    quAnswer: [
      {
        quId: 3,
        quAnswerId: 13,
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/commons/portable.png?x-oss-process=image/resize,m_mfit,w_800,h_400",
        content: "helpMeChoose.qu.EfficientOrConvenientAnswer.LightweightType",
        isSelected: false,
      },
      {
        quId: 3,
        quAnswerId: 14,
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/commons/highly-efficient.png?x-oss-process=image/resize,m_mfit,w_800,h_400",
        content: "helpMeChoose.qu.EfficientOrConvenientAnswer.EfficientType",
        isSelected: false,
      },
    ]
  },
]);
</script>

<style scoped>
.help-choose {
  background-color: #F5F5F5;
}

.help-choose-wrapper {
  padding: 96px 16px;
}

.question-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.steps-slider {
  width: 20%;
}

.question-wrapper>h1 {
  margin-top: 48px;
  font-weight: 700;
  color: #3a3a3a;
}

.question-wrapper>h2 {
  margin-top: 16px;
  color: #666;
}

.option-container {
  width: 100%;
}

.question-option-list {
  max-width: 960px;
  margin: 32px auto 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
}


.question-option-list .question-option {
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  cursor: pointer;
  width: calc(33.333% - 32px);
  margin: 32px 16px 0;
  overflow: hidden;
  object-fit: cover;
}

.question-option:hover>* {
  color: rgba(0, 122, 255, 0.7);
}

.question-option.option-checked>* {
  font-weight: 700;
  color: #027eff;
}


.option-image {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.option-image>img {
  width: 100%;
  object-fit: cover;
  /* position: absolute;
  left: 0; */
}

.option-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 24px;
}

.option-text>h2 {
  text-align: center;
  margin: 16px 8px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;
}

.question-option-list2 {
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.question-option-list2 .question-option {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  width: 100%;
  max-width: 480px;
  min-height: 48px;
  margin-bottom: 16px;
  padding: 5px 16px 5px 32px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  object-fit: cover;
}

.question-option-list2 .question-option>h2 {
  font-size: 20px;
  margin-left: 16px;
  /* color: #3a3a3a; */
  flex: 1;
}


.option-radio {
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #3a3a3a;
  background-color: white;
}

.option-checked .option-radio {
  border: 5px solid #027eff;
}

.option-radio.multi {
  border-radius: 3px;
}

.button-space {
  min-width: 360px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.notification {
  border: 1px solid #1144FF;
  position: fixed;
  right: 0px;
  top: 120px;
  z-index: 998;
  padding: 12px 64px;
  background-color: white;
}

.notification>p {}

.select-button {
  cursor: pointer;
  padding: 10px 36px;
  border: 1px solid #1122FF;
  border-radius: 50px;
}

.select-button>p {
  color: black;
}

.previous {
  margin-right: 30px;
  border-color: #EBEBEB;
  background-color: #EBEBEB;
  color: rgba(0, 0, 0, 0.75);
}

.previous:hover {
  margin-right: 30px;
  border-color: #b6b2b2;
  background-color: #b6b2b2;
}

.next {
  background-color: #2936dc;
}

.next:hover {
  background-color: #1c26ab;
}

.next>p {
  color: white;
}

.result {
  margin-left: 30px;
}

@media screen and (max-width: 767px) {
  .help-choose-wrapper {
    padding: 64px 16px 48px;
  }

  .steps-slider {
    width: 50%;
  }

  .question-wrapper>h1 {
    font-size: 20px;
  }

  .question-wrapper>h2 {
    font-size: 16px;
  }

  .question-option-list {
    margin-top: 16px;
  }

  .question-option-list .question-option {
    width: calc(50% - 32px);
  }
}

@media screen and (max-width: 480px) {
  .steps-slider {
    width: 100%;
  }

  .question-wrapper>h1 {
    width: 100%;
    font-size: 18px;
  }

  .question-wrapper>h2 {
    width: 100%;
    font-size: 14px;
  }

  .question-option-list {
    margin-left: -8px;
    margin-right: -8px;
  }

  .question-option-list .question-option {
    width: calc(50% - 16px);
    margin: 8px;
  }

  .option-text {
    padding-bottom: 16px;
  }

  .option-text>h2 {
    font-size: 16px;
    margin: 8px;
  }
}</style>
