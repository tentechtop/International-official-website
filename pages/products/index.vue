<template>
  <div>

    你
    {{category}}


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





const category = ref(route.query.category)
console.log("n: "+route.query.category)


watch(route,(newValue)=>{

  if (route.path===localePath('/products') && newValue.query.category){



    category.value = newValue.query.category
  }

})
</script>

<style scoped>

</style>