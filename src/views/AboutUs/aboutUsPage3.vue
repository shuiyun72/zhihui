<template>
  <div class="about_us_page">
    <Side :isShowRightPart1="false"></Side>
    <div class="us_bg_img"></div>
    <div class="us_body wm jcs">
      <div class="left_menu_con_sy left boxs">
        <router-link tag="div" :to="{path:'/aboutUs/page1'}" class="item">公司简介</router-link>
        <router-link tag="div" :to="{path:'/aboutUs/page2'}" class="item">企业新闻</router-link>
        <router-link tag="div" :to="{path:'/aboutUs/page3'}" class="item active">联系我们</router-link>
        <router-link tag="div" :to="{path:'/aboutUs/page4'}" class="item">合作流程</router-link>
      </div>
      <div class="right">
        <div class="title_box jcs">
          <div class="new_head_title_sy">
            <span class="title">联系我们</span>
            <span>contact us</span>
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
        <div class="item_box_us3">
          <p>公司将继续秉承“合规、专业、诚信、创新”的经营理念，提升企业实力，创新业务品种，积极践行社会责任。公司将继续秉承“合规、专业、诚信、创新”的经营理念，提升企业实力，创新业兴 务品种，积极践行社会责任。公司将继续秉承“合规、专业、诚信、创新”的经营理念，提升企业实力，创新业务品种，积极践行社会责任。公司将继续秉承“合规、专业、诚信、创新”的经营理 念，提升企业实力，创新业兴务品种，积极践行社会责任。</p>
          <h3>联系电话：400-1186-800</h3>
          <h3>联系 QQ：88888888</h3>
          <h3>联系邮箱：zhyook@126.com</h3>
          <h3>公司地址：河南省郑州市金水区东风路18号金城国际广场6号楼</h3>
          <div class="img">
            <img :src="require('@assets/img/map.png')" alt />
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
