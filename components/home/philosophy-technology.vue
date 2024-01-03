<template>
  <div class="app">






  </div>
</template>

<script lang="ts" setup>
import { ref,defineProps} from "vue";







const props = defineProps({
  philosophyTechnologyList: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>
.app{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}




</style>
