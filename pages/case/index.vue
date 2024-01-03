<template>
  <div class="container">
    <div  :style="{ width: '100%'}" class="animate__animated ">
      <solution-heard-banner :pic-list="bannerList"></solution-heard-banner>
    </div>


    <div ref="container2" class="animate__animated" v-loadByAnimate>
      <solution-recently-updated  :new-list="newList" ></solution-recently-updated>
    </div>

    <div ref="container3" class="animate__animated" v-loadByAnimate>
      <solution-why-choose  :choose-list="chooseList"></solution-why-choose>
    </div>

    <div ref="container4" class="animate__animated" v-loadByAnimate>
      <solution-explore-other :other-list="otherList" ></solution-explore-other>
    </div>

    <div ref="container5">
      <solution-contact></solution-contact>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, toRefs, onMounted, getCurrentInstance,onUnmounted } from "vue";
const { proxy } = getCurrentInstance();
const { t, locale, locales } = useI18n()

useHead({
  title: t('seo.pages.solution.title'),
  meta: [
    {name: 'keywords', content: t('seo.pages.solution.keywords') },
    {name: 'description', content: t('seo.pages.solution.description') }
  ],
})




const chooseList = ref([
  {
    desc: "solution.practicalSolutionsRealWorldExperience",
    img: "https://file.kwunphi.com/kwunphi4/images/commons/solution-icon-01.png"
  }, {
    desc: "solution.reliableQuality",
    img: "https://file.kwunphi.com/kwunphi4/images/commons/solution-icon-02.png"
  }, {
    desc: "solution.standardizedServices",
    img: "https://file.kwunphi.com/kwunphi4/images/commons/solution-icon-03.png"
  }, {
    desc: "solution.multiInterfaceEcosystem",
    img: "https://file.kwunphi.com/kwunphi4/images/commons/solution-icon-04.png"
  }
]);

const otherList = ref([{
  title: "solution.CleaningTraining",
  desc: "solution.CleaningTrainingDesc",
  img: "https://file.kwunphi.com/kwunphi4/images/commons/solution-explore-more-01.png?x-oss-process=image/resize,m_mfit,w_400,h_400"
}, {
  title: "solution.ScenarioTraining",
  desc: "solution.ScenarioTrainingDesc",
  img: "https://file.kwunphi.com/kwunphi4/images/commons/solution01.png?x-oss-process=image/resize,m_mfit,w_400,h_400"
},
  {
    title: "solution.CleaningService",
    desc: "solution.CleaningServiceDesc",
    img: "https://file.kwunphi.com/kwunphi4/images/commons/solution-explore-more-03.png?x-oss-process=image/resize,m_mfit,w_400,h_400"
  }
  , {
    title: "solution.InfrastructureServices",
    desc: "solution.InfrastructureServicesDesc",
    img: "https://file.kwunphi.com/kwunphi4/images/commons/kj.png?x-oss-process=image/resize,m_mfit,w_400,h_400"
  }
]);


const clientList = ref([
  {
    title: "",
    desc: "专业解决方案，贴近实战",
    img: "https://dji-official-fe.djicdn.com/dps/33be6cbd9c55f481224489ba4f9e4fbb.png",
  },
  {
    title: "",
    desc: "品质可靠，值得信赖",
    img: "https://dji-official-fe.djicdn.com/dps/33be6cbd9c55f481224489ba4f9e4fbb.png",
  },
  {
    title: "",
    desc: "客制化服务，无忧体验",
    img: "https://dji-official-fe.djicdn.com/dps/33be6cbd9c55f481224489ba4f9e4fbb.png",
  },
  {
    title: "",
    desc: "接口丰富，生态开放",
    img: "https://dji-official-fe.djicdn.com/dps/33be6cbd9c55f481224489ba4f9e4fbb.png",
  }
]);


const list = ref([
  {
    router: "/learn-more/Kwun-B22L",
    productId: 1,
    title: "Kwun-B22L",
    desc: "solution.easyCleaning",
    desc2: "solution.PhotovoltaicCleaningAtYourFingertips",
    img: "https://file.kwunphi.com/kwunphi4/images/banner/product-show-case-image-01.png",
  }, {
    router: "/learn-more/Kwun-B33H",
    productId: 2,
    title: "Kwun-B33H",
    desc: "solution.perfectClean",
    desc2: "solution.CareFor25YearsWithCleanEdges",
    img: "https://file.kwunphi.com/kwunphi4/images/banner/product-show-case-image-02.png",
  }
  , {
    router: "/learn-more/Kwun-B32L",
    productId: 3,
    title: "Kwun-B32L",
    desc: "solution.easyCleaning",
    desc2: "solution.MakeCleaningAHabitAndEarnPower",
    img: "https://file.kwunphi.com/kwunphi4/images/banner/product-show-case-image-03.png",
  }
  , {
    router: "/learn-more/Kwun-B11L",
    productId: 4,
    title: "Kwun-B11L",
    desc: "solution.sustainedClean",
    desc2: "solution.AccomplishTheImpossibleTask",
    img: "https://file.kwunphi.com/kwunphi4/images/banner/product-show-case-image-04.png",
  }
]);


const bannerList = ref([
  {
    title: "solution.autonomousAstonishingCapability",
    desc: "Kwun-B11L",
    desc2: "solution.cleanRevolutionLeadingWithSolarEnergy",
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/banner/solution-banner-01.png",
    router: "/learn-more/Kwun-B11L",
    productId: 1,
  },
  {
    title: "solution.aiVisualHighPrecisionAlignment",
    desc: "Kwun-B32L",
    desc2: "solution.cuttingEdgeTechnologyEnsuringCleaningQuality",
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/banner/solution-banner-02.png",
    router: "/learn-more/Kwun-B32L",
    productId: 2,
  }, {
    title: "solution.autonomousCleaningUnattended",
    desc: "Kwun-B33H",
    desc2: "solution.cleanRevolutionContinuousProfit",
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/banner/solution-banner-03.png",
    router: "/learn-more/Kwun-B33H",
    productId: 3,
  },
  {
    title: "solution.autonomousCleaningEndlessSharing",
    desc: "Kwun-B22L",
    desc2: "solution.cleanRevolutionConqueringTheGlobe",
    imgUrl: "https://file.kwunphi.com/kwunphi4/images/banner/solution-banner-04.png",
    router: "/learn-more/Kwun-B22L",
    productId: 4,
  }
])


const newList = ref([
  {
    model:"Kwun-B33H",
    industry: "solution.floatingPowerStation",
    desc: "solution.MaxCleanlinessMiniCosts",
    img: "https://file.kwunphi.com/kwunphi/images/advantage/whyconvenient.jpg",
  },
  {
    model:"Kwun-B32L",
    industry: "solution.Fishlight",
    desc: "solution.FishlightDesc",
    img: "https://file.kwunphi.com/kwunphi4/images/banner/solution-scene-02.png",
  },
  {
    model:"Kwun-B22L",
    industry: "solution.IndustrialCommercialRoofs",
    desc: "solution.SaveMoneyAndEffort",
    img: "https://file.kwunphi.com/kwunphi4/images/banner/solution-scene-03.png",
  },
  {
    model:"Kwun-B22H",
    industry: "solution.CarportPhotovoltaic",
    desc: "solution.SuperCostEffective",
    img: "https://file.kwunphi.com/kwunphi4/images/commons/chepeng.jpg",
  }
]);
</script>

<style scoped>
.container{
  width: 100%;
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


</style>
