<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch :HeaderSearch="'扬州海达线缆通信设备有限公司'"></HeaderSearch>
    </div>
    <div class="title_Progress records4_pro">
      <div class="left">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/home' }">返回首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/personal' }">个人中心</el-breadcrumb-item>
          <el-breadcrumb-item>编辑企业主页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="bg_img_top">
      <div class="click">编辑图片</div>
    </div>
    <HeaderNav :HeaderNav="'企业简介'" :HeaderNavList="topNavEnterprise"></HeaderNav>
    <Side></Side>
    <div id="enterp_msg">
      <div class="part1 bs wm">
        <div class="xinxi_qiye_com_sy jcs md">
          <div class="left no_b">
            <div class="img">
              <img :src="require('@assets/img/r1.png')" alt class="bs" />
            </div>
            <div class="text">
              <div class="title blue">河南海达之光通信设备有限公司</div>
              <p class="blue">http//：www.zhyook.com</p>
              <p class="blue">江苏省扬州市李典镇</p>
              <div class="renzheng">
                <span>
                  <img :src="require('@assets/img/r1.png')" alt />认证企业
                </span>
                <span>
                  <img :src="require('@assets/img/r2.png')" alt />信誉企业
                </span>
              </div>
            </div>
          </div>
          <div class="right">
            <el-button class="turn_top">编辑</el-button>
          </div>
        </div>
      </div>
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
        <div class="msg1_right bs">
          <p>企业简介：</p>
          <p
            class="tin"
          >浙江兆龙互连科技股份有限公司成立于1993年，拥有二十多年线缆行业研发制造经验。是线缆行业的国家高新技术企业，为国家标准起草单位，上海电缆研究所科研生产基地，是中国通信标准化协会、全国信息技术标准化协会和中国机器人协会的全权会员。</p>
          <img :src="require('@assets/img/cimg.png')" alt />
          <p>区位：</p>
          <p class="tin">浙江兆龙互连科技股份有限公司成立于1993年，拥有二十多年线缆行</p>
          <p>研发：</p>
          <p
            class="tin"
          >浙江兆龙互连科技股份有限公司成立于1993年，拥有二十多年线缆行业研发制造经验。是线缆行业的国家高新技术企业，为国家标准起草单位，上海电缆研究所科研生产基地，是中国通信标准化协会、全国信息技术标准化协会和中国机器人协会的全权会员。浙江兆龙互连科技股份有限公司成立于1993年，拥有二十多年线缆行业研发制造经验。是线缆行业的国家高新技术企业，为国家标准起草单位，上海电缆研究所科研生产基地，是中国通信标准化协会、全国信息技术标准化协会和中国机器人协会的全权会员。</p>
          <p>生产：</p>
          <p class="tin">浙江兆龙互连科技股份有限公司成立于1993年，拥</p>
          <p>认证：</p>
          <p
            class="tin"
          >浙江兆龙互连科技股份有限公司成立于1993浙江兆龙互连科技股份有限公司成立于1993浙江兆龙互连科技股份有限公司成立于1993年，拥有二十多年线缆行业研发制造经验。是线</p>
          <p>证书：</p>
          <p class="tin">浙江兆龙互连科技股份有限公司成立于1993年，拥</p>
          <p class="pt">公司地址：江苏省扬州市李典镇</p>
          <p>注册资本：2000万元</p>
          <p>公司类型：股份有限公司</p>
          <p>成立时间：2001年8月</p>
          <p>人员规模：200-300人</p>
          <p>主营业务：弱电线缆、弱电线缆、弱电线缆、弱电线缆、弱电线缆、弱电线缆、弱电线缆……</p>
          <p>联系电话：1300000000</p>
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
.records4_pro{
  padding: 16px 0;
}
</style>
