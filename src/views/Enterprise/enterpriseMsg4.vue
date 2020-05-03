<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch :HeaderSearch="'扬州海达线缆通信设备有限公司'"></HeaderSearch>
    </div>
    <div class="bg_img_top"></div>
    <HeaderNav :HeaderNav="'企业动态'" :HeaderNavList="topNavEnterprise"></HeaderNav>
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
        <div class="msg4_right">
          <div class="msg4_right_box bs">
            <div class="title">合作信息</div>
            <div class="box_item" v-for="i in 3" :key="i">
              <div class="cart_leftphoto_righttext_sy bbt">
                <img :src="require('@assets/img/hylog.png')" alt />
                <div class="right">
                  <div class="title">智汇优库寻求综合布线系统合作方案</div>
                  <p class="p"><span> 所属行业：综合布线</span><span>预算：3000万元</span></p>
                  <p class="p"><span>发布主体：企业</span><span>招募截止：2019-07-30 17:00</span></p>
                  <p>
                    <span><i class="el-icon-location-outline"></i>河南省郑州市</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="more"><i class="el-icon-caret-bottom"></i></div>
          </div>
          <div class="msg4_right_box bs">
            <div class="title">活动信息</div>
            <div class="box_item" v-for="i in 3" :key="i">
              <div class="cart_leftphoto_righttext_sy bbt">
                <img :src="require('@assets/img/hylog.png')" alt />
                <div class="right">
                  <div class="title">智汇优库寻求综合布线系统合作方案</div>
                  <p class="p"><span> 所属行业：综合布线</span><span>预算：3000万元</span></p>
                  <p class="p"><span>发布主体：企业</span><span>活动时间：2020-05-25 13:50 至 2020-05-25-18:00</span></p>
                  <p class="p">
                    <span><i class="el-icon-location-outline"></i>河南省郑州市</span>
                    <span>招募截止：2019-07-30 17:00</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="more"><i class="el-icon-caret-bottom"></i></div>
          </div>
          <div class="msg4_right_box bs">
            <div class="title">企业直播</div>
            <div class="box_item" v-for="i in 3" :key="i">
              <div class="cart_leftphoto_righttext_sy bbt">
                <img :src="require('@assets/img/hylog.png')" alt />
                <div class="right">
                  <div class="title">智汇优库寻求综合布线系统合作方案</div>
                  <p class="p"><span> 所属行业：综合布线</span><span>预算：3000万元</span></p>
                  <p class="p"><span>发布主体：企业</span><span>活动时间：2020-05-25 13:50 至 2020-05-25-18:00</span></p>
                  <p class="p">
                    <span><i class="el-icon-location-outline"></i>河南省郑州市</span>
                    <span>招募截止：2019-07-30 17:00</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="more"><i class="el-icon-caret-bottom"></i></div>
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
