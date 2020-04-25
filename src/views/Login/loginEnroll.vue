<template>
<div class="login_box login_enroll">
  <div class="login_top">
    <router-link tag="span" :to="{ path: '/' }" class="el-icon-close pointer"></router-link>
  </div>
  <div class="login_title">
    注册信息
  </div>
  <div class="login_body">
    <el-input v-model="input1" placeholder="请输入需要注册的手机号" class="login_input"></el-input>
    <el-input v-model="input1" placeholder="请输入手机验证码" class="login_input">
      <template slot="append">获取验证码</template>
    </el-input>
    <el-input v-model="input1" placeholder="请输入密码" class="login_input"></el-input>
    <el-input v-model="input1" placeholder="请确认密码 " class="login_input"></el-input>
    <div class="remember">
      <span class="i"></span><span>我已阅读并同意 <span class="link">《智汇优库用户注册协议》</span></span>
    </div>
  </div>
  <div class="login_btn pointer" @click="showDialog">
    立即注册
  </div>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="50%"
  >
    <div class="dialog_login_info">
      <div class="title">欢迎成为智汇优库会员</div>
      <div>
      <el-button class="big_blue">继续完善资料，参与互动</el-button>
      </div>
      <div>
      <el-button  class="big_blue">下次再说，浏览网页</el-button>
      </div>
    </div>
  </el-dialog>
</div>
</template>

<script>

export default {
  components: {
   
  },
  data() {
    return {
      dialogVisible:false,
      input1:"",
      input2:""
    };
  },
  methods: {
    showDialog(){
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="less">
.dialog_login_info{
  .title{
    font-size: 32px;
    text-align: center;
    padding-bottom: 30px;
    border-bottom: 1px solid #999;
  }
  width: 100%;
  margin: 0 auto;
}
.pointer{
  cursor:pointer;
}
.big_blue{
  text-align: center;
  color: #fff;
  width: 100%;
  height: 60px;
  margin: 30px auto 0;
  font-size: 26px;
  background-color: #01B0B7;
}
.login_box{
  .other{
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    i{
      font-size: 30px;
      margin-left: 10px;
    }
    padding: 20px 0;
    width: 440px;
    border-top: 1px solid #999;
    margin: 30px auto 0;
  }
  .login_btn{
    text-align: center;
    color: #fff;
    width: 300px;
    height: 60px;
    line-height: 60px;
    margin: 30px auto 0;
    font-size: 34px;
    background-color: #01B0B7;
  }
  &.login_enroll{
    width: 600px;
    background-color: #fff;
    position: absolute;
    top:100px;
    left: 50%;
    padding: 10px 20px 60px;
    .el-input-group__append{
      background-color: #01B0B7;
      color: #fff;
      font-size: 20px;
    }
  }
  
  .login_top{
    font-size: 30px;
    text-align: right;
  }
  .login_title{
    text-align: center;
    font-size: 38px;
    i{margin-right: 20px;}
  }
  .login_body{
    padding: 30px 26px 0;
    .el-input{
      input{
        height: 60px;
        line-height: 60px;
        font-size: 22px;
      }     
      margin: 10px 0;
    }
    .remember{
      .i{
        width: 20px;
        height: 20px;
        border: 1px solid #999;
        display: inline-block;
        margin-right: 20px;
        position:relative;
        top:4px;
      }
      span{
        display: inline-block;
        line-height: 32px;
        font-size: 20px;
      }
    }
  }
}
</style>
