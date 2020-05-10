<template>
  <div class="part1_left">
    <div class="equipment_nav bs">
      <div v-for="(item,index) in equipmentNav" :key="index" class="nav_item">
        <i class="left_icon" :class="item.icon"></i>
        <span class="nav_item_text">{{item.text}}</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import * as Const from "@/common/const";
export default {
  data() {
    return {
      equipmentNav: Const.equipmentNav
    };
  },
  props: {},
  methods: {}
};
</script>

<style scoped lang="less">
.equipment_nav {
  padding-top: 16px;
  width: 160px;
  padding-bottom: 10px;
  box-sizing: border-box;
  .nav_item {
    padding: 10px 0 10px 13px;
    font-size: 20px;
    .nav_item_text {
      display: inline-block;
      width: 80px;
      font-size: 16px;
      font-weight: bold;
    }
    .left_icon {
      margin-right: 10px;
    }
    .el-icon-arrow-right{
      color: #999;
    }
  }
}
</style>
