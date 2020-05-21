<template>
  <div id="app">
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@components/Footer.vue";

export default {
  components: {
    Footer
  },
  props: {
    msg: String
  }
};
</script>
<style lang="less">
.el-table {
  width: 100%;
  .el-table__header {
    width: 100% !important;
  }
  .el-table__body {
    width: 100% !important;
  }
}
</style>
