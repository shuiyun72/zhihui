<template>
  <div class="login_box login_enroll">
    <div class="login_top">
      <router-link tag="span" :to="{ path: '/' }" class="el-icon-close pointer"></router-link>
    </div>
    <div class="login_title">注册信息</div>
    <div class="login_body">
      <el-input v-model="input1" placeholder="请输入需要注册的手机号" class="login_input"></el-input>
      <el-input v-model="input1" placeholder="请输入手机验证码" class="login_input">
        <template slot="append">获取验证码</template>
      </el-input>
      <el-input v-model="input1" placeholder="请输入密码" class="login_input"></el-input>
      <el-input v-model="input1" placeholder="请确认密码 " class="login_input"></el-input>
      <div class="remember">
        <span class="i"></span>
        <span>
          我已阅读并同意
          <span class="link">《智汇优库用户注册协议》</span>
        </span>
      </div>
    </div>
    <div class="login_btn pointer">立即注册</div>
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