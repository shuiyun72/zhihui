<template>
  <div class="header_main header_log">
    <el-row>
      <el-col :span="7" class="log">
        <router-link tag="span" :to="{ path: '/home' }" class="link">
          <img :src="require('@assets/img/log.png')" alt />
        </router-link>
        <!-- <span class="login_text">免费注册</span> -->
      </el-col>
      <el-col :span="4" class="login_header" :offset="13">
        <span>没有账号，</span>
        <router-link tag="span" :to="{ path: '/loginEnroll' }" class="link">我要注册</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2: ""
    };
  },
  methods: {
    linkPhone(el) {
      console.log(el);
    }
  }
};
</script>

<style  lang="less">
.link {
  color: #0765e5;
  cursor: pointer;
}
#header {
  width: 100%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  .header_main {
    width: 1200px;
    margin: 0 auto;
    line-height: 65px;
    .login_header {
      padding-top: 10px;
      font-size: 16px;
      color: #999;
      .link {
        color: #0765e5;
      }
    }
    .login {
      text-align: right;
      span {
        cursor: pointer;
        color: #666666;
      }
    }
    .log {
      img {
        width: 158px;
      }
      .login_text {
        font-size: 38px;
        margin-left: 30px;
        padding-left: 24px;
        border-left: 1px solid #666;
        color: #666;
        position: relative;
        top: 14px;
      }
    }
    .radius_log {
      text-align: right;
      img {
        width: 56px;
        height: auto;
      }
    }
  }
}
</style>
