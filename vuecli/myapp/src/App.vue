<template>
  <div id="app">
     <navigation />
    <router-view/>
  </div>
</template>

<style>

</style>
<script>
import navigation from '@/components/Navigation.vue'
export default {
  components:{
    navigation
  }
}
</script>
