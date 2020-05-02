<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderLogin></HeaderLogin>
    </div>
    <div class="login_bg">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@components/Header/HeaderTop.vue";
import HeaderLogin from "@components/Header/HeaderLogin.vue";
export default {
  components: {
    HeaderTop,
    HeaderLogin
  }
};
</script>
<style lang="less">

</style>