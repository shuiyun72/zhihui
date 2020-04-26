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
</style>
