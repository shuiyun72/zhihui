<template>
  <div class="login_box">
    <div class="login_top">
      <router-link tag="span" :to="{ path: '/' }" class="el-icon-close pointer"></router-link>
    </div>
    <div class="login_title">
      <i class="iconfont icon-weixin"></i>扫码登陆
    </div>
    <div class="login_body login_evm">
      <img :src="require('@assets/img/evm.png')" class="evm" />
    </div>
    <div class="other">
      <router-link tag="span" :to="{ path: '/loginIn' }" class="link">
        手机验证登陆
        <i class="el-icon-mobile-phone login_evm"></i>
      </router-link>
      <router-link tag="span" :to="{ path: '/loginFind' }" class="link mm">忘记密码</router-link>
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


