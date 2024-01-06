<template>
  <div>
    <nav-menu></nav-menu>
    <nuxt-page></nuxt-page>
    <feedback-and-suggestions></feedback-and-suggestions>
    <customer></customer>
    <foot-menu></foot-menu>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import NavMenu from "~/components/bar/nav-menu.vue";
import FootMenu from "~/components/bar/foot-menu.vue";
import FeedbackAndSuggestions from "~/components/FeedbackAndSuggestions.vue";

export default defineComponent({
  components: {FeedbackAndSuggestions, FootMenu, NavMenu}
})
</script>


<style scoped>

</style>
