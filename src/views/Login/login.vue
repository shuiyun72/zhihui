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
  },
};
</script>
<style lang="less">
.login_bg{
    background:url('~@assets/img/login.jpg')  no-repeat center;
    height: 1280px;
    position:relative;
}
</style>