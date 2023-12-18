<template>
  <div class="home-page">

    {{$t('tentech')}}
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, onMounted, getCurrentInstance,onUnmounted } from "vue";
const { proxy } = getCurrentInstance();
import { useI18n } from "vue-i18n";
const { t } = useI18n()





</script>

<style scoped>

</style>
