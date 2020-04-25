<template>
  <div id="header">
    <div class="header_top">
      <el-row class="top_side">
        <el-col :span="2">
          <i class="el-icon-location icon_position"></i>
          <span class="text">河南郑州</span>
        </el-col>
        <el-col :span="2">
          <span class="text">网站导航</span>   
          <i class="el-icon-caret-bottom icon_down"></i>
        </el-col>
        <el-col :span="3" :offset="15" class="text_right">客服：400-1186-800</el-col>
        <el-col :span="2" class="text_orange text_right">
          <span @click="linkPhone">智汇优库手机版</span>
        </el-col>
      </el-row>
    </div>
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
          <span>注册</span>
        </el-col>
        <el-col :span="1" class="login">
          <span>登录</span>
        </el-col>
        <el-col :span="2" class="radius_log">
          <img :src="require('@assets/img/radiusLog.png')" alt />
        </el-col>
      </el-row>
    </div>
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

<style scoped lang="less">
#header {
  width: 100%;
  box-shadow:0px 3px 6px rgba(0,0,0,0.5);
  .header_top {
    height: 29px;
    line-height: 29px;
    background-color: #4d4d4d;
    color: #fff;
    font-size: 14px;
    .top_side {
      width: 1592px;
      margin: 0 auto;
      .icon_position {
        display: inline-block;
        padding-right: 4px;
        img {
          position: relative;
          top: -1px;
        }
      }
      .icon_down {
        padding-left: 4px;
      }
      .text_orange {
        color: #e8b407;
        span {
          cursor: pointer;
        }
      }
    }
  }
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
