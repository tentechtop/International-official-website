<template>
  <div class="container">
    <nav-header :title="$t('foot.SustainableCleaning')"></nav-header>
    <adaptive-container>
      <div class="container-title">{{ $t("foot.SustainableCleaning") }}</div>
      <div class="container-subtitle">{{ subtitle }}</div>
      <div class="content">
        <div v-for="(item, index) in tableList" :key="index" class="table-box">
          <div class="table-pic">
            <img :src="item.pictureUrl" :alt="item.pictureAlt" />
            <div class="table-tag">{{ item.tag }}</div>
          </div>
          <div class="table-desc">
            <div class="table-desc1">
              <div class="table-tag">{{ item.tag }}</div>
              <div v-html="item.summary"></div>
            </div>
            <div class="table-desc2">
              <img v-if="item.picture2" :src="item.picture2" :alt="$t('seo.pages.sustainableCleaning.keywords') +',' +$t('seo.pages.sustainableCleaning.description')" />
            </div>
          </div>
        </div>
        <div class="terminology-list">
          <div v-for="(item, index) in terminologyList" :key="index" class="terminology-box">
            <div class="terminology-name">{{ item.name }}</div>
            <div class="terminology-summary">
              <div v-html="item.summary"></div>
            </div>
          </div>
        </div>
      </div>
    </adaptive-container>
  </div>
</template>

<script lang="ts" setup>
import {useI18n} from "vue-i18n";
const {t,locale,localePath} = useI18n()

const subtitle = ref('')
const tableList = ref([])
const terminologyList = ref([])
onMounted(()=>{
  if (locale.value.startsWith('cn')){
    subtitle.value='（清洁后发电提升收益≥清洁成本）'
    tableList.value= [
        {
      tag: '【表一】',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/sustainable/zh/cleanliness.png',
      pictureAlt: t('seo.images.sustainableCleaning.cleanliness'),
      picture2: 'https://file.kwunphi.com/kwunphi/images/sustainable/sustainable1.jpg',
      summary: '<p>清洁质量决定了电量提升收益，是光伏清洁价格机制的核心。</p>'
          + '<p>怪虫公司按ISO 14644-9“按粒子浓度划分表面洁净度”的分级标准，用来界定光伏清洁质量。</p>'
    }, {
      tag: '【表二】',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/sustainable/zh/levels_cost_increase.png',
      pictureAlt: t('seo.images.sustainableCleaning.levelsCostIncrease'),
      picture2: 'https://file.kwunphi.com/kwunphi/images/sustainable/sustainable2.jpg',
      summary: '<p>人工清洁按洁净质量标准【ISO 14644-9】划分，对应不同的成本。</p>'
          + '<p>（怪虫公司2021.09-2022.09在广东实际跟踪研究结果）</p>'
          + '<p></p>'
    }, {
      tag: '【表三】',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/kwunq/zh/situation_efficiency.png',
      pictureAlt: t('seo.images.sustainableCleaning.situationEfficiency'),
      // summary: '<p>电站结构碎片化，必要的人工介入能保证清洁质量。</p>'
      //     + '<p>怪虫公司职业清洁团队经过1.3G瓦清洁跟踪，总结出不同清洁场景下最合理的人堒匹配数量组合。</p>'
      summary: '<p>为了更准确的核算光伏清洁机器人堒的清洁成本，怪虫公司将下列两个关键参数列入成本计算中：</p>'
          + '<p>①场景效率1【短】：指同一清洁地点，光伏清洁机器人堒因搬移，转弯，掉头，换电池等短时间暂停造成的效率损失。即实际清洁速率与名义清洁速率的比值。</p>'
          + '<p>②场景效率2【长】：指不同清洁地点，光伏清洁机器人堒因路程，工作准备，楼栋之间的移动等非清洁工作造成的长时间停机。即实际工作时间与额定工作时间的比值。</p>'
          + '<p>将两者结合，得到怪虫光伏清洁机器人堒在不同场景下的综合效率，即综合场景效率。</p>'
    },  {
      tag: '【表四】',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/sustainable/zh/labor_kwun.png',
      pictureAlt: t('seo.images.sustainableCleaning.laborKwun'),
      picture2: 'https://file.kwunphi.com/kwunphi/images/sustainable/sustainable4.jpg',
      summary: '<p>电站结构碎片化，必要的人工介入能保证清洁质量。</p>'
          + '<p>怪虫公司职业清洁团队经过1.3G瓦清洁跟踪，总结出不同清洁场景下最合理的人堒匹配数量组合。</p>'
    }, {
      tag: '【表五】',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/sustainable/zh/process.png',
      pictureAlt: t('seo.images.sustainableCleaning.process'),
      picture2: 'https://file.kwunphi.com/kwunphi/images/sustainable/sustainable5.jpg',
      summary: '<p>不同污染物需要采取不同清洁工艺，堒在多数情况下均能实现SCP3级洁净度。</p>'
    }, {
      tag: '【表六】',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/sustainable/zh/kwunjvslabor.png',
      pictureAlt: t('seo.images.sustainableCleaning.kwunjVSLabor'),
      picture2: 'https://file.kwunphi.com/kwunphi/images/sustainable/sustainable6.jpg',
      summary: '<p>堒洁SCP 3级与人工清洁SCP 4级清洁效益的比较证实了：</p>'
          + '<p>堒洁是唯一满足“清洁后发电提升收益≥清洁成本”的可持续清洁。</p>'
    }]
    terminologyList.value= [
        {
      // name: '综合场景效率',
      //     name: t('kwunq.label.comSituationEfficiency'),
      //     summary: '<p>为了更准确的核算光伏清洁机器人堒的清洁成本，怪虫公司将下列两个关键参数列入成本计算中：</p>'
      //         + '<p>①场景效率1【短】：指同一清洁地点，光伏清洁机器人堒因搬移，转弯，掉头，换电池等短时间暂停造成的效率损失。即实际清洁速率与名义清洁速率的比值。</p>'
      //         + '<p>②场景效率2【长】：指不同清洁地点，光伏清洁机器人堒因路程，工作准备，楼栋之间的移动等非清洁工作造成的长时间停机。即实际工作时间与额定工作时间的比值。</p>'
      //         + '<p>将两者结合，得到怪虫光伏清洁机器人堒在不同场景下的综合效率，即综合场景效率。</p>'
      // }, {
      // name: '成本计算模型——堒算',
      name: t('foot.costCalculation') + ' —— 堒算',
      summary: '<p>经过清洁测试总结，结合堒、人、车三者涉及的各种费用，怪虫公司推出了接近实际情况的清洁成本计算平台：</p>'
          + '<p></p>'
          + '<p>你可以在线或者下载Excel文件使用。</p>'
    }, {
      // name: '最优成本计算',
      name: t('foot.optimalCalculation'),
      summary: '<p>依托【堒算】清洁成本计算平台，怪虫公司进一步推出最优成本计算模型，简单方便地得出成本最低的清洁组合：</p>'
          + '<p></p>'
    }]
  }else {
    subtitle.value='(Increase income of power generation after cleaning ≥ cleaning cost)'
    tableList.value= [
        {
      tag: '[Table 1]',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/sustainable/en/cleanliness.png',
      pictureAlt: t('seo.images.sustainableCleaning.cleanliness'),
      picture2: 'https://file.kwunphi.com/kwunphi/images/sustainable/sustainable1.jpg',
      summary: '<p>Cleaning quality determines the income from electricity upgrading and is the core of photovoltaic cleaning price mechanism.</p>'
          + '<p>Kwunphi uses the ISO 14644-9 "Surface cleanliness by particle concentration" classification criteria to define the quality of photovoltaic cleaning.</p>'
    }, {
      tag: '[Table 2]',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/sustainable/en/levels_cost_increase.png',
      pictureAlt: t('seo.images.sustainableCleaning.levelsCostIncrease'),
      picture2: 'https://file.kwunphi.com/kwunphi/images/sustainable/sustainable2.jpg',
      summary: '<p>Manual cleaning is corresponding to different costs  which according to the clean quality standard [ISO 14644-9]</p>'
          + '<p>(The actual tracking research results in Guangdong Province from September 2021.09 to September 2022.09)</p>'
          + '<p></p>'
    }, {
      tag: '[Table 3]',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/kwunq/en/situation_efficiency.png',
      pictureAlt: t('seo.images.sustainableCleaning.situationEfficiency'),
      // summary: '<p>Power station structure fragmentation, need human intervention can ensure the quality of cleaning,</p>'
      //     + '<p>Kwunphi sums up the different cleaning situations to find the most reasonable Kwun&Labor matching combination, after 1.3 GW cleaning tracking by Kwunphi’s professional cleaning team.</p>'
      summary: '<p>In order to more accurately calculate the cleaning cost of the photovoltaic cleaning robot, Kwunphi Company included the following two key parameters in the cost calculation:</p>'
          + '<p>①Situation Efficiency 1: In the process of work, people stop, lift, turn around, change batteries, etc., resulting in efficiency loss; Situation Efficiency 1 is the ratio of actual efficiency to nominal efficiency;</p>'
          + '<p>②Situation Efficiency 2: The net working time of 8 hours per day, the actual working time is lost due to travel, work preparation and other reasons; Expressed as the actual working time which minus this efficiency loss divided by eight hours;</p>'
          + '<p>Combine the two to obtain the comprehensive efficiency of photovoltaic cleaning robot kwun in different situations, that is, the comprehensive situation efficiency.</p>'
    }, {
      tag: '[Table 4]',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/sustainable/en/labor_kwun.png',
      pictureAlt: t('seo.images.sustainableCleaning.laborKwun'),
      picture2: 'https://file.kwunphi.com/kwunphi/images/sustainable/sustainable4.jpg',
      summary: '<p>Power station structure fragmentation, need human intervention can ensure the quality of cleaning,</p>'
          + '<p>Kwunphi sums up the different cleaning situations to find the most reasonable Kwun&Labor matching combination, after 1.3 GW cleaning tracking by Kwunphi’s professional cleaning team.</p>'
    }, {
      tag: '[Table 5]',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/sustainable/en/process.png',
      pictureAlt: t('seo.images.sustainableCleaning.process'),
      picture2: 'https://file.kwunphi.com/kwunphi/images/sustainable/sustainable5.jpg',
      summary: '<p>Different pollutants need to take different cleaning processes, Kwun can realize SCP3 level of cleanliness in most cases.</p>'
    }, {
      tag: '[Table 6]',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/sustainable/en/kwunjvslabor.png',
      pictureAlt: t('seo.images.sustainableCleaning.kwunjVSLabor'),
      picture2: 'https://file.kwunphi.com/kwunphi/images/sustainable/sustainable6.jpg',
      summary: '<p>Kwun’s SCP level 3 vs manual cleaning’s SCP 4 is confirmed: </p>'
          + '<p>Kwun’s cleaning is the only way of " Sustainable cleaning"  that increase income of power generation after cleaning ≥ cleaning cost.</p>'
    }]
    terminologyList.value=[
        {
      // name: 'Comprehensive situation efficiency',
      //     name: t('kwunq.label.comSituationEfficiency'),
      //     summary: '<p>In order to more accurately calculate the cleaning cost of the photovoltaic cleaning robot, Kwunphi Company included the following two key parameters in the cost calculation:</p>'
      //         + '<p>①Situation Efficiency 1: In the process of work, people stop, lift, turn around, change batteries, etc., resulting in efficiency loss; Situation Efficiency 1 is the ratio of actual efficiency to nominal efficiency;</p>'
      //         + '<p>②Situation Efficiency 2: The net working time of 8 hours per day, the actual working time is lost due to travel, work preparation and other reasons; Expressed as the actual working time which minus this efficiency loss divided by eight hours;</p>'
      //         + '<p>Combine the two to obtain the comprehensive efficiency of photovoltaic cleaning robot kwun in different situations, that is, the comprehensive situation efficiency.</p>'
      // }, {
      // name: 'Cleaning cost calculation——kwunq',
      name: t('foot.costCalculation') + ' —— Kwun-Q',
      summary: '<p>After cleaning test summary, combined with various costs involved in kwun, labor and vehicles, kwunphi launched a cleaning cost calculation platform close to the actual situation:</p>'
          // + '<p>kwunphi.com -> value -> kwunq</p>'
          + '<p></p>'
          + '<p>You can use it online or download excel files</p>'
    }, {
      // name: 'Most Cost Saving',
      name: t('foot.optimalCalculation'),
      summary: '<p>Relying on the [kwunq] Cleaning cost calculation, kwunphi further developed the optimal most cost saving to simply and conveniently obtain the lowest cost cleaning group:</p>'
          // + '<p>kwunphi.com -> value -> Most Cost Saving</p>'
          + '<p></p>'
    }]
  }
})

</script>

<style scoped>
.container{
  width: 100%;
}
.container-title {
  margin-top: 48px;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
}

.container-subtitle {
  font-size: 16px;
  margin-bottom: 66px;
  text-align: center;
}

.content{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.table-box {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  margin-bottom: 54px;
}

.table-pic {
  /* width: 50%;
  max-width: 540px; */
  width: 480px;
}

.table-pic img {
  width: 100%;
}

.table-desc {
  flex: 1;
  padding-bottom: 10px;
  font-size: 16px;
  margin-left: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
}

.table-desc /deep/ p {
  margin: 0;
}

.table-desc img {
  width: 100%;
}

.table-desc2 {
  margin-top: 36px;
  position: relative;
  overflow: hidden;
  flex: 1;
}

.table-desc2 img {
  position: absolute;
  left: 0;
  bottom: 0;
}



.table-tag {
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  margin: 0;
}

.table-pic .table-tag {
  text-align: center;
  display: none;
}

.table-desc .table-tag {
  margin: 6px 0 12px;
}


@media screen and (max-width: 1024px) {
  .container {
    padding-top: 24px;
  }

  .container-subtitle {
    margin-bottom: 54px;
  }
}

.link {
  color: blue;
}

.table-box {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  margin-bottom: 54px;
}

.table-pic {
  /* width: 50%;
  max-width: 540px; */
  width: 480px;
}

.table-pic img {
  width: 100%;
}

.table-desc {
  flex: 1;
  padding-bottom: 10px;
  font-size: 16px;
  margin-left: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
}

.table-desc /deep/ p {
  margin: 0;
}

.table-desc img {
  width: 100%;
}

.table-desc2 {
  margin-top: 36px;
  position: relative;
  overflow: hidden;
  flex: 1;
}

.table-desc2 img {
  position: absolute;
  left: 0;
  bottom: 0;
}



.table-tag {
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  margin: 0;
}

.table-pic .table-tag {
  text-align: center;
  display: none;
}

.table-desc .table-tag {
  margin: 6px 0 12px;
}

@media screen and (max-width: 1023px) {
  .table-pic {
    width: 50%;
  }

  .table-desc {
    font-size: 14px;
    margin-left: 18px;
    padding-bottom: 5px;
  }

  .table-desc2 {
    margin-top: 18px;
  }
}

@media screen and (max-width: 720px) {
  .table-box {
    display: block;
  }

  .table-pic {
    width: 100%;
    max-width: 1000px;
  }

  .table-pic .table-tag {
    margin-bottom: 6px;
  }

  .table-desc .table-tag {
    display: none;
  }

  .table-desc {
    padding-bottom: 0;
  }

  .table-desc2 {
    display: none;
  }

}

.terminology-list {
  max-width: 1200px;

}

.terminology-name {
  border-left: 6px solid #3AE700;
  font-size: 24px;
  font-weight: bold;
  line-height: 26px;
  padding-left: 10px;
}

.terminology-summary {
  font-size: 16px;
  margin-left: 18px;
}

.terminology-summary /deep/ a {
  color: blue;
}

.terminology-box {
  margin-bottom: 66px;
}

</style>
