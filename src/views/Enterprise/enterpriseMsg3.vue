<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch :HeaderSearch="'扬州海达线缆通信设备有限公司'"></HeaderSearch>
    </div>
    <div class="bg_img_top"></div>
    <HeaderNav :HeaderNav="'项目案例'" :HeaderNavList="topNavEnterprise"></HeaderNav>
    <Side></Side>
    <div id="enterp_msg">
      <div class="part2 wm">
        <div class="left what_map_com_sy">
          <div class="p1 p_title bs">
            <div class="title">百度地图</div>
            <img :src="require('@assets/img/map1.jpg')" alt />
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
          <!-- //////////////////// -->
          <div class="p5 p_title bs">
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
          <div class="p4 p_title bs">
            <div class="title">联系方式</div>
            <div class="p_body">
              <p>
                <i class="el-icon-phone"></i>0514-87681048
              </p>
              <p>
                <i class="el-icon-location-outline"></i>江苏省扬州市
              </p>
            </div>
          </div>
        </div>
        <div class="msg3_right bs">
          <div class="item_part" v-for="i in 5" :key="i">
            <router-link :to="{path:'/enterprise/msg3/detail'}">
              <div class="upphoto_downtext_com_sy">
                <div class="img">
                  <img :src="require('@assets/img/hylog.png')" alt />
                  <p>项目名称：鹤壁市中国人民银行总部</p>
                  <p>所属行业：综合布线</p>
                  <p>项目地址：河南省鹤壁市</p>
                </div>
              </div>
            </router-link>
            <div class="upphoto_downtext_com_sy">
              <div class="img">
                <img :src="require('@assets/img/hylog.png')" alt />
              </div>
              <p>项目名称：鹤壁市中国人民银行总部</p>
              <p>所属行业：综合布线</p>
              <p>项目地址：河南省鹤壁市</p>
            </div>
          </div>
          <PageNum></PageNum>
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
