<template>
  <div>
    <nav-menu></nav-menu>
    <nuxt-page></nuxt-page>
    <foot-menu></foot-menu>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import NavMenu from "~/components/bar/nav-menu.vue";
import FootMenu from "~/components/bar/foot-menu.vue";

export default defineComponent({
  components: {FootMenu, NavMenu}
})
</script>


<style scoped>

</style>
