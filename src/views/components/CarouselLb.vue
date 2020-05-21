<template>
  <div id="carousel_lb">
    <el-carousel trigger="click" height="560px">
      <el-carousel-item v-for="(item,i) in imgList" :key="i+'bgi'">
        <!-- <img :src="require('@assets/bg/'+item.img)" alt /> -->
        <div class="bgl_s_top" :style="{backgroundImage:'url('+require('@assets/bg/'+item.img)+')'}"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    imgList: {
      type: Array,
      default: () => {
        return [
          { img: "b1.jpg" },
          { img: "b2.jpg" },
          { img: "b3.jpg" },
          { img: "b4.jpg" },
          { img: "b5.jpg" }
        ];
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="less">
.bgl_s_top{
  width: 100%;
  height: 560px; 
  background: no-repeat center center;
  background-size: 1920px 560px;
}
</style>
