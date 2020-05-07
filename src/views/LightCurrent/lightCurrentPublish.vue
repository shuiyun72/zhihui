<template>
  <div class="crowds_publish">
    <Side :isShowRightPart1="false"></Side>
    <div class="title_Progress">
      <div class="left">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/lightCurrent' }">弱电社区</el-breadcrumb-item>
          <el-breadcrumb-item>发布社区</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="crowds_publish_body bsr wm">
      <!-- <div class="title_c">请认真如实填写</div> -->
      <div class="content">
        <div class="img_light">
          <img :src="require('@assets/img/c1.jpg')" alt />
        </div>
        <div class="textarea_light">
          <el-input type="textarea" placeholder="赶快说是你的感受吧……"></el-input>
        </div>
      </div>
      <div class="crowds_pub_foot">
        <div class="part2">
          <!-- <el-button type="info">取消发布</el-button> -->
          <el-button class="blue_btn">确认发布</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Side from "@components/Side.vue";
export default {
  components: { Side },
  data() {
    return {
     
    };
  },
  computed: {

  }
};
</script>

<style lang="less">

</style>
