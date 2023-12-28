<template>
  <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;height: 100vh">

    s
    s
    s
    s
    s
    {{model}}


  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, onMounted, onUpdated, ref, watch} from 'vue'
import { useRoute, useRouter } from "vue-router";
const router = useRouter()
const route = useRoute()
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n()
// @ts-ignore
const localePath = useLocalePath();
// @ts-ignore
const switchLocalePath = useSwitchLocalePath();





const model = ref(route.query.model)





watch(route,(newValue)=>{
  if (route.path===localePath('/products') && newValue.query.model){
    model.value = newValue.query.model
  }

})
</script>

<style scoped>

</style>
