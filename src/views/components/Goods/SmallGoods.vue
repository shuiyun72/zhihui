<template>
  <div class="d_inflex small_goods">
    <img :src="require('@assets/commodity/'+smallGoodsItem.img)" />
    <div class="info">
      <p>{{smallGoodsItem.p1}}</p>
      <p>{{smallGoodsItem.p2}}</p>

      <div class="detail" v-if="history">
        <div class="money">￥{{smallGoodsItem.money}}</div>
        <div class="delete">￥{{smallGoodsItem.history}}</div>
      </div>
      <div class="detail" v-else>
        <div class="money">￥{{smallGoodsItem.money}}</div>
        <div class="link" @click="showShop(smallGoodsItem)">查看</div>
      </div>
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
    smallGoodsItem: {
      default: {}
    },
    history: {
      default: false
    }
  },
  methods: {}
};
</script>
<style lang="less">
.small_goods {
  display: flex;
  width: 240px;
  img {
    width: 114px;
    height: 85px;
  }
  .info {
    margin-top: 16px;
    p {
      color: #666666;
      font-size: 14px;
      margin-bottom: 4px;
    }
    .detail {
      width: 100px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      .money {
        color: #ff0000;
      }
    }
  }
}
</style>
