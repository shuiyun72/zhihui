<template>
    <div class="part1_center">
      <img :src="require('@assets/img/bigimg.png')" alt="">
      <div class="lunbo">
        <i class="el-icon-arrow-left"></i>
        <i class="el-icon-arrow-right"></i>
        <div class="d_flex shop">
          <div class="d_inflex shop_child" v-for="(item,index) in commodityList" :key="index">
            <img :src="require('@assets/commodity/'+item.img)">
            <div class="info">
              <p>{{item.p1}}</p>
              <p>{{item.p2}}</p>
              <div class="detail">
                <div class="money">￥{{item.money}}</div>
                <div class="link" @click="showShop(item)">查看</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import * as Commodity from "@/common/commodity";
export default {
  data() {
    return {
      commodityList:Commodity.HomeCommodity,
    };
  },
  props: {
    
  },
  methods: {
    showShop(el){
      console.log(el)
    }
  }
};
</script>

<style lang="less">

</style>
