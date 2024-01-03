<template>
  <div class="help-choose-result-page">
    <nav-header :title="$t('foot.helpMeChoose')" :menus="[{ text: $t('helpMeChoose.result.TestResults') }]"></nav-header>
    <div class="page-title">
      <h1>{{ $t('helpMeChoose.result.TheBestRobotForYou') }}</h1>
    </div>
    <div v-if="filteredProducts && filteredProducts.length" class="choose-result">
      <div class="product-list">
        <div v-for="product in filteredProducts" :key="product.productId" class="product-card">
          <div class="product-wrapper">
            <div class="product-image">
              <img :src="product.productImgUrl">
            </div>
            <div class="product-info">
              <h3>{{ $t(product.resultCard.desc1) }}</h3>
              <h2>{{ $t(product.resultCard.title) }} {{product.enable? '':$t('comingSoon')}}</h2>
              <p>{{ $t(product.resultCard.desc2) }}</p>
              <h5>{{ $t('common.buyIcon') }} {{ product.resultCard.price == 520178 || product.resultCard.price == '预售中' ?
                $t('helpMeChoose.result.InPreSale') : (product.resultCard.price + $t('common.orMore')) }}</h5>

              <!--                <div class="btns-bar" >
                <nuxt-link :to="{path:`/purchase/${product.model}`}">
                  <div class="buy-button">
                    <p>立即购买</p>
                  </div>
                </nuxt-link>
                <nuxt-link :to="{path:`/learn-more/${product.model}`}">
                  <div class="buy-button learn-button"
                       @mouseover="product.isMouseOver=true"
                       @mouseleave="product.isMouseOver= false"
                       :style="product.isMouseOver? buttonStyle1:''">
                    <p>了解更多</p>
                  </div>
                </nuxt-link>
              </div>-->



            </div>
          </div>
        </div>
      </div>


      <!--      <div class="product-card2">
       <product-choose-result-pic-swiper :slides="slides"></product-choose-result-pic-swiper>
      </div>-->

    </div>
    <div class="select-container">
      <div v-if="filteredProducts.length > 1" class="result-btn" @click="gotoComparison">
        <img style="opacity: 0.95;margin-right: 5px"
             src="https://file.kwunphi.com/kwunphi4/images/commons/contrast.svg">
        <h1>{{ $t('helpMeChoose.result.compare') }}</h1>
      </div>
      <nuxt-link class="result-btn" :to="localePath('/suitable-product')">
        <img src="https://file.kwunphi.com/kwunphi4/images/commons/reselect.svg">
        <h1>{{ $t('helpMeChoose.result.Reselect') }}</h1>
      </nuxt-link>
    </div>
    <!--    <bottom-bus-info></bottom-bus-info>
    <div v-if="isDialogOpen"  class="dialog-overlay"
           @click="isDialogOpen=false"
      >
        <div class="dialog">
          <button @click="isDialogOpen=!isDialogOpen;">关闭</button>
        </div>
      </div> -->

  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n()
const localePath = useLocalePath();
const router = useRouter()
const route = useRoute()
const productId = ref<number>(Number(route.query.productId) || 0)
// 使用ref来定义一个响应式的数组tagList
const tagList = ref<number[]>([]);

function gotoComparison() {
  const ComparisonList = [];
  if (filteredProducts.value) {
    for (let i = 0; i < filteredProducts.value.length && i < 3; i++) {
      ComparisonList.push(filteredProducts.value[i].model)
    }
    window.sessionStorage.setItem("ComparisonResultList", ComparisonList)
    router.push({ path: localePath('/comparison') });
  }
}

const isDialogOpen = ref(false);
function openDialog() {
  isDialogOpen.value = !isDialogOpen.value;
  if (isDialogOpen.value) {
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = getScrollbarWidth() + 'px';
  } else {
    document.body.style.overflowY = 'auto';
    document.body.style.paddingRight = '0';
  }
}
watch(isDialogOpen, (newVal) => {
  if (newVal) {
  } else {
    document.body.style.overflowY = 'auto';
    document.body.style.paddingRight = '0';
  }
});

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

// 使用计算属性来过滤产品列表 过滤出来的产品filteredProducts 符合筛选条件的产品
const filteredProducts = ref([])
/* const filteredProducts = computed(() => {
  if (!tagList.value || !tagList.value.length || !productList || !productList.length) {
    return []
  }
  let list = productList.filter((product) => {
    console.error(tagList.value[0])
    console.error(product.tag.includes(tagList.value[0]))

    return tagList.value.every((tag) => product.tag.includes(tag))
  });
  console.error(list)
  return list
}); */

function initFilterProduct() {
  if (!tagList.value || !tagList.value.length || !productList || !productList.length) {
    return []
  }
  let list = productList.filter((product) => {
    return tagList.value.every((tag) => product.tag.includes(tag))
  });
  filteredProducts.value = list
}


onMounted(() => {
  if(process.client){
    // 获取存储在sessionStorage中的数据并解析为数字数组
    const tagParam = window.sessionStorage.getItem("chooseResult");
    if (tagParam) {
      // 将tagParam字符串按逗号分隔成字符串数组，然后将其转换为数字数组
      const tagArray = tagParam.split(",").map((tag) => parseInt(tag));
      // 将得到的数字数组赋值给tagList
      tagList.value = tagArray;
    } else {
      // 如果tagParam不存在或为空，则默认为一个空数组
      tagList.value = [];
    }
    initFilterProduct()
    // console.error("init", typeof productList)
    // console.error("init", typeof filteredProducts.value,  filteredProducts.value.length, filteredProducts.value[0], filteredProducts.value[1])
  }
});
const headerList = ref([{
  height: 66,
  opacity: 1,
  top: 0,
  zindex: 999,
  width: 100,
  marginLeft: "-50vw",
  backgroundColor: "rgba(255, 255, 255, 1)",
  logoRouter: "solution",
  logoUrl: "https://file.kwunphi.com/kwunphi4/images/icon/logo2.png",
  logoWidth: "130px",
  menuItemColor: "rgba(0,0,0)",
  menuItemMarginLeft: "20vw",
  menuItemFontWeight: "bold",
  menuItemFontSize: "16px",
  menuList: [{ title: "测试适合你的产品", router: "/" },

  ],
  buttonItemShape: "rectangle", //rectangle 、round、square
  buttonList: []
}
]);
const isMouseOver1 = ref(false);
const isMouseOver = ref(false);
const isMouseOver2 = ref(false);

const slides = ref([
  {
    videoUrl: "https://us-cms-videos.dji.net/video_trans/6d1e6d7182bc440ba3b8fc6559fb869a/720.mp4",
    imgUrl: "https://stormsend1.djicdn.com/stormsend/uploads/18c68392739bab700a818a1b9dbc6084.jpg",
    buyCard: {
      productId: 1,
      productName: "堒-B33H",
      price: 123555
    },
    userInfo: {
      avatar: "https://stormsend1.djicdn.com/stormsend/uploads/fab92f7e483d0721a80f3d435dc8dfb0.jpg",
      intro: "Maple · SkyPixel",
      desc: "The Nature Of China"
    }
  },
  {
    videoUrl: "https://us-cms-videos.dji.net/video_trans/6d1e6d7182bc440ba3b8fc6559fb869a/720.mp4",
    imgUrl: "https://stormsend1.djicdn.com/stormsend/uploads/18c68392739bab700a818a1b9dbc6084.jpg",
    buyCard: {
      productId: 1,
      productName: "堒-B33H",
      price: 123555
    },
    userInfo: {
      avatar: "https://stormsend1.djicdn.com/stormsend/uploads/fab92f7e483d0721a80f3d435dc8dfb0.jpg",
      intro: "Maple · SkyPixel",
      desc: "The Nature Of China"
    }
  },
  {
    videoUrl: "https://us-cms-videos.dji.net/video_trans/6d1e6d7182bc440ba3b8fc6559fb869a/720.mp4",
    imgUrl: "https://stormsend1.djicdn.com/stormsend/uploads/18c68392739bab700a818a1b9dbc6084.jpg",
    buyCard: {
      productId: 1,
      productName: "堒-B33H",
      price: 123555
    },
    userInfo: {
      avatar: "https://stormsend1.djicdn.com/stormsend/uploads/fab92f7e483d0721a80f3d435dc8dfb0.jpg",
      intro: "Maple · SkyPixel",
      desc: "The Nature Of China"
    }
  },
  {
    videoUrl: "https://us-cms-videos.dji.net/video_trans/6d1e6d7182bc440ba3b8fc6559fb869a/720.mp4",
    imgUrl: "https://stormsend1.djicdn.com/stormsend/uploads/18c68392739bab700a818a1b9dbc6084.jpg",
    buyCard: {
      productId: 1,
      productName: "堒-B33H",
      price: 123555
    },
    userInfo: {
      avatar: "https://stormsend1.djicdn.com/stormsend/uploads/fab92f7e483d0721a80f3d435dc8dfb0.jpg",
      intro: "Maple · SkyPixel",
      desc: "The Nature Of China"
    }
  },

]);

function handleMouseOver() {
  isMouseOver.value = true
}

const buttonStyle = computed(() => {
  return {
    'background-color': `#e5e2e2`,
  };
})

const buttonStyle1 = computed(() => {
  return {
    'background-color': `#afaeae`,
  };
})

const productList = [
  {
    productId: 1,
    productName: "B37H",
    introduce: "productSpecs.Kwun-B37H.introduce",
    model: "Kwun-B37H",
    isMouseOver: false,
    enable:false,//不可用，不售卖，预售
    turningMethod: "productSpecs.Kwun-B37H.turningMethod",
    tag: [3, 4, 12, 14],
    productImgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/37/B37.png",
    resultCard: {
      desc1: "productSpecs.Kwun-B37H.Nickname",
      title: "Kwun-B37H",
      desc2: "productSpecs.Kwun-B37H.capabilities",
      price: t("productSpecs.Kwun-B37H.price"),
      router1: "/purchase/Kwun-B37H",
      router2: "/kwun/Kwun-B37H",
    },
  },
  {
    productId: 2,
    productName: "B37L",
    model: "Kwun-B37L",
    introduce: "productSpecs.Kwun-B37L.introduce",
    isMouseOver: false,
    enable:false,//不可用，不售卖，预售
    turningMethod: "productSpecs.Kwun-B37H.turningMethod",
    tag: [2, 3, 4, 5, 7, 9, 10, 11, 12, 14],
    productImgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/37/B37.png",
    resultCard: {
      desc1: "productSpecs.Kwun-B37L.Nickname",
      title: "Kwun-B37L",
      desc2: "productSpecs.Kwun-B37L.capabilities",
      price: t("productSpecs.Kwun-B37L.price"),
      router1: "/purchase/Kwun-B37L",
      router2: "/kwun/Kwun-B37L",
    },
  },
  {
    productId: 3,
    productName: "Kwun-B63G",
    model: "Kwun-B63G",
    introduce: "productSpecs.Kwun-B63G.introduce",
    isMouseOver: false,
    enable:false,//不可用，不售卖，预售
    turningMethod: "productSpecs.Kwun-B63G.turningMethod",
    productImgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/6/B63G.png",
    tag: [4, 9, 11, 14],
    resultCard: {
      desc1: "productSpecs.Kwun-B63G.Nickname",
      title: "Kwun-B63G",
      desc2: "productSpecs.Kwun-B63G.capabilities",
      price: t("productSpecs.Kwun-B63G.price"),
      router1: "/purchase/Kwun-B63G",
      router2: "/kwun/Kwun-B63G",
    },
  },
  {
    productId: 4,
    productName: "B62G",
    model: "Kwun-B62G",
    introduce: "productSpecs.Kwun-B62G.introduce",
    isMouseOver: false,
    enable:false,//不可用，不售卖，预售
    turningMethod: "productSpecs.Kwun-B62G.turningMethod",
    productImgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/6/B63G.png",
    tag: [3, 4, 8, 9, 10, 14],
    resultCard: {
      desc1: "productSpecs.Kwun-B62G.Nickname",
      title: "Kwun-B62G",
      desc2: "productSpecs.Kwun-B62G.capabilities",
      price: t("productSpecs.Kwun-B62G.price"),
      router1: "/purchase/Kwun-B62G",
      router2: "/kwun/Kwun-B62G",
    },
  },
  {
    productId: 5,
    productName: "B33F",
    model: "Kwun-B33F",
    introduce: "productSpecs.Kwun-B33F.introduce",
    isMouseOver: false,
    enable:false,//不可用，不售卖，预售
    turningMethod: "productSpecs.Kwun-B33F.turningMethod",
    tag: [3, 6, 7, 10, 11, 13, 14],
    productImgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-white/01.png",
    resultCard: {
      desc1: "productSpecs.Kwun-B33F.Nickname",
      title: "Kwun-B33F",
      desc2: "productSpecs.Kwun-B33F.capabilities",
      price: t("productSpecs.Kwun-B33F.price"),
      router1: "/purchase/Kwun-B33F",
      router2: "/kwun/Kwun-B33F",
    },
  },
  {
    productId: 6,
    productName: "B33H",
    model: "Kwun-B33H",
    introduce: "productSpecs.Kwun-B33H.introduce",
    isMouseOver: false,
    enable:true,
    turningMethod: "productSpecs.Kwun-B33H.turningMethod",
    tag: [1, 2, 3, 4, 5, 11, 13, 14],
    productImgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-white/01.png",
    resultCard: {
      desc1: "productSpecs.Kwun-B33H.Nickname",
      title: "Kwun-B33H",
      desc2: "productSpecs.Kwun-B33H.capabilities",
      price: t("productSpecs.Kwun-B33H.price"),
      router1: "/purchase/Kwun-B33H",
      router2: "/kwun/Kwun-B33H",
    },
  },
  {
    productId: 7,
    productName: "B32H",
    model: "Kwun-B32H",
    introduce: "productSpecs.Kwun-B32H.introduce",
    isMouseOver: false,
    enable:true,//不可用，不售卖，预售
    turningMethod: "productSpecs.Kwun-B32H.turningMethod",
    tag: [1, 3, 4, 10, 14],
    productImgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-white/01.png",
    resultCard: {
      desc1: "productSpecs.Kwun-B32H.Nickname",
      title: "Kwun-B32H",
      desc2: "productSpecs.Kwun-B32H.capabilities",
      price: t("productSpecs.Kwun-B32H.price"),
      router1: "/purchase/Kwun-B32H",
      router2: "/kwun/Kwun-B32H",
    },
  },
  {
    productId: 8,
    productName: "B32L",
    model: "Kwun-B32L",
    introduce: "productSpecs.Kwun-B32L.introduce",
    isMouseOver: false,
    enable:true,//不可用，不售卖，预售
    turningMethod: "productSpecs.Kwun-B32L.turningMethod",
    productImgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-white/01.png",
    tag: [1, 2, 3, 4, 7, 10, 14],
    resultCard: {
      desc1: "productSpecs.Kwun-B32L.Nickname",
      title: "Kwun-B32L",
      desc2: "productSpecs.Kwun-B32L.capabilities",
      price: t("productSpecs.Kwun-B32L.price"),
      router1: "/purchase/Kwun-B32L",
      router2: "/kwun/Kwun-B32L",
    },
  },
  {
    productId: 9,
    productName: "B22H",
    model: "Kwun-B22H",
    introduce: "productSpecs.Kwun-B22H.introduce",
    isMouseOver: false,
    enable:true,//不可用，不售卖，预售
    turningMethod: "productSpecs.Kwun-B22H.turningMethod",
    productImgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/22/bg-white/01.png",
    tag: [1, 10, 13],
    resultCard: {
      desc1: "productSpecs.Kwun-B22H.Nickname",
      title: "Kwun-B22H",
      desc2: "productSpecs.Kwun-B22H.capabilities",
      price: t("productSpecs.Kwun-B22H.price"),
      router1: "/purchase/Kwun-B22H",
      router2: "/kwun/Kwun-B22H",
    },
  },
  {
    productId: 10,
    productName: "B22L",
    model: "Kwun-B22L",
    introduce: "productSpecs.Kwun-B22L.introduce",
    isMouseOver: false,
    enable:true,//不可用，不售卖，预售
    turningMethod: "productSpecs.Kwun-B22L.turningMethod",
    productImgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/22/bg-white/01.png",
    tag: [1, 5, 7, 10, 13],
    resultCard: {
      desc1: "productSpecs.Kwun-B22L.Nickname",
      title: "Kwun-B22L",
      desc2: "productSpecs.Kwun-B22L.capabilities",
      price: t("productSpecs.Kwun-B22L.price"),
      router1: "/purchase/Kwun-B22L",
      router2: "/kwun/Kwun-B22L",
    },
  },
  {
    productId: 11,
    productName: "B11L",
    model: "Kwun-B11L",
    introduce: "productSpecs.Kwun-B11L.introduce",
    isMouseOver: false,
    enable:true,//不可用，不售卖，预售
    turningMethod: "productSpecs.Kwun-B11L.turningMethod",
    productImgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
    tag: [2, 5, 10, 13],
    resultCard: {
      desc1: "productSpecs.Kwun-B11L.Nickname",
      title: "Kwun-B11L",
      desc2: "productSpecs.Kwun-B11L.capabilities",
      price: t("productSpecs.Kwun-B11L.price"),
      router1: "/purchase/Kwun-B11L",
      router2: "/kwun/Kwun-B11L",
    },
  },
  {
    productId: 12,
    productName: "B11T",
    model: "Kwun-B11T",
    introduce: "productSpecs.Kwun-B11T.Nickname",
    isMouseOver: false,
    enable:false,//不可用，不售卖，预售
    turningMethod: "productSpecs.Kwun-B11T.turningMethod",
    productImgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/11/11t/b11t.png",
    tag: [8, 10, 13],
    resultCard: {
      desc1: "productSpecs.Kwun-B11T.Nickname",
      title: "Kwun-B11T",
      desc2: "productSpecs.Kwun-B11T.capabilities",
      price: t("productSpecs.Kwun-B11T.price"),
      router1: "/purchase/Kwun-B11T",
      router2: "/kwun/Kwun-B11T",
    },
  },
  {
    productId: 13,
    productName: "B12T",
    model: "Kwun-B12T",
    introduce: "productSpecs.Kwun-B12T.Nickname",
    isMouseOver: false,
    enable:false,//不可用，不售卖，预售
    turningMethod: "productSpecs.Kwun-B12T.turningMethod",
    productImgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/12/b12t.png",
    tag: [2, 10, 13],
    resultCard: {
      desc1: "productSpecs.Kwun-B12T.Nickname",
      title: "Kwun-B12T",
      desc2: "productSpecs.Kwun-B12T.capabilities",
      price: t("productSpecs.Kwun-B12T.price"),
      router1: "/purchase/Kwun-B12T",
      router2: "/kwun/Kwun-B12T",
    },
  },
  {
    productId: 14,
    productName: "π1",
    model: "Kwun-π1",
    introduce: "productSpecs.Kwun-π1.Nickname",
    isMouseOver: false,
    enable:false,//不可用，不售卖，预售
    turningMethod: "productSpecs.Kwun-π1.turningMethod",
    productImgUrl: "https://file.kwunphi.com/kwunphi4/images/kwun/%CF%80/%CF%801.png",
    tag: [3, 4, 5, 8, 9, 10, 13],
    resultCard: {
      desc1: "productSpecs.Kwun-π1.Nickname",
      title: "Kwun-π1",
      desc2: "productSpecs.Kwun-π1.capabilities",
      price: t("productSpecs.Kwun-π1.price"),
      router1: "/purchase/Kwun-π1",
      router2: "/kwun/Kwun-π1",
    },
  },


]

</script>

<style scoped>
.help-choose-result-page {
  width: 100%;
  background-color: #F0F1F2;
}

.page-title {
  margin-top: 48px;
  margin-bottom: 32px;
  padding: 0 16px;
}

.page-title>h1 {
  max-width: 1200px;
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.95);
  font-size: 32px;
  line-height: 40px;
  font-weight: 500;
}

.choose-result {
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.product-list {
  max-width: 1200px;
  margin: 0 auto;
}

.product-card {
  width: 100%;
  margin-bottom: 48px;
}

.product-wrapper {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  border-radius: 8px;
  overflow: hidden;
}

.product-image {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.product-image>img {
  width: 100%;
  max-width: 400px;
}

.product-info {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 48px 48px 24px 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-info>h3 {
  color: #6a6a6a;
  font-size: 18px;
  line-height: 12px;
}

.product-info>h2 {
  color: #3a3a3a;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  margin-top: 16px;
}

.product-info>p {
  font-weight: 300;
  color: #3b3b3b;
  font-size: 18px;
  line-height: 1.5;
  margin-top: 32px;
  margin-bottom: 16px;
}

.product-info>h5 {
  color: #3a3a3a;
  font-weight: 500;
  font-size: 18px;
  margin-top: 16px;
}


.btns-bar {
  display: flex;
  flex-direction: row;
}

.select-container {
  padding-bottom: 48px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #F0F1F2;
}

.result-btn {
  border-radius: 48px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px 24px;
  margin-right: 16px;
}

.result-btn:last-child {
  margin-right: 0;
}

.result-btn:hover {
  background-color: #e5e2e2;
}

.result-btn>img {
  width: 20px;
  margin-right: 5px;
}

.result-btn>h1 {
  color: rgba(0, 0, 0, 0.75);
  font-size: 18px;
  line-height: 30px;
}

.product-card2 {
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  height: 776px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.product-card2>h1 {
  color: rgba(0, 0, 0, 0.75);
}

.card-item>img {
  width: 48px;
  height: 48px;
}

.card-item>h3 {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}

.dialog-overlay {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog {
  width: 1000px;
  height: 600px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.buy-button {
  padding: 12px 32px;
  border-radius: 50px;
  border: 1px solid #1122FF;
}

.buy-button>p {
  color: black;
}

.learn-button {
  background-color: #efeded;
  color: rgba(0, 0, 0, 0.95);
  border-color: #efeded;
}

@media screen and (max-width: 767px) {
  .page-title>h1 {
    font-size: 24px;
  }

  .product-wrapper {
    display: block;
  }

  .product-image>img {
    max-width: 192px;
  }

  .product-info {
    padding: 0 16px 16px;
  }

  .result-btn {
    height: 44px;
    padding: 0 16px;
  }

  .result-btn>img {
    margin-right: 2px;
  }

  .result-btn>h1 {
    font-size: 16px;
  }
}
</style>
