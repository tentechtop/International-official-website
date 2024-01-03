<template>
 <div class="root-page">
<!-- 帮助中心的详情页  -->
   <div class="help-content">
     <div class="help-space">
       <div v-for="(item,index) in menuList" class="content-item" :id="item.herf">
         <h1 v-html="item.mainTitle.replace(/\n/g, '<br>','<nuxt-link>')"></h1>
         <h2 v-html="item.content.replace(/\n/g, '<br>','<nuxt-link>')"></h2>
         <div v-for="(sub,index) in item.subMenu" class="sub-content"  :id="sub.herf">
           <h1 v-html="sub.subTitle.replace(/\n/g, '<br>','<nuxt-link>')"></h1>
           <h2 v-html="sub.content.replace(/\n/g, '<br>','<nuxt-link>')"></h2>
         </div>
       </div>
     </div>
     <div class="directory">
       <h1>目录</h1>
       <div class="directory-content">
         <ul style="margin-left: 5px">
           <li style="margin-top: 15px;margin-bottom: 5px"
           v-for="(item,index) in menuList"
           @click="scrollToAnchor"
           >
             <a
                 style="color: rgba(0,0,0,0.75)"
                 :href="'#'+item.herf">{{ item.mainTitle }}</a>
             <ul style="margin-left: 15px">
               <li
               style="margin-top: 5px"
               v-for="(sub,index) in item.subMenu"
               @click="scrollToAnchor"
               ><a
                   style="color: rgba(0,0,0,0.65)"
                   :href="'#'+sub.herf">{{sub.subTitle}}</a></li>
             </ul>
           </li>
         </ul>
       </div>
     </div>
   </div>
   <div class="other">
     <h1>其它下载</h1>
     <h2>更多 App 下载、支持机型相关信息请访问 KwunPhi 怪虫机器人创新官网了解：「服务与支持 > 更多服务 > <nuxt-link to="/downloads"
     style="color: rgba(2,125,255)"
     >下载中心</nuxt-link>」。</h2>

     <img src="https://repair.djicdn.com/icons/contact.png">


     <div class="tag-space1">

       <h1>内容是否有帮助？</h1>

       <div class="tag-space2" >

         <div class="button-space">
           <img src="https://file.kwunphi.com/kwunphi4/images/commons/islikeicon.svg">
           <h1>是</h1>
         </div>

         <div class="button-space">
           <img style="transform: rotate(90deg)" src="https://file.kwunphi.com/kwunphi4/images/commons/islikeicon.svg">
           <h1>否</h1>
         </div>

       </div>

     </div>


   </div>




 </div>
</template>

<script lang="ts" setup>

const menuList = ref([
  {
    mainTitle:"Osmo Mobile SE 新手快速攻略",
    herf:"quick-guide",
    content:"Osmo Mobile SE 的可折叠机身配合磁吸快拆设计，可轻松展开与收纳，让你快速开拍。参考本篇内容，掌握拍摄技巧，将平凡日常的高光时刻一一捕获，拍出新鲜感。," +
        "<img style='width: 100%' src='https://dji-official-fe.djicdn.com/dps/31fccda6b73d3f6cffff44fb0da521df.jpg'>",
    subMenu:[
      {subTitle:"用户手册",herf:"user-manual",content: "拍摄好的素材还支持导入“畅片”App，海量专属视频模板等，助您轻松剪辑、快速成片，化身您的随身拍剪策划师，点击此处下载安装畅片 App。"},
      {subTitle:"用户手册",herf:"app-downloads",content: "拍摄好的素材还支持导入“畅片”App，海量专属视频模板等，助您轻松剪辑、快速成片，化身您的随身拍剪策划师，点击此处下载安装畅片 App。"},
    ]
  },
  {
    mainTitle:"产品介绍",
    herf:"product-introduction",
    content: "拍摄好的素材还支持导入“畅片”App，海量专属视频模板等，助您轻松剪辑、快速成片，化身您的随身拍剪策划师，点击此处下载安装畅片 App。",
    subMenu:[
      {subTitle:"用户手册",herf:"user-manual1",content: "拍摄好的素材还支持导入“畅片”App，海量专属视频模板等，助您轻松剪辑、快速成片，化身您的随身拍剪策划师，点击此处下载安装畅片 App。"},
      {subTitle:"用户手册",herf:"app-download1",content: "拍摄好的素材还支持导入“畅片”App，海量专属视频模板等，助您轻松剪辑、快速成片，化身您的随身拍剪策划师，点击此处下载安装畅片 App。"},
    ]
  },
  {
    mainTitle:"开箱上手",
    herf:"unboxing-getting-started",
    content: "拍摄好的素材还支持导入“畅片”App，海量专属视频模板等，助您轻松剪辑、快速成片，化身您的随身拍剪策划师，点击此处下载安装畅片 App。",
    subMenu:[
      {subTitle:"产品开箱",herf:"user-manual2",content: "拍摄好的素材还支持导入“畅片”App，海量专属视频模板等，助您轻松剪辑、快速成片，化身您的随身拍剪策划师，点击此处下载安装畅片 App。"},
      {subTitle:"展开设备",herf:"expand-device2",content: "拍摄好的素材还支持导入“畅片”App，海量专属视频模板等，助您轻松剪辑、快速成片，化身您的随身拍剪策划师，点击此处下载安装畅片 App。"},
    ]
  },

])

function scrollToAnchor(event) {
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
.root-page{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.help-content{
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.directory {
  position: sticky;
  top: 10px;
  width: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
}
.directory-content{
  width: 100%;
  height: 100%;
  border-left: 2px solid #f3f3f3;
}
.directory-content >ul >li{
  margin-top: 5px;
}

.directory >h1{
  color: rgba(0,0,0,0.45);
  font-size: 17px;
}
.content-item{
  width: 100%;
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
.content-item >h1{
  color: rgba(0,0,0,0.75);
  font-size: 25px;
  font-weight: 700;
}
.sub-content{
  margin-top: 20px;
}
.content-item >h2{
  color: rgba(0,0,0,0.75);
  font-size: 17px;
}
.sub-content >h1{
  color: rgba(0,0,0,0.75);
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 20px;
}
.sub-content >h2{
  color: rgba(0,0,0,0.75);
  font-size: 17px;
}
.help-space{
  width: 980px;
  height: auto;
}
.tag-space{
  display: flex;
  flex-direction: row;
  align-items: center;

}
.tag-space1{

  width: 100%;
  height: 100px;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.button-space{
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-left: 20px;
  background-color: rgba(230,230,230);
  border-radius: 5px;
  width: 150px;
}
.button-space:hover{

  background-color: rgba(210,210,210);

}
.button-space >img{
  height: 30px;
  display: flex;
  flex-direction: row;
}
.button-space >h1{
  font-size: 17px;
}
.tag-space2{
  margin-right: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.other{
  width: 1200px;
  display: flex;
  flex-direction: column;
}
.other >h1{
  color: rgba(0,0,0,0.75);
  font-size: 25px;
  font-weight: 700;
}
.other >h2{
  color: rgba(0,0,0,0.65);
  font-size: 19px;

}
</style>
