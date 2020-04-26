<template>
  <div class="login_box">
    <div class="login_top">
      <router-link tag="span" :to="{ path: '/' }" class="el-icon-close pointer"></router-link>
    </div>
    <div class="login_title">
      <i class="iconfont icon-weixin"></i>账号登陆
    </div>
    <div class="login_body login_evm">
      <img :src="require('@assets/img/evm.png')" class="evm" />
    </div>
    <div class="other">
      <router-link tag="span" :to="{ path: '/loginIn' }" class="link">
        使用手机验证登陆
        <i class="el-icon-mobile-phone login_evm"></i>
      </router-link>
      <router-link tag="span" :to="{ path: '/loginFind' }" class="link">忘记密码</router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      input1: "",
      input2: ""
    };
  },
  methods: {}
};
</script>

<style lang="less">
.login_box {
  .other {
    .login_evm {
      font-size: 30px;
      margin-left: 10px;
      color: #000;
    }
  }
  width: 500px;
  background-color: #fff;
  position: absolute;
  top: 100px;
  right: 200px;
  padding: 10px 20px;
  .login_top {
    font-size: 30px;
    text-align: right;
  }
  .login_title {
    text-align: center;
    font-size: 38px;
    i {
      margin-right: 20px;
    }
    .icon-weixin {
      font-size: 40px;
      color: #67c23a;
    }
  }
  .login_body {
    &.login_evm {
      text-align: center;
      .evm {
        width: 280px;
      }
    }
  }
}
</style>
