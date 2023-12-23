<template>
  <div>
    <nav-menu></nav-menu>
    <nuxt-page></nuxt-page>

  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import NavMenu from "~/components/bar/nav-menu.vue";

export default defineComponent({
  components: {NavMenu}
})
</script>


<style scoped>

</style>
