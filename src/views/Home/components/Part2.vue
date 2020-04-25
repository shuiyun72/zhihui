<template>
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
    <div class="lunbo">
      <i class="el-icon-arrow-left"></i>
      <i class="el-icon-arrow-right"></i>
      <div class="part2_body">
        <div v-for="(item,index) in part2List" :key="index">
          <img :src="require('@assets/img/'+item.img)" alt />
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
      part2List: Commodity.Part2List,
    };
  },
  props: {
    
  },
  methods: {
    
  }
};
</script>
