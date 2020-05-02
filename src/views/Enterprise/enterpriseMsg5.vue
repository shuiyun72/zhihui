<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch :HeaderSearch="'扬州海达线缆通信设备有限公司'"></HeaderSearch>
    </div>
    <div class="bg_img_top"></div>
    <HeaderNav :HeaderNav="'企业资讯'" :HeaderNavList="topNavEnterprise"></HeaderNav>
    <Side></Side>
    <div id="enterp_msg">
      <div class="part2 wm">
        <div class="left what_map_com_sy">
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
          <div class="p5 p_title bs">
            <div class="share">
              <!-- 这个是插件的应用，我简单写个样式 -->
              <span>点击分享：</span>
              <i class="iconfont icon-QQ"></i>
              <i class="iconfont icon-QQ"></i>
              <i class="iconfont icon-QQ"></i>
              <i class="iconfont icon-QQ"></i>
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
          <div class="p1 p_title bs">
            <div class="title">百度地图</div>
            <img :src="require('@assets/img/r2.png')" alt />
          </div>
        </div>
        <div class="msg5_right">
          <div class="msg5_right_part1 bs">
            <div class="img_lunbo_msg_sy img">
              <router-link :to="{path:'/enterprise/msg5/detail'}">
                <img :src="require('@assets/img/hylog.png')" alt />
              </router-link>
              <div class="info">扬州海达线缆产量超5000万米</div>
              <div class="point_span">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="text">
              <div class="box1">
                <div class="title">扬州海达线缆产量超5000万米</div>
                <div class="date">日期：2019-7-30</div>
                <p>近日，扬州海达线缆有限公司近日，扬州海达线缆有限公司近日，扬州海达线 扬州海达线缆有限公司近日，扬州海达线缆有限扬州海达线缆有限公司近日， 扬州海达线缆有限公司近日，扬州海达线缆有限扬州海达线缆有限公司近日， 扬州海达线缆有限公司近日，扬州海达线缆有限扬州海达线缆有限公司近日， 公司……</p>
              </div>
              <div class="box2 msg5_part1_text">
                <p class="info">
                  <span class="el-icon-arrow-right"></span>海达线缆发布了2019《网络安全白皮书》
                </p>
                <p class="info">
                  <span class="el-icon-arrow-right"></span>海达线缆连续三年销量突破5000万
                </p>
                <p class="info">
                  <span class="el-icon-arrow-right"></span>海达线缆成为国际安全联盟组织first成员
                </p>
                <p class="info">
                  <span class="el-icon-arrow-right"></span>海达线缆成为国际安全联盟组织first成员
                </p>
                <div class="more">更多新闻 . . .</div>
              </div>
            </div>
          </div>
          <div class="msg5_right_part2 bs">
            <div class="msg5_part1_text">
              <div class="title">列表</div>
              <p class="info">
                <span class="el-icon-arrow-right"></span>海达线缆发布了2019《网络安全白皮书》
              </p>
              <p class="info">
                <span class="el-icon-arrow-right"></span>海达线缆连续三年销量突破5000万
              </p>
              <p class="info">
                <span class="el-icon-arrow-right"></span>海达线缆成为国际安全联盟组织first成员
              </p>
              <p class="info">
                <span class="el-icon-arrow-right"></span>海达线缆成为国际安全联盟组织first成员
              </p>
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
.msg5_part1_text {
  .info {
    line-height: 26px;

    span {
      color: #f00;
      font-size: 18px;
      font-weight: bold;
      margin-right: 6px;
    }
  }
  .more {
    padding-top: 18px;
    text-align: right;
  }
}
</style>
