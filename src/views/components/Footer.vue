<template>
  <div id="footer">
    <el-row class="part1">
      <el-col :span="8" class="part1_left" :offset="1">
        <img :src="require('@assets/img/footlog.png')" alt />
        <p>全国统一服务热线：</p>
        <h3>400-118-6800</h3>
      </el-col>
      <el-col :span="12" class="part1_right" :offset="2">
        <div class="foot_item" v-for="(item,index) in footList" :key="index+'i'">
          <div class="title">{{item.title}}</div>
          <!-- {text:"智汇币攻略",url:"",isBlank:false,isA:true}, -->
          <p v-for="(child,indexl) in item.children" :key="indexl+'z'">
            <a
              :href="child.url"
              v-if="child.isA"
              :target="{'_blank':child.isBlank}"
              class="foot_span"
            >{{child.text}}</a>
            <span v-else class="foot_span">{{child.text}}</span>
          </p>
        </div>
      </el-col>
    </el-row>
    <div class="part2 clearfix">
      <span class="left">友情链接：</span>
      <div class="center">
        <a :href="item.url" v-for="(item,index) in footImgList" :key="index">
          <img :src="require('@assets/img/'+item.img)" />
        </a>
      </div>
      <span class="right">添加友情链接请联系客服</span>
    </div>
    <div class="part3">
      <a href>www.zhyook.com</a>
      版权所有 ICP经营许可证豫ICP备88888888号 网络文化经营许可证号：HN7288898988号
    </div>
  </div>
</template>

<script>
import * as Const from "@/common/const";
export default {
  data() {
    return {
      footList: Const.footList,
      footImgList: Const.footImgList
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
#footer {
  width: 100%;
  height: 641px;
  padding: 70px 100px 50px;
  background-color: #666666;
  box-sizing: border-box;
  .part1 {
    padding-bottom: 80px;
    border-bottom: 1px solid #111;
    .part1_left {
      text-align: center;
      p {
        font-size: 24px;
        color: #fff;
        opacity: 0.5;
        padding: 21px 160px 10px 0;
      }
      h3 {
        font-size: 58px;
        color: #fff;
      }
    }
    .part1_right {
      display: flex;
      justify-content: space-between;
      .foot_item {
        .title {
          font-size: 24px;
          color: #eee;
          width: 121px;
          padding-bottom: 16px;
          border-bottom: 2px solid #999;
        }
        .foot_span {
          color: #999;
          font-size: 18px;
          margin-top: 12px;
          display: inline-block;
        }
      }
    }
  }
  .part2 {
    margin-top: 36px;
    line-height: 50px;
    .left {
      width: 120px;
      float: left;
      font-size: 24px;
      color: #fff;
    }
    .center {
      float: left;
      a {
        display: inline-block;
        margin-right: 18px;
      }
    }
    .right {
      float: right;
      width: 266px;
      font-size: 18px;
      color: #999;
    }
  }
  .part3 {
    padding-top: 60px;
    font-size: 18px;
    color: #fff;
    text-align: center;
    a {
      color: #fff;
      display: inline-block;
      margin-right: 40px;
    }
  }
}
</style>
