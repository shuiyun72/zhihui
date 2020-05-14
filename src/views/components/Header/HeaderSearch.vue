<template>
  <div class="header_main">
    <el-row>
      <el-col :span="5" class="log">
        <img :src="require('@assets/img/log.png')" alt v-show="HeaderSearch==''"/>
        <p class="search_p" v-show="HeaderSearch !=''">{{HeaderSearch}}</p>
      </el-col>
      <el-col :span="10" :offset="2">
        <el-input placeholder="热门搜索：名录、针管、直播... ..." v-model="input2">
          <template slot="append">搜索</template>
        </el-input>
      </el-col>
      <el-col :span="1" class="login" :offset="3" v-if="!isLogin">
        <router-link tag="span" :to="{ path: '/loginEnroll' }">注册</router-link>
      </el-col>
      <el-col :span="1" class="login" v-if="!isLogin">
        <router-link tag="span" :to="{ path: '/login' }">登录</router-link>
      </el-col>
      <el-col :span="2" class="radius_log" v-if="!isLogin">
        <img :src="require('@assets/img/radiusLog.png')" alt />
      </el-col>
      <el-col :span="7" class="login_in_show" v-if="isLogin">
        <i class="el-icon-chat-line-round"></i>
        <span class="login_msg">2</span>
        <i class="el-icon-arrow-down"></i>
        <span class="name">昵称：零度</span>
        <img :src="require('@assets/img/xiaoya.png')" alt />
      </el-col>
      
    </el-row>
  </div>
</template>

<script>
export default {
  props:{
    HeaderSearch:{
      default:""
    }
  },
  data() {
    return {
      input2: "",
      isLogin: false
    };
  },
  mounted() {
    if (sessionStorage.getItem("login") == 1) {
      this.isLogin = true;
    }
  },
  methods: {
    linkPhone(el) {
      console.log(el);
    }
  }
};
</script>

<style  lang="less">
.search_p{
  font-size: 16px;
  color: #27898D;
}
.login_in_show {
  font-size: 14px;
  text-align: right;
  .login_msg {
    color: #f00;
    margin: 0 3px;
  }
  .name {
    margin: 0 20px;
  }
  img{
    width: 30px;
    height: auto;
  }
}
#header {
  width: 100%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  .header_main {
    width: 1200px;
    margin: 0 auto;
    height: 80px;
    line-height: 80px;
    .el-input-group__append{
      padding: 0 30px;
      background-color: #06A8F0;
      color: #fff;
    }
    .el-input-group__append{
      border: 1px solid #06A8F0;
    }
    .login {
      text-align: right;
      font-size: 14px;
      
      span {
        cursor: pointer;
        color: #666666;
      }
    }
    .log {
      img {
        width: 158px;
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
