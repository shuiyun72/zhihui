<template>
  <div id="home">
    <div class="part1">
      <EquListHome></EquListHome>
      <div class="part1_center">
        <img :src="require('@assets/img/bigimg.png')" alt />
        <GoodsLunboS class="m_top10">
          <div class="d_flex">
            <SmallGoods :smallGoodsItem="item" v-for="(item,index) in commodityList" :key="index"></SmallGoods>
          </div>
        </GoodsLunboS>
      </div>
      <div class="part1_right">
        <SayHelloHome></SayHelloHome>
        <div class="img first">
          <img :src="require('@assets/img/shopimg.png')" alt />
        </div>
        <div class="img">
          <img :src="require('@assets/img/shopimg.png')" alt />
        </div>
      </div>
    </div>
    <div class="part2">
    <div class="part_title">
      <div class="text">推荐的品牌</div>
      <div class="share">
        <!-- 这个是插件的应用，我简单写个样式 -->
        <span>分享到：</span>
        <i class="iconfont icon-QQ"></i>
        <i class="iconfont icon-QQ"></i>
        <i class="iconfont icon-QQ"></i>
      </div>
    </div>
    <GoodsLunboS>
      <div class="part2_body">
        <div v-for="(item,index) in part2List" :key="index">
          <img :src="require('@assets/img/'+item.img)" alt />
        </div>
      </div>
    </GoodsLunboS>
  </div>
    <div class="part3">
      <div class="part_title">
        <div class="text">离我最近</div>
        <div class="link">更多...</div>
      </div>
      <div class="part3_body">
        <BigGoods :bigGoodsItem="item" v-for="(item,index) in part3List" :key="index"></BigGoods>
      </div>
      <div class="link_more">加载更多</div>
    </div>
  </div>
</template>

<script>
//part1
import EquListHome from "@views/Home/components/EquListHome.vue";
import SayHelloHome from "@views/Home/components/SayHelloHome.vue";

//part3
import BigGoods from "@components/Goods/BigGoods";

import * as Commodity from "@/common/commodity";
import SmallGoods from "@components/Goods/SmallGoods";
import GoodsLunboS from "@components/OverAll/GoodsLunboS";
export default {
  components: {
    EquListHome,
    SayHelloHome,
    SmallGoods,
    GoodsLunboS,
    BigGoods
  },
  data() {
    return {
      commodityList: Commodity.HomeCommodity,
      part2List: Commodity.Part2List,
      part3List: Commodity.Part3List
    };
  },
  methods: {
    showShop(el) {
      console.log(el);
    }
  }
};
</script>

<style lang="less">
.m_top10 {
  margin-top: 14px;
}
</style>
