<template>
  <div class="home-page" style="height: 1500px">

   <h2 style="font-weight: 500">{{$t('tentech')}}</h2>






    <div style="margin-top: 108px">
      <div v-for="(regionItem, regionIndex) in regionList" class="region-item">
        <h1>{{regionItem.title}}</h1>

        <NuxtLink v-for="(languageItem, langIndex) in regionItem.languageList" class="language-table-item"
                  :to="getTargetDomain(languageItem.language)" @click="CurrentLanguage = languageItem">

          <p>{{ languageItem.label }}</p>  /  <p>{{ languageItem.langName }}</p>

        </NuxtLink>
      </div>
    </div>





    <el-dialog title="牛逼" v-model="open" width="780px" style="height: 1600px" append-to-body>


    </el-dialog>





  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, onMounted, getCurrentInstance,onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale, locales } = useI18n()
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
import allLanguage from "~/assets/ts/language";


const regionList = ref(allLanguage.regionList)

const CurrentLanguage = ref(allLanguage.LanguageMap.get(locale.value))


const open = ref(true)


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

</script>

<style scoped>
.language-table-item{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
