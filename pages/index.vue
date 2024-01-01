<template>
  <div class="root_node_container" >

    <div class="home-banner">


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
/*@import '../styles/page/home.css';*/
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
