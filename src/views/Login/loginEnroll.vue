<template>
  <div class="login_box login_enroll">
    <div class="login_title">
      <div class="active">个人注册</div>
      <div>企业注册</div>
    </div>
    <div class="login_body">
      <el-input v-model="input1" placeholder="请输入手机号" class="login_input">
        <template slot="append">获取验证码</template>
      </el-input>
      <el-input v-model="input1" placeholder="请输入验证码" class="login_input"></el-input>
      <el-input v-model="input1" placeholder="请输入密码" class="login_input"></el-input>
      <el-input v-model="input1" placeholder="请确认密码 " class="login_input"></el-input>
      <div class="remember">
        <span @click="isAgree = !isAgree" class="pointer">
          <span class="i iconfont icon-duihao" :class="{'is_agree':isAgree}"></span>
          <span>我已阅读并同意</span>
        </span>
        <span class="link">《智汇优库用户注册协议》</span>
      </div>
    </div>
    <div class="login_btn_enroll pointer">
      <router-link tag="span" :to="{ path: '/' }">
        <el-button>取消</el-button>
      </router-link>
      <el-button class="login" @click="showDialog">立即注册</el-button>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <div class="dialog_login_info">
        <div class="title">欢迎成为智汇优库会员</div>
        <div>
          <el-button class="big_blue">继续完善资料，参与互动</el-button>
        </div>
        <div>
          <router-link tag="span" :to="{ path: '/' }">
            <el-button class="big_blue">下次再说，浏览网页</el-button>
          </router-link>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dialogVisible: false,
      input1: "",
      input2: "",
      isAgree: false
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="less">
.dialog_login_info {
  .title {
    font-size: 32px;
    text-align: center;
    padding-bottom: 30px;
    border-bottom: 1px solid #999;
  }
  width: 100%;
  margin: 0 auto;
}

</style>
