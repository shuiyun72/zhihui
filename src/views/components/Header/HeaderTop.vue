<template>
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
      <el-col :span="3" :offset="14" class="text_right">客服：400-1186-800</el-col>
      <el-col :span="2" class="text_orange text_right" :offset="1">
        <span @click="linkPhone">智汇优库手机版</span>
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
#header {
  width: 100%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  .header_top {
    height: 29px;
    line-height: 29px;
    background-color: #4d4d4d;
    color: #fff;
    font-size: 14px;
    .top_side {
      width: 1200px;
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
}
</style>
