<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch :HeaderSearch="'扬州海达线缆通信设备有限公司'"></HeaderSearch>
    </div>
    <div class="bg_img_top"></div>
    <HeaderNav :HeaderNav="'企业简介'" :HeaderNavList="topNavEnterprise"></HeaderNav>
    <Side></Side>
    <div id="enterp_msg">
      <div class="part2 wm">
        <div class="left what_map_com_sy">
          <div class="p5 p_title bs">
            <div class="share">
              <!-- 这个是插件的应用，我简单写个样式 -->
              <span>点击分享：</span>
              <svg class="iconfont" aria-hidden="true" :style="W(16)">
                <use xlink:href="#icon-QQ" />
              </svg>
              <svg class="iconfont" aria-hidden="true" :style="W(16)">
                <use xlink:href="#icon-weixinmendian" />
              </svg>
              <svg class="iconfont" aria-hidden="true" :style="W(16)">
                <use xlink:href="#icon-QQkongjian" />
              </svg>
              <svg class="iconfont" aria-hidden="true" :style="W(16)">
                <use xlink:href="#icon-QQkongjian" />
              </svg>
            </div>
          </div>
          <div class="p1 p_title bs">
            <div class="title">百度地图</div>
            <img :src="require('@assets/img/r2.png')" alt />
          </div>
          <div class="p2 p_title bs">
            <div class="title">产品分类</div>
            <div class="p_body">
              <el-button class="blue">全部产品</el-button>
              <el-button class="blue">最新产品</el-button>
              <el-button class="blue">推荐产品</el-button>
              <span class="span">
                <i class="iconfont icon-erweima"></i>手机扫码流量店铺
              </span>
            </div>
          </div>
          <div class="p3 p_title bs">
            <div class="title">经营范围</div>
            <p>弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆……</p>
          </div>
          <div class="p4 p_title bs">
            <div class="title">联系方式</div>
            <div class="p_body">
              <p>
                <i class="el-icon-phone"></i>0514-87681048
              </p>
              <p>
                <i class="el-icon-basketball"></i>www.zhyook.com
              </p>
              <p>
                <i class="el-icon-location-outline"></i>江苏省扬州市
              </p>
            </div>
          </div>
        </div>
        <div class="msg8_right bs">
          <div class="title_eng_com_sy">
            <span class="t">关于我们</span>
            <span class="english">Recruitment</span>
          </div>
          <img :src="require('@assets/img/cimg.png')" alt />
          <p class="tin">扬州海达线缆，中国弱电线缆知名品牌，综合布线全国十大品牌，31年的专业经验，数万家优质工程客户,超万个地标工程案例。秉承“天道酬勤，诚信为本”的理念,打造百年企业。成功之后，新的起点！2013年启动产业转型，专注智能家居、智慧社区、智慧园区的研发、生产、销售，在智慧城市领域，是从硬件到软件，从产品到解决方案的提供商。 扬州海达线缆，中国弱电线缆知名品牌，综合布线全国十大品牌，31年的专业经验，数万家优质工程客户,超万个地标工程案例。秉承“天道酬勤，诚信为本”的理念,打造百年企业。成功之后，新的起点！2013年启动产业转型，专注智能家居、智慧社区、智慧园区的研发、生产、销售，在智慧城市领域，是从硬件到软件，从产品到解决方案的提供扬州海达线缆能集团，中国弱电线缆知名品牌，综合布线全国十大品牌，31年的专业经验，数万家优质工程客户,超万个地标工程案例。秉承“天道酬勤，诚信为本”的理念,打造百年企业。成功之后，新的起点！2013年启动产业转型，专注智能家居、智慧社区、智慧园区的研发、生产、销售，在智慧城市领域，是从硬件到软件，从产品到解决方案的提供商。 扬州海达线缆，中国弱电线缆知名品牌，综合布线全国十大品牌，31年的专业经验，数万家优质工程客户,超万个地标工程案例。秉承“天道酬勤，诚信为本”的理念,打造百年企业。成功之后，新的起点！2013年启动产业转型，专注智能家居、智慧社区、智慧园区的研发、生产、销售，在智慧城市领域，是从硬件到软件，从产品到解决方案的提供商。 扬州海达线缆，中国弱电线缆知名品牌，综合布线全国十大品牌，31年的专业经验，数万家优质工程客户,超万个地标工程案例。秉承“天道酬勤，诚信为本”的理念,打造百年企业。成功之后，新的起点！2013年启动产业转型，专注智能家居、智慧社区、智慧园区的研发、生产、销售，在智慧城市领域，是从硬件到软件，从产品到解决方案的提供商。</p>
          <div class="say">
            <el-button class="bs">给我们留言</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@components/Header/HeaderTop.vue";
import HeaderSearch from "@components/Header/HeaderSearch.vue";
import HeaderNav from "@components/Header/HeaderNav.vue";
import Side from "@components/Side.vue";
import { topNavEnterpriseMsg as topNavEnterprise } from "@const";
export default {
  components: {
    HeaderTop,
    HeaderSearch,
    HeaderNav,
    Side
  },
  data() {
    return {
      topNavEnterprise: topNavEnterprise
    };
  },
  methods: {}
};
</script>

<style lang="less">
</style>
