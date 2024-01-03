<template>
  <div class="international-clients">
    <h1 style="font-weight: bold">全球客户</h1>
    <div class="cust-content">

      <div v-for="(item, index) in clientList" class="cust-item">
        <img src="https://dji-official-fe.djicdn.com/dps/33be6cbd9c55f481224489ba4f9e4fbb.png">
      </div>

    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  clientList: {
    type: Array,
    required: true,
    default: () => []
  },
});
</script>

<style scoped>
.international-clients {
  margin-top: 240px;
  height: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.cust-content {
  height: 100px;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.cust-item {}

.cust-item>img {
  width: 260px;

}
</style>
