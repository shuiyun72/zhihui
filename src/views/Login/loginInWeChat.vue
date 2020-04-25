<template>
<div class="login_box">
  <div class="login_top">
    <router-link tag="span" :to="{ path: '/' }" class="el-icon-close pointer"></router-link>
  </div>
  <div class="login_title">
    <i class="iconfont icon-weixin"></i>账号登陆
  </div>
  <div class="login_body login_evm">
    <img :src="require('@assets/img/evm.png')" class="evm">
  </div>
  <div class="other">
    <router-link tag="span" :to="{ path: '/loginIn' }" class="link">使用手机验证登陆<i class="el-icon-mobile-phone login_evm"></i></router-link>
    <router-link tag="span" :to="{ path: '/' }"  class="link">忘记密码</router-link>
  </div>
</div>
</template>

<script>

export default {
  components: {
   
  },
  data() {
    return {
      input1:"",
      input2:""
    };
  },
  methods: {}
};
</script>

<style lang="less">
.login_box{
  .other{
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    .login_evm{
      font-size: 30px;
      margin-left: 10px;
      color: #000;
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
  width: 500px;
  background-color: #fff;
  position: absolute;
  top:100px;
  right: 200px;
  padding: 10px 20px;
  .login_top{
    font-size: 30px;
    text-align: right;
  }
  .login_title{
    text-align: center;
    font-size: 38px;
    i{margin-right: 20px;}
    .icon-weixin{
      font-size: 40px;
      color: #67c23a;
    }
  }
  .login_body{
    &.login_evm{
      text-align: center;
      .evm{
        width: 280px;
      }
    }
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
