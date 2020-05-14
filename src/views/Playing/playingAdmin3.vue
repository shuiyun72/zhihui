<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch></HeaderSearch>
    </div>
    <HeaderNav :HeaderNav="'直播秀场'"></HeaderNav>
    <Side></Side>
    <div id="firm">
      <div class="bg_img_top">
        <div class="click green">编辑此展示位</div>
      </div>
    </div>
    <div class="show_title_for_num">
      <div class="wm">第66期 直播频道展示位 2</div>
    </div>
    <div class="admin_body wm jcs">
      <div class="show_list_com_sy bs">
        <div class="title_top">展示位</div>
        <div class="item" v-for="(t,i) in adminList" :key="i+'t'">
          <el-row @click.native="parentHandle">
            <el-col :span="6" class="t_right">
              <i class="el-icon-caret-bottom"></i>
            </el-col>
            <el-col :span="6">
              <span class="title_span">{{t.title}}</span>
            </el-col>
            <el-col :span="12">
              <span class></span>
            </el-col>
          </el-row>
          <el-row
            v-for="(tc,ic) in t.children"
            :key="i+ic+'tc'"
            @click.native="childHandle"
            :class="{'active':tc.show}"
          >
            <el-col :span="6" :offset="6">
              <span class="c_span">{{tc.title}}</span>
            </el-col>
            <el-col :span="12">
              <span class="stateC" :class="{'stateR':tc.state=='占用'}">（{{tc.state}}）</span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="right">
        <div class="up_img_box bs">
          <span class="p">选择上传展示位图片：</span>
          <el-button class="btn_p3">上传图片</el-button>
          <h2>
            广告展示位截止时间：
            <span>2019-12-15 12：00：00</span>
          </h2>
          <p class="p2">图片尺寸：1:3 （分辨率300：900） / 图片大小：1 M以内 一轮广告位展示期为7天，请及时关注</p>
          <div class="btn">
            <el-button round class="blue_btn btn_p3">保存</el-button>
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
import { adminList } from "@const";
export default {
  components: { HeaderTop, HeaderSearch, HeaderNav, Side },
  data() {
    return {
      adminList: adminList,
      value: "",
      tableData: [
        {
          img: "xiaoya.png",
          name: "昵称：零度 (我)",
          state: "领先",
          money: 9,
          active: 1
        },
        {
          img: "xiaoya.png",
          name: "昵称：零度",
          state: "出局",
          money: 5
        },
        {
          img: "xiaoya.png",
          name: "昵称：零度",
          state: "出局",
          money: 2
        },
        {
          img: "xiaoya.png",
          name: "昵称：零度",
          state: "出局",
          money: 1
        }
      ]
    };
  },
  methods: {
    parentHandle(e) {
      console.log(e);
      console.log("sst");
    },
    childHandle(e) {
      console.log(e);
      console.log("sss");
    }
  }
};
</script>
<style lang="less">
</style>
