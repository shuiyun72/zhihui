<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch :HeaderSearch="'扬州海达线缆通信设备有限公司'"></HeaderSearch>
    </div>
    <div class="bg_img_top"></div>
    <HeaderNav :HeaderNav="'企业简介'" :HeaderNavList="topNavEnterprise"></HeaderNav>
    <Side></Side>
    <div id="enterp">
      <div class="card_title_com_sy wm bs">
        <div class="title">企业简介</div>
        <div class="card_body">
          <div class="part1">
            <div class="left">
              <img :src="require('@assets/img/ruzhu.png')" alt />
            </div>
            <div class="right">
              <div>
                <div class="import">*</div>
                <div class="text">企业全称：</div>
                <el-input></el-input>
              </div>
              <div>
                <div class="import">*</div>
                <div class="text">企业地址：</div>
                <el-input></el-input>
              </div>
              <div>
                <div class="import">*</div>
                <div class="text">企业电话：</div>
                <el-input></el-input>
              </div>
              <div>
                <div class="import">*</div>
                <div class="text">上传企业展示图：</div>
                <el-button size="mini">上传图片</el-button>
                <span class="info_span">注:图片格式：jpg、png/尺寸：1:3（分辨率300*900）/大小1M以下 上传后直接在导航栏上方预览</span>
              </div>
              <div>
                <div class="import none">*</div>
                <div class="text">上传企业LOGO：</div>
                <el-button size="mini">上传图片</el-button>
                <span
                  class="info_span"
                >注:LOGO图片格式：jpg、png/尺寸：1:1（分辨率300*300）/大小1M以下 上传后直接在左侧“企业logo”处预览</span>
              </div>
            </div>
          </div>
          <div class="part2">
            <div class="import">*</div>
            <div class="text">经营范围：</div>
            <el-input type="textarea"></el-input>
          </div>
          <div class="part2">
            <div class="import">*</div>
            <div class="text">企业介绍：</div>
            <el-input type="textarea"></el-input>
          </div>
        </div>
      </div>
      <div class="handle_com_sy">
        <el-button class="pre">上一步</el-button>
        <router-link :to="{path:'/enterprise/info2'}">
          <el-button class="next is_active">下一步</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@components/Header/HeaderTop.vue";
import HeaderSearch from "@components/Header/HeaderSearch.vue";
import HeaderNav from "@components/Header/HeaderNav.vue";
import Side from "@components/Side.vue";
import { topNavEnterprise } from "@const";
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
