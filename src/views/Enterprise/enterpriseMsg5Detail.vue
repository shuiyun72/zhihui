<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch :HeaderSearch="'扬州海达线缆通信设备有限公司'"></HeaderSearch>
    </div>
    <div class="bg_img_top"></div>
    <HeaderNav :HeaderNav="'企业资讯'" :HeaderNavList="topNavEnterprise"></HeaderNav>
    <Side></Side>
    <div id="enterp_msg3_detail">
      <div class="wm">
        <div class="title_Progress part1">
          <div class="left">
            <el-breadcrumb separator=">">
              <el-breadcrumb-item :to="{ path: '/' }">企业资讯</el-breadcrumb-item>
              <el-breadcrumb-item>资讯详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="right">
            <div class="share">
              <!-- 这个是插件的应用，我简单写个样式 -->
              <span>分享到：</span>
              <i class="iconfont icon-QQ"></i>
              <i class="iconfont icon-QQ"></i>
              <i class="iconfont icon-QQ"></i>
            </div>
          </div>
        </div>
        <div class="red2 wm t_center enterp_t">鹤壁市中国人民银行总部</div>
        <div class="date_from">
          <span>时间：2019-7-28</span>
          <span>来源：海达线缆</span>
          <span>浏览数：5218</span>
        </div>
        
        <div class="enterp_msg3_body wm bs">
          <div class="en_item2">
            <p class="tin">
              本项目在佛山市高明区白石坳垃圾填埋场内，分期建设总容量为18兆瓦的沼气发电项目。该项目占地4500平方米，建筑面积约500㎡，项目采用国产设备，利用白石坳垃圾填埋场内收集的沼气经过预处理装置净化、除尘、除水、稳压后进入沼气发电机组，发电后通过输配电系统，将发出的电能输送到电网。本项目在佛山市高明区白石坳垃圾填埋场内，分期建设总容量为18兆瓦的沼气发电项目。该项目占地4500平方米，建筑面积约500㎡，项目采用国产设备，利用白石坳垃圾填埋场内收集的沼气经过预处理装置净化、除尘、除水、稳压后进入沼气发电机组，发电后通过输配电系统，将发出的电能输送到电网。
            </p>
            <div class="img">
              <img :src="require('@assets/img/hylog.png')" alt />
            </div>
            <p class="tin">
              本项目在佛山市高明区白石坳垃圾填埋场内，分期建设总容量为18兆瓦的沼气发电项目。该项目占地4500平方米，建筑面积约500㎡，项目采用国产设备，利用白石坳垃圾填埋场内收集的沼气经过预处理装置净化、除尘、除水、稳压后进入沼气发电机组，发电后通过输配电系统，将发出的电能输送到电网。本项目在佛山市高明区白石坳垃圾填埋场内，分期建设总容量为18兆瓦的沼气发电项目。该项目占地4500平方米，建筑面积约500㎡，项目采用国产设备，利用白石坳垃圾填埋场内收集的沼气经过预处理装置净化、除尘、除水、稳压后进入沼气发电机组，发电后通过输配电系统，将发出的电能
            </p>
            <div class="img">
              <img :src="require('@assets/img/hylog.png')" alt />
            </div>
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
import PageNum from "@components/PageNum";
export default {
  components: {
    HeaderTop,
    HeaderSearch,
    HeaderNav,
    Side,
    PageNum
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
