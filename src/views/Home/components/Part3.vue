<template>
  <div class="part3">
    <div class="part_title">
      <div class="text">离我最近</div>
      <div class="link">更多...</div>
    </div>
    <div class="part3_body">
      <div class="shop_show_item" v-for="(item,index) in part3List" :key="index">
        <img :src="require('@assets/commodity/'+item.img)" alt />
        <div class="info">
          <div class="name">{{item.name}}</div>
          <div class="number">数量：{{item.number}}</div>
        </div>
        <div class="handle">
          <div class="money_new">￥{{item.moneyNew}}</div>
          <div class="money_old">￥{{item.moneyOld}}</div>
          <div class="add_car">加入购物车</div>
        </div>
      </div>
    </div>
    <div class="link_more">加载更多</div>
  </div>
</template>

<script>
import * as Commodity from "@/common/commodity";
export default {
  data() {
    return {
      part3List: Commodity.Part3List
    };
  },
  props: {},
  methods: {}
};
</script>
