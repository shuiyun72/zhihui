<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@components/Footer.vue";

export default {
  components:{
    Footer
  },
  props: {
    msg: String
  }
}
</script>
<style lang="less">

</style>
