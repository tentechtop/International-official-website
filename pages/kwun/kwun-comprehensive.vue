<template>
  <div class="container">
    <nav-header :title="$t('comprehensive.comprehensiveTitle')"></nav-header>
    <div class="comprehensive">
      <div class="comprehensive-container">

        <div class="container1">
          <div class="container-title">{{ $t("comprehensive.comprehensiveTitle") }}</div>
          <div class="data-list" style="justify-content: center;">
            <div v-for="(item, index) in kwunComprehensiveList" :key="index" class="comprehensive-box">
              <img :src="item" :alt="$t('seo.images.kwunComprehensiveInfo')">
            </div>
          </div>
        </div>


        <div class="container1">
          <div class="tags-title">{{ $t("kwun.extendedFunction") }}</div>
          <div class="data-list">
            <div v-for="(item, index) in exttendedFunctionList" :key="index" class="extended-function-box">
              <img :src="item.picture" :alt="item.title">
            </div>
          </div>
        </div>

      </div>



    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kwunComprehensiveList: [],
      exttendedFunctionList: []
    }
  },
  head() {
    return {
      title: this.$t("nav.kwun.comprehensive") + ' - ' + this.$t('pages.home'),
      meta: [
        { hid: "keywords", name: "keywords", content: this.$t('seo.pages.kwunComprehensiveInfo.keywords') },
        { hid: 'description', name: 'description', content: this.$t('seo.pages.kwunComprehensiveInfo.description') }
      ]
    };
  },
  created() {
    const baseUrl = "https://file.kwunphi.com/kwunphi/images/kwun_comprehensive/"
    /* if (this.$i18n.locale.startsWith('cn')) {
        this.kwunComprehensiveList.push(baseUrl + "zh/kwun_comprehensive_1.png")
        this.kwunComprehensiveList.push(baseUrl + "zh/kwun_comprehensive_2.png")
    } else {
        this.kwunComprehensiveList.push(baseUrl + "en/kwun_comprehensive_1.png")
        this.kwunComprehensiveList.push(baseUrl + "en/kwun_comprehensive_2.png")
    } */

    if (this.$i18n.locale.startsWith('cn')) {
      this.kwunComprehensiveList.push(baseUrl + "zh/comprehensive_2304_01.png")
      this.kwunComprehensiveList.push(baseUrl + "zh/comprehensive_2304_02.png")
    } else {
      this.kwunComprehensiveList.push(baseUrl + "en/comprehensive_230411_01.png")
      this.kwunComprehensiveList.push(baseUrl + "en/comprehensive_230411_02.png")
    }

    if (this.$i18n.locale.startsWith('cn')) {
      this.exttendedFunctionList.push({
        picture: baseUrl + "zh/extended-01-sweep_snow.jpg",
        title: "堒的扩展功能 - 扫雪"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "zh/extended-02-melt_snow.jpg",
        title: "堒的扩展功能 - 除雪"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "zh/extended-03_report.png",
        title: "堒的扩展功能 - 清洁报告发送"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "zh/extended-04-bg_data.png",
        title: "堒的扩展功能 - 后台数据对接"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "zh/extended-05-multi_device.png",
        title: "堒的扩展功能 - 多设备数据互联"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "zh/extended-06-external_power.jpg",
        title: "堒的扩展功能 - 外接移动电源"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "zh/extended-07-automatic_recharge.jpg",
        title: "堒的扩展功能 - 自动回充"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "zh/extended-08-outdoor_material.png",
        title: "堒的扩展功能 - 户外资材管理"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "zh/extended-09-infrared_detection.jpg",
        title: "堒的扩展功能 - 红外热斑检测"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "zh/extended-10-anti_theft.png",
        title: "堒的扩展功能 - 防盗找回"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "zh/extended-11-remote_ctrl.jpg",
        title: "堒的扩展功能 - 独立射频遥控"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "zh/extended-12-kwun_to_kwun.png",
        title: "堒的扩展功能 - 堒堒互联"
      })
    } else {
      this.exttendedFunctionList.push({
        picture: baseUrl + "en/extended-01-sweep_snow.jpg",
        title: "Kwun Extended Function - Sweep the Snow"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "en/extended-02-melt_snow.jpg",
        title: "Kwun Extended Function - Melt the Snow"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "en/extended-03_report.png",
        title: "Kwun Extended Function - Dispatch of Cleaning Reporting"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "en/extended-04-bg_data.png",
        title: "Kwun Extended Function - Background Data Interconnection"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "en/extended-05-multi_device.png",
        title: "Kwun Extended Function - Multi-device Data Communication"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "en/extended-06-external_power.jpg",
        title: "Kwun Extended Function - External Mobile Power Supply"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "en/extended-07-automatic_recharge.jpg",
        title: "Kwun Extended Function - Automatic Recharge"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "en/extended-08-outdoor_material.png",
        title: "Kwun Extended Function - Outdoor Material Management"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "en/extended-09-infrared_detection.jpg",
        title: "Kwun Extended Function - Infrared Detection"
      })
      // 英文版没有防盗功能
      // this.exttendedFunctionList.push({
      //     picture: baseUrl + "en/extended-10-anti_theft.png",
      //     title: "Kwun Extended Function - Anti-theft"
      // })
      this.exttendedFunctionList.push({
        picture: baseUrl + "en/extended-11-remote_ctrl.jpg",
        title: "Kwun Extended Function - Radio Frequency Remote Control"
      })
      this.exttendedFunctionList.push({
        picture: baseUrl + "en/extended-12-kwun_to_kwun.jpg",
        title: "Kwun Extended Function - Kwun to Kwun Interconnected"
      })
    }

  },
  methods: {
  }
}
</script>

<style scoped>
.container{
  width: 100%;
}
.comprehensive{
  padding: 48px 0 96px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.comprehensive-container{
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 1232px){
  .comprehensive-container{
    padding: 0 16px;
  }
}
.container-title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
}

.data-list {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  position: relative;
}

.comprehensive-box {
  width: 100%;
  position: relative;
}

.comprehensive-box img {
  width: 100%;
}

@media screen and (max-width: 767px) {
  .comprehensive-box {
    width: 100%;
  }
}

.tags-title {
  font-size: 24px;
  font-weight: bold;
  margin: 36px 0 18px;
  padding-left: 10px;
  /* border-left: 6px solid #193284; */
  border-left: 6px solid #f33;
  position: relative;
  overflow: hidden;
}

.extended-function-box {
  /* width: 33.333333%; */
  width: 50%;
  position: relative;
  margin-bottom: 20px;
}

.extended-function-box img {
  width: 100%;
}

@media screen and (max-width: 767px) {
  .extended-function-box {
    width: 100%;
  }
}

</style>
