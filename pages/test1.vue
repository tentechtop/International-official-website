<template>
  <div class="home-page" style="height: 1500px">

    <h2 style="font-weight: 400">{{$t('tentech')}}</h2>






    <div style="margin-top: 108px">
      <div v-for="(regionItem, regionIndex) in regionList" class="region-item">
        <h1 style="font-weight: 400">{{regionItem.title}}</h1>

        <NuxtLink v-for="(languageItem, langIndex) in regionItem.languageList" class="language-table-item"
                  :to="getTargetDomain(languageItem.language)" @click="CurrentLanguage = languageItem">

          <p>{{ languageItem.label }}</p>  /  <p>{{ languageItem.langName }}</p>

        </NuxtLink>
      </div>
    </div>



    <nuxt-link :to="localePath('/test')">test页面</nuxt-link>

    <nuxt-link :to="localePath('/test1')">test2页面</nuxt-link>

    <el-dialog title="牛逼" v-model="open" width="780px" style="height: 1600px" append-to-body>


    </el-dialog>

    <p v-if="gushiciData" class="content animate__animated"  >{{ gushiciData.content }}</p>


    <div class="testDiv content animate__animated" v-loadByAnimate v-for="(item,index) in 5" >

    </div>


  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, onMounted, getCurrentInstance,onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale, locales } = useI18n()
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
import allLanguage from "~/assets/ts/language";
import { gushici } from '../api/home'



const { data: gushiciData } = await useAsyncData('gushici_Get', () => gushici())










onMounted(()=>{
  console.log(" ________                        __                          __       \n" +
      "|        \\                      |  \\                        |  \\      \n" +
      " \\$$$$$$$$  ______   _______   _| $$_     ______    _______ | $$____  \n" +
      "   | $$    /      \\ |       \\ |   $$ \\   /      \\  /       \\| $$    \\ \n" +
      "   | $$   |  $$$$$$\\| $$$$$$$\\ \\$$$$$$  |  $$$$$$\\|  $$$$$$$| $$$$$$$\\\n" +
      "   | $$   | $$    $$| $$  | $$  | $$ __ | $$    $$| $$      | $$  | $$\n" +
      "   | $$   | $$$$$$$$| $$  | $$  | $$|  \\| $$$$$$$$| $$_____ | $$  | $$\n" +
      "   | $$    \\$$     \\| $$  | $$   \\$$  $$ \\$$     \\ \\$$     \\| $$  | $$\n" +
      "    \\$$     \\$$$$$$$ \\$$   \\$$    \\$$$$   \\$$$$$$$  \\$$$$$$$ \\$$   \\$$\n" +
      "                                                                      \n" +
      "                                                                      \n" +
      "                                                                      ")
})

const regionList = ref(allLanguage.regionList)

const CurrentLanguage = ref(allLanguage.LanguageMap.get(locale.value))


const open = ref(false)


// @ts-ignore
function getTargetDomain(language) {
  let domain
  // @ts-ignore
  if (locales && locales.length) {
    let defaultDomain
    // @ts-ignore
    for (let index = 0; index < locales.length; index++) {
      // @ts-ignore
      let item = locales[index]
      if (item.code === language) {
        domain = item.domain
        if (domain) {
          break;
        }
      } else if (item.code === 'en') {
        defaultDomain = item.code
      } else if (!defaultDomain && item.code.startsWith('en')) {
        defaultDomain = item.code
      }
    }
    if (!domain && defaultDomain) {
      domain = defaultDomain
    }
    if (domain) {
      return domain
    }
  }
  return switchLocalePath(language)
}





useHead({
  title: t('seo.pages.home.title'),
  meta: [
    {name: 'keywords', content: t('seo.pages.home.keywords') },
    {name: 'description', content: t('seo.pages.home.description') }
  ],
})
</script>

<style scoped>
.language-table-item{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}
.testDiv{
  width: 100%;
  background-color: #55a532;
  height: 500px;
  margin-bottom: 20px;
}
</style>
