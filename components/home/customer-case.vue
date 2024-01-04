<template>
  <div class="app">
    <div class="container">

      <div class="img-container">
        <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/customers?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=172&hei=188&qlt=95&fit=constrain">
      </div>

      <div class="intro-container">
        <h1>客户正在使用 Kwunphi 创造佳绩</h1>
        <p>了解其他组织如何使用 Kwunphi 服务进行创新和实现其目标。按行业、国家/地区和主题查找客户案例。</p>
        <nuxt-link :to="localePath('/case')" class="button-container">
          阅读客户案例
        </nuxt-link>



      </div>

    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.app{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container{
  padding: 36px;
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 400px;
}
.img-container{
  width: 30%;
  height: 100%;
}
.img-container>img{
  height: 100%;
  object-fit: cover;
}
.intro-container{
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.intro-container>h1{
  font-size: 28px;
  font-weight: 700;
}

.intro-container>p{
  margin: 16px 0;
  font-size: 16px;
  font-weight: 300;
}
.button-container{
  cursor: pointer;
  padding: 8px;
  border:1px solid #0067b8;
  color: #0067b8;
  font-weight: 700;
  transition: all 0.3s ease;
}
.button-container:hover{
  background-color: rgba(2,125,255,0.15);
}
</style>
