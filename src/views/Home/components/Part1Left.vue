<template>
  <div class="part1_left">
    <div class="equipment_nav">
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
      equipmentNav:Const.equipmentNav,
    };
  },
  props: {
    
  },
  methods: {
    
  }
};
</script>

<style scoped lang="less">
.equipment_nav{
  padding-top:16px;
  width: 200px;
  height: 600px;
  box-sizing: border-box;
  box-shadow:0px 3px 6px rgba(0,0,0,0.5);
  .nav_item{
    padding: 13px;
    font-size: 20px;
    .nav_item_text{
      display: inline-block;
      width: 120px;
    }
    .left_icon{
      margin-right: 10px;
    }
  }
}
</style>
