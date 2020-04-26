<template>
  <div class="shop_show_item">
    <img :src="require('@assets/commodity/'+bigGoodsItem.img)" alt />
    <div class="info">
      <div class="name">{{bigGoodsItem.name}}</div>
      <div class="number">数量：{{bigGoodsItem.number}}</div>
    </div>
    <div class="handle">
      <div class="money_new">￥{{bigGoodsItem.moneyNew}}</div>
      <div class="money_old">￥{{bigGoodsItem.moneyOld}}</div>
      <div class="add_car">加入购物车</div>
    </div>
  </div>
</template>

<script>
import * as Commodity from "@/common/commodity";
export default {
  data() {
    return {};
  },
  props: {
    bigGoodsItem: {
      default: {}
    }
  },
  methods: {}
};
</script>
<style lang="less">
.shop_show_item {
  width: 380px;
  height: 304px;
  box-sizing: border-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  margin-bottom: 16px;
  // &:hover{
  //   box-shadow: 0px 3px 6px rgba(53, 192, 198, 0.8);
  //   transform:scale(1.005,1.005);
  // }
  img {
    display: block;
    margin: 0 auto;
  }
  .info {
    padding: 12px 15px;
    display: flex;
    justify-content: space-between;
    .name {
      font-size: 19px;
    }
    .number {
      font-size: 12px;
      line-height: 19px;
    }
  }
  .handle {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    .money_new {
      color: #f00;
      font-size: 19px;
    }
    .money_old {
      color: #999;
      font-size: 15px;
      line-height: 26px;
      text-align: left;
      width: 120px;
      text-decoration: line-through;
    }
    .add_car {
      width: 103px;
      height: 26px;
      line-height: 26px;
      text-align: center;
      background: rgba(248, 133, 9, 1);
      border-radius: 20px;
      font-size: 15px;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
