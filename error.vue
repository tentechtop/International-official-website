<template>
  <div class="common-page">
    <el-empty :description="error.statusCode" />

    错误
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['error'])







</script>

<style lang="less" scoped>
.common-page {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  // justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  &::after {
    pointer-events: none;
    content: '';
    position: absolute;
    bottom: -30vh;
    left: 0;
    height: 40vh;
    width: 100%;
    background: linear-gradient(45deg, #00dc82 0%, #36e4da 50%, #0047e1 100%);
    filter: blur(20vh);
  }
  .b-text {
    margin-top: -70px;
  }
}
.error-content {
  text-align: center;
  padding: 2rem;
  z-index: 2;
  margin-top: -15vh;
}
.home-link {
  background-color: #007bff;
  border-radius: 5px;
  color: #fff;
  display: inline-block;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: background-color 0.2s;
}

.home-link:hover {
  background-color: #0056b3;
}
</style>
