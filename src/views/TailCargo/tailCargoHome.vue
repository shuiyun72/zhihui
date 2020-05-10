<template>
  <div class="tail_cargo">
    <div class="part1 jcs wm">
      <EquListHome></EquListHome>
      <div class="part1_center">
        <div class="img">
          <router-link :to="{path:'/tailCargo/screen'}">
            <img :src="require('@assets/img/bigimg.png')" alt />
          </router-link>
        </div>

        <GoodsLunboS class="m_top14">
          <div class="d_flex">
            <SmallGoods :smallGoodsItem="item" v-for="(item,index) in commodityList" :key="index"></SmallGoods>
          </div>
        </GoodsLunboS>
      </div>
      <div class="part1_right">
        <SayHelloHome></SayHelloHome>
        <div class="img_l">
          <img :src="require('@assets/img/shopimg.png')" alt />
        </div>
        <div class="img_l">
          <img :src="require('@assets/img/shopimg.png')" alt />
        </div>
      </div>
    </div>
    <div class="part2 wm">
      <div class="part_title">
        <div class="text">推荐的品牌</div>
        <div class="share">
          <!-- 这个是插件的应用，我简单写个样式 -->
          <span>分享到：</span>
          <svg class="iconfont" aria-hidden="true" :style="W(16)">
            <use xlink:href="#icon-QQ" />
          </svg>
          <svg class="iconfont" aria-hidden="true" :style="W(16)">
            <use xlink:href="#icon-weixinmendian" />
          </svg>
          <svg class="iconfont" aria-hidden="true" :style="W(16)">
            <use xlink:href="#icon-QQkongjian" />
          </svg>
        </div>
      </div>
      <GoodsLunboS>
        <div class="part2_body jcs">
          <div v-for="(item,index) in part2List" :key="index">
            <img :src="require('@assets/img/'+item.img)" alt />
          </div>
        </div>
      </GoodsLunboS>
    </div>
    <div class="part3 wm">
      <div class="part_title">
        <div class="text">离我最近</div>
        <div class="link">更多...</div>
      </div>
      <div class="part3_body jcs">
        <BigGoods
          :bigGoodsItem="item"
          v-for="(item,index) in part3List"
          :key="index"
          class="bottom10"
        ></BigGoods>
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


</style>
