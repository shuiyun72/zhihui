<template>
  <div class="part1_right_box">
    <h2>Hi,您好</h2>
    <div class="title_box">欢迎来到智汇优库尾货商城！</div>
    <div class="procurement_box">
      <div class="side">采购</div>
      <div class="shop_nav procurement">
        <div class="option" v-for="(item,index) in 3" :key="index">
          <i class="el-icon-document"></i>
          <p>采购订单</p>
        </div>
      </div>
    </div>
    <div class="sell_box">
      <div class="side">出售</div>
      <div class="shop_nav sell first">
        <div class="option" v-for="(item,index) in 3" :key="index">
          <i class="el-icon-document"></i>
          <p>采购订单</p>
        </div>
      </div>
      <div class="shop_nav sell second">
        <div class="option" v-for="(item,index) in 3" :key="index">
          <i class="el-icon-document"></i>
          <p>采购订单</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {},
  methods: {}
};
</script>

<style lang="less">
.part1_right {
  width: 220px;

  .part1_right_box {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
    padding: 10px 0 20px;
    box-sizing: border-box;
    margin-bottom: 6px;
  }

  h2 {
    font-size: 18px;
    color: #000;
    text-align: center;
    margin-bottom: 10px;
  }

  .title_box {
    width: 200px;
    height: 25px;
    line-height: 25px;
    background: rgba(175, 138, 68, 1);
    border-radius: 2px;
    color: #fff;
    text-align: center;
    margin: 0 auto 10px;
  }

  .shop_nav {
    width: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .option {
      i {
        font-size: 36px;
        color: #f00;
        margin-bottom: 2px;
        padding-top: 14px;
      }

      width: 48px;
      font-size: 12px;
      text-align: center;
    }
  }

  .sell_box {
    position: relative;
    padding-left: 30px;

    .sell {
      flex-wrap: wrap;

      &.second {
        margin-top: 24px;
      }
    }

    .side {
      width: 23px;
      height: 147px;
      background: rgba(3, 193, 201, 0.3);
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      color: #03c1c9;
      font-size: 16px;
      box-sizing: border-box;
      line-height: 20px;
      padding-top: 48px;
    }
  }

  .procurement_box {
    position: relative;
    height: 100px;
    padding-left: 30px;

    .procurement {
      border-bottom: 2px dashed #707070;
      padding-bottom: 24px;
    }

    .side {
      width: 23px;
      height: 76px;
      background: rgba(3, 193, 201, 0.3);
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      color: #03c1c9;
      font-size: 16px;
      box-sizing: border-box;
      line-height: 20px;
      padding-top: 16px;
    }
  }
} 
</style>
