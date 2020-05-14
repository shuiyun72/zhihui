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
  display: inline-flex;
  img {
    width: 92px;
    height: auto;
  }
  .info {
    margin-top: 16px;
    p {
      color: #666666;
      font-size: 12px;
      margin-bottom: 4px;
    }
    .detail {
      width: 90px;
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
