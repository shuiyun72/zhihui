<template>
    <div class="header_main">
      <el-row>
        <el-col :span="3" class="log">
          <img :src="require('@assets/img/log.png')" alt />
        </el-col>
        <el-col :span="10" :offset="4">
          <el-input placeholder="热门搜索：名录、针管、直播... ..." v-model="input2">
            <template slot="append">搜索</template>
          </el-input>
        </el-col>
        <el-col :span="1" class="login"  :offset="3">
          <router-link tag="span" :to="{ path: '/loginEnroll' }">注册</router-link>
        </el-col>
        <el-col :span="1" class="login">
          <router-link tag="span" :to="{ path: '/login' }">登录</router-link>
        </el-col>
        <el-col :span="2" class="radius_log">
          <img :src="require('@assets/img/radiusLog.png')" alt />
        </el-col>
      </el-row>
    </div>
</template>

<script>
import * as Const from "@/common/const";
export default {
  data() {
    return { 
      input2:""  
    };
  },
  methods: {
    linkPhone(el){
      console.log(el)
    }
  }
};
</script>

<style  lang="less">
#header {
  width: 100%;
  box-shadow:0px 3px 6px rgba(0,0,0,0.5);
  .header_main {
    width: 1600px;
    margin: 0 auto;
    height: 105px;
    line-height: 105px;
    .login{
      text-align: right;
      span{
        cursor: pointer;
        color: #666666;
      }
    }
    .log {
      img {
        width: 206px;
        
      }
    }
    .radius_log {
      text-align: right;
      img {
        width: 81px;
        height: 81px;
      }
    }
  }
}
</style>
