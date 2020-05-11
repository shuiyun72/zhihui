<template>
  <div class="shop_show_item">
    <router-link :to="{path:'/tailCargo/detail'}">
      <img :src="require('@assets/commodity/'+bigGoodsItem.img)" alt />
    </router-link>
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
  width: 290px;
  // height: 304px;
  box-sizing: border-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  padding-bottom: 6px;
  // &:hover{
  //   box-shadow: 0px 3px 6px rgba(53, 192, 198, 0.8);
  //   transform:scale(1.005,1.005);
  // }
  img {
    display: block;
    margin: 0 auto;
    width: 270px;
  }
  .info {
    padding: 12px 12px;
    display: flex;
    justify-content: space-between;
    .name {
      font-size: 16px;
    }
    .number {
      font-size: 10px;
      line-height: 14px;
    }
  }
  .handle {
    padding: 4px 15px 10px;
    display: flex;
    justify-content: space-between;
    .money_new {
      color: #f00;
      font-size: 16px;
    }
    .money_old {
      color: #999;
      font-size: 14px;
      line-height: 18px;
      text-align: left;
      width: 100px;
      text-decoration: line-through;
      margin-left: 6px;
    }
    .add_car {
      width: 103px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      background: rgba(248, 133, 9, 1);
      border-radius: 20px;
      font-size: 14px;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
