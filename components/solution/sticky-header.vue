<template>
  <div class="stickyHeader">
    <div class="header-content">
      <nuxt-link to="/">
        <img class="header-logo" src="https://file.kwunphi.com/kwunphi4/images/icon/logo2.png" alt="" />
      </nuxt-link>
      <div class="menu-space">
        <ul>
          <li>
            <nuxt-link to="/kwun">产品</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/service">服务与支持</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/purchase">本地经销商</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/news">行业洞察</nuxt-link>
          </li>
        </ul>
      </div>



    </div>
  </div>
</template>

<script>
export default {
  name: "stickyHeader"
}
</script>

<style scoped>
.stickyHeader{
  width: 100%;
  height: 66px;
  z-index: 999;
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* 添加阴影样式 */
}
.header-content {
  width: 60%;
  min-width: 0;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.header-logo{
  margin-top: 8px;
  width: 150px;
}
.menu-space {
  margin-left: -15vw;
}
.menu-space >ul{
  display: flex;
  flex-direction: row;
}
.menu-space >ul >li{
  margin-right: 20px;
  margin-left: 20px;
}
.menu-space >ul >li >a{
  color: rgba(0,0,0,0.9);
}

@media screen  and (max-width: 1200px){

}
</style>
