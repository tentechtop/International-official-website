<template>
  <div class="contact-us">
    <img src="https://file.kwunphi.com/kwunphi4/images/commons/about.png">
    <h1>{{ $t('contact.contactUs') }}</h1>
    <div class="space">
      <ul>
        <li @click="scrollToAnchor"><a href="#buy-consult">{{ $t('contact.purchase') }}</a></li>
        <li>|</li>
        <li @click="scrollToAnchor"><a href="#service-support">{{ $t('contact.service') }}</a></li>
        <li>|</li>
        <li @click="scrollToAnchor"><a href="#business-cooperation">{{ $t('contact.Business') }}</a></li>
        <li>|</li>
        <li @click="scrollToAnchor"><a href="#domestic-international-branches">{{ $t('contact.recruit') }}</a></li>
      </ul>
    </div>
    <!-- 页面内容 -->
    <div id="buy-consult" class="contact-content">
      <div class="information">
        <h2>{{ $t('contact.purchase') }}</h2>
        <div v-for="(item,index) in purchaseConsulting" class="info-item">
          <h2>{{$t(item.title)}}:</h2>
          <nuxt-link v-if="item.router" :to="item.router">{{ $t(item.label)}}</nuxt-link>
          <span v-else-if="item.label">{{ $t(item.label)}}</span>
          <a v-if="item.email" :href="`mailto:`+item.email">{{ item.email}}</a>
          <a v-if="item.phone" :href="`tel:`+item.phone">{{ item.phone}}</a>
        </div>
      </div>
    </div>
    <!-- 这里是购买与咨询的内容 -->
    <div id="service-support" class="contact-content">
      <div class="information">
        <h2>{{ $t('contact.service') }}</h2>
        <div v-for="(item,index) in serviceList" class="info-item">
          <h2>{{$t(item.title)}}:</h2>
          <nuxt-link v-if="item.router" :to="localePath(item.router)">{{ $t(item.label)}}</nuxt-link>
          <span v-else-if="item.label" >{{ $t(item.label)}}</span>
          <a v-if="item.email" :href="`mailto:`+item.email">{{ item.email}}</a>
          <a v-if="item.phone" :href="`tel:`+item.phone">{{ item.phone}}</a>
        </div>
      </div>
    </div>
    <!-- 这里是服务与支持的内容 -->
    <div id="business-cooperation" class="contact-content">
      <div class="information">
        <h2>{{ $t('contact.Business') }}</h2>
        <div v-for="(item,index) in businessList" class="info-item">
          <h2>{{$t(item.title)}}:</h2>
          <nuxt-link v-if="item.router" :to="localePath(item.router)">{{$t(item.label)}}</nuxt-link>
          <span v-else-if="item.label" >{{ $t(item.label)}}</span>
          <a v-if="item.email" :href="`mailto:`+item.email">{{ item.email}}</a>
          <a v-if="item.phone" :href="`tel:`+item.phone">{{ item.phone}}</a>
        </div>
      </div>
    </div>
    <div id="domestic-international-branches" class="contact-content">
      <div class="information">
        <h2>{{ $t('contact.recruit') }}</h2>
        <div v-for="(item,index) in recruitList" class="info-item">
          <h2>{{$t(item.title)}}:</h2>
          <nuxt-link v-if="item.router" :to="localePath(item.router)">{{$t(item.label)}}</nuxt-link>
          <span v-else-if="item.label">{{ $t(item.label)}}</span>
          <a v-if="item.email" :href="`mailto:`+item.email">{{ item.email}}</a>
          <a v-if="item.phone" :href="`tel:`+item.phone">{{ item.phone}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t, locale, locales } = useI18n()

useHead({
  title: t('contact.contactUs'),
  meta: [
    {name: 'keywords', content: t('seo.pages.contact.keywords') },
    {name: 'description', content: t('seo.pages.contact.description') }
  ],
})





//购买与咨询  label 用于地址 电话  email用于邮箱等
const purchaseConsulting = ref([
  {title:"contact.ServiceCalls",label:"",router:"",email:"",phone:"4008786861"},
  {title:"contact.purchase",label:"",router:"",email:"sales@kwunphi.com",phone:""},

])

const serviceList = ref([
  {title:"contact.ServiceCalls",label:"",router:"",email:"",phone:"4008786861"},
  {title:"contact.TechnicianPhone",label:"",router:"",email:"support@kwunphi.com",phone:""},
  {title:"contact.Address",label:"company.Shenzhen.address",router:"",email:"",phone:""},
])


const businessList =ref([
  {title:"contact.Business",label:"",router:"",email:"market@kwunphi.com",phone:""},
  {title:"contact.SalesChannel",label:"",router:"",email:"partner@kwunphi.com",phone:""},
  {title:"contact.vendor",label:"",router:"",email:"scm@kwunphi.com",phone:""},
  {title:"contact.Address",label:"company.Shenzhen.address",router:"",email:"",phone:""},
])

const recruitList = ref([
  {title:"contact.recruit",label:"",router:"",email:"hr@kwunphi.com",phone:""},
  {title:"contact.MediaCooperation",label:"contact.ClickHere",router:"/service",email:"",phone:""},
  {title:"customer.leaveMessage",label:"contact.ClickHere",router:"/leave-message",email:"",phone:""},

])

function  scrollToAnchor(event) {
  event.preventDefault();
  const target = event.target.getAttribute('href');
  const element = document.querySelector(target);
  if (element) {
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
.contact-us{
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-bottom: 50px;
}
.contact-us >img{
  width: 100%;
}
.contact-us>h1{
  font-weight: 700;
  margin-top: 48px;
}
.space{
  min-height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.space > ul{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.space >ul > li{
  margin: 10px;
  font-size: 20px;
}
.space >ul > li >a{
  color: black;
}
.space >ul > li >a:hover{
  color: rgba(2,125,255);
}
.contact-content{
  width: calc(100% - 32px);
  max-width: 1200px;
  padding-top: 80px;
  height: auto;
  display: flex;
  flex-direction: column;
}
.contact-content >h2{
  font-weight: 700;
}
.txt>h2{
  font-weight: 700;
}
.information {
  margin-left: 180px;
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.information>h2 {
  margin-bottom: 16px;
  padding: 8px 0;
}
.split-line{
  height: 1px;
  width: 100%;
  color: black;
}
.info-item {
  flex-basis: 100%; /* 设置子元素的初始宽度，使每行只显示两个元素 */
  min-height: 40px;
  margin-bottom: 2px;
  /* display: flex;
  flex-direction: row;
  align-items: center; */
}
.info-item >*{
  font-size: 16px;
  color: rgb(2, 125, 255);
  display: inline;
  flex-wrap: wrap;
}
.info-item>h2 {
  white-space: nowrap;
  margin-right: 0.5em;
  color: rgba(0,0,0,0.8);

}

@media screen and (max-width: 1024px){
  .contact-content{
    padding-top: 32px;
  }
  .contact-content >h2{
    font-size: 24px;
  }
  .space{
    width: calc(100% - 32px);
  }
  .contact-content >h2{
    font-size: 24px;
  }
  .information {
    margin-left: 100px;
  }
}
@media screen and (max-width: 767px){
  .info-item {
    flex-basis: 100%; /* 设置子元素的初始宽度，使每行只显示两个元素 */
    min-height: 40px;
  }
  .space >ul > li{
    margin: 5px;
    font-size: 14px;
  }
  .space >ul > li >a{
    color: black;
  }
  .contact-us>h1{
    font-size: 28px;
  }
  .information {
    margin-left: 0;
  }
  .contact-content{
    padding-top: 40px;
  }
  .contact-content >h2{
    font-size: 20px;
  }
}

@media screen and (max-width: 480px){
  .info-item >h2{
    font-size: 14px;
  }

  .info-item >a{
    font-size: 14px;
  }
  .info-item {
    min-height: 20px;
  }
  .contact-content >h2{
    margin-bottom: 8px;
  }
  .space >ul > li{
    margin: 2px;
    font-size: 12px;
  }

  .contact-us>h1{
    font-size: 24px;
  }
  .contact-content >h2{
    font-size: 16px;
  }
  .contact-content{
    padding-top: 36px;
  }


}
</style>
