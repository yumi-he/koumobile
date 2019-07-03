<template>
  <div id="app">
    <router-view/>
    <FooterGuider/>
  </div>
</template>

<script>
import FooterGuider from './components/FooterGuider/FooterGuider.vue'

export default {
  name: 'App',
  components:{
    FooterGuider
  }
}
</script>

<style lang="scss" scoped>
  #app{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    position: relative;
    overflow-x: hidden; /*去掉中间组件滑动时的横向滚动条*/
    overflow-y: auto;
    padding-bottom: 150px;
  }
  .app-container {


  }
</style>
