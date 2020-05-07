<template>
  <div class="project_home">
    <Side></Side>
    <div class="light_body wm">
      <div class="light_title wm jcs boxs">
        <div class="left">
          <div class="box">
            <router-link :to="{path:'/lightCurrent/home'}" tag="div" class="li pointer">
            附近动态
            </router-link>
            <router-link :to="{path:'/lightCurrent/child2'}" tag="div" class="li pointer">
            我发布的
            </router-link>
            <router-link :to="{path:'/lightCurrent/child3'}" tag="div" class="li pointer">
            我参与的
            </router-link>
            <router-link :to="{path:'/lightCurrent/child4'}" tag="div" class="li pointer active">
            我关注的
            </router-link>
            <router-link :to="{path:'/lightCurrent/child5'}" tag="div" class="li pointer">
            我收藏的
            </router-link>
          </div>
        </div>
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
      <div class="c4_child wm boxs bsr">
        <div class="c4_title">我关注的大咖</div>
        <el-row v-for="(t,i) in 9" :key="i+'t'" @click.native="routerTo">
          <el-col :span="2" class="t_right"><img :src="require('@assets/img/t2.jpg')" alt /></el-col>
          <el-col :span="7">昵称：古道西风</el-col>
          <el-col :span="8" class="t_center">所属行业：弱电智能化</el-col>
          <el-col :span="6" class="t_right">地址：郑州市</el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Side from "@components/Side.vue";
export default {
  components: { Side },
  mounted() {
    console.log("点击人物头像进入详情");
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    routerTo(){
      this.$router.push({path:"/lightCurrent/child4/detail"})
    }
  }
};
</script>

<style lang="less">
</style>
