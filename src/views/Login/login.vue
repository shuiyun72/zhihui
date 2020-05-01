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
.login_bg {
  background: url("~@assets/img/cimg.png") no-repeat center;
  height: 800px;
  background-size: 1920px 800px;
  position: relative;
}
.login_box {
  width: 420px;
  background-color: #fff;
  position: absolute;
  top: 100px;
  right: 200px;
  padding: 10px 20px;
  box-sizing: border-box;
  .other {
    font-size: 14px;
    display: flex;
    justify-content: space-between;

    padding: 20px 0;
    border-top: 1px solid #999;
    margin: 30px auto 0;
    i {
      font-size: 16px;
      margin-left: 10px;
    }
    .login_evm {
      font-size: 30px;
      margin-left: 10px;
      color: #000;
    }
    .mm {
      padding-top: 12px;
    }
  }
  .login_btn {
    text-align: center;
    color: #fff;
    width: 300px;
    height: 40px;
    line-height: 40px;
    margin: 30px auto 0;
    font-size: 16px;
    background-color: #01b0b7;
  }
  &.login_enroll {
    background-color: #fff;
    position: absolute;
    padding: 10px 20px 60px;
    .el-input-group__append {
      background-color: #01b0b7;
      color: #fff;
      font-size: 20px;
    }
    .login_body {
      padding: 10px 26px 0;
    }
    .login_title {
      display: flex;
      div {
        width: 50%;
        text-align: center;
        padding: 6px 0;
        border-bottom: 1px solid #999;
        &.active {
          background-color: #01b0b7;
          color: #fff;
        }
      }
    }
  }
  .login_btn_enroll {
    display: flex;
    justify-content: space-evenly;
    padding-top: 40px;
    button {
      width: 106px;
      height: 26px;
      line-height: 26px;
      border-radius: 16px;
      padding: 0;
      &.login {
        background-color: #01b0b7;
        color: #fff;
      }
    }
  }
  .login_top {
    font-size: 20px;
    text-align: right;
  }
  .login_title {
    text-align: center;
    font-size: 20px;
    i {
      margin-right: 20px;
    }
    .icon-weixin {
      font-size: 24px;
      color: #67c23a;
    }
  }
  .login_body {
    padding: 30px 26px 0;
    &.login_evm {
      text-align: center;
      .evm {
        width: 280px;
      }
    }
    .el-input {
      input {
        height: 36px;
        line-height: 36px;
        font-size: 14px;
      }
      margin: 10px 0;
    }
    .remember {
      .i {
        width: 14px;
        height: 14px;
        border: 1px solid #999;
        margin-right: 14px;
        position: relative;
        top: 2px;
        &.icon-duihao {
          font-size: 16px;
          color: transparent;
          line-height: 16px;
          &.is_agree {
            color: #f00;
          }
        }
      }
      .link {
        margin-left: 2px;
      }
      span {
        display: inline-block;
        line-height: 32px;
        font-size: 14px;
      }
    }
  }
}
</style>