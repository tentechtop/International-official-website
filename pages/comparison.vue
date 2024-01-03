<template>
  <div class="container">
    <div class="comparison-banner-container">
      <div class="banner-content">
        <h1>{{ $t('foot.productComparison') }}</h1>
        <h2>{{ $t('kwun.whichKwunIsRightForYou') }}</h2>


        <nuxt-link :to="localePath('/suitable-product')">
          <kw-button width="180" height="40px" color="rgba(2,100,255)" over-color="rgba(2,50,255)"
            press-color="rgba(255,255,255,0.5)" style="margin-top: 10px;color: white">
            <h1 style="color: rgba(255,255,255);font-size: 15px">{{ $t('foot.helpMeChoose') }}</h1>
          </kw-button>
        </nuxt-link>

      </div>
    </div>
    <div class="sticky-select-table" :class="{ 'select-table-show': isExpandList[currentIndex] }">
      <div class="sticky-select-container">
        <div v-for="(card, CIndex) in productSelectList" class="sticky-product-select-item"
          :class="{ 'active-item': isExpandList[currentIndex] }"
          @click="setCardSelect(CIndex); changSlot(CIndex); isExpandList[currentIndex] = false">
          <img :src="card.productImgUrl">
          <h1>{{ $t(card.productName) }}</h1>
        </div>
      </div>
<!--      <div class="close-sticky-select-table-container">
        <div class="close-button" @click="isExpandList[currentIndex] = false">
          <img src="https://file.kwunphi.com/kwunphi4/images/commons/cuowu.svg">
        </div>
      </div>-->
    </div>
    <div class="select-product">
      <div class="hide-same-content">
        <div :class="!hideSameProperty ? 'select-button' : 'button-selected'" @click="setHideSameProperty">
        </div>
        <h1>{{ $t('comparison.HideSameProperty') }}</h1>
      </div>
      <div v-for="(item, index) in productSlots" class="selected-product-container"
        :class="{ 'container-hide': index >= maxDisplayNumber }">
        <div class="input-container" @click="getSelectInput(index)">
          <h1>{{ $t(item.model) }}</h1>
          <img :style="isExpandList[index] ? 'transform: rotate(180deg)' : ''"
            src="https://file.kwunphi.com/kwunphi4/images/commons/caret-down.svg">
        </div>
        <div class="split-line"></div>
        <div class="product-img-container">
          <kw-image class="product-img" :src="item.productImgUrl" fit="contain"></kw-image>
        </div>
        <div class="split-line"></div>
        <div class="buy-button-container">
<!--          <h2>{{ $t('productSellPrice', { price: locale==='zh' || locale==='zh-CN' ? item.price : item.priceUS }) }}</h2>-->

          <div class="button-content">

<!--            <nuxt-link :to="item.purchaseRouter">
              <div class="buy-button">
                <p>{{ $t('purchaseNow') }}</p>
              </div>
            </nuxt-link>-->

          </div>
        </div>
        <div class="select-table" :class="isExpandList[index] ? 'expand' : ''" @mouseleave="isExpandList[index] = false">
          <div v-for="(card, CIndex) in productSelectList" class="product-select-item"
            :class="{ 'item-selected': card.isSelect, 'enable-select': !card.enableSelect }"
            @click="setCardSelect(CIndex); changSlot(CIndex); isExpandList[index] = false">
            <img :src="card.productImgUrl">
            <h1>{{ $t(card.productName) }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="comparison-container">
      <div v-for="(menu, i) in menuList" :id="menu.href" class="specs-comparison" :style="i % 2 === 0 ? '' : ''">
        <div class="specs-title-container">
          <h1>{{ $t(productSlots[0].specs[i].title) }}</h1>
        </div>
        <div v-for="(item, index) in productSlots" class="product-specs-comparison-item"
          :class="{ 'container-hide': index >= maxDisplayNumber }">
          <div v-for="(spec, index) in item.specs[i].parameters" class="specs-item">
            <p v-if="spec.name && !spec.value">{{ $t(spec.name) }}</p>
            <p v-if="!spec.name && spec.value">{{ $t(spec.value) }}</p>
            <p v-if="spec.name && spec.value">{{ $t(spec.name) }}:{{ $t(spec.value) }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="directory-container">
      <div class="directory-table" :class="{ 'directory-table-show': directoryShow }" @mouseleave="directoryShow = false">
        <ul v-if="directoryShow">
          <li style="margin-left: 20px">{{ $t('comparison.QuickNavBar') }}</li>
          <div class="split-line"></div>
          <li v-for="(item, index) in menuList" @click="scrollToAnchor"><a :href="'#' + item.href">{{ $t(item.name) }}</a>
          </li>
        </ul>
      </div>
      <div class="directory-button" @click="getDirectory" :class="{ 'show-directory-button': directoryShow }">
        <img
          :src="directoryShow ? 'https://file.kwunphi.com/kwunphi4/images/commons/cuowu.svg' : '/images/mulutubiao.svg'">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, onMounted, getCurrentInstance,onUnmounted ,watch} from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n()
import productSpecs from "assets/js/product/product-specs";
const screenWidth = ref(0); // Initialize screenWidth with 0
const maxDisplayNumber = ref(3)

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

// Watch screenWidth and apply logic when it changes
watch(screenWidth, (width) => {
  if (width > 1200) {
    maxDisplayNumber.value = 3
  } else if (width < 1024 && width >= 768) {
    maxDisplayNumber.value = 2
  } else if (width < 768 && width >= 430) {
    maxDisplayNumber.value = 2
  } else if (width < 430) {
    maxDisplayNumber.value = 2
  }
});

const currentIndex = ref(0);

const directoryShow = ref(false);

const hideSameProperty = ref(false)

const showSelectInput = ref(false)

const isExpandList = ref([false, false, false])
// @ts-ignore
watch(isExpandList.value, (newVal) => {
  openOrCloseDialog(isExpandList.value[currentIndex.value])

})

function openOrCloseDialog(newVal) {
  if (newVal) {
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = getScrollbarWidth() + 'px';
  } else {
    document.body.style.overflowY = 'auto';
    document.body.style.paddingRight = '0';
  }
}


function getScrollbarWidth() {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.width = '100px';
  scrollDiv.style.height = '100px';
  scrollDiv.style.overflow = 'scroll';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
const showTip = ref(false)

const buttonIsClick = ref(false)

function setHideSameProperty() {
  hideSameProperty.value = !hideSameProperty.value
  showTip.value = !showTip.value
}

watch(showTip, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      showTip.value = false
    }, 2000)
  }
})

const menuList = ref([
  { name: "productSpecs.technology.title", href: "core-technology" },
  { name: "productSpecs.lifeAndEndurance.title", href: "battery-life" },
  { name: "productSpecs.abilityToClean.title", href: "cleaning-ability" },
  { name: "productSpecs.shape.title", href: "shape" },
  { name: "productSpecs.manipulation.title", href: "control" },
  { name: "productSpecs.security.title", href: "security" },
])

function changSlot(index) { }
const myMap = reactive(new Map());

function setCardSelect(index) {
  const temp = productSelectList.value[index].isSelect
  productSelectList.value.forEach((item) => {
    item.isSelect = false
  });
  productSelectList.value[index].isSelect = !temp;
  myMap.set(currentIndex.value, productSelectList.value[index])
  // console.error(productSelectList.value[index])
}

watch(hideSameProperty, (newValue) => {
  if (newValue) {
    menuList.value = [
      { name: "productSpecs.lifeAndEndurance.title", href: "battery-life" },
      { name: "productSpecs.abilityToClean.title", href: "cleaning-ability" },
      { name: "productSpecs.shape.title", href: "shape" },
      { name: "productSpecs.manipulation.title", href: "control" },
    ]
  } else {
    menuList.value = [
      { name: "productSpecs.technology.title", href: "core-technology" },
      { name: "productSpecs.lifeAndEndurance.title", href: "battery-life" },
      { name: "productSpecs.abilityToClean.title", href: "cleaning-ability" },
      { name: "productSpecs.shape.title", href: "shape" },
      { name: "productSpecs.manipulation.title", href: "control" },
      { name: "productSpecs.security.title", href: "security" },
    ]
  }
})

watch(myMap, (newValue) => {
  productSlots.value[currentIndex.value] = myMap.get(currentIndex.value)
})

/*产品比较的槽位 三个槽位*/
const productSlots = ref(
  [productSpecs.productSpecsMap.get('Kwun-B33H'),
  productSpecs.productSpecsMap.get('Kwun-B22H'),
  productSpecs.productSpecsMap.get('Kwun-B11L')]
);

/*下拉菜单选择列表--》产品列表*/
const productSelectList = ref(productSpecs.productSpecs)

onMounted(() => {
  updateScreenWidth(); // Initialize screenWidth with the current window width
  window.addEventListener('resize', updateScreenWidth);

  // 获取存储在sessionStorage中的数据并解析为数字数组
  const tagParam = window.sessionStorage.getItem("ComparisonResultList");
  if (tagParam) {
    const tagParam = window.sessionStorage.getItem("ComparisonResultList");
    if (tagParam) {
      const stringArray = tagParam.split(',');
      let j = 0
      for (let i = 0; i < stringArray.length; i++) {
        if (productSpecs.productSpecsMap.get(stringArray[i])) {
          productSlots.value[j] = productSpecs.productSpecsMap.get(stringArray[i])
          j++
        }
      }
      /* let productArr = []
      for (let i = 0; i < stringArray.length; i++) {
        if (productSpecs.productSpecsMap.get(stringArray[i])) {
          productArr.push(productSpecs.productSpecsMap.get(stringArray[i]))
        }
      }
      productSlots.value = productArr */
    }
  } else {

  }
})
onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
function getSelectInput(index) {
  const temp = isExpandList.value[index]
  isExpandList.value[0] = false
  isExpandList.value[1] = false
  isExpandList.value[2] = false
  isExpandList.value[index] = !isExpandList.value[index]
  currentIndex.value = index
}
function getDirectory() {
  directoryShow.value = !directoryShow.value
}
function scrollToAnchor(event) {
  event.preventDefault();
  const target = event.target.getAttribute('href');
  const element = document.querySelector(target);
  if (element) {
    // @ts-ignore
    const offsetTop = element.offsetTop;
    const duration = 500; // 设置滚动持续时间（单位：毫秒）
    const startScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; // 获取当前滚动位置
    const distance = offsetTop - startScrollTop; // 计算滚动距离
    let startTime = null;
    function scroll(currentTime) {
      if (startTime === null) {
        startTime = currentTime; // 记录开始时间
      }
      const progress = Math.min((currentTime - startTime) / duration, 1); // 计算滚动进度，取值范围为 [0, 1]
      const targetScrollTop = startScrollTop + distance * progress; // 计算目标滚动位置
      window.scrollTo(0, targetScrollTop);
      if (progress < 1) {
        // 如果滚动进度小于1，继续滚动
        requestAnimationFrame(scroll);
      }
    }
    requestAnimationFrame(scroll);
  }
}

</script>

<style scoped>
.container {
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.comparison-banner-container {
  transition: all 0.3s ease;
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
}

.banner-content {
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.banner-content>h1 {
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: -.03em;
  color: white;
}

.banner-content>h2 {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -.02em;
  color: white;
}

.select-product {
  margin-top: 36px;
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.hide-same-content {
  width: calc(25% - 8px);
  height: 40px;
  display: flex;
  background-color: white;
  flex-direction: row;
  align-items: center;
}

.select-button {
  cursor: pointer;
  height: 17px;
  width: 17px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin-left: 10px;
  box-shadow: 0px 0px 2px rgba(20, 20, 20, 0.5);
}

.button-selected {
  margin-left: 10px;
  cursor: pointer;
  height: 17px;
  width: 17px;
  border: 5px solid rgba(0, 0, 0, 0.85);
  background-color: white;
}

.hide-same-content>h1 {
  color: rgba(0, 0, 0, 0.75);
  font-size: 16px;
  margin-left: 5px;
}

.selected-product-container {
  width: calc(25% - 8px);
  max-height: 500px;
  background-color: white;
}

.input-container {
  cursor: pointer;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.input-container>h1 {
  color: rgba(0, 0, 0, 0.75);
  font-size: 20px;
  margin-left: 10px;
}

.input-container>img {
  width: 20px;
  opacity: 0.5;
  margin-right: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.split-line {
  width: 100%;
  height: 1px;
  background-color: #6c7073;
}

.product-img-container {
  margin: 36px 0;
  max-height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-img {
  width: 100%;
  height: 0;
  padding-bottom: 100%;

}

.buy-button-container {
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.buy-button-container>h2 {
  text-align: center;
  margin-bottom: 16px;
  font-weight: 200;
}

.button-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.buy-button {
  cursor: pointer;
  padding: 10px 24px;
  background-color: #2848be;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.buy-button>p {
  color: white;
}

.buy-button:hover {
  background-color: #1177FF;
}

.select-table {
  padding-top: 20px;
  padding-right: 15px;
  padding-left: 10px;
  overflow-y: scroll;
  opacity: 0;
  background-color: white;
  top: 370px;
  max-width: 410px;
  margin-left: -50px;
  z-index: 10;
  position: absolute;
  height: 0px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 10px rgba(20, 20, 20, 0.5);
  transition: height 0.3s ease, opacity 0.6s ease;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.expand {
  height: 400px;
  opacity: 1;
}

.product-select-item {
  margin-bottom: 16px;
  box-shadow: 0px 0px 2px rgba(20, 20, 20, 0.5);
  cursor: pointer;
  width: calc(33.333% - 8px);
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.product-select-item>h1 {
  text-align: center;
  color: rgba(0, 0, 0, 0.75);
  font-size: 14px;
}

.product-select-item>img {
  width: 100px;
}

.item-selected {
  box-shadow: 0px 0px 2px rgba(2, 125, 255, 1);
  background-color: rgba(2, 125, 255, 0.05);
  border: 1px solid rgba(2, 125, 255, 0.15);
}

.enable-select {
  /*  box-shadow: 0px 0px 2px rgba(2, 125, 255, 1);
  background-color: rgba(2,125,255,0.05);
  border: 1px solid rgba(2,125,255,0.15);*/
}

.sticky-product-select-item {
  margin-bottom: 16px;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0px 0px 2px rgba(20, 20, 20, 0.5);
  cursor: pointer;
  width: calc(50% - 8px);
  height: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.active-item {
  min-height: 190px;
  opacity: 1;
}

.sticky-product-select-item>h1 {
  color: rgba(0, 0, 0, 0.75);
  font-size: 14px;
}

.sticky-product-select-item>img {
  width: 60%;
  object-fit: cover;
}

.comparison-container {
  margin-top: 96px;
  width: 1200px;
}

.specs-comparison {
  padding: 48px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #111111;
}

.specs-comparison:last-child {
  border: none;
}

.specs-title-container {
  width: calc(25% - 8px);
}

.specs-title-container>h1 {
  color: rgba(0, 0, 0);
  font-size: 22px;
  font-weight: 300;
}

.product-specs-comparison-item {
  transition: all 0.3s ease;
  width: calc(25% - 8px);
  display: flex;
  flex-direction: column;
}

.specs-item {
  padding: 8px 0;
}

.specs-item>p {
  padding: 8px 0;
  font-weight: 300;

}

.directory-button {
  z-index: 999;
  cursor: pointer;
  right: 15px;
  bottom: 15px;
  border-radius: 100px;
  width: 48px;
  height: 48px;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.85);
  box-shadow: 0px 0px 10px rgba(20, 20, 20, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.directory-button>img {
  width: 27px;
  transition: transform 0.3s ease;
  transform: rotate(0deg);
}

.show-directory-button>img {
  transform: rotate(180deg);
  width: 20px;
}

.directory-table {
  z-index: 998;
  right: 15px;
  bottom: 70px;
  position: fixed;
  width: 0px;
  height: 0px;
  background-color: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  transition: height 0.2s ease, width 0.2s ease;
}

.directory-table-show {
  height: 360px;
  width: 240px;
}

.directory-table>ul>li {
  width: 240px;
  height: 39px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.directory-table>ul>li :hover {}

.directory-table>ul>li>a {
  margin-left: 20px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
}

.directory-container {
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
}

.container-hide {
  display: none;
}

.sticky-select-table {
  display: none;
}

@media screen and (max-width: 1260px) {
  .banner-content {
    width: calc(100% - 64px);
  }

  .select-product {
    margin-top: 36px;
    width: calc(100% - 64px);
  }

  .comparison-container {
    margin-top: 16px;
    width: calc(100% - 64px);
    overflow: hidden;
  }
}

@media screen and (max-width: 1024px) and (min-width: 768px) {
  .selected-product-container {
    width: calc(50% - 64px);
  }

  .product-specs-comparison-item {
    width: calc(50% - 64px);
  }

}

@media screen and (max-width: 540px){
  .input-container>h1 {
    white-space: nowrap;
    font-size: 16px;
  }

}

@media screen and (max-width: 767px) {
  .hide-same-content {
    display: none;
  }

  .specs-title-container {
    display: none;
  }

  .selected-product-container {
    width: calc(50% - 6px);
  }

  .product-specs-comparison-item {
    width: calc(50% - 6px);
    align-items: center;
  }

  .specs-item>p {
    text-align: center;
  }

  .select-table {
    display: none;
  }

  .sticky-select-table {
    overflow: hidden;
    z-index: 1;
    padding: 16px;
    transition: all 0.3s ease;
    opacity: 0;
    top: 0;
    position: fixed;
    width: 100%;
    height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
  }

  .select-table-show {
    opacity: 1;
    height: calc(100vh);
  }

  .sticky-select-container {
    overflow-y:auto;
    margin: 24px 0 48px 0;
    padding: 32px 16px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .close-sticky-select-table-container {
    height: 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  .close-button {
    margin-top: 24px;
    cursor: pointer;
    border-radius: 50px;
    height: 40px;
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #010101;
  }

  .close-button>img {
    width: 25px;
    object-fit: cover;
  }

  .buy-button-container>h2 {
    font-size: 16px;
  }

  .specs-comparison {
    padding: 8px 0;
    width: 100%;
  }

  .specs-item {
    padding: 8px 0;
  }

  .specs-item>p {
    font-size: 12px;
  }

  .buy-button {
    padding: 8px 24px;
  }

  .buy-button>p {
    font-size: 12px;
  }

}
</style>
