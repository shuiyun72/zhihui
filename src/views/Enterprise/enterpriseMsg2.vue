<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch :HeaderSearch="'扬州海达线缆通信设备有限公司'"></HeaderSearch>
    </div>
    <div class="bg_img_top"></div>
    <HeaderNav :HeaderNav="'企业资质'" :HeaderNavList="topNavEnterprise"></HeaderNav>
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
        <div class="msg2_right bs">
          <div class="zhengshu_big_com_sy">
            <div class="img zs1">
              <img :src="require('@assets/img/zs1.png')" alt @click="dialogVisible=!dialogVisible" />
            </div>
            <div class="zs_info">
              <p>资质名称：质量认证证书</p>
              <p>资质等级：二级</p>
              <p>证书编号：0023349MKU</p>
              <div class="box">
                <i class="el-icon-platform-eleme"></i>已认证
              </div>
            </div>
          </div>
          <div class="zhengshu_big_com_sy">
            <div class="img zs2">
              <img :src="require('@assets/img/zs2.png')" alt />
            </div>
            <div class="zs_info">
              <p>资质名称：质量认证证书</p>
              <p>资质等级：二级</p>
              <p>证书编号：0023349MKU</p>
              <div class="box">
                <i class="el-icon-platform-eleme"></i>已认证
              </div>
            </div>
          </div>
          <div class="zhengshu_big_com_sy">
            <div class="img zs1">
              <img :src="require('@assets/img/zs1.png')" alt />
            </div>
            <div class="zs_info">
              <p>资质名称：质量认证证书</p>
              <p>资质等级：二级</p>
              <p>证书编号：0023349MKU</p>
              <div class="box">
                <i class="el-icon-platform-eleme"></i>已认证
              </div>
            </div>
          </div>
          <div class="zhengshu_big_com_sy">
            <div class="img zs1">
              <img :src="require('@assets/img/zs1.png')" alt />
            </div>
            <div class="zs_info">
              <p>资质名称：质量认证证书</p>
              <p>资质等级：二级</p>
              <p>证书编号：0023349MKU</p>
              <div class="box">
                <i class="el-icon-platform-eleme"></i>已认证
              </div>
            </div>
          </div>
          <div class="zhengshu_big_com_sy">
            <div class="img zs1">
              <img :src="require('@assets/img/zs1.png')" alt />
            </div>
            <div class="zs_info">
              <p>资质名称：质量认证证书</p>
              <p>资质等级：二级</p>
              <p>证书编号：0023349MKU</p>
              <div class="box">
                <i class="el-icon-platform-eleme"></i>已认证
              </div>
            </div>
          </div>
          <div class="zhengshu_big_com_sy">
            <div class="img zs2">
              <img :src="require('@assets/img/zs2.png')" alt />
            </div>
            <div class="zs_info">
              <p>资质名称：质量认证证书</p>
              <p>资质等级：二级</p>
              <p>证书编号：0023349MKU</p>
              <div class="box">
                <i class="el-icon-platform-eleme"></i>已认证
              </div>
            </div>
          </div>
          <PageNum></PageNum>
        </div>
      </div>
      <el-dialog title="提示" :visible.sync="dialogVisible" width="70%">
        <div class="fixed_img">
          <img :src="require('@assets/img/zs1.png')" alt />
        </div>
      </el-dialog>
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
      topNavEnterprise: topNavEnterprise,
      dialogVisible: false
    };
  },
  methods: {}
};
</script>

<style lang="less">
.fixed_img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 400px);
}
</style>
