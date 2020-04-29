<template>
  <div>
    <div id="leftside">
      <div class="bs">
        <div class="is_active item_box">
          <div class="item">
            采购
            <br />订单
          </div>
          <div class="span">10</div>
        </div>
        <div class="is_active item_box">
          <div class="item">
            我的
            <br />购物车
          </div>
        </div>
        <div class="item_box">
          <div class="item">
            添加
            <br />尾货
          </div>
        </div>
        <div class="item_box">
          <div class="item_last">
            立即
            <br />发货
          </div>
          <div class="span">10</div>
        </div>
      </div>
      <div class="left_add bs">
        立即
        <br />发布
      </div>
    </div>
    <div id="rightside">
      <div class="part1" v-show="isShowRightPart1">
        <div class="item_box">
          <div class="item">
            平台
            <br />首页
          </div>
        </div>
        <div class="item_box is_active">
          <div class="item">
            尾货
            <br />专场
          </div>
        </div>
        <div class="item_box">
          <div class="item">
            项目
            <br />信息
          </div>
        </div>
        <div class="item_box">
          <div class="item">
            企业
            <br />入驻
          </div>
        </div>
        <div class="item_box">
          <div class="item">
            众包
            <br />合作
          </div>
        </div>
        <div class="item_box">
          <div class="item">
            达人
            <br />活动
          </div>
        </div>
        <div class="item_box">
          <div class="item">
            弱电
            <br />社区
          </div>
        </div>
        <div class="item_box">
          <div class="item_last">
            个人
            <br />中心
          </div>
        </div>
      </div>
      <div class="part2">
        <i class="el-icon-chat-line-round"></i>
        <div class="green">
          联系
          <br />我们
        </div>
      </div>
      <div class="part3">
        <i class="el-icon-picture"></i>
      </div>
      <div class="part3">
        <i class="el-icon-upload2"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:{
    isShowRightPart1:{
      default:true
    }
  },
  methods: {}
};
</script>

<style scoped lang="less">
#leftside,
#rightside {
  width: 50px;
  font-size: 12px;
  position: fixed;
  left: 50%;
  text-align: center;
  z-index: 1;
  box-sizing: border-box;
  cursor: pointer;
}
#leftside {
  top: 200px;
  margin-left: -720px;
  .bs{
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  }
  .left_add{
    width: 50px;
    padding: 10px 0;
    line-height: 14px;
    margin-top: 30px;
    border-radius: 50%;
    background-color: #F88F00;
    color: #fff;
  }
  .item_box {
    position: relative;
    width: 50px;
    padding: 10px 7px 0;
    line-height: 14px;
    color: #000;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    .item_last {
      padding-bottom: 10px;
    }
    .item {
      border-bottom: 1px solid #000;
      padding-bottom: 10px;
      box-sizing: border-box;
    }
    &.is_active {
      .item {
        border-bottom: 1px solid #fff;
      }
      color: #fff;
      background: rgba(53, 192, 198, 1);
    }
    &.is_active ~ .is_active {
      .item {
        border-bottom: 1px solid rgba(53, 192, 198, 1);
      }
    }
    .span {
      position: absolute;
      top: 50%;
      right: -20px;
      border-radius: 50%;
      font-size: 10px;
      border: 1px solid #f00;
      color: #f00;
      padding: 2px;
      margin-top: -20px;
      transform: scale(0.6);
    }
  }
}
#rightside {
  bottom: 50px;
  margin-left: 660px;
  .part1 {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
    .item_box {
      width: 50px;
      padding: 10px 9px 0;
      line-height: 14px;
      color: #000;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 1);
      .item_last {
        padding-bottom: 10px;
        color: #35c0c6;
      }
      .item {
        border-bottom: 1px solid #35c0c6;
        padding-bottom: 10px;
        box-sizing: border-box;
        position: relative;
        top: 1px;
        color: #35c0c6;
      }
      &.is_active,
      &:hover {
        .item {
          border-bottom: 1px solid #fff;
          color: #fff;
        }
        .item_last {
          border-bottom: 1px solid #35c0c6;
          color: #fff;
        }
        background: #35c0c6;
        position: relative;
      }
    }
  }
  .part2 {
    width: 50px;
    height: 97px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
    border-radius: 30px;
    margin-top: 20px;
    line-height: 14px;
    i {
      font-size: 26px;
      padding: 14px 0 10px;
    }
    .green {
      color: #01b0b7;
    }
  }
  .part3 {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
    border-radius: 50%;
    margin-top: 20px;
    font-size: 26px;
    line-height: 50px;
    color: #01b0b7;
  }
}
</style>
