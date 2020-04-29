<template>
  <div class="crow2">
    <Side :isShowRightPart1="false"></Side>
    <div class="title_left_bread_sy">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>众包合作</el-breadcrumb-item>
        <el-breadcrumb-item>合作详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="box_part1_help_sy bs">
      <div class="left_img">
        <img :src="require('@assets/img/info.png')" alt />
      </div>
      <div class="right_box">
        <div class="right_content">
          <div class="box1">
            <div class="title">合作信息标题合作信息标题合作信</div>
            <p>招募截止日期：2019-12-30 00:00</p>
            <p>所在区域：上海市</p>
            <p>合作预算：230万</p>
          </div>
          <div class="box2">
            <div>帮TA置顶</div>
            <div>参与合作</div>
          </div>
        </div>
        <div class="right_foot">
          <div class="box1">
            <span>
              <i class="el-icon-star-on"></i>收藏
            </span>
            <span>
              <i class="el-icon-star-on"></i>88人关注
            </span>
          </div>
          <div class="box2">
            <div class="share">
          <!-- 这个是插件的应用，我简单写个样式 -->
          <span>分享到：</span>
          <i class="iconfont icon-QQ"></i>
          <i class="iconfont icon-QQ"></i>
          <i class="iconfont icon-QQ"></i>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Side from "@components/Side.vue";
export default {
  components: { Side },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
.crow2 {
  padding-bottom: 400px;
}
.box_part1_help_sy {
  width: 1200px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 16px 30px;
  display: flex;
  justify-content: space-between;
  .left_img {
    img {
      width: 430px;
      height: auto;
    }
  }
  .right_box {
    width: 660px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .right_content {
      display: flex;
      justify-content: space-between;
      .box1 {
        .title {
          font-size: 14px;
          font-weight: bold;
        }
        p {
          font-size: 12px;
          padding-top: 10px;
        }
      }
      .box2 {
        div{
          width:90px ;
          height: 20px;
          line-height: 20px;
          text-align: center;
          font-size: 12px;
          color: #fff;
          border-radius: 10px;
          margin-bottom: 20px;
          &:nth-child(1){
            background-color: #7E1102;
          }
          &:nth-child(2){
            background-color: #01B0B7;
          }
        }
      }
    }
    .right_foot{
      display: flex;
      justify-content: space-between;
      .box1{
      span{
        color: #666;
        margin-right: 20px;
        i{
         font-size: 20px;
         margin-right: 4px;
        }
      }
      }
      .box2{
        font-size: 12px;
      }
    }
  }
}
.title_left_bread_sy {
  width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    color: #0d15e5;
  }
  .el-breadcrumb__inner {
    color: #0d15e5;
  }
}
</style>
