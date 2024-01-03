<template>
  <div class="container">
    <div class="advantage-container">
      <h1>{{$t('foot.advantage')}}</h1>

      <div class="content">
        <advantage-card v-for="(item, index) in advantageList" :key="index" :row-num="index + 1" :title="item.title"
                        :cover="item.pictureUrl" :alt="item.pictureAlt">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="item.summary"></div>
        </advantage-card>

      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, onMounted, getCurrentInstance,onUnmounted } from "vue";
import {useI18n} from "vue-i18n";
const {t,locale} = useI18n()
const advantageList = ref()

function initData(){
  if(locale.value.startsWith('cn')){
    advantageList.value=[{
      title: '为什么催生清洁大市场？',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/advantage/bigmarket.jpg',
      summary: '<p>以往每兆瓦2000元的人工清洁可使月度电量提升3%获利1200元，电企亏钱；</p>'
          + '<p>现在堒清洁后月度电量提升8%获利3200元，成本却不足1000元，能让电企赚大钱。</p>'
          + '<p>堒打破了之前光伏清洁收益的天花板，砸穿了人工成本的铁地板，将之前“不可持续的清洁方式”转变成“可持续投入的赚钱方式”。</p>'
          + '<p>“好天气前好清洁”，堒让电企找到新的利润增长点，催生一个巨大的“光伏清洁市场”。</p>'
    }, {
      title: '为什么干净？',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/advantage/whyclean.jpg',
      summary: '<p>堒在组件上行进能满足如下严苛要求：</p>'
          + '<ul>'
          + '<li>（1）直——独有SCTCD®纠偏技术，百米直行精度±5mm, 百米四角转弯重复定位精度±10mm；</li>'
          + '<li>（2）稳——独有毫米级定位导航技术、毫秒级实时纠偏技术，清洁覆盖率≥120%；</li>'
          + '<li>（3）准——独有ACFSP®边框清洁技术，边框洁净率≥98%；</li>'
          + '</ul>'
          + '<p>因此堒能完美实现无死角清洁，水洗一次通过洁净度可达SCP 3级。</p>'
    }, {
      title: '为什么省钱？',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/advantage/whysaved.jpg',
      summary: '<p>堒最大限度满足客户省钱的要求：</p>'
          + '<ul>'
          + '<li>（1）多电站无限分享——不受地域、电站类型限制，无需建图、随到随用，实现无限分享；</li>'
          + '<li>（2）降低成本75%——将人员使用降至最低，大幅降低人员劳动强度，大幅提升工作效率，完成相同任务，成本仅为人工作业的25%；</li>'
          + '<li>（3）使用寿命长达6年，每年维护费用很少；</li>'
          + '</ul>'
          + '<p>因此堒将使用成本降到极致，成功越过“超发电”的高成本门槛。</p>'
    }, {
      title: '为什么好用？',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/advantage/whyconvenient.jpg',
      summary: '<p>无论是清洁公司、EPC还是电站业主，堒能满足各种客户需求：</p>'
          + '<ul>'
          + '<li>（1）适用任何光伏电站——屋顶、高桩、漂浮、地面电站皆可使用，不再让客户因不同的电站选择不同的设备而烦恼，一台堒可以洁净天下光伏电站；</li>'
          + '<li>（2）全天候作业——白天、夜晚、雨天、冬天皆可使用；</li>'
          + '<li>（3）安全——超越人眼视距范围自主作业；突破人力心理、生理极限自主作业；</li>'
          + '<li>（4）简单——傻瓜式一键操作、现场维修简单、搬移轻松便利、拆装简便；</li>'
          + '</ul>'
          + '<p>因此堒能成为遍布全球的光伏清洁利器，为客户创造最大发电价值。</p>'
    }, {
      title: '为什么能预测最优成本？',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/advantage/whypredict.jpg',
      summary: '<p>不同场景清洁效率会不同，但堒始终能事前精确测算最优使用成本：</p>'
          + '<ul>'
          + '<li>（1）堒基本靠AI能力处理问题发挥机器稳定的优势，免除靠人控制带来的弊端；</li>'
          + '<li>（2）堒总能以恒定的速度、规划路径、清洁效果完成清洁；</li>'
          + '<li>（3）自问世以来堒已积累超过1G瓦的清洁经验，获取了各种场景可靠的清洁效率数据；</li>'
          + '<li>（4）怪虫公司擅长对数据的分析处理可推演出各种预测算法；</li>'
          + '</ul>'
          + '<p>因此堒能事前测算出最优成本便于客户做好精细化管理。</p>'
    }]
  }
  else {
    advantageList.value=[{
      title: 'Why can Kwun create a big market for cleaning?',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/advantage/bigmarket.jpg',
      summary: '<p>In the past, manual cleaning of 2000 yuan per megawatt can monthly increase the electricity by 3% and earn 1200 yuan, so the electricity companies lose money.</p>'
          + '<p>Now Kwun’s cleaning monthly increase the electricity by 8% and earn 3200 yuan, the cost is less than 1000 yuan, so the electricity companies make a lot of money.</p>'
          + '<p>Kwun broke the profit ceiling, smashed through iron floor of cost, then turned the "unsustainable cleaning way" into a "sustainable cleaning way that can make money."</p>'
          + '<p>"Before the good weather, good cleaning" ,Kwun let electricity companies find new Growth point of profit, creating a huge " photovoltaic cleaning market".</p>'
          + '<p style="margin-top: 12px;"><a href="/kwun/sustainable">Link extends to "Sustainable Cleaning way"</a></p>'
    }, {
      title: 'Why clean?',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/advantage/whyclean.jpg',
      summary: '<p>Kwun who operating on the pv panels can meet the requirements as follows:</p>'
          + '<ul>'
          + '<li>(1) Straight - unique SCTCD® deviation correction technology, 100 meters straight running accuracy ±5mm, 100 meters four corners turn repeated positioning accuracy ±10mm;</li>'
          + '<li>(2) Stability -- unique millimeter-level positioning and navigation technology, millisecond level real-time correction technology, Cleaning coverage rate ≥120%;</li>'
          + '<li>(3) Precise - unique ACFSP® frame cleaning technology, frame cleaning rate ≥98%;</li>'
          + '</ul>'
          + '<p>Therefore Kwun can perfect realization no dead space cleaning, cleanliness of SCP level 3.</p>'
    }, {
      title: 'Why saved?',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/advantage/whysaved.jpg',
      summary: '<p>Kwun utmost satisfy the requirements of customers to save money:</p>'
          + '<ul>'
          + '<li>(1) Unlimited sharing of multiple power stations -- unlimited sharing is not limited by region or power station type, no need to map, and can be used as needed;</li>'
          + '<li>(2) Reduce the cost by 75% -- reduce the use of personnel to the minimum, greatly reduce the labor intensity of personnel, greatly improve the work efficiency, to complete the same task, the cost is only 25% of manual operation;</li>'
          + '<li>(3) The service life is up to 6 years, and the annual maintenance cost is very low;</li>'
          + '</ul>'
          + '<p>Kwun will therefore reduce the cost of use to the extreme, successfully crossed the high cost of threshold for "Most generation".</p>'
    }, {
      title: 'Why convenient?',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/advantage/whyconvenient.jpg',
      summary: '<p>O&M or EPC and power station owner, Kwun can satisfy the various needs of customers:</p>'
          + '<ul>'
          + '<li>(1) Apply to any photovoltaic power station, and high pile, floating ,roof, ground station all can use, not to annoy the customer because of the different plant choose different equipment, a Kwun can clean the world’s photovoltaic power station;</li>'
          + '<li>(2) All-weather operation -- day, night, rain, winter can be used;</li>'
          + '<li>(3) Safety -- operate autonomously beyond the visual range of human eyes; Break through human psychological and physical limits to operate autonomously;</li>'
          + '<li>(4) Simple -- simple-to-operate, on-site maintenance is simple, easy to move, easy to disassemble and assemble;</li>'
          + '</ul>'
          + '<p>Therefore Kwun can become a global pv panel cleaning tool, create biggest generating value for customers.</p>'
    }, {
      title: 'Why can Kwun predict the optimal cost?',
      pictureUrl: 'https://file.kwunphi.com/kwunphi/images/advantage/whypredict.jpg',
      summary: '<p>Different situation cleaning efficiency will be different, but Kwun consistently accurate calculate the optimal cost in advance:</p>'
          + '<ul>'
          + '<li>(1) Kwun rely on AI capable of handling problems to take advantage of the stability of the machine, avoid drawbacks on human control;</li>'
          + '<li>(2) Kwun can always at a constant speed, path planning, cleaning effect to complete clean;</li>'
          + '<li>(3) Since the advent of Kwun has accumulated more than 1 GW cleaning experience, obtained the cleaning efficiency of various situations and reliable data;</li>'
          + '<li>(4) Kwunphi Company is good at data analysis and processing and can deduce various prediction algorithms;</li>'
          + '</ul>'
          + '<p>Therefore Kwun can measure the optimal cost, provides great convenience which completes the elaborating management for our customers.</p>'
    }]
  }

  for (let key = 0; key < advantageList.value.length; key++) {
    const advantage = advantageList.value[key]
    const name = 'seo.images.kwunAdvantage.advantage' + (key + 1)
    const alt = t(name)
    advantage.pictureAlt = alt === name ? "" : alt
  }

}

onMounted(()=>{
  initData()
})
</script>

<style scoped>
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.advantage-container{
  padding: 48px 0 96px;
  width: 100%;
  max-width: 1200px;
}
.content{
  margin-top: 72px;
}
.advantage-container>h1{
  text-align: center;
  font-weight: 700;
  font-size: 36px;
}
@media screen and (max-width: 1232px){
  .advantage-container{
    padding: 0 16px;
  }

}

</style>
