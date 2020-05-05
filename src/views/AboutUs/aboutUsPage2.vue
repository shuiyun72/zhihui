<template>
  <div class="about_us_page">
    <Side :isShowRightPart1="false"></Side>
    <div class="us_bg_img"></div>
    <div class="us_body wm jcs">
      <div class="left_menu_con_sy left boxs">
        <router-link tag="div" :to="{path:'/aboutUs/page1'}" class="item">公司简介</router-link>
        <router-link tag="div" :to="{path:'/aboutUs/page2'}" class="item active">企业新闻</router-link>
        <router-link tag="div" :to="{path:'/aboutUs/page3'}" class="item">联系我们</router-link>
        <router-link tag="div" :to="{path:'/aboutUs/page4'}" class="item">合作流程</router-link>
      </div>
      <div class="right">
        <div class="title_box jcs">
          <div class="new_head_title_sy">
            <span class="title">企业动态</span>
            <span>Entreprise’s news</span>
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
        <div class="jcs item_box_us2" v-for="(t,i) in 5" :key="i+'ab'">
          <div class="us2_r_l">
            <div class="title">
              <span class="fw">智汇优库我能理解有限公司获得大奖</span>
              <span class="date">2019-10-15</span>
            </div>
            <div
              class="tin us2_text"
            >智汇优库智能化行业的领跑者智汇优库智能化行的领跑者智汇优库智能化行业的领跑者智汇优库智能化行业的领跑者智汇优库智能化行业的领跑者智汇优库智能化行业的领跑者智汇优库智能化行业的领跑者智汇优库智能化行业的领跑者智汇优库智能化行业的领跑者智汇优库智能化行业的领跑者智汇优库智能化行业的领跑者智汇优库智能化行业的领跑者智汇优库智能化行业的领跑者智行业的领跑者智汇优库行业的领跑者智汇优库行业的领跑者智汇优库。</div>
          </div>
          <div class="img_us2">
            <img :src="require('@assets/img/us2.png')" alt />
          </div>
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
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
</style>
