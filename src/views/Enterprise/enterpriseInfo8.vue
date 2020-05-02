<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch :HeaderSearch="'扬州海达线缆通信设备有限公司'"></HeaderSearch>
    </div>
    <div class="bg_img_top"></div>
    <HeaderNav :HeaderNav="'关于我们'" :HeaderNavList="topNavEnterprise"></HeaderNav>
    <Side></Side>
    <div id="enterp">
      <div class="card_title_com_sy wm bs">
        <div class="title">关于我们</div>
        <div class="card_body">
          <div class="part2">
            <el-input type="textarea"></el-input>
          </div>
        </div>
      </div>
      <div class="handle_com_sy">
        <router-link :to="{path:'/enterprise/info5'}">
          <el-button class="next is_active">上一步</el-button>
        </router-link>
        <!-- <router-link :to="{path:'/enterprise/info7'}">
          <el-button class="next is_active">下一步</el-button>
        </router-link> -->
        <el-button class="next">下一步</el-button>
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
      topNavEnterprise: topNavEnterprise,
      optionsList: [
        {
          value: "选项1",
          label: "郑州"
        },
        {
          value: "选项2",
          label: "深圳"
        }
      ],
      valueSelect: ""
    };
  },
  methods: {}
};
</script>

<style lang="less">

</style>
