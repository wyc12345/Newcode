<template>
  <div id="app">
    <navigation :navVal="activeNav"/>
    <router-view @changeNav="change"/>
  </div>
</template>

<style>

</style>
<script>
import navigation from '@/components/Navigation.vue'
export default {
   data () {
    return {
      activeNav:{
        title:"电影",
        className:"movie"
      }  
    }
  },
  methods: {
    change(obj){
      this.activeNav.title = obj.title;
      this.activeNav.className = obj.className;
    }
  },
  components: {
    navigation
  }
}
</script>
