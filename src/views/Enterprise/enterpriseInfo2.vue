<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch :HeaderSearch="'扬州海达线缆通信设备有限公司'"></HeaderSearch>
    </div>
    <div class="bg_img_top"></div>
    <HeaderNav :HeaderNav="'企业资质'" :HeaderNavList="topNavEnterprise"></HeaderNav>
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
                <div class="text">资质名称：</div>
                <el-input></el-input>
              </div>
              <div>
                <div class="import">*</div>
                <div class="text">资质等级：</div>
                <el-input></el-input>
              </div>
              <div>
                <div class="import">*</div>
                <div class="text">资质编号：</div>
                <el-input></el-input>
              </div>
            </div>
          </div>
          <div class="part1">
            <div class="left">
              <img :src="require('@assets/img/ruzhu.png')" alt />
            </div>
            <div class="right">
              <div>
                <div class="import">*</div>
                <div class="text">资质名称：</div>
                <el-input></el-input>
              </div>
              <div>
                <div class="import">*</div>
                <div class="text">资质等级：</div>
                <el-input></el-input>
              </div>
              <div>
                <div class="import">*</div>
                <div class="text">资质编号：</div>
                <el-input></el-input>
              </div>
            </div>
          </div>
          <div class="part1">
            <div class="left">
              <img :src="require('@assets/img/ruzhu.png')" alt />
            </div>
            <div class="right">
              <div>
                <div class="import">*</div>
                <div class="text">资质名称：</div>
                <el-input></el-input>
              </div>
              <div>
                <div class="import">*</div>
                <div class="text">资质等级：</div>
                <el-input></el-input>
              </div>
              <div>
                <div class="import">*</div>
                <div class="text">资质编号：</div>
                <el-input></el-input>
              </div>
            </div>
          </div>
          <div class="part_add">
            <span class="el-icon-plus"></span>
          </div>
        </div>
      </div>
      <div class="handle_com_sy">
        <router-link :to="{path:'/enterprise/info'}">
          <el-button class="next is_active">上一步</el-button>
        </router-link>
        <router-link :to="{path:'/enterprise/info3'}">
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
