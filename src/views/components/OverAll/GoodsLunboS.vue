<template>
  <div class="goods_lunbo_s">
    <i class="el-icon-arrow-left"></i>
    <i class="el-icon-arrow-right"></i>
    <slot></slot>
  </div>
</template>

<script>
import * as Commodity from "@/common/commodity";

export default {
  data() {
    return {
      commodityList: Commodity.HomeCommodity
    };
  },
  components: {},
  methods: {
    showShop(el) {
      console.log(el);
    }
  }
};
</script>

<style lang="less">
.goods_lunbo_s {
  position: relative;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  i {
    width: 20px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #d3d3d3;
    position: absolute;
    top: 50%;
    margin-top: -20px;
    color: #fff;
    &.el-icon-arrow-left {
      left: 0;
    }
    &.el-icon-arrow-right {
      right: 0;
    }
  }
}
</style>
