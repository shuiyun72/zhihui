<template>
  <div class="about_us_page">
    <Side :isShowRightPart1="false"></Side>
    <div class="us_bg_img"></div>
    <div class="us_body wm jcs">
      <div class="left_menu_con_sy left boxs">
        <router-link tag="div" :to="{path:'/aboutUs/page1'}" class="item">公司简介</router-link>
        <router-link tag="div" :to="{path:'/aboutUs/page2'}" class="item">企业新闻</router-link>
        <router-link tag="div" :to="{path:'/aboutUs/page3'}" class="item">联系我们</router-link>
        <router-link tag="div" :to="{path:'/aboutUs/page4'}" class="item active">合作流程</router-link>
      </div>
      <div class="right">
        <div class="title_box jcs">
          <div class="new_head_title_sy">
            <span class="title">合作流程</span>
            <span>Cooperation Process</span>
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
        <div class="item_box_us4">         
          <p>1、客户咨询。记录客户所述的要求及相关资料数据，提出适合的建议。</p>
          <p>2、设计方案。设计部根据客户提出的要求及更能片。</p>
          <p>3、客户咨询。记录客户所述的要求及相关资料数据，提出适合的建议。</p>
          <p>4、设计方案。设计部根据客户提出的要求及更能片。</p>
          <p>5、客户咨询。记录客户所述的要求及相关资料数据，提出适合的建议。</p>
          <p>6、设计方案。设计部根据客户提出的要求及更能片。</p>
          <p>7、客户咨询。记录客户所述的要求及相关资料数据，提出适合的建议。</p>
          <p>8、客户咨询。记录客户所述的要求及相关资料数据，提出适合的建议。</p>
          <p>9、设计方案。设计部根据客户提出的要求及更能片。</p>
          <p>10、客户咨询。记录客户所述的要求及相关资料数据，提出适合的建议。</p>
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
