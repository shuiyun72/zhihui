<template>
  <div class="login_box">
    <div class="login_top">
      <router-link tag="span" :to="{ path: '/' }" class="el-icon-close pointer"></router-link>
    </div>
    <div class="login_title">
      <i class="el-icon-mobile-phone"></i>账号登陆
    </div>
    <div class="login_body">
      <el-input v-model="input1" placeholder="请输入手机号或邮箱 " class="login_input"></el-input>
      <el-input v-model="input2" placeholder="请输入密码" class="login_input"></el-input>
      <div class="remember">
        <span class="i"></span>
        <span>记住密码（公共场合不建议使用）</span>
      </div>
    </div>
    <div class="login_btn pointer" @click="loginSuccess">立即登录</div>
    <div class="other">
      <router-link tag="span" :to="{ path: '/loginInWeChat' }" class="link">
        切换微信登陆
        <i class="iconfont icon-weixin"></i>
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
  methods: {
    loginSuccess() {
      sessionStorage.setItem("login", "1");
      this.$router.push({ path: "/home" });
    }
  }
};
</script>